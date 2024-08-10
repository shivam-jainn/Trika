"use client";
import { Card } from "@/components/ui/card";
import React from "react";
import { Button } from "@/components/ui/button";
import { useAtom } from "jotai";
import { channelAtom } from "@/states/channels.atom";

type CommType = "Email" | "Sms" | "Whatsapp";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [toggleCommType, setToggleCommType] = useAtom(channelAtom);
  const [selectedCommType, setSelectedCommType] = React.useState<CommType>(toggleCommType);

  const handleClick = (commType: CommType) => () => {
    setToggleCommType(commType);
    setSelectedCommType(commType);
  };

  return (
    <section 
      className="pt-8 px-8 h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
    >
      <Card className="p-4 flex flex-col gap-4 h-full bg-white/80 backdrop-blur-lg">
        <div className="flex gap-2">
          <Button
            className={`rounded-2xl ${selectedCommType === "Sms" ? "bg-blue-500 text-white" : ""}`} 
            onClick={handleClick("Sms")}
          >
            SMS
          </Button>

          <Button
            className={`rounded-2xl ${selectedCommType === "Email" ? "bg-blue-500 text-white" : ""}`} 
            onClick={handleClick("Email")}
          >
            Email
          </Button>

          <Button
            className={`rounded-2xl ${selectedCommType === "Whatsapp" ? "bg-blue-500 text-white" : ""}`} 
            onClick={handleClick("Whatsapp")}
          >
            Whatsapp
          </Button>
        </div>

        <div className="bg-gray-100/60 h-full rounded-lg">
          {children}
        </div>
      </Card>
    </section>
  );
}
