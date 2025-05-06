"use client";
import { Footer } from "@/components/footer";
import { Navbar, NavbarMobile } from "@/components/navbar";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import ColourfulText from "@/components/ui/colourful-text";
import { Cover } from "@/components/ui/cover";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import features from "@/data/features.json";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function HomePage() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <main className="relative">
      <div className="background-color" />

      <section
        id="head"
        className="flex h-screen w-full overflow-hidden rounded-md antialiased md:items-center md:justify-center"
      >
        <Navbar setIsActive={setIsActive} />
        <NavbarMobile setIsActive={setIsActive} isActive={isActive} />

        <div className="z-10 flex w-full max-w-7xl flex-col gap-10 p-4 pt-20 md:pt-0 lg:flex-row">
          <div className="flex flex-col">
            <h1 className="bg-linear-to-b bg-opacity-50 from-neutral-50 to-neutral-400 bg-clip-text text-center font-bold text-4xl text-transparent md:text-7xl">
              Do your task with <br /> <Cover>max speed</Cover>
            </h1>
            <div className="mx-auto mt-4 max-w-lg text-center font-normal text-base text-neutral-300">
              <TextGenerateEffect words="We provide VPS, Hosting and Cloud services optimized for programmers and small businesses" />
            </div>
          </div>

          <Image
            src="/home/thumbnail.webp"
            alt="thumbnail"
            width={0}
            height={0}
            className="m-auto aspect-video w-96 max-w-full object-contain lg:flex-1"
            sizes="100vw"
          />
        </div>
      </section>

      <section className="flex min-h-screen flex-col justify-center gap-20">
        <h1 className="relative z-2 text-center font-bold font-sans text-2xl text-white md:text-5xl lg:text-7xl">
          The best <ColourfulText text="features" /> <br /> you can have
        </h1>

        <div className="container flex justify-between">
          <HoverEffect items={features} />
        </div>
      </section>

      <section className="w-full overflow-hidden bg-white dark:bg-[#0B0B0F]">
        <MacbookScroll
          title={
            <span>
              Friendly dashboard interface. <br /> High performance API.
            </span>
          }
          src="https://ui.aceternity.com/linear.webp"
          showGradient={false}
        />
      </section>

      <section
        className="relative h-[400vh] w-full overflow-clip rounded-md bg-black pt-40 dark:border dark:border-white/[0.1]"
        ref={ref}
      >
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
          link={
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="flex items-center"
            >
              <Link href="/services">Go to service</Link>
            </HoverBorderGradient>
          }
          title="Start your experience"
          description="Get started with us today and experience the difference in speed and efficiency"
        />
      </section>

      <Footer />
    </main>
  );
}
