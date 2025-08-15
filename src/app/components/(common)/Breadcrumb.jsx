"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LiveDate from "../(home)/(banner-components)/LiveDate";

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean); // removes empty values

  return (
    <div className="container flex items-center justify-between px-2 sm:p-0 mt-5">
      <nav
        aria-label="Breadcrumb"
        className="  py-2  sm:py-3 lg:py-6 rounded-2xl"
        style={{ backgroundImage: "url('/banner-slider-2.png')" }}
      >
        <ol className="flex items-center justify-center space-x-2 text-xl px-5 py-2 border-2 bg-black/35 border-brand rounded-4xl  b w-fit ">
          <li>
            <Link
              href="/"
              className="text-xl mt-0.5 font-headerFont  text-brand hover:underline"
            >
              Home
            </Link>
          </li>

          {segments.map((segment, index) => {
            const href = "/" + segments.slice(0, index + 1).join("/");
            const isLast = index === segments.length - 1;

            return (
              <li key={href} className="text-xl flex items-center space-x-2">
                <span className="text-lightBrand">/</span>
                {isLast ? (
                  <span className="text-xl text-amber-50 capitalize">
                    {decodeURIComponent(segment)}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="text-blue-600 hover:underline capitalize"
                  >
                    {decodeURIComponent(segment)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <LiveDate />
    </div>
  );
}
