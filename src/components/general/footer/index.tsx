"use client";

import { logoutAccount } from "@/lib/actions/user.actions";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const GenFooter: React.FC<FooterProps> = ({ user, type = "desktop" }) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await logoutAccount();

      if (response) router.push("/sign-in");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <footer className="footer">
      <div
        className={cn(type === "mobile" ? "footer_name-mobile" : "footer_name")}
      >
        <p className="text-xl font-bold text-gray-700">{user.name[0]}</p>
      </div>

      <div
        className={cn(
          type === "mobile" ? "footer_email-mobile" : "footer_email"
        )}
      >
        <h1 className="text-14 truncate font-semibold text-gray-700">
          {user.name}
        </h1>

        <p className="text-14 truncate font-normal text-gray-600">
          {user.email}
        </p>
      </div>

      <div className="footer_image" onClick={handleLogout}>
        <Image src="/icons/logout.svg" fill alt="logout-button" />
      </div>
    </footer>
  );
};

export default GenFooter;
