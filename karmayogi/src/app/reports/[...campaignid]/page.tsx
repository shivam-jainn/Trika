"use client";
import React, { useEffect, useState } from 'react';
import { TotalVisitorPie } from '@/components/charts/TotalVisitorPie';
import { Devices } from './components/Devices';
import { CampaignWiseDevices } from '@/components/charts/CampaignWiseDevices';
import { I_GlobalChart_EmailTitleComparision, EmailTitleComparision } from './components/EmailTitleComparision';

export default function Page({ params }: { params: { campaignid: string } }) {
  const [emailCampaignData, setEmailCampaignData] = useState<I_GlobalChart_EmailTitleComparision[]>([]);

  useEffect(() => {
    // Fetch data from the server
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3010/stats/${params.campaignid}/email`);
      const data = await res.json();
      
      // Transform the API data to fit the I_GlobalChart_EmailTitleComparision interface
      const transformedData: I_GlobalChart_EmailTitleComparision[] = data.map((item: any) => ({
        campaignName: item.campaignTitle,
        targeted: item.targeted || 0,
        bounced: item.bounced || 0,
        opened: item.opened || 0,
        mobile: item.mobile || 0,
        desktop: item.desktop || 0,
      }));

      setEmailCampaignData(transformedData);
    };
    fetchData();
  }, [params.campaignid]);

  return (
    <div className='flex flex-col px-8 py-4'>
      <div>
        <h1 className='text-3xl p-4 font-medium'>
          {params.campaignid}
        </h1>
      </div>

      <div className='flex gap-6 scroll-smooth select-none scrollbar overflow-y-auto p-6'>
        <CampaignWiseDevices />
        <TotalVisitorPie />
        <EmailTitleComparision data={emailCampaignData} />
      </div>
    </div>
  );
}
