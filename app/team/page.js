"use client"

import { Gradients } from "@/app/page";
import Tile from "@/components/Tile";
import Image from "next/image";
import { team } from "@/data/teamData";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";


export default function Team() {
    return (
        <motion.div
        >
            <div className="w-full min-h-screen relative">
                <Gradients />
                <section className='w-full absolute top-0 left-0 grid grid-cols-20 h-screen overflow-y-clip'>
                    {Array.from(Array(30 * 30), i => (
                        <Tile key={i} />
                    ))}
                </section>

                <div className="w-full flex flex-col items-start p-3 lg:p-24 gap-2 justify-center min-h-screen">
                    <div className="flex items-center justify-center w-full gap-4 mt-24">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl lg:text-6xl z-[999] bg-gradient-to-tr from-blue-200 to-blue-100 bg-clip-text text-transparent text-center font-medium p-2">
                            We are the people that <br />make up <span className="text-blue-500">CNC.</span>
                        </motion.h1>
                    </div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-2 lg:gap-12 mt-12"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {team.map((teamMember, id) => (
                            <TeamMember
                                key={id}
                                name={teamMember.name}
                                bio={teamMember.bio}
                                designation={teamMember.designation}
                                social_links={teamMember.social_links}
                                profile={teamMember.profile_picture}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.3,
            staggerChildren: 0.3 // Adjust the stagger time as needed
        }
    }
}

const variants = {
    open: { width: "95%", height: "95%" },
    closed: { width: "42px", height: "42px" },
}

const TeamMember = ({ name, bio, social_links, designation, profile }) => {
    const [dot, setDot] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    return (
        <motion.div
            ref={ref}
            className="lg:p-6"
            variants={itemVariants}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-fit relative rounded-xl grid place-items-center justify-center group transition duration-500 overflow-hidden">
                <Image
                    width={500}
                    height={500}
                    alt={name}
                    src={profile}
                    className="aspect-square object-cover z-[0] group-hover:scale-110 relative transition duration-500 rounded-xl"
                />

                <motion.div
                    animate={dot ? "open" : "closed"}
                    variants={variants}
                    transition={{ duration: 0.3 }}
                    className="transition overflow-hidden bg-blue-900/10 rounded-sm md:rounded-lg backdrop-blur-lg p-1 lg:p-2 gap-3 absolute shadow-xl absolute flex justify-center right-2 top-2 items-center"
                >
                    <BsThreeDots
                        className="cursor-pointer absolute right-2 top-2 size-[25px] drop-shadow-lg"
                        onClick={() => setDot(dot => !dot)}
                    />
                    <Links />
                </motion.div>

            </div>
            <div className="mt-4 flex items-center justify-between">
                <div>
                    <h1 className="text-xl lg:text-2xl font-bold mt-2">{name}</h1>
                    <h1 className="text-sm md:text-lg text-neutral-300 mt-1">{designation}</h1>
                </div>
            </div>
            <h1 className="font-thin text-xs md:text-sm text-neutral-400 mt-4">{bio}</h1>
        </motion.div>
    );
}

const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
}

const Socialvariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    }
};

const Links = () => {
    return (
        <motion.div
            variants={Socialvariants}
            className="flex gap-4 absolute items-center justify-center">
            <BiLogoGmail className="cursor-pointer drop-shadow-lg mt-2 md:size-[25px] size-[20px]" />
            <FaLinkedinIn className="cursor-pointer drop-shadow-lg mt-2 md:size-[25px] size-[20px]" />
            <FaGithub className="cursor-pointer drop-shadow-lg mt-2 md:size-[25px] size-[20px]" />
        </motion.div>
    )
}
