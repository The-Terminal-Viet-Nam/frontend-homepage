import footerData from "@/data/footer.json";
import { APP_DESCRIPTION } from "@/lib/og";
import Image from "next/image";
import Link from "next/link";

import FeedbackForm from "./feedback";

type FooterData = {
  title: string;
  items: {
    label: string;
    link: string;
  }[];
};

const data: FooterData[] = footerData;

const Footer = () => {
  return (
    <footer className="relative bg-black py-40">
      <ul className="container grid grid-cols-3 gap-10 md:grid-cols-7">
        <li className="col-span-full flex flex-col gap-10 md:col-span-2">
          <div className="flex items-center gap-5">
            <Image src="/logo.webp" alt="Logo" height={56} width={56} />
            <span className="font-bold text-white text-xl">The Terminal VN</span>
          </div>
          <span className="text-sm text-white/80">{APP_DESCRIPTION}</span>
          <span className="text-sm text-white/80">© The Terminal Viet Nam 2025</span>
        </li>
        {data.map((item, id) => {
          return (
            <li key={id}>
              <div className="flex h-14 items-center">
                <span className="font-bold text-white text-xl">{item.title}</span>
              </div>
              <ul className="mt-10 flex flex-col gap-1">
                {item.items.map(({ label, link }, i) => {
                  return (
                    <li key={i}>
                      <Link href={link} className="font-semibold text-sm text-white/80 hover:text-white">
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}

        <li className="col-span-full flex flex-col gap-5 md:col-span-2">
          <div className="flex h-14 items-center">
            <span className="font-bold text-white text-xl">Leave a feedback</span>
          </div>
          <FeedbackForm />
        </li>
      </ul>
    </footer>
  );
};

export { Footer };
