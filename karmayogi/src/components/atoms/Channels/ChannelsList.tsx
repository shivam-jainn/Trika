import React from "react";
import { Card } from "@/components/ui/card";
import { useAtomValue } from "jotai";
import { channelAtom } from "@/states/channels.atom";

export default function ChannelsList() {
  const communicationData: Record<"Sms" | "Email" | "Whatsapp", { sender: string; body: string; date: string; time: string; senderPic: string; }[]> = {
    Sms: [
      {
        sender: "38292 29321",
        body: "Hello, I am Shivam Jain",
        date: "21/11/2024",
        time: "20:00",
        senderPic: "nice"
      },
    ],
    Email: [], // Placeholder for Email communications
    Whatsapp: [
      {
        sender: "38201 38283",
        body: "Hello, I am Shivam Jain",
        date: "21/11/2024",
        time: "20:00",
        senderPic: "nice"
      },
    ],
  };

  const toggleCommType = useAtomValue(channelAtom);

  return (
    <div>
      {communicationData[toggleCommType].map((commData, index) => (
        <Card className="flex" key={index}>
          <div className="flex flex-col">
            <div>{commData.sender}</div>
            <div>{commData.body}</div>
          </div>
          <div>
            <div>{commData.time}</div>
          </div>
        </Card>
      ))}
    </div>
  );
}
