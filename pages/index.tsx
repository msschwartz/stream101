import { ButtonList } from "@/components/ButtonList";
import { init } from "@noriginmedia/norigin-spatial-navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    init({});
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center">
      <ButtonList />
    </div>
  );
}
