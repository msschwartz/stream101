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
      <div className="flex flex-row">
        <div className="control ctrl block p-4 border-4 border-gray-500 m-4 focus:outline-none focus:border-red-500">
          card1
        </div>
        <div className="control ctrl block p-4 border-4 border-gray-500 m-4 focus:outline-none focus:border-red-500">
          card2
        </div>
        <div className="control ctrl block p-4 border-4 border-gray-500 m-4 focus:outline-none focus:border-red-500">
          card3
        </div>
      </div>
    </div>
  );
}
