"use client"

import { Gradients } from "@/app/page";
import Tile from "@/components/Tile";
import Image from "next/image";
import { team } from "@/data/teamData";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
export default function Team() {
    return (
        <>
            <div className="w-full min-h-screen relative">
                <Gradients />
                <section className='w-full absolute top-0 left-0    grid grid-cols-20 h-screen overflow-y-clip'>
                    {Array.from(Array(30 * 30), i => (
                        <Tile key={i} />
                    ))}
                </section>


                <div className="w-full flex flex-col items-start p-8 lg:p-24 gap-2  justify-center min-h-screen ">
                    <div className="flex items-center justify-center w-full gap-4 mt-24 ">
                        <h1 className="text-4xl lg:text-6xl z-[999] bg-gradient-to-tr from-blue-200 to-blue-100 bg-clip-text text-transparent text-center font-medium p-2 ">We are the people that <br />make up <span className="text-blue-500">CNC.</span> </h1>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-12 mt-12 ">
                        {team.map((teamMember => (
                            <TeamMember
                                name={teamMember.name}
                                bio={teamMember.bio}
                                designation={teamMember.designation}
                                social_links={teamMember.social_links}
                                profile={teamMember.profile_picture}
                            />
                        )))}

                    </div>

                </div>





            </div>
        </>
    )
}





const TeamMember = ({ name, bio, social_links, designation, profile }) => {
    return (
        <div className="lg:p-6   ">
            <div className="border w-fit">
            <img
                src={profile}
                className=" rounded-xl"
            />
            </div>
            <div className="mt-4 flex items-center justify-between">
                <div>
                    <h1 className="text-xl lg:text-2xl font-bold mt-2">{name}</h1>
                    <h1 className="text-lg text-neutral-300 lg:text-lg mt-1">{designation}</h1>
                </div>
                
            </div>
            <h1 className="font-thin text-sm text-neutral-400 mt-4">{bio}</h1>

        </div>
    )
}