// NEXT
import Link from "next/link";
import Image from "next/image";

// COMPONENTS
import CTA from "../components/webdev/CTA";
import Semicircle from "../components/webdev/icons/Semicircle";
import HeroRight from "../assets/webdev/img/hero-right.jpg";
import HeroLeft from "../assets/webdev/img/hero-left.jpg";
import Chase from "../assets/webdev/img/logos/CHASE.jpg";
import Asana from "../assets/webdev/img/logos/asana.jpg";
import Google from "../assets/webdev/img/logos/Google.jpg";
import BuzzFeed from "../assets/webdev/img/logos/BuzzFeed.jpg";
import Walmart from "../assets/webdev/img/logos/Walmart.jpg";

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

          <CTA text="Sign up" btn />
        </div>

        <div className="w-60 -rotate-45 absolute -top-16 -right-28">
          <Semicircle />
        </div>
      </nav>

      <main className="py-40 text-center relative">
        <div className="mx-auto flex flex-col items-center space-y-10 max-w-lg">
          <h1 className="font-inter font-extrabold text-web.dev-dark-primary text-7xl">
            We Develop <span className="text-web.dev-accent">Shopify</span> sites
          </h1>

          <p className="font-medium text-lg">
            Slingback fabric heels. Thin wraparound ankle strap. Squared heel and toe. Pointed toe. Padded insole with
            geometrical design.
          </p>

          <div className="flex space-x-10">
            <CTA text="Contact Us" btn />
            <CTA text="Watch Video" icon="RightArrow" underline />
          </div>
        </div>
        <div className="absolute left-0 bottom-0">
          <Image src={HeroLeft} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute right-0 bottom-0">
          <Image src={HeroRight} alt="" className="w-full h-full object-cover" />
        </div>
      </main>

      <section className="pt-40 pb-52 w-4/5 mx-auto flex justify-between items-center">
        <div className="w-32 h-full">
          <Image src={Chase} alt="CHASE Logo" className="w-full h-full object-cover" />
        </div>
        <div className="w-32 h-full">
          <Image src={Asana} alt="Asana Logo" className="w-full h-full object-cover" />
        </div>
        <div className="w-28 h-full">
          <Image src={Google} alt="Google Logo" className="w-full h-full object-cover" />
        </div>
        <div className="w-32 h-full">
          <Image src={BuzzFeed} alt="BuzzFeed Logo" className="w-full h-full object-cover" />
        </div>
        <div className="w-32 h-full">
          <Image src={Walmart} alt="BuzzFeed Logo" className="w-full h-full object-cover" />
        </div>
      </section>

      <footer></footer>
    </>
  );
}
