import { useFocusable, FocusContext } from "@noriginmedia/norigin-spatial-navigation";
import { Button } from "../Button/Button";
import { useEffect } from "react";

export function ButtonList() {
  const { ref, focusKey } = useFocusable({
    focusKey: "buttonList",
  });
  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="flex flex-row gap-4 p-8 border-2 border-green-500">
        <Button focusKey="button1" />
        <Button focusKey="button2" />
        <Button focusKey="button3" />
      </div>
    </FocusContext.Provider>
  );
}
