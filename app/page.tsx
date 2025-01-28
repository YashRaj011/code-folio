import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
      <div className="h-full w-10 bg-white"></div>
      <div className="h-full w-10 bg-red-500"></div>
      <div className="h-full w-10 bg-green-500"></div>
    </div>
  );
}
