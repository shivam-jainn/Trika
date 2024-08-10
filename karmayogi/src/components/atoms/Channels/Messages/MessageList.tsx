import { Card } from '@/components/ui/card';
import React from 'react';

export default function MessageList() {
    const messages = [
        {
            sender: '38292 29321',
            body: 'Hello, I am Shivam Jain',
            date: '21/11/2024',
            time: '20:00',
            senderPic: 'nice',
            unread: true
        },
        {
            sender: '38201 38283',
            body: 'Hello, I am Shivam Jain',
            date: '21/11/2024',
            time: '20:00',
            senderPic: 'nice',
            unread: false
        }
    ];

    return (
        <div className='m-4 flex flex-col gap-4'>
            {
                messages.map((message, index) => (
                    <Card key={index} className='flex justify-between items-center p-4 shadow-sm rounded-lg bg-white border border-gray-200'>
                        <div className='flex flex-col gap-1'>
                            <div className='text-sm font-semibold text-gray-700'>{message.sender}</div>
                            <div className='text-sm text-gray-500'>{message.body}</div>
                        </div>

                        <div className='flex flex-col items-end gap-2'>
                            <div className='text-xs text-gray-400'>{message.time}</div>
                            {message.unread && (
                                <div className='w-3 h-3 bg-blue-500 rounded-full'></div>
                            )}
                        </div>
                    </Card>
                ))
            }
        </div>
    );
}
