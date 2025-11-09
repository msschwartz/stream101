import { useFocusable, FocusContext } from "@noriginmedia/norigin-spatial-navigation";
import { Button } from "../Button/Button";
import { useEffect } from "react";

export function ButtonList() {
  const { ref, focusKey, focusSelf } = useFocusable();
  useEffect(() => {
    focusSelf();
    // alternatively
    // setFocus('BUTTON_PRIMARY');
  }, [focusSelf]);
  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="flex flex-row gap-4">
        <Button />
        <Button />
        <Button />
      </div>
    </FocusContext.Provider>
  );
}
