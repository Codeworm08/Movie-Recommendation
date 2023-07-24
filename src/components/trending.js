import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from './recommend';

const TrendingPage = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        // Replace 'YOUR_API_KEY' with your actual OMDB API key
        const apiKey = 'YOUR_API_KEY';
        const url = `http://www.omdbapi.com/?s=trending&type=movie&apikey=${apiKey}`;

        axios
            .get(url)
            .then((response) => {
                if (response.data.Search) {
                    setTrendingMovies(response.data.Search);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return ( <div className = "trending-page" >
        <h1 > Trending Movies </h1> <
        MovieList movies = { trendingMovies }/> </div>
    );
};

export default TrendingPage;