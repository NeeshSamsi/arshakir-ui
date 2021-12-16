// NEXT
import Link from "next/link";
import Image from "next/image";

// COMPONENTS
import CTA from "../components/webdev/CTA";
// SVG
import Semicircle from "../components/webdev/icons/Semicircle";
import Squiggle from "../components/webdev/icons/Squiggle";
import Star from "../components/webdev/icons/Star";
import LeftArrow from "../components/webdev/icons/LeftArrow";
import RightArrow from "../components/webdev/icons/RightArrow";
import Check from "../components/webdev/icons/Check";
import Square from "../components/webdev/icons/Square";
import Facebook from "../components/webdev/icons/Facebook";
import LinkedIn from "../components/webdev/icons/LinkedIn";
import Twitter from "../components/webdev/icons/Twitter";
import RoundedRightArrow from "../components/webdev/icons/RoundedRightArrow";
// IMG
import HeroRight from "../assets/webdev/img/hero-right.jpg";
import HeroLeft from "../assets/webdev/img/hero-left.jpg";
import Fashion from "../assets/webdev/img/fashion.jpg";
import Furniture from "../assets/webdev/img/furniture.jpg";
import HealthFitness from "../assets/webdev/img/health-fitness.jpg";
import ITSolution from "../assets/webdev/img/it-solution.jpg";
// Logo
import Chase from "../assets/webdev/img/logos/CHASE.jpg";
import Asana from "../assets/webdev/img/logos/asana.jpg";
import Google from "../assets/webdev/img/logos/Google.jpg";
import BuzzFeed from "../assets/webdev/img/logos/BuzzFeed.jpg";
import Walmart from "../assets/webdev/img/logos/Walmart.jpg";
import Webflow from "../assets/webdev/img/logos/webflow.jpg";
import Shopify from "../assets/webdev/img/logos/shopify.jpg";
import Figma from "../assets/webdev/img/logos/figma.jpg";
import Php from "../assets/webdev/img/logos/php.jpg";
import SectionTitle from "../components/webdev/SectionTitle";

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
          <Semicircle color="accent" />
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

      <section className="py-40 w-4/5 mx-auto flex justify-between items-center  relative">
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

        <div className="absolute w-64 top-20 -left-40">
          <Squiggle color="accent" />
        </div>
      </section>

      <section className="font-gilroy font-medium text-lg flex flex-col justify-between items-center space-y-20 relative">
        <SectionTitle title="Our Specialization" subtitle="What we Do?" />

        <div className="grid grid-cols-2 gap-10">
          <div className="px-7 py-10 flex flex-col justify-between space-y-7 max-w-sm shadow-[0px_100px_80px_rgba(49,_49,_49,_0.1)]">
            <div className="flex space-x-4">
              <div className="w-7">
                <Image src={Webflow} className="w-full h-full object-cover" />
              </div>
              <h6 className="font-semibold text-2xl">Webflow Development</h6>
            </div>
            <p>
              Really boy law country she unable her sister. Feet you off its like six. Among sex are leave now built
              law. In built table in an rapid blush. Merits behind on afraid or warmly.
            </p>
            <CTA text="Read More" underline accent />
          </div>
          <div className="px-7 py-10 flex flex-col justify-between space-y-7 max-w-sm">
            <div className="flex space-x-4">
              <div className="w-7">
                <Image src={Shopify} className="w-full h-full object-cover" />
              </div>
              <h6 className="font-semibold text-2xl">Shopify Development</h6>
            </div>
            <p>
              Really boy law country she unable her sister. Feet you off its like six. Among sex are leave now built
              law. In built table in an rapid blush. Merits behind on afraid or warmly.
            </p>
            <CTA text="Read More" underline />
          </div>
          <div className="px-7 py-10 flex flex-col justify-between space-y-7 max-w-sm">
            <div className="flex space-x-4">
              <div className="w-7">
                <Image src={Figma} className="w-full h-full object-cover" />
              </div>
              <h6 className="font-semibold text-2xl">Figma Web Design</h6>
            </div>
            <p>
              Really boy law country she unable her sister. Feet you off its like six. Among sex are leave now built
              law. In built table in an rapid blush. Merits behind on afraid or warmly.
            </p>
            <CTA text="Read More" underline />
          </div>
          <div className="px-7 py-10 flex flex-col justify-between space-y-7 max-w-sm">
            <div className="flex space-x-4">
              <div className="w-7">
                <Image src={Php} className="w-full h-full object-cover" />
              </div>
              <h6 className="font-semibold text-2xl">Php Development</h6>
            </div>
            <p>
              Really boy law country she unable her sister. Feet you off its like six. Among sex are leave now built
              law. In built table in an rapid blush. Merits behind on afraid or warmly.
            </p>
            <CTA text="Read More" underline />
          </div>
        </div>

        <CTA text="Learn More" btn />

        <div className="absolute top-40 -right-44 rotate-140">
          <Semicircle color="accent" />
        </div>
      </section>

      <section className="py-36 flex flex-col justify-between items-center space-y-20 font-gilroy font-medium">
        <SectionTitle title="Our Portfolio" subtitle="Our Work" />
        <div className="flex justify-between space-x-12">
          <div className="flex flex-col justify-between space-y-16">
            <div className="flex flex-col justify-between space-y-6">
              <Image src={Fashion} alt="Fashion Landing Page Image" className="w-full h-full object-cover" />
              <div className="flex justify-between items-center">
                <h6 className="text-3xl">Fashion Landing Page</h6>
                <CTA text="View Details" accent />
              </div>
            </div>
            <div className="pb-14 flex flex-col justify-between space-y-6">
              <Image src={Furniture} alt="Furniture Shop Image" className="w-full h-full object-cover" />
              <div className="flex justify-between items-center">
                <h6 className="text-3xl">Furniture Shop</h6>
                <CTA text="View Details" accent />
              </div>
            </div>
          </div>
          <div className="pt-14 flex flex-col justify-between space-y-16">
            <div className="flex flex-col justify-between space-y-6">
              <Image src={HealthFitness} alt="Health & Fitness Image" className="w-full h-full object-cover" />
              <div className="flex justify-between items-center">
                <h6 className="text-3xl">Health & Fitness</h6>
                <CTA text="View Details" accent />
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-6">
              <Image src={ITSolution} alt="IT Solution Provider Image" className="w-full h-full object-cover" />
              <div className="flex justify-between items-center">
                <h6 className="text-3xl">IT Solution Provider</h6>
                <CTA text="View Details" accent />
              </div>
            </div>
          </div>
        </div>
        <CTA text="All Projects" btn />
      </section>

      <section>
        <SectionTitle title="What Customers Say" subtitle="Testimonials" />

        <div className="py-44 px-32 flex flex-col items-center space-y-12">
          <div className="flex space-x-4 relative ">
            <div className="px-8 py-10 flex flex-col justify-between space-y-5 font-inter font-semibold text-web.dev-dark-testimonial-primary bg-white shadow-[0px_100px_80px_rgba(49,_49,_49,_0.1)]">
              <p>Superb Work!</p>
              <p className="font-normal text-web.dev-dark-testimonial-secondary">
                “Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed
                necessary.”
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-5">
                  <Star />
                </div>
                <div className="w-5">
                  <Star />
                </div>
                <div className="w-5">
                  <Star />
                </div>
                <div className="w-5">
                  <Star />
                </div>
                <div className="w-5">
                  <Star />
                </div>
              </div>
              <p className="">Sabo Masties</p>
            </div>
            <div className="px-8 py-10 flex flex-col justify-between space-y-5 font-inter font-semibold text-web.dev-dark-testimonial-primary bg-white shadow-[0px_100px_80px_rgba(49,_49,_49,_0.1)]">
              <p>Superb Work!</p>
              <p className="font-normal text-web.dev-dark-testimonial-secondary">
                “Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed
                necessary.”
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-5">
                  <Star />
                </div>
                <div className="w-5">
                  <Star />
                </div>
                <div className="w-5">
                  <Star />
                </div>
                <div className="w-5">
                  <Star />
                </div>
                <div className="w-5">
                  <Star />
                </div>
              </div>
              <p className="">Sabo Masties</p>
            </div>
            <div className="px-8 py-10 flex flex-col justify-between space-y-5 font-inter font-semibold text-web.dev-dark-testimonial-primary bg-white shadow-[0px_100px_80px_rgba(49,_49,_49,_0.1)] z-10">
              <p>Superb Work!</p>
              <p className="font-normal text-web.dev-dark-testimonial-secondary">
                “Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed
                necessary.”
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-5">
                  <Star />
                </div>
                <div className="w-5">
                  <Star />
                </div>
                <div className="w-5">
                  <Star />
                </div>
                <div className="w-5">
                  <Star />
                </div>
                <div className="w-5">
                  <Star />
                </div>
              </div>
              <p className="">Sabo Masties</p>
            </div>

            <div className="absolute bottom-0 -right-36 z-0">
              <Squiggle color="dark-primary" />
            </div>
          </div>

          <div className="w-32 p-2 flex justify-between bg-white rounded-full">
            <div className="px-4 py-5 rounded-full">
              <div className="w-5 h-2">
                <LeftArrow />
              </div>
            </div>
            <div className=" px-4 py-5 rounded-full bg-web.dev-dark-primary">
              <div className="w-5 h-2">
                <RightArrow />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="font-gilroy font-medium">
        <SectionTitle title="Pricing Policy" subtitle="Our Pricing" />

        <div className="py-20 px-44 flex justify-between relative">
          <div className="p-14 flex flex-col items-center space-y-12">
            <div className="flex flex-col justify-between items-center space-y-7">
              <p className="text-3xl">For Starter</p>
              <p className="font-semibold text-6xl">$1499</p>

              <ul className="flex flex-col space-y-4 text-web.dev-dark-secondary">
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3">
                    <Check />
                  </div>
                  <p>Feedback Categorization</p>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3">
                    <Check />
                  </div>
                  <p>Features Prioritization</p>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3">
                    <Check />
                  </div>
                  <p>Real-Time Collaboration</p>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3">
                    <Check />
                  </div>
                  <p>Feedback Loop Notifications</p>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3">
                    <Check />
                  </div>
                  <p>Essential Dev Tools Integrations</p>
                </li>
              </ul>
            </div>
            <CTA text="Request Demo" btn outline />
          </div>

          <div className="p-14 flex flex-col items-center space-y-12 bg-white shadow-2xl">
            <div className="flex flex-col justify-between items-center space-y-7">
              <p className="text-3xl">For Teams</p>
              <p className="font-semibold text-6xl">$2999</p>

              <ul className="flex flex-col space-y-4 text-web.dev-dark-primary">
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3">
                    <Check />
                  </div>
                  <p>Feedback Categorization</p>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3">
                    <Check />
                  </div>
                  <p>Features Prioritization</p>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3">
                    <Check />
                  </div>
                  <p>Real-Time Collaboration</p>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3">
                    <Check />
                  </div>
                  <p>Feedback Loop Notifications</p>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3">
                    <Check />
                  </div>
                  <p>Essential Dev Tools Integrations</p>
                </li>
              </ul>
            </div>
            <CTA text="Request Demo" btn />
          </div>

          <div className="p-14 flex flex-col items-center space-y-12">
            <div className="flex flex-col justify-between items-center space-y-7">
              <p className="text-3xl">For Company</p>
              <p className="font-semibold text-6xl">Custom</p>

              <ul className="flex flex-col space-y-4 text-web.dev-dark-secondary">
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3">
                    <Check />
                  </div>
                  <p>Feedback Categorization</p>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3">
                    <Check />
                  </div>
                  <p>Features Prioritization</p>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3">
                    <Check />
                  </div>
                  <p>Real-Time Collaboration</p>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3">
                    <Check />
                  </div>
                  <p>Feedback Loop Notifications</p>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3">
                    <Check />
                  </div>
                  <p>Essential Dev Tools Integrations</p>
                </li>
              </ul>
            </div>
            <CTA text="Request Demo" btn outline />
          </div>

          <div className="w-24 h-24 rotate-30 absolute -left-2">
            <Square />
          </div>
        </div>
      </section>

      <section className=" relative">
        <div className="w-2/5 mx-auto p-14 flex flex-col items-center space-y-12">
          <SectionTitle title="Need a little more room to grow?" />

          <CTA text="Contact Us" btn />
        </div>

        <div className="w-16 h-16 rotate-30 absolute bottom-0 -right-6">
          <Square />
        </div>
      </section>

      <footer>
        <div className="px-32 py-16 font-gilroy flex justify-between">
          <div className="flex flex-col space-y-16">
            <div className="flex flex-col space-y-8">
              <h5 className=" font-bold text-3xl">Web.Dev</h5>
              <p className="font-medium">You'll find your next home loan value you prefer.</p>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://fb.me" target="_blank" className="w-7 h-7">
                <Facebook />
              </a>
              <a href="https://twitter.com/" className="w-7 h-7">
                <Twitter />
              </a>
              <a href="https://linkedin.com" className="w-7 h-7">
                <LinkedIn />
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-10">
            <p className="font-semibold text-xl">Resources</p>

            <div className="flex flex-col space-y-7">
              <p>Our Agents</p>
              <p>Member Stories</p>
              <p>Video</p>
              <p>Free Trial</p>
            </div>
          </div>

          <div className="flex flex-col space-y-10">
            <p className="font-semibold text-xl">Company</p>

            <div className="flex flex-col space-y-7">
              <p>Partnerships</p>
              <p>Terms of use</p>
              <p>Privacy</p>
              <p>Sitemap</p>
            </div>
          </div>

          <div className="flex flex-col space-y-10">
            <p className="font-semibold text-xl">Get in touch</p>

            <div className="flex space-x-8">
              <form>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="p-2 placeholder-web.dev-dark-secondary placeholder-opacity-90 border border-web.dev-dark-secondary rounded-md"
                />
              </form>
              <button type="submit">
                <div className="w-6 h-6">
                  <RoundedRightArrow />
                </div>
              </button>
            </div>
          </div>
        </div>

        <p className="py-12 font-gilroy font-semibold text-center">
          Copyright 2021 &copy; Web.Dev All rights reserved.
        </p>
      </footer>
    </>
  );
}
