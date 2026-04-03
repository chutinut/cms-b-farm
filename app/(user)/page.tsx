import Link from "next/link";

export default function Home() {
  return <div className="w-full h-lvh flex flex-col justify-center items-center gap-4">
    <h1 className="text-black">Welcome to Next.js! - Home</h1>
    <h1 className="text-black">สวัสดีวัยรุ่น</h1>
    <Link href="/tutorial" className="text-blue-500 hover:underline">
      Tutorial
    </Link>
  </div>;
}
