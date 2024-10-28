"use client";

import { Gradients } from "@/app/page";
import InstagramCard from "@/components/InstagramCard";
import Tile from "@/components/Tile";
import Image from "next/image";
import Link from "next/link";

export default function Arbitrage() {
  const data = [
    {
      logo: "/quant.png",
      instahandle: "ARBITRAGE",
      title: "Arbitrage, IISER Bhopal",
      description: "Official Quantative Finance Club of IISER Bhopal",
      coordinators: [
        {
          coordinator1: "Nakshatra Goswami",
          coordinator2: "Ananya Gandhi",
        },
      ],
      social: [
        {
          instagram: "",
          linkedin: "",
          discord: "",
          linktree: "",
        },
      ],
    },
  ];
  return (
    <>
      <Gradients />
      <div className="w-full lg:flex justify-between items-start min-h-screen relative  ">
        <div className="p-6 md:p-24 gap-2  justify-left min-h-screen ">
          <div className="flex items-center gap-4 mt-12 ">
            <Image
              src="/quant.png"
              alt={"cc"}
              height={70}
              width={70}
              className="z-[999]"
            />
            <h1 className="text-6xl z-[999] ">Arbitrage</h1>
            <div className="text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md -mt-4 -ml-8 z-[9999] px-2 py-1 text-sm rotate-[6deg]">
              New
            </div>
          </div>
          <p className="italic mt-12 w-[70%] ">
            Ever wondered how the power of statistics and algorithms could
            unlock the secrets of the financial markets that could change your
            financial game?
            <br />
            <br />
            Imagine a place where you can dive into the world of numbers,
            puzzles, and strategies— a club dedicated to mastering the art of
            quantitative finance!
          </p>
          <h1 className="text-6xl mt-24">🏆 Our Major Events</h1>
          <ul className="mt-12 ml-24 text-lg list-disc">None Yet!</ul>
          <h1 className="text-6xl mt-24">🫂 Our Club Members</h1>
          <ul className="mt-12 ml-24 text-lg list-disc">None Yet!</ul>
        </div>
        {/* adf {JSON.stringify(data[0].instahandle)} */}
        <div className="md:px-12 lg:fixed right-24">
          <InstagramCard data={data[0]} />
        </div>
      </div>
    </>
  );
}

// const embedPost = () => {
//     return(

//     )
// }
