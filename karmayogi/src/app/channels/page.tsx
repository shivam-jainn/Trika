"use client";
import React, { useState, FormEvent } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CommPicker from "@/components/atoms/Channels/CommPicker";
import { Separator } from "@/components/ui/separator";
import Preview from "@/components/atoms/Channels/Messages/Preview";
import { useAtomValue } from "jotai";
import { channelAtom } from "@/states/channels.atom";
import MessageList from "@/components/atoms/Channels/Messages/MessageList";
import Bubble from "@/components/atoms/Channels/Messages/Bubble";
import InputFields from "@/components/atoms/InputFields/InputFields";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export default function Page() {
  const toggleCommType = useAtomValue(channelAtom);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userinput: inputValue }),
      });

      if (!res.ok) {
        throw new Error("An error occurred while processing your request.");
      }
      const data = await res.json();
      // handle the response
    } catch (err) {
      console.log("An error occurred while processing your request.");
    }
  };

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={20}>
        <CommPicker />
        <Separator />
        <MessageList />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className="overflow-y-auto">
        <div className="flex flex-col p-4 gap-2 overflow-y-auto h-full">
          <Bubble time="12:00" preview={<Preview />} />

          <Bubble message="nice one" time="12:00" />
          <Bubble message="nice one" isMine time="12:00" />
          <Bubble message="nice one" isMine time="12:00" />
          <Bubble message="nice one" isMine time="12:00" />
          <Bubble message="nice one" isMine time="12:00" />
        </div>

        <form onSubmit={handleSubmit} className="my-4 mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Write your message here ..."
              className="shadow-lg rounded-2xl w-full border-[0.2px] border-gray-400 outline-none h-[60px] p-4"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button
              variant={"default"}
              size={"icon"}
              className="rounded-full absolute right-4 top-1/2 transform -translate-y-1/2"
              type="submit"
            >
              <ChevronUp />
            </Button>
          </div>
        </form> 
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
