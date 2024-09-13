"use client"

import { MoveUpRight } from 'lucide-react'
import { easeIn, motion } from 'framer-motion'
import Tile from '@/components/Tile';
import { useScramble } from 'use-scramble';
import { useEffect, useState } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { clubs } from '@/data/clubData'; // Import the club data
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";




export default function Home() {
  const { ref } = useScramble({
    // text: 'Computer & Networking Council',
    text: '&quot;Code is like humor. When you have to explain it, it&apos;s bad.&quot;',
    speed: 0.4,
    tick: 2,
    step: 2,
    scramble: 10,
    seed: 5,
  });
  return (
    <div className="  w-full     z-[2]  relative">
      <Gradients />
      <BackgroundGrid />

      <div className='absolute  lg:p-12 min-h-screen  lg:p-24 top-0 left-0 w-full '>
        <div className="flex min-h-[80vh]  pointer-events-none  flex-col items-center justify-center">
          <Wrapper>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6  }}
              className="text-white bg-white/20 px-3 py-1 drop-shadow-lg  font-thin text-xs md:text-sm lg:text-md shadow-lg rounded-full backdrop-blur-lg font-bold">IISER Bhopal</motion.p>
          </Wrapper>
          <Wrapper>
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-5xl lg:text-8xl text-center font-bold bg-gradient-to-tr from-[#2F80ED] to-[#2D9EE0] text-transparent bg-clip-text drop-shadow-lg lg:p-4"
    
            >Computer and <br />Networking Council
            </motion.h1>
          </Wrapper>
          <Wrapper>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='text-xs text-center mt-6 lg:text-lg bg-gradient-to-t  italic from-white  via-white/90 to-white/60 text-transparent bg-clip-text'
              ref={ref}
            />
          </Wrapper>
        </div>

        <Ethos />

      <VideoPlayer />





        <div className='w-full pointer-events-auto relative p-12 mt-24 '>


          <h1 className='text-6xl font-semibold text-[#2F80ED] flex items-center gap-4'>
            Clubs Under Us
          </h1>

          {clubs.map((club, index) => (
            <Clubs
              key={index}
              clubName={club.clubName}
              clubMotto={club.clubMotto}
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
      return Array.from({ length: 30 * 15  }, () => Math.random() < 0.06); // 6% chance to be glitchy
    };
    setTiles(generateRandomTiles());

    const intervalId = setInterval(() => {
      setTiles(generateRandomTiles());
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className='w-full  grid grid-cols-20 z-[0] min-h-screen '>
      {tiles.map((isGlitchy, index) => (
        <Tile key={index} isGlitchy={isGlitchy} />
      ))}
    </section>
  );
}


const Gradients = () => {
  return (
    <div>
      <div className="pointer-events-none top-24 z-[0] bg-blue-700 w-[500px] h-[400px] blur-[20rem] absolute" />
      <div className="bg-gradient-to-br from-[#2f80ed] z-[0] pointer-events-none to-[#2f80ed]  right-0 -top-24 w-[500px] h-[500px] blur-[1400px] absolute" />
      <div className="absolute inset-x-0 m-auto h-80 max-w-lg bg-gradient-to-tr from-blue-400 via-blue-900 to-cyan-600 z-[0] blur-[118px]"></div>
      {/* <div className="bg-gradient-to-r from-[#091Eee] z-[0] pointer-events-none to-[#2D9EE0]  right-24  bottom-24 w-[500px] h-[500px] blur-[1200px] absolute" /> */}
    </div>
  )
}


const Ethos = () => {
  return (
    <div className='px-6 z-[10] lg:px-12 grid lg:grid-cols-2 grid-cols-1 mt-48  w-full justify-between '>
      <h1 className='text-4xl mb-6 text-[#2F80ED]'>Our Ethos</h1>
      <p className='col-span-1 text-neutral-300'>&quot;At CNC we are committed to building a professional team to work in favour of IISERB&apos;s interests. We thrive to make IISERB self dependent and work for its betterment. We are the backbone of majority of councils/clubs at IISERB. Our core members ensure that events taking place on campus are conducted smoothly and provide the neceesary resources to designated teams for proper organisation of any event.&quot;</p>
    </div>
  )
}

const Overlay = () => {
  return (
    <div className="absolute  pointer-events-none  z-[10] inset-0 top-0 left-0 flex items-center justify-center bg-black/40 w-full min-h-screen [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>

  )
}


const Clubs = ({ clubName,clubMotto, clubCoordinators, clubAbstract, clubLink, clubLogo }) => {
  return (

    <div className='py-12 z-[999]   grid mt-12 pointer-events-auto  grid-cols-1 md:grid-cols-3 justify-between'>
      {/* Club Logo */}
      <img
        src={clubLogo}
        alt={`${clubName} Logo`}
        className=' mx-auto h-[200px] pointer-events-auto object-cover my-auto'
      />
      <div className=' md:px-12 col-span-2'>
        <div className='w-fit  hoverText overflow-hidden  h-[60px] md:h-[60px] '>
        <h1 className={`text-3xl md:text-5xl font-semibold bg-gradient-to-t  from-blue-100 py-1 to-white  text-transparent bg-clip-text w-fit `}
        style={{ "--clubName": `'${clubMotto}'` }}
        >
          {clubName}
        </h1>
        </div>

        <h3 className='text-sm md:text-lg text-neutral-300 flex gap-2 items-center '>
          <p className='text-blue-400 '>Coordinators:</p> {clubCoordinators}
        </h3>
        {/* Club Abstract */}
        <p className='text-xs md:text-lg mt-6 font-thin text-neutral-400'>
          {clubAbstract}
        </p>
        {/* Know More Button */}
        <a href={clubLink} target="_blank" rel="noopener noreferrer">
          <button className='pointer-events-auto z-[99] text-white items-center font-medium gap-2 rounded-xl flex mt-5'>
            Know More
            <MdArrowOutward size={20} />
          </button>
        </a>
      </div>
    </div>

  );
};



const VideoPlayer = () => {
  return(
    <div className='w-full flex relative items-center flex-col  justify-center p-12'>
      <div className='absolute h-[200px] w-[200px] bg-blue-500 top-24 blur-[200px] rounded-full' />
      <p className=' mb-2 mt-24 text-md text-blue-400 bg-white/20 rounded-full p-2 px-4 backdrop-blur-[10px] '>We Organize Tomorrow’s Tech Innovations Today</p>
      <h1 className='text-7xl font-semibold  mb-12 bg-gradient-to-t from-blue-200 to-white  text-transparent bg-clip-text p-3'>Armageddon Techfest</h1>
        <HeroVideoDialog
        className="border-none"
        animationStyle="from-center"

        videoSrc="https://www.youtube.com/embed/y4kRHvOr5wU?si=QYeWChb7VOO42Lyv"
        thumbnailSrc="https://i3.ytimg.com/vi/y4kRHvOr5wU/maxresdefault.jpg"
        thumbnailAlt="Arma Trailer"
      />
      
    </div>
  )
}