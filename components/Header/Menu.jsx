"use client";
import React, { useState } from "react";
import RightDrawer from "./RightDrawer";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="md:hidden">
        <RightDrawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
          {/* Isi drawer Anda di sini */}

          <div className="pt-10">
            <a
              href="#"
              title="Share on Facebook (NB! does not work in this demo)"
              className="flex justify-center px-4 py-2 text-sm text-gray-800 border-b hover:bg-blue-100"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-messenger"
                className="w-5 h-5 mr-4 text-blue-500"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"
                />
              </svg>
              <span className="text-gray-600">Facebook</span>
            </a>
            <a
              href="#"
              title="Share on Twitter (NB! does not work in this demo)"
              className="flex justify-center px-4 py-2 text-sm text-gray-800 border-b hover:bg-blue-100"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter-square"
                className="w-5 h-5 mr-4 text-blue-500"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
                />
              </svg>
              <span className="text-gray-600">Twitter</span>
            </a>
            <a
              href="#"
              title="Share on LinkedIn (NB! does not work in this demo)"
              className="flex justify-center px-4 py-2 text-sm text-gray-800 border-b hover:bg-blue-100"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="linkedin"
                className="w-5 h-5 mr-4 text-blue-500"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                />
              </svg>
              <span className="text-gray-600">LinkedIn</span>
            </a>
          </div>
        </RightDrawer>
        <button className="toggle-button" onClick={toggleDrawer}>
          {isDrawerOpen ? <FaTimes /> : <FaBars className="text-black" />}
        </button>
      </div>
      <ul
        className={
          "navbarMenu hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:flex"
        }
      >
        <li>
          <Link href="/" passHref>
            <div
              className={pathname === "/" || undefined ? "activeNav" : "Nav"}
            >
              Home
            </div>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <div className={pathname === "/about" ? "activeNav" : "Nav"}>
              About
            </div>
          </Link>
        </li>
        <li>
          <Link href="/services" passHref>
            <div className={pathname === "/services" ? "activeNav" : "Nav"}>
              Services
            </div>
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            <div className={pathname === "/contact" ? "activeNav" : "Nav"}>
              Contact
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
