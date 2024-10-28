"use client";

import { Gradients } from "@/app/page";
import InstagramCard from "@/components/InstagramCard";
import Tile from "@/components/Tile";
import Image from "next/image";
import Link from "next/link";

export default function Arbitrage() {
  const data = [
    {
      logo: "/gaming.png",
      instahandle: "RESURGENCE_IISERB",
      title: "Resurgence, IISER Bhopal",
      description: "Official Gaming Club of IISER Bhopal",
      coordinators: [
        {
          coordinator1: "Sankalp",
          coordinator2: "",
        },
      ],
      social: [
        {
          instagram: "https://instagram.com/resurgence_iiserb",
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
              src="/gaming.png"
              alt={"cc"}
              height={70}
              width={70}
              className="z-[999]"
            />
            <h1 className="text-6xl z-[999] ">Resurgence</h1>
          </div>
          <p className="italic mt-12 w-[70%] ">-</p>
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
