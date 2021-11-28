// NEXT
import Link from "next/link";

// COMPONENTS
import CTA from "../components/webdev/CTA";

export default function WebDev() {
  return (
    <>
      <nav>
        <h1>Web.Dev</h1>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>About</a>
          </Link>
          <Link href="/">
            <a>Testimonials</a>
          </Link>
          <Link href="/">
            <a>Contact</a>
          </Link>
          <Link href="/">
            <a>Sign in</a>
          </Link>

          <CTA text="Sign up" />
        </div>
      </nav>
      <main></main>
      <footer></footer>
    </>
  );
}
