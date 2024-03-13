"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useFetchNewsData from "../actions/FetchNewsData";
import Image from "next/image";
import Link from "next/link";
import { BeatLoader } from 'react-spinners';

interface NewsItem {
  
  id: number;
  publishDate: string;
  sourceId: number;
  title: string;
  image: string;
  url: string;
  isMagazine: boolean;
}

interface ApiResponse {
  news: NewsItem[];
  newsSources: {
    id: number;
    name: string;
    imageVersion: number;
  }[];
}

const MainCarousel = () => {
  const { data, error } = useFetchNewsData();

  if (error) {
    return <p className="text-center text-red-500">Error loading news.</p>;
  }  if (!data) {

    return   <div className="flex justify-center items-center h-[50vh]">
        <BeatLoader color="#2e8ed7" loading={true} size={10} />
  </div>
  }

  return (
    <div className="mx-auto max-w-screen-md rounded-xl shadow-lg">
      <Carousel
        showArrows={true}
        autoPlay={true}
        interval={5000}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        useKeyboardArrows={true}
        swipeable={true}
        className="rounded-lg overflow-hidden"
      >
        {data?.news.map((newsItem) => (
          <div key={newsItem.id} className="relative">
            <div
              style={{
                maxWidth: "80vw", 
                maxHeight: "80vh", 
                minWidth: "40vw",
                minHeight: "50vh", 
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden", 
                margin: "auto",
              }}
            >
              <Image
                src={newsItem.image}
                alt={newsItem.title}
                unoptimized={true} 
                layout="fill"
                objectFit="cover" 
                style={{ borderRadius: "15px" }}
              />
            </div>
            <div className="absolute bottom-0 w-full p-8">
              <Link
                href={newsItem.url}
                className="text-white   text-lg md:text-xl lg:text-2xl font-bold hover:underline"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)"  }}
              >
                {newsItem.title}
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MainCarousel;
