import { Navbar } from "@/components/navbar";
import { Cover } from "@/components/ui/cover";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative flex h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      <Navbar />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 select-none [background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      <Spotlight
        className="-top-40 md:-top-20 left-0 md:left-60"
        fill="white"
      />
      <div className="relative z-10 flex w-full max-w-7xl gap-10 p-4 pt-20 md:pt-0">
        <div className="flex flex-col">
          <h1 className="bg-gradient-to-b bg-opacity-50 from-neutral-50 to-neutral-400 bg-clip-text text-center font-bold text-4xl text-transparent md:text-7xl">
            Do your task with <br /> at <Cover>max speed</Cover>
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
          className="flex-1 bg-contain"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
