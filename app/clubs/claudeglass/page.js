"use client";

import { Gradients } from "@/app/page";
import InstagramCard from "@/components/InstagramCard";
import Tile from "@/components/Tile";
import Image from "next/image";
import Link from "next/link";

export default function Arbitrage() {
  const data = [
    {
      logo: "/photography.jpg",
      instahandle: "CLAUDE_GLASS",
      title: "Claude Glass, IISER Bhopal",
      description: "Official Photography Club of IISER Bhopal",
      coordinators: [
        {
          coordinator1: "Agrim Verma",
          coordinator2: "",
        },
      ],
      social: [
        {
          instagram: "https://www.instagram.com/claude__glass/?hl=en",
          linkedin:"https://www.linkedin.com/company/photography-club-iiser-bhopal/",
          discord: "",
          linktree: "https://linktr.ee/rash6",
        },
      ],
    },
  ];
  return (
    <>
      <Gradients />
      <div className="w-full lg:flex justify-between items-start min-h-screen relative  ">
        <div className="p-6 md:p-24 gap-2 w-full lg:w-[60%]  justify-left min-h-screen ">
          <div className="flex items-center gap-4 mt-12 ">
            <Image
              src="/photography.jpg"
              alt={"claudeglass"}
              height={70}
              width={70}
              className="z-[999]"
            />
            <h1 className="text-6xl z-[999] ">Claude Glass</h1>
          </div>
          <p className="italic mt-12 ">
            At IISER Bhopal’s Photography Club, we capture the beauty of
            science, nature, and everyday moments through the lens. Whether
            you're a seasoned photographer or just starting out, the club offers
            a dynamic space to learn, create, and share.
            <br />
            <br />
            From photo walks to workshops, we explore the art of storytelling
            through images. Join us to frame the world in new and exciting ways,
            one shot at a time! "One lens, one world—creativity revealing the
            unfiltered essence"
          </p>
          <h1 className="text-6xl mt-24">🏆 Our Major Events</h1>
          <ul className="mt-12 ml-24 text-lg list-disc ">
            <li>
              <b>Themed Photography Competitions :</b> Members can showcase
              their creativity and technical skills while competing in exciting
              challenges that inspire innovative perspectives on specific
              themes.
            </li>
            <li className="mt-2">
              <b>Photography Workshops :</b> Led by experienced photographers,
              these workshops cover essential techniques and tips, helping
              members enhance their skills in areas such as composition,
              lighting, and editing.
            </li>
            <li className="mt-2">
              <b>Photo Walks :</b> These outings allow members to explore the
              beauty of the IISER Bhopal campus and its surroundings while
              capturing candid moments, fostering camaraderie and collaboration
              among photographers.
            </li>
            <li className="mt-2">
              <b>Photo Exhibitions :</b> Celebrating our best work, these
              exhibitions provide a platform for members to display their
              stunning photographs, engaging the campus community and sparking
              conversations around art and science.
            </li>
            <li className="mt-2">
              <b>Capturing Campus Life :</b> Our club focuses on documenting the
              essence of campus life, creating a visual narrative that reflects
              the vibrant experiences and diverse moments of our community.
            </li>
          </ul>
          <h1 className="text-6xl mt-24">🫂 Our Club Members</h1>
          <ul className="mt-12 ml-24 text-lg list-disc">
            <li>Ahwan Nandi</li>
            <li>Vartika chauhan </li>
            <li>Satvik</li>
            <li>Yash sen</li>
            <li>Hrithik</li>
            <li>Sampreeti das</li>
            <li>Anadi gupta</li>
            <li>Divyanshu meshram</li>
            <li>Akshay</li>
            <li>Darshan</li>
            <li>Divyan pal</li>
            <li>Dev</li>
            <li>Neelesh</li>
          </ul>
        </div>
        {/* adf {JSON.stringify(data[0].instahandle)} */}
        <div className="mx-auto lg:px-12 lg:fixed right-24">
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
