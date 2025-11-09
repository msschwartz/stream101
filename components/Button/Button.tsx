import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

export function Button({ focusKey }: { focusKey: string }) {
  const { ref, focused } = useFocusable({
    focusKey,
    onEnterPress: () => {
      alert("Button pressed!");
    },
  });
  return (
    <div ref={ref} className={`border-4 p-4 ${focused ? "border-red-500" : "border-blue-500"}`}>
      Press me
    </div>
  );
}
