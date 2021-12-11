import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/webdev">
        <a className="block underline">Web.Dev - Shopify Developer's Landing Page</a>
      </Link>
      <Link href="/jadoo">
        <a className="block underline">Jadoo - Travel Agency Landing Page</a>
      </Link>
    </main>
  );
}
