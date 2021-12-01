/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import { useState } from "react";
import Image from "@/components/Atoms/Image";
import { useRouter } from "next/router";

import { BurgerMenu } from "@/components/Atoms/Buttons";

export default function GenericHeader(props) {
  const [activeMenu, setActiveMenu] = useState(false);

  const { locale, route } = useRouter();
  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  if (route === "/") return <></>;

  return (
    <nav>
      <div className={`max-w-6xl mx-auto px-4`}>
        <div className={`flex justify-between`}>
          <div className={`flex space-x-4`}>
            {/* LOGO */}
            <div>
              <a
                href="#"
                className={`flex items-center py-5 px-2 text-gray-700 hover:text-gray-900`}
              >
                <Image
                  className="w-32 sm:w-36 md:w-40 lg:w-44 xl:w-50"
                  data={props.logotype}
                />
              </a>
            </div>

            {/* PRIMARY NAV */}
            <div className={`hidden md:flex items-center space-x-1`}></div>
          </div>

          {/* mobile button goes here */}
          <BurgerMenu toggleMenu={activeMenu} onClick={() => toggleMenu()} />
        </div>
      </div>

      {/* Add JS to open and close mobile menu https://github.com/Wunderman-Thompson-Portugal/html-starter-kit/blob/main/public/js/app.js */}
      <div className={`mobile-menu md:hidden ${!activeMenu && "hidden"}`}>
        <a
          href="#"
          className={`block py-2 font-sans px-4 text-sm hover:bg-gray-200`}
        >
          Features
        </a>
        <a
          href="#"
          className={`block py-2 font-sans px-4 text-sm hover:bg-gray-200`}
        >
          Pricing
        </a>
        <a
          href="#"
          className={`block py-2 font-sans px-4 text-sm hover:bg-gray-200`}
        >
          Login
        </a>
        <a
          href="#"
          className={`block py-2 font-sans px-4 text-sm hover:bg-gray-200`}
        >
          Signup
        </a>
      </div>
    </nav>
  );
}
