import { Card } from '@/components/ui/card'
import { channelAtom } from '@/states/channels.atom'
import { useAtomValue } from 'jotai'
import React from 'react'

export default function Preview() {
  const toggleCommType = useAtomValue(channelAtom);

  return (
    <Card className='p-4 overflow-y-auto h-[320px] min-w-[320px]'>
        <div className='flex flex-col gap-4'>
            <div className='flex gap-2'>
            <div className={`rounded-2xl ${toggleCommType === 'Sms' ? 'bg-blue-500 text-white' : ''}`}>SMS</div>
            <div className={`rounded-2xl ${toggleCommType === 'Email' ? 'bg-blue-500 text-white' : ''}`}>Email</div>
            <div className={`rounded-2xl ${toggleCommType === 'Whatsapp' ? 'bg-blue-500 text-white' : ''}`}>Whatsapp</div>
            </div>
            <div className='bg-gray-100/60 h-full rounded-lg'></div>
        </div>      
    </Card>
  )
}
