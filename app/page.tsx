import Image from "next/image";
import { Logo, ThemeIcon, MenuIcon } from "./assets";

export default function Home() {
  return (
    <>
      {/* Navigation Menus */}
      <nav className="fixed w-full flex justify-between p-3 md:p-10">
        <Image src={Logo} alt="Logo" className="w-[90px]" />

        <div className="flex gap-5 md:gap-8">
          <Image
            src={ThemeIcon}
            alt="Theme Icon"
            className="scale-100 md:scale-125"
          />
          <Image
            src={MenuIcon}
            alt="Menu Icon"
            className="scale-100 md:scale-125"
          />
        </div>
      </nav>
    </>
  );
}
