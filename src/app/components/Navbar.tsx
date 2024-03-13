"use client";
import Link from "next/link";
import { useState } from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="bg-white shadow-md dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/news">
              <div className="cursor-pointer text-black hover:text-gray-600 dark:text-white">
                News
              </div>
            </Link>
            <Link href="/Leagues">
              <div className="cursor-pointer text-black hover:text-gray-600 dark:text-white">
               Leagues
              </div>
            </Link>
            <Link href="/transfers-and-rumours">
              <div className="cursor-pointer text-black hover:text-gray-600 dark:text-white">
                Transfers & Rumours
              </div>
            </Link>
            <Link href="/market-values">
              <div className="cursor-pointer text-black hover:text-gray-600 dark:text-white">
                Market Values
              </div>
            </Link>
            <Link href="/forums">
              <div className="cursor-pointer text-black hover:text-gray-600 dark:text-white">
                Forums
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Link href="https://twitter.com/TMus_news">
              <FaTwitter className="cursor-pointer text-black hover:text-gray-600 dark:text-white" />
            </Link>
            <Link href="https://www.facebook.com/transfermarkt.global/">
              <FaFacebookF className="cursor-pointer text-black hover:text-gray-600 dark:text-white" />
            </Link>
            <Link href="https://www.instagram.com/transfermarkt.us">
              <FaInstagram className="cursor-pointer text-black hover:text-gray-600 dark:text-white" />
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <form onSubmit={handleSearchSubmit} className="flex">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-gray-300 p-2 rounded-l-xl focus:outline-none focus:ring focus:border-blue-300"
              />
              <button
                type="submit"
                className="bg-blue-500 p-2 rounded-r-xl text-white flex items-center justify-center"
              >
                <FaSearch />
              </button>
            </form>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <GiHamburgerMenu className="text-2xl dark:text-white " />
            </button>
          </div>
        </div>

        {/* Mobile Menu - Shown/Hidden */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          }  flex-col pb-3 md:hidden`}
        >
          <Link href="/news">
            <div className="cursor-pointer text-black hover:text-gray-600 dark:text-white py-1">
              News
            </div>
          </Link>
          <Link href="/transfers-and-rumours">
            <div className="cursor-pointer text-black hover:text-gray-600 dark:text-white py-1">
              Competitions
            </div>
          </Link>
          <Link href="/market-values">
            <div className="cursor-pointer text-black hover:text-gray-600 dark:text-white py-1">
              Market Values
            </div>
          </Link>
          <Link href="/competitions">
            <div className="cursor-pointer text-black hover:text-gray-600 dark:text-white py-1">
              Transfers & Rumours
            </div>
          </Link>
          <Link href="/forums">
            <div className="cursor-pointer text-black hover:text-gray-600 dark:text-white py-1">
              Forums
            </div>
          </Link>
          {/* Add more links for mobile menu */}
        </div>
      </div>
    </nav>
  );
}
