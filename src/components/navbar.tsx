"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "./link";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";

function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 64) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-2 z-50 mx-auto ${showNavbar ? "max-w-2xl" : "container"}`}
    >
      <Menu
        setActive={setActive}
        className={`transition-all duration-500 ${showNavbar ? "justify-center rounded-full border bg-white dark:border-white/[0.2] dark:bg-black" : "items-center justify-start border-transparent bg-transparent"}`}
      >
        {!showNavbar && (
          <Image src="/logo.webp" alt="Logo" height={40} width={40} />
        )}
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className=" grid grid-cols-2 gap-10 p-4 text-sm">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>

        <div className="my-auto flex flex-1 justify-end space-x-4">
          <Link
            href="/login"
            text="Login"
            className="underline-offset-2 hover:text-white/80 hover:underline hover:decoration-wavy"
          />
          <Link
            href="/register"
            text="Register"
            className="underline-offset-2 hover:text-white/80 hover:underline hover:decoration-wavy"
          />
        </div>
      </Menu>
    </div>
  );
}

export { Navbar };
