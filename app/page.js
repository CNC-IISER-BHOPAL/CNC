"use client"

import { MoveUpRight } from 'lucide-react'
import { easeIn, motion } from 'framer-motion'
import Tile from '@/components/Tile';
import { useScramble } from 'use-scramble';
import { useEffect, useState } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { clubs } from '@/data/clubData'; // Import the club data
import { IoArrowForward } from "react-icons/io5";




export default function Home() {
  const newLocal = " rounded-full  p-2  transition duration-500";
  const { ref } = useScramble({
    text: '"Code is like humor. When you have to explain it, it’s bad."',
    speed: 0.4,
    tick: 2,
    step: 2,
    scramble: 5,
    seed: 0,
  });
  return (
    <div className="  w-full     z-[1]  relative">
      <Gradients />
      <Overlay />
      <BackgroundGrid />
      <div className='absolute pointer-events-none  lg:p-12 min-h-screen  lg:p-24 top-0 left-0 w-full '>
        <div className="flex min-h-[80vh]  flex-col items-center justify-center">
          <Wrapper>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-white bg-white/20 px-3 py-1 drop-shadow-lg  font-thin text-xs md:text-sm lg:text-md shadow-lg rounded-full backdrop-blur-lg font-bold">IISER Bhopal</motion.p>
          </Wrapper>
          <Wrapper>
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="text-5xl lg:text-7xl text-center font-bold bg-gradient-to-tr from-[#2F80ED] to-[#2D9EE0] text-transparent bg-clip-text drop-shadow-lg lg:p-4"

            >Computer and <br />Networking Council
            </motion.h1>
          </Wrapper>
          <Wrapper>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className='text-xs text-center mt-6 lg:text-sm bg-gradient-to-t  italic from-white  via-white/90 to-white/60 text-transparent bg-clip-text'
              ref={ref}
            />
          </Wrapper>
        </div>

        <Ethos />

        <div className='w-full relative p-12 mt-24 '>

          <h1 className='text-6xl font-semibold text-[#2F80ED] flex items-center gap-4'>
            Clubs Under Us
            {/* <IoArrowForward size={45} /> */}
          </h1>
          {clubs.map((club, index) => (
            <Clubs
              key={index}
              clubName={club.clubName}
              clubCoordinators={club.clubCoordinators}
              clubAbstract={club.clubAbstract}
              clubLink={club.clubLink}
              clubLogo={club.clubLogo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


// from-[#44A6CA]

export const Wrapper = ({ children }) => {
  return (
    <div className="overflow-hidden">
      {children}
    </div>
  )
}


const BackgroundGrid = () => {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const generateRandomTiles = () => {
      return Array.from({ length: 30 * 30 }, () => Math.random() < 0.06); // 10% chance to be glitchy
    };
    // Initialize tiles
    setTiles(generateRandomTiles());

    // Update tiles every second
    const intervalId = setInterval(() => {
      setTiles(generateRandomTiles());
    }, 1500);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className='w-full   grid grid-cols-20 min-h-screen h-[300vh]'>
      {tiles.map((isGlitchy, index) => (
        <Tile key={index} isGlitchy={isGlitchy} />
      ))}
    </section>

  )
}

const Gradients = () => {
  return (
    <div className=''>
      <div className="pointer-events-none top-24 z-[0] bg-blue-700 w-[500px] h-[400px] blur-[20rem] absolute" />
      <div className="bg-gradient-to-br from-[#2f80ed] z-[0] pointer-events-none to-[#2f80ed]  right-0 -top-24 w-[500px] h-[500px] blur-[1400px] absolute" />
      <div className="absolute inset-x-0 m-auto h-80 max-w-lg bg-gradient-to-tr from-blue-400 via-blue-900 to-cyan-600 z-[0] blur-[118px]"></div>
      {/* <div className="bg-gradient-to-r from-[#091Eee] z-[0] pointer-events-none to-[#2D9EE0]  right-24  bottom-24 w-[500px] h-[500px] blur-[1200px] absolute" /> */}
    </div>
  )
}


const Ethos = () => {
  return (
    <div className='px-6  lg:px-12 grid lg:grid-cols-2 grid-cols-1 mt-48  w-full justify-between '>
      <h1 className='text-4xl mb-6 text-[#2F80ED]'>Our Ethos</h1>
      <p className='col-span-1 text-neutral-300'>"At CNC we are committed to building a professional team to work in favour of IISERB's interests. We thrive to make IISERB self dependent and work for its betterment. We are the backbone of majority of councils/clubs at IISERB. Our core members ensure that events taking place on campus are conducted smoothly and provide the neceesary resources to designated teams for proper organisation of any event."</p>
    </div>
  )
}

const Overlay = () => {
  return (
    <div className="absolute  pointer-events-none  z-[99] inset-0 top-0 left-0 flex items-center justify-center bg-black/40 w-full min-h-screen [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>

  )
}


const Clubs = ({ clubName, clubCoordinators, clubAbstract, clubLink, clubLogo }) => {
  return (

    <div className='py-12 grid mt-12 grid-cols-1 md:grid-cols-7 justify-between'>
      {/* Club Logo */}
      <img
        src={clubLogo}
        alt={`${clubName} Logo`}
        className='md:col-span-3 mx-auto h-[200px] object-cover my-auto'
      />
      <div className='md:col-span-4'>
        <h1 className='text-3xl md:text-5xl bg-gradient-to-br  from-blue-600 to-blue-400 py-4 text-transparent bg-clip-text w-fit '>{clubName}</h1>
        <h3 className='text-sm md:text-md text-neutral-300 '>
          Coordinators: {clubCoordinators}
        </h3>
        {/* Club Abstract */}
        <p className='text-xs md:text-md mt-6 font-thin text-neutral-400'>
          {clubAbstract}
        </p>
        {/* Know More Button */}
        <a href={clubLink} target="_blank" rel="noopener noreferrer">
          <button className='text-white items-center font-medium gap-2 rounded-xl flex mt-5'>
            Know More
            <MdArrowOutward size={20} />
          </button>
        </a>
      </div>
    </div>

  );
};
