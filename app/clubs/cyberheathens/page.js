"use client"

import { Gradients } from "@/app/page";
import Tile from "@/components/Tile";
import Image from "next/image";

export default function CyberHeathens() {
    return (
        <>
            <div className="w-full min-h-screen relative">
                <Gradients />
                <section className='w-full absolute top-0 left-0    grid grid-cols-20 h-screen overflow-y-clip'>
                    {Array.from(Array(30 * 30), i => (
                        <Tile key={i} />
                    ))}
                </section>


                <div className="w-full flex items-start p-24 gap-2  justify-left min-h-screen ">
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
                </div>





            </div>
        </>
    )
}



