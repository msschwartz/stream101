"use client";
import { useEffect } from "react";
// @ts-expect-error ignore
import SpatialNavigation from "react-js-spatial-navigation";
import { GridItem } from "./GridItem";

export function Grid({ items }: { items: string[] }) {
  return (
    <SpatialNavigation>
      <div className="flex flex-row">
        {items.map((item, index) => (
          <GridItem key={index}>{item}</GridItem>
        ))}
      </div>
    </SpatialNavigation>
  );
}
