"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const handySenseUrl: string = "https://handysense.io/";
    const registrationFormUrl: string = "https://forms.gle/aBCzKmNn1s53QfNp6";
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full h-16 px-4 py-2 flex items-center justify-between bg-gradient relative">
            {/* Logo */}
            <div className="flex gap-2 items-center">
                <Image src="/logo.png" alt="Logo" width={44} height={44} />
                <span className="text-2xl font-bold text-green-main">B-Farm</span>
            </div>
            {/* Desktop Menu */}
            <nav className="hidden md:block">
                <ul className="flex gap-6">
                    <li><Link className="menu-link" href="/">หน้าแรก</Link></li>
                    <li><Link className="menu-link" href={handySenseUrl} target="_blank">เกี่ยวกับ HandySense</Link></li>
                    <li><Link className="menu-link" href="/tutorial">สอนการใช้งาน</Link></li>
                    <li><Link className="menu-link" href="/downloads">ดาวน์โหลด</Link></li>
                    <li><Link className="menu-link menu-button" href={registrationFormUrl} target="_blank">ลงทะเบียน</Link></li>
                </ul>
            </nav>
            {/* Hamburger Button */}
            <button className="md:hidden flex flex-col gap-1" onClick={() => setIsOpen(!isOpen)}>
                <span className="w-6 h-0.5 bg-white-main"></span>
                <span className="w-6 h-0.5 bg-white-main"></span>
                <span className="w-6 h-0.5 bg-white-main"></span>
            </button>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-green-main text-white md:hidden">
                    <ul className="flex flex-col p-4 gap-4">
                        <li><Link className="menu-link" href="/">หน้าแรก</Link></li>
                        <li><Link className="menu-link" href={handySenseUrl} target="_blank">เกี่ยวกับ HandySense</Link></li>
                        <li><Link className="menu-link" href="/tutorial">สอนการใช้งาน</Link></li>
                        <li><Link className="menu-link" href="/downloads">ดาวน์โหลด</Link></li>
                        <li><Link className="menu-link menu-button" href={registrationFormUrl} target="_blank">ลงทะเบียน</Link></li>
                    </ul>
                </div>
            )}
        </header>
    );
}