import React from 'react';

const MovieItem = ({data}) => {
    return (
        <div>
            {
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            {/*<img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title}/>*/}
                            <h3>{item.title}</h3>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default MovieItem;