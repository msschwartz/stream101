import { ButtonList } from "@/components/ButtonList";
import { init, setFocus } from "@noriginmedia/norigin-spatial-navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    init({
      // visualDebug: true,
    });
    setFocus("buttonList");
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center">
      <ButtonList />
    </div>
  );
}
