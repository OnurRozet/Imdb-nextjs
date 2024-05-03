import React from 'react';
import Link from "next/link";
import Image from "next/image";

const HeaderItem = ({title,Icon,address}) => {
    return (
        <div>
            <Link href={address}>
                <Icon className="inline text-2xl sm:hidden"/>
                <p className="uppercase text-sm ">{title}</p>
            </Link>
        </div>
    );
};

export default HeaderItem;