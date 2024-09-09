"use client"

import {MoveUpRight} from 'lucide-react'
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <div className="   min-h-screen sm:p-20   relative">
      <div className="bg-gradient-to-b from-[#091E3A]  via-[#2F80ED] to-[#2D9EE0] w-[500px] h-[500px] blur-[2000px] absolute" />
      <div className="flex min-h-[60vh]  flex-col items-center justify-center">
        <p className="text-[#2F80ED]  font-bold">IISER BHOPAL</p>
        <h1 className="text-7xl text-center font-semibold bg-gradient-to-b from-[#091E3A]  via-[#2F80ED] to-[#2D9EE0] text-transparent bg-clip-text p-4">Computer and <br />Networking Council</h1>



      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 w-full">
        <div className="flex items-start justify-between transition duration-500 w-full overflow-hidden p-12 group min-h-[500px] bg-gradient-to-b from-[#091E3A] rounded-xl group">

          <motion.button 
          // whileHover={{
          //   scale: 1.2,
          //   // transition: { duration: 0.5 }
          // }}
          className="text-4xl group-hover:text-6xl transition duration-500 text-[#2F80ED] ">
            Clubs
          </motion.button>
          <button className=" rounded-full  p-2  transition duration-500">
            {/* <MoveUpRight size={30} color='#2F80ED' /> */}
            </button>
        </div>
        <div className="w-full  p-12 min-h-[500px] flex items-start justify-between bg-gradient-to-b from-[#2F80ED] rounded-xl">
            <button className="text-4xl text-[#091E3A]">Team</button>
          <button className=" rounded-full  p-2"><MoveUpRight size={30} color='#2F80ED' /></button>

        </div>
      </div>

      {/* <CardSpotlightDemo /> */}
    </div>
  );
}


// from-[#44A6CA]