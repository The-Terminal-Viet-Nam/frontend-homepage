"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import navbarData from "@/data/navbar.json";
import { useUserQuery } from "@/lib/queries/me";
import Image from "next/image";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { IoMdSettings } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Link from "./link";
import { Container, Item } from "./motion/fade";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";

type NavbarData = {
  label: string;
  link: string;
};

const data: NavbarData[] = navbarData;

function Navbar({
  setIsActive,
}: { setIsActive: Dispatch<SetStateAction<boolean>> }) {
  const [active, setActive] = useState<string | null>(null);
  const [showNavbar, setShowNavbar] = useState(false);

  const user = useUserQuery();

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
      <Image
        className="block md:hidden"
        onClick={() => setIsActive(true)}
        src="/logo.webp"
        alt="Logo"
        height={40}
        width={40}
      />

      <Menu
        setActive={setActive}
        className={`hidden origin-center transform transition-all duration-300 ease-in-out md:flex ${
          showNavbar
            ? "scale-100 justify-center rounded-full border bg-white opacity-100 shadow-lg dark:border-white/[0.2] dark:bg-black"
            : "scale-95 items-center justify-start border-transparent bg-transparent opacity-90"
        }`}
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

        <div
          className={`my-auto flex-1 items-center justify-end space-x-4 text-white ${showNavbar ? "hidden" : "flex"}`}
        >
          <Link
            href="/login"
            text="Login"
            className={`underline-offset-2 hover:text-white/80 hover:underline hover:decoration-wavy ${user.data ? "hidden" : "inline-block"}`}
          />
          <Link
            href="/register"
            text="Register"
            className={`underline-offset-2 hover:text-white/80 hover:underline hover:decoration-wavy ${user.data ? "hidden" : "inline-block"}`}
          />
          <DropdownMenu>
            <DropdownMenuTrigger className={user.data ? "block" : "hidden"}>
              <IoMdSettings className="text-2xl" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 border-white/40 bg-black text-white">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Keyboard shortcuts
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="border-white/40 bg-black text-white">
                      <DropdownMenuItem>Email</DropdownMenuItem>
                      <DropdownMenuItem>Message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  New Team
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>GitHub</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem disabled>API</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Menu>
    </div>
  );
}

function NavbarMobile({
  setIsActive,
  isActive,
}: { setIsActive: Dispatch<SetStateAction<boolean>>; isActive: boolean }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex h-full w-full transform flex-col gap-5 bg-black/95 p-20 transition-transform duration-300 ease-in-out ${
        isActive ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {isActive && (
        <Container>
          <div className="flex justify-between">
            <h1 className="mb-10 font-bold text-5xl">Menu</h1>
            <IoClose onClick={() => setIsActive(false)} className="text-5xl" />
          </div>
          <Accordion type="single" collapsible>
            {data.map((item, id) => {
              return (
                <Item key={id}>
                  <AccordionItem value={`item-${id}`}>
                    <AccordionTrigger className="font-semibold text-2xl">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Item>
              );
            })}
          </Accordion>
        </Container>
      )}
    </div>
  );
}

export { Navbar, NavbarMobile };
