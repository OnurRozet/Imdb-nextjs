import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {FiThumbsUp} from "react-icons/fi";

const MovieCard = ({data}) => {
    return (
        <div
            className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
            <Link href={`/movie/${data.id}`}>
                <Image src={`https://image.tmdb.org/t/p/original/${data.backrop_path || data.poster_path}`} width={500}
                       height={300}
                       alt={"image movie"}
                       className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"/>
                <div className="p-2 flex items-center justify-center flex-col">
                    <p className="line-clamp-2 text-md text-center">{data.overview}</p>
                    <h2 className="text-lg font-bold truncate">{data.title || data.name}</h2>
                    <p className="flex items-center justify-center gap-2">
                        {data.release_date || data.first_air_date} - {data.vote_average} <FiThumbsUp/>
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard;