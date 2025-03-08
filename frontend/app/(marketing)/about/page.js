import Link from "next/link";

export const metadata = {
  title: "About",
  description: "non",
};

export default async function About({ params, searchParams }) {
  console.log(await params);
  return (
    <div>
      <h1>About</h1>
      <Link href="/">home</Link>
    </div>
  );
}
