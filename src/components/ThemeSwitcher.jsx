"use client";
import React, {useEffect, useState} from 'react';
import {useTheme} from "next-themes";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
    const {theme, setTheme,systemTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    const currentTheme = theme === 'system' ? systemTheme : theme;

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div>
            {
                currentTheme === 'dark' ? <CiLight className="text-2xl hover:cursor-pointer hover:text-amber-500" onClick={()=>setTheme('light')}/>
                    : <FaMoon className="text-2xl hover:cursor-pointer hover:text-amber-500" onClick={()=>setTheme('dark')}/>
            }
        </div>
    );
};

export default ThemeSwitcher;