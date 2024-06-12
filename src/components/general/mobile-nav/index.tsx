"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constant";
import { cn } from "@/lib/utils";

const GenMobileNav: React.FC<MobileNavProps> = ({ user }) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="cursor-pointer items-center gap-1 flex px-4"
            >
              <Image
                src="/icons/logo.svg"
                height={34}
                width={34}
                alt="Fiscally Logo"
              />

              <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                Fiscally
              </h1>
            </Link>
            <div className="mobilenav-sheet">
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((menu, index) => {
                  const isActive =
                    pathname === menu.route ||
                    pathname.startsWith(`${menu.route}/`);

                  return (
                    <SheetClose key={`${index}__sidebar__menu`} asChild>
                      <Link
                        href={menu.route}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActive,
                        })}
                      >
                        <Image
                          src={menu.imgURL}
                          alt={menu.label}
                          width={20}
                          height={20}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        />

                        <p
                          className={cn("text-16 font-semibold text-black-2", {
                            "text-white": isActive,
                          })}
                        >
                          {menu.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                USER
              </nav>
            </div>
            FOOTER
          </nav>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default GenMobileNav;
