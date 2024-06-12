import { GenMobileNav, GenSidebar } from "@/components/general";
import Image from "next/image";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Baba", lastName: "Yaga" };

  return (
    <main className="flex h-screen w-full font-inter">
      <GenSidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <GenMobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
