"use client";
import { useState } from "react";
// @ts-expect-error ignore
import { Focusable } from "react-js-spatial-navigation";

export function GridItem({ children }: { children: React.ReactNode }) {
  const [focused, setFocused] = useState(false);
  return (
    <Focusable
      onFocus={() => setFocused(true)}
      onUnfocus={() => setFocused(false)}
      onClickEnter={() => alert(`You selected ${children}`)}
    >
      <div
        tabIndex={-1}
        className={`p-4 border-4 m-4 focus:outline-none  ${
          focused ? "border-red-500" : "border-gray-500"
        }`}
      >
        {children}
      </div>
    </Focusable>
  );
}
