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

        <Semicircle className="absolute top-0 right-0" w="8rem" h="8rem" />
      </nav>
      <main></main>
      <footer></footer>
    </>
  );
}
