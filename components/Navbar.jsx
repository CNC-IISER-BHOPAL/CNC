"use client"

import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
// import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/dropdown";
// import { Button } from "@nextui-org/button";
import { motion } from "framer-motion"
import React from "react";
import Link from 'next/link'

export default function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        "Profile",

    ];
    return (<>
        <div className="w-full px-6  flex items-center justify-between py-6  absolute top-0 left-0">
            <Navbar maxWidth="full"
                className="z-[999999]"
                onMenuOpenChange={setIsMenuOpen} isBlurred={true}>
                <Wrapper >
                    <NavbarContent>
                        <NavbarMenuToggle
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            className="sm:hidden z-[99999999]"
                        />
                        <NavbarBrand>
                            <div className="flex gap-2 font-semibold items-center">
                                <img
                                    src="/cnc-grey.png"
                                    className="h-12 logo"
                                />

                            </div>
                        </NavbarBrand>
                    </NavbarContent>
                </Wrapper>
                <Wrapper
                >
                    <NavbarContent className="hidden sm:flex gap-8" justify="center">

                        <NavbarItem >
                            <Link href="/" >
                                Home
                            </Link>
                        </NavbarItem>
                        {/* <NavbarItem>
                            <Link
                                className="cursor-pointer z-[99999999]"
                                href="/clubs" >
                                Clubs
                            </Link>
                        </NavbarItem> */}

                        <NavbarItem >
                            <Link href="/team" >
                                Team
                            </Link>
                        </NavbarItem>
                        <NavbarItem className="">
                            <Link href="#">
                                Contact Us
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                </Wrapper>
                <Wrapper >
                    <NavbarContent justify="end">
                        <div className="flex gap-4 items-center">
                            <Link href={'https://www.instagram.com/cnc_iiserb/'} target="_blank">
                                <FaInstagram className="size-[20px] hover:scale-110 transition duration-500 hover:rotate-[30deg]"/>
                            </Link>
                            <Link href={'https://www.linkedin.com/company/cnc-iiser-bhopal/mycompany/'} target="_blank">
                                <FaLinkedinIn className="size-[20px] hover:scale-110 transition duration-500 hover:rotate-[30deg]"/>
                                </Link>
                            <Link href={'https://github.com/CNC-IISER-BHOPAL'} target="_blank">
                                <FaGithub className="size-[20px] hover:scale-110 transition duration-500 hover:rotate-[30deg]"/>
                            </Link>

                        </div>
                    </NavbarContent>
                </Wrapper>
                <NavbarMenu >
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>

            </Navbar>
        </div>
    </>)
}


export const Wrapper = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            {children}
        </motion.div>
    )
}