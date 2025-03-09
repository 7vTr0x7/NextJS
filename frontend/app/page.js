import Link from "next/link";
import Info from "./_components/Info";

export default function Home() {
  return (
    <div>
      <h1>non</h1>
      <Info />
      <Link href="/about">about</Link>
      <h1>non</h1>

      <Link href="/services">services</Link>
    </div>
  );
}
