import React ,{ useEffect, useState } from "react"
import {useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../UserContext';
const Movie = () => {
    const [movie, setMovie] = useState()
    const {id} = useParams()
    const {loggedUser,setFavorites} = useContext(UserContext);
    const navigate = useNavigate()
    const addToFavorites = (movie) => {
        setFavorites(loggedUser,movie);
        alert(`${movie.original_title} has been added to your favorites!`);
    }
    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))        
    }
    useEffect(()=>{
        getData()

    }, [])
    
    return (
        <>
        <button onClick={() => navigate(-1)}>Go back</button>
        <img src={`https://image.tmdb.org/t/p/original${movie ? movie.backdrop_path : ""}`} alt="Movie Backdrop"/>
        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} alt="Movie Poster"/>
        <h2>{movie? movie.original_title: ""}</h2>
        {movie? movie.tagline: ""}
        {movie? movie.vote_average: ""}
        {movie? "("+movie.vote_count+") votes":""}
        {movie? movie.runtime+"mins":""}
        {movie?"Release Date: "+movie.release_date:"" }
        Synopsis:{movie? movie.overview : ""}
        {movie && movie.homepage && <a href={movie.homepage} target="_blank" rel="noreferrer">Homepage</a>}
        {movie && movie.imdb_id && <a href={"https://www.imdb.com/title/"+movie.imdb_id} target="_blank" rel="noreferrer">IMDB</a>}
        {/* Add to favorites button */}
        {loggedUser?(<button onClick={() => addToFavorites(movie)}>Add to Favorites</button>): ""}
        </>
    );

}
export default Movie;