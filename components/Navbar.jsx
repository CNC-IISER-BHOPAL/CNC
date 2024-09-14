"use client"

import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";



export default function Navbar() {
    return (<>
        <div className="w-full px-6 pointer-events-none flex items-center justify-between py-6 z-[10] absolute top-0 left-0">
            <Image
                height={60}
                width={60}
                alt="CNC Logo"
                src="/cnc-grey.png" className=" object-contain" />

            <div className="flex gap-3 items-center">
                <FaInstagram />
                <FaLinkedinIn />
                <FaGithub />

            </div>
        </div>
    </>)
}