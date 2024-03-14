"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Leagues() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  return (
    <div className="text-center py-4 dark:bg-gray-800">
      <h1 className="text-black text-4xl drop-shadow-md mb-2 dark:text-white">
        Leagues 🏆
      </h1>
      <hr className="w-2/5 mx-auto border-gray-300 p-2" />

      <button
        onClick={toggleDropdown}
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded lg:hidden" // Hide this button on large screens
      >
        Search Leagues
      </button>

      {isDropdownVisible && (
        <div className="dropdown-content p-4 dark:bg-white rounded-xl shadow-md mb-4 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto lg:hidden">
          <Link
            href="/Leagues/uefa-champions-league"
            className="flex items-center p-2 hover:bg-blue-500 hover:text-white"
          >
            <Image
              src="/images/leagues/UEFA_Champions_League.png"
              alt="Champions League"
              width={50}
              height={50}
            />
            <p className="ml-6 ">UEFA Champions League</p>
          </Link>
          <Link
            href="/Leagues/copa-libertadores"
            className=" flex items-center p-2 hover:bg-blue-500 hover:text-white"
          >
            <Image
              src="/images/leagues/Copa_Libertadores_logo.png"
              alt="Copa Libertadores"
              width={50}
              height={50}
            />
            <p className="ml-6 ">Copa Libertadores</p>
          </Link>
          <Link
            href="/Leagues/premier-league"
            className=" flex items-center p-2 hover:bg-blue-500 hover:text-white"
          >
            <Image  
              src="/images/leagues/PremierLogo.png"
              alt="Premier League"
              width={50}
              height={50}
            />
            <p className="ml-6 ">Premier League</p>
          </Link>
          <Link
            href="/Leagues/brasileirao"
            className=" flex items-center p-2 hover:bg-blue-500 hover:text-white"
          >
            <Image
              src="/images/leagues/Brasileirao.png"
              alt="Brasileirão"
              width={50}
              height={50}
            />
            <p className="ml-6 ">Brasileirão</p>
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 justify-items-center">
        <div className="p-4 dark:bg-white rounded-xl shadow-md">
          <Link href="/Leagues/uefa-champions-league">
            <Image
              src="/images/leagues/UEFA_Champions_League.png"
              alt="Champions League"
              width={250}
              height={250}
            />
          </Link>
        </div>

        <div className="p-4 dark:bg-white rounded-xl shadow-md">
          <Link href="/Leagues/copa-libertadores">
            <Image
              src="/images/leagues/Copa_Libertadores_logo.png"
              alt="Libertadores"
              width={250}
              height={300}
            />
          </Link>
        </div>

        <div className="p-4 dark:bg-white rounded-xl shadow-md">
          <Link href="/Leagues/premier">
            <Image
              src="/images/leagues/PremierLogo.png"
              alt="Premier League"
              width={250}
              height={250}
            />
          </Link>
        </div>

        <div className="p-4 dark:bg-white rounded-xl shadow-md">
          <Link href="/Leagues/brasileirao">
            <Image
              src="/images/leagues/Brasileirao.png"
              alt="Brasileirão"
              width={250}
              height={250}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
