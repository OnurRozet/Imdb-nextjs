import React from 'react';
import Image from "next/image";

const MoviePage = async ({params}) => {
    const movieId = params.id;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
    if(!res.ok){
      throw new Error('Failed to fetch data');
    }
    const movie = await res.json();

    console.log(movie)
    return (
        <div className="w-full">
          <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
              <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} width={500} height={400}
              className= "rounded-lg" alt="image movie"
                     style={{maxWidth: "100%",height: "100%"}}
              />
              <div className="p-2">
                  <h2 className="text-lg mb-3 font-bold">{movie.title || movie.name}</h2>
                  <p className="text-lg mb-3">{movie.overview}</p>
                  <p className="mb-3">
                      <span className="font-bold mr-1">Release Date:</span>
                      {movie.release_date || movie.first_air_date}</p>
                  <p>
                        <span className="font-bold mr-1">Vote Average:</span>
                      {movie.vote_count}</p>
              </div>
          </div>
        </div>
    );
};

export default MoviePage;