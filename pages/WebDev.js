// NEXT
import Link from "next/link";

// COMPONENTS
import CTA from "../components/webdev/CTA";
import Semicircle from "../components/webdev/Semicircle";

export default function WebDev() {
  return (
    <>
      <nav className="py-12 px-32 flex justify-between items-center text-web.dev-dark-primary">
        <Link href="/">
          <a>
            <h1 className="font-gilroy font-bold text-lg">Web.Dev</h1>
          </a>
        </Link>
        <div className="font-gilroy font-medium text-lg flex justify-between items-center space-x-14">
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

        <div className="w-60 -rotate-45 absolute -top-16 -right-28">
          <Semicircle />
        </div>
      </nav>
      <main></main>
      <footer></footer>
    </>
  );
}
