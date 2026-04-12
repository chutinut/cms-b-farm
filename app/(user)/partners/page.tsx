import Link from "next/link";

export default function Partners() {
  return (
    <div className="w-full h-lvh flex flex-col justify-center items-center gap-5">
      <h1 className="text-black">Welcome to Next.js! - Partners</h1>
      <Link href="/" className="text-blue-500 hover:underline">
        Back
      </Link>
    </div>
  );
}
