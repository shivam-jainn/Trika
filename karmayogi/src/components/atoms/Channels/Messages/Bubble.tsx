import React, { useState } from "react";

export default function Bubble({
  message,
  time,
  isMine = false,
  preview,
}: {
  message?: string;
  time: string;
  isMine?: boolean;
  preview?: React.ReactNode;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`flex ${isMine ? "justify-end" : "justify-start"} items-center mb-2`}>
      {!preview && (
        <div
          className={`relative max-w-xs p-2 rounded-md ${
            isMine ? "bg-blue-300 text-right" : "bg-green-300 text-left"
          }`}
        >
          <div>{message}</div>
          <div className="text-xs text-gray-500 mt-1">{time}</div>

          {!isMine && (
            <div className="absolute top-0 left-0 -ml-2 mt-2 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-green-300 border-b-8 border-b-transparent"></div>
          )}

          {isMine && (
            <div className="absolute top-0 right-0 -mr-2 mt-2 w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-blue-300 border-b-8 border-b-transparent"></div>
          )}
        </div>
      )}

      {preview && (
        <div
          className={`cursor-pointer max-w-xs p-2 rounded-md ${
            isMine ? "ml-auto" : "mr-auto"
          }`}
          onClick={toggleExpand}
        >
          {isExpanded ? (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
              <div className="bg-white p-4 rounded-lg">
                <button
                  onClick={toggleExpand}
                  className="absolute top-0 right-0 text-white bg-black rounded-full px-2 py-1"
                >
                  X
                </button>
                {preview}
              </div>
            </div>
          ) : (
            <div className="max-w-full">{preview}</div>
          )}
        </div>
      )}
    </div>
  );
}
