"use client";

import React, { useState, useMemo } from "react";
import PfpGen from "./pfpGen";
import { useAtom, useAtomValue } from "jotai";
import { channelAtom } from "@/states/channels.atom";

export default function CommPicker() {
  const data = {
    Whatsapp: [
      {
        value: "88639 32992",
        name: "Shivam Jain",
        pfp_link:
          "https://images.pexels.com/photos/27008964/pexels-photo-27008964/free-photo-of-a-tree-is-sitting-on-the-shore-of-a-lake.jpeg",
      },
      {
        value: "48832 27321",
        name: "John Doe",
        pfp_link:
          "https://images.pexels.com/photos/12345678/pexels-photo-12345678/free-photo-of-a-lake-at-sunset.jpeg",
      },
    ],
    Sms: [
      {
        value: "38282 21821",
        name: "Anonymous",
        pfp_link: null,
      },
      {
        value: "44473 32882",
        name: "Anonymous",
        pfp_link: null,
      },
    ],
    Email: [
      {
        value: "admin@karmayogi.in",
        name: "Admin",
        pfp_link: null,
      },
      {
        value: "no-karma@karmayogi.in",
        name: "No Karma",
        pfp_link: null,
      },
    ],
  };

  const toggleCommType= useAtomValue(channelAtom);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(
    data[toggleCommType][0],
  );

  // Generate pfp once using useMemo to prevent repeated calls
  const pfpElements = useMemo(() => {
    return data[toggleCommType].map((contact) =>
      contact.pfp_link ? (
        <img
          key={contact.value}
          src={contact.pfp_link}
          alt="A profile picture"
          className="w-8 h-8 rounded-full mr-2"
        />
      ) : (
        <PfpGen key={contact.value} name={contact.name} />
      ),
    );
  }, [toggleCommType]);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    setIsOpen(false);
  };

  const filteredContacts = data[toggleCommType].filter(
    (contact) => contact.value !== selectedContact.value,
  );

  return (
    <div className="w-full p-2">
      <div className="w-full relative rounded-md bg-white border-b-100 pb-4 pt-4  hover:bg-gray/40">
        <div
          className="flex gap-4 p-4 items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedContact.pfp_link ? (
            <img
              src={selectedContact.pfp_link}
              alt="A profile picture"
              className="w-8 h-8 rounded-full mr-2"
            />
          ) : (
            <PfpGen name={selectedContact.name} />
          )}
          <div>
            <span className="block">{selectedContact.value}</span>
            <span className="text-sm text-gray-500">
              {selectedContact.name}
            </span>
          </div>
        </div>

        {isOpen && (
          <div className="absolute z-10 w-full pb-4 pt-4 bg-white border-b-100 shadow-lg">
            {filteredContacts.map((dataComm) => (
              <div
                key={dataComm.value}
                className="flex gap-4 p-2 items-center mb-2 cursor-pointer"
                onClick={() => handleContactClick(dataComm)}
              >
                {pfpElements.find((el) => el.key === dataComm.value)}
                <div>
                  <span className="block">{dataComm.value}</span>
                  <span className="text-sm text-gray-500">{dataComm.name}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
