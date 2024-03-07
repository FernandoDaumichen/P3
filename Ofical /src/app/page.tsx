/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import ApiStatus from "./actions/api";
import ApiNews from "./actions/FetchNewsData";
import MainCarousel from "./components/MainCarrousel";
// import FetchTransfers from "./actions/FetchTransfers";
import TransfersList from "./components/TransferList";
import FetchMatches from "./actions/FetchMatches";
import MatchesList from "./components/MatchesList";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className=" bg-gray-100 h-100 dark:bg-gray-800">
      <header>
        <Navbar />
      </header>
      <main className="p-4 flex flex-col lg:flex-row">
        <section className="mb-4 p-2 lg:mb-0 lg:flex-1 ">
          <h1 className="text-black text-4xl drop-shadow-md mb-2 dark:text-white ">
            Spotlight
          </h1>
          <hr className="w-2/5 p-2 "/>
          <MainCarousel />
        </section>
        <section className="mb-4 p-2 lg:mb-0 lg:flex-1">
          <h1 className="text-black text-4xl drop-shadow-md mb-2  dark:text-white">
            Today's Matches ⚽️
          </h1>
          <hr className="w-2/5 p-2 "/>
          <MatchesList />
        </section>
      </main>
      <h1 className="text-black text-4xl drop-shadow-md mb-2 dark:text-white">
        Transfers 💶
      </h1>
      <hr />
      {/* <FetchTransfers /> */}
      <TransfersList />
    </div>
  );
}
