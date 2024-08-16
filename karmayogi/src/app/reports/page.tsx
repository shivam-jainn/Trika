"use client"

import React, { useEffect, useState } from 'react'
import { Badge } from "@/components/ui/badge"
import {
Card,
CardContent,
CardDescription,
CardHeader,
CardTitle,
} from "@/components/ui/card"
import {
Table,
TableBody,
TableCell,
TableHead,
TableHeader,
TableRow,
} from "@/components/ui/table"
import { useRouter } from 'next/navigation'

interface Campaign {
    id: string;
    campaignName: string;
    timeCreate: string;
}

export default function Page() {
    const [campaigns, setCampaigns] = useState<Campaign[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [cursor, setCursor] = useState<string | null>(null);

    const router = useRouter();

    const fetchCampaigns = async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:3010/campaigns?cursor=${cursor}&take=10`);
            const data = await response.json();
            if (data.length > 0) {
                setCampaigns(prev => {
                    const newCampaigns = data.filter(campaign => !prev.some(existingCampaign => existingCampaign.id === campaign.id));
                    return [...prev, ...newCampaigns];
                });
                if (data.length < 10) setHasMore(false);
                setCursor(data[data.length - 1].id);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Error fetching campaigns:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchCampaigns();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight || loading || !hasMore) return;
            fetchCampaigns();
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, hasMore]);

    return (
        <Card className='m-8'>
            <CardHeader className="px-7">
                <CardTitle>Reports</CardTitle>
                <CardDescription>View your reports.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Reports</TableHead>
                            <TableHead className="hidden md:table-cell">Date</TableHead>
                            <TableHead className="hidden md:table-cell">Sub Campaigns</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {campaigns.map((campaign: Campaign) => (
                            <TableRow className='shadow-inner'
                                key={campaign.id}
                                onClick={() => {
                                    router.push(`/reports/${campaign.id}`)
                                }} >
                                <TableCell>
                                    <div className="font-medium">{campaign.campaignName}</div>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">{campaign.timeCreate.toString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {loading && <div>Loading more campaigns...</div>}
                {!hasMore && <div>No more campaigns to load.</div>}
            </CardContent>
        </Card>
    )
}
