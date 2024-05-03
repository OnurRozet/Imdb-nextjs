import React from 'react';
import HeaderItem from "@/components/HeaderItem";
import { AiFillHome } from "react-icons/ai";
import { FaCircleInfo } from "react-icons/fa6";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Link from "next/link";


const Header = () => {
    return (
        <div className="flex items-center justify-between mx-auto p-3 max-w-6xl">
            <div className="flex items-center gap-4">
                <HeaderItem title="Home" Icon={AiFillHome} address={"/"} />
                <HeaderItem title="About" Icon={FaCircleInfo} address={"/about"} />
            </div>
            <div className="flex items-center gap-2">
                <div>
                    <ThemeSwitcher/>
                </div>
                <Link href={"/"} className="text-2xl bg-amber-500 px-2 py-1 rounded-lg font-bold">IMDb</Link>
                <span className="text-xl hidden sm:inline">Clone</span>
            </div>
        </div>
    );
};

export default Header;