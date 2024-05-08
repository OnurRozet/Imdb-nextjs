import React from 'react';
import MovieCard from "@/components/MovieCard";

const MovieItem = ({data}) => {
    console.log("data",data);
    return (
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-full mx-auto p-4">
            {
                data && data?.map((item, index) =>
                    <div key={index}>
                        <MovieCard data={item}/>
                    </div>
                )
            }
        </div>
    );
};

export default MovieItem;