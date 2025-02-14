"use client";

import { motion } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

interface TabProps {
  text: string;
  selected: boolean;
  setSelected?: () => void;
  onClick?: () => void;
}

export function Tab({ text, selected, setSelected, onClick }: TabProps) {
  function handleClick() {
    if (onClick) {
      onClick();
    }
    if (setSelected) {
      setSelected();
    }
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        "relative w-fit px-4 py-2 text-sm font-medium capitalize",
        "text-foreground transition-colors"
      )}
    >
      <span className={cn("relative z-10", { "text-white": selected })}>
        {text}
      </span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-full bg-gray-950 shadow-sm"
        />
      )}
    </button>
  );
}
