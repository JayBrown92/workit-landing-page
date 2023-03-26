import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import LogoLight from "../../public/images/logo-light.svg";
import HeroImage from "../../public/images/image-hero.webp";
import FounderImage from "../../public/images/image-founder.webp";
import LogoDark from "../../public/images/logo-dark.svg";
import FacebookIcon from "../../public/images/icon-facebook.svg";
import TwitterIcon from "../../public/images/icon-twitter.svg";
import InstagramIcon from "../../public/images/icon-instagram.svg";
export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./public/images/favicon-32x32.png"
        />

        <title>Frontend Mentor | Workit landing page</title>
      </Head>
      <header>
        <Image src={LogoLight} alt="main header logo image" />
        <nav>
          <Link href={"#apply-for-access-section"}>Apply for access</Link>
        </nav>
      </header>
      <section id="hero-section">
        <h1>Data tailored to your needs</h1>
        <button>Learn more</button>
        <Image
          src={HeroImage}
          alt="Hero graphic of a phone with a series chart going up"
        />
      </section>
      <section id="features-section">
        <div>
          <p>1</p>
          <h2>Actionable insights</h2>{" "}
          <p>
            Optimize your products, improve customer satisfaction and stay ahead
            of the competition with our product data analytics.
          </p>
        </div>
        <div>
          <p>2</p> <h2>Data-driven decisions</h2>{" "}
          <p>
            {" "}
            Make data-driven decisions with our product data analytics. Our
            AI-generated reports help you unlock insights hidden in your product
            data.{" "}
          </p>
        </div>
        <div>
          <p>3</p>
          <h2>Always affordable</h2>
          <p>
            Always affordable pricing that scales with your business. Get
            top-quality product data analytics services without hidden costs or
            unexpected fees.
          </p>
        </div>
      </section>
      <section id="about-section">
        <Image
          src={FounderImage}
          alt="An image of WorkIt founder, Louis Graham"
        />{" "}
        <div>
          <h2>Be the first to test</h2>
          <p>
            Hi, I&apos;m Louis Graham, the founder of the company. Book a demo
            call with me to become a beta tester for our app and kickstart your
            company. Apply for access below and I&apos;ll be in touch to
            schedule a call.
          </p>
          <button>Apply for access</button>
        </div>
      </section>
      <footer>
        {" "}
        <Image
          src={LogoDark}
          alt="Dark colored version of the workit logo"
        />{" "}
        <Image src={FacebookIcon} alt="SVG icon of the facebook logo" />
        <Image src={TwitterIcon} alt="SVG icon of the Twitter logo" />
        <Image src={InstagramIcon} alt="SVG icon of the Instagram logo" />
      </footer>
    </>
  );
}
