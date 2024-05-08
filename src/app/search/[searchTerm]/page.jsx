import React from 'react';
import MovieItem from "@/components/MovieItem";

const SearchPage = async ({params}) => {
    const searchTerm = params.searchTerm;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`);
    if (!res.ok) {
        throw new Error('Failed to fetch');
    }
    const data = await res.json();
    const results = data.results;
    console.log("results",results);
    return (
        <div>
            {
                results && results.length === 0 && <h1 className="text-center pt-6">No results found</h1>
            }
            {
                results && <MovieItem data={results}/>
            }
        </div>
    );
};

export default SearchPage;