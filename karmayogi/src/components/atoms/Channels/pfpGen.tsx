import React, { useMemo } from "react";
import { MessageSquareText } from "lucide-react";

const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A1",
  "#33FFF6",
  "#FF9633",
  "#33FF6F",
  "#FF6F33",
  "#6F33FF",
  "#33FF33",
  "#FF6F6F",
];

const getRandomColor = (name: string) => {
  // Generate a hash from the name
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  // Map hash to color
  return colors[Math.abs(hash % colors.length)];
};

export default function PfpGen({ name }: { name: string }) { // Destructure name from props
  const bgColor = useMemo(() => getRandomColor(name), [name]);

  return (
    <div
      className="w-12 h-12 flex items-center justify-center rounded-full text-white p-3"
      style={{ backgroundColor: bgColor }}
    >
      <MessageSquareText color="white" />
      {name.charAt(0).toUpperCase()}
    </div>
  );
}
