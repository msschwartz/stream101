"use client";
// @ts-expect-error ignore
import SpatialNavigation from "react-js-spatial-navigation";
import { GridItem } from "./GridItem";
import { useEffect } from "react";

export function Grid({ items }: { items: string[] }) {
  useEffect(() => {
    setTimeout(() => {
      alert("Grid has mounted and ready");
    }, 3000);
  }, []);

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
