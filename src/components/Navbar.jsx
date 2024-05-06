import React from 'react';
import NavbarItem from "@/components/NavbarItem";

const Navbar = () => {
    return (
        <div className="flex items-center justify-center gap-4 p-3 dark:bg-amber-600 bg-amber-100 lg:text-lg">
            <NavbarItem title="Trending" params="fetchTrending"/>
            <NavbarItem title="Top Rated" params="fetchTopRated" />
        </div>
    );
};

export default Navbar;





















