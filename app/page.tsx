import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={100}
        height={20}
        priority
      />
      <div className="my-4 text-2xl">Welcome to Next.js!</div>
    </div>
  );
}
