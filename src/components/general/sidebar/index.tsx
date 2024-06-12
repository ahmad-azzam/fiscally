"use client";

import { sidebarLinks } from "@/constant";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const GenSidebar: React.FC<SidebarProps> = ({ user }) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2 flex">
          <Image
            src="/icons/logo.svg"
            height={34}
            width={34}
            alt="Fiscally Logo"
            className="size-[24px] max-xl:size-14"
          />

          <h1 className="sidebar-logo">Fiscally</h1>
        </Link>
        {sidebarLinks.map((menu, index) => {
          const isActive =
            pathname === menu.route || pathname.startsWith(`${menu.route}/`);

          return (
            <Link
              key={`${index}__sidebar__menu`}
              href={menu.route}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
            >
              <div className="relative size-6">
                <Image
                  src={menu.imgURL}
                  alt={menu.label}
                  fill
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {menu.label}
              </p>
            </Link>
          );
        })}
        USER
      </nav>
      FOOTER
    </section>
  );
};

export default GenSidebar;
