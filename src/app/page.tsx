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
      <main className="p-4 flex flex-col lg:flex-row">
        <section className="mb-4 p-2 lg:mb-0 lg:flex-1 ">
          <h1 className="text-black text-4xl drop-shadow-md mb-2 dark:text-white ">
            Spotlight
          </h1>
          <hr className="w-2/5 p-2 border-gray-300 " />
          <MainCarousel />
        </section>
        <section className="mb-4 p-2 lg:mb-0 lg:flex-1">
          <h1 className="text-black text-4xl drop-shadow-md mb-2  dark:text-white">
            Matches ⚽️
          </h1>
          <hr className="w-2/5 p-2 border-gray-300  " />
          <MatchesList />
        </section>
      </main>
      <h1 className="text-black text-4xl drop-shadow-md mb-2 dark:text-white">
        Transfers 💶
      </h1>
      <hr className="w-2/5 p-2 border-gray-300  " />
      {/* <FetchTransfers /> */}
      <TransfersList />
    </div>
  );
}
