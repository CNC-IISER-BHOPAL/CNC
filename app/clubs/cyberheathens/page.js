"use client";

import { Gradients } from "@/app/page";
import InstagramCard from "@/components/InstagramCard";
import Tile from "@/components/Tile";
import Image from "next/image";
import Link from "next/link";

export default function CyberHeathens() {
  const data = [
    {
      logo: "/cc.png",
      instahandle: "CNC_PROGRAMMING_DIVISION",
      title: "CyberHeathens, IISER Bhopal",
      description: "Official Programming Division of IISER Bhopal",
      coordinators: [
        {
          coordinator1: "Vivek Kumar",
          coordinator2: "Adheesh Trivedi",
        },
      ],
      social: [
        {
          instagram: "https://instagram.com/cnc_programming_division",
          linkedin:
            "https://www.linkedin.com/company/cnc-cyberheathens/?originalSubdomain=in",
          discord: "https://discord.gg/rX3tvtbT",
          linktree: "linktr.ee/cyber_heathens",
        },
      ],
    },
  ];
  return (
    <>
      <Gradients />
      <div className="w-full flex justify-between items-start min-h-screen relative  ">
        <div className=" p-24 gap-2  justify-left min-h-screen ">
          <div className="flex items-center gap-4 mt-12 ">
            <Image
              src="/cc.png"
              alt={"cc"}
              height={70}
              width={70}
              className="z-[999]"
            />
            <h1 className="text-6xl z-[999] ">Cyberheathens</h1>
          </div>
          <p className="italic mt-12 font-light">
            {"‘"}We aim to promote coding culture by organizing CP contests and
            workshops{"’"}
          </p>
          <h1 className="text-6xl mt-24">🏆 Our Major Events</h1>
          <ul className="mt-12 ml-24 text-lg list-disc">
            <li>
              <b>CP Contests:</b> People form a team and compete on CP questions
              in a time bound of generally 2 hrs
            </li>
            <li>
              <b>Tech Workshops:</b> A workshop on some software tech based on
              public demand
            </li>
          </ul>
          <h1 className="text-6xl mt-24">🫂 Our Club Members</h1>
          <ul className="mt-12 ml-24 text-lg list-disc">
            <li>Arpan Jain 22056</li>
            <li>Pranjal Upadhyay 22244</li>
            <li>Manjul Chaturvedi 22194</li>
            <li>Shrey Srivastava 22303</li>
            <li>Adarsh 22012</li>
            <li>Rahul Kiran Jana 23257</li>
            <li>Charvi Gupta 23091</li>
            <li>Vedanshi Vaghela 23370</li>
            <li>Shafwan Safi 24003</li>
            <li>Suryaansh Chawla 24341</li>
          </ul>
        </div>
        {/* adf {JSON.stringify(data[0].instahandle)} */}
        <div className="px-12 lg:px-12 lg:fixed right-24">
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
