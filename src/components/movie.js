import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../UserContext';
const Movie = () => {
        const [movie, setMovie] = useState()
        const {id} = useParams()
        const {loggedUser, setFavorites } = useContext(UserContext);
        const navigate = useNavigate()
        const addToFavorites = (movie) => {
            setFavorites(loggedUser, movie);
            alert(`${movie.original_title} has been added to your favorites!`);
        }
        useEffect(() => {
        const getData = () => {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
                .then(res => res.json())
                .then(data => setMovie(data))
        }
            getData();
        }, [id])
        return ( 
                 <>
                <img className = "movie__poster"
                src = { `https://image.tmdb.org/t/p/original${movie ? movie.backdrop_path : ""}` }
                alt = "Movie Backdrop" />
                <h2> { movie ? movie.original_title : "" } </h2> 
                <h3> { movie ? movie.tagline : "" }</h3><br></br> 
                <div className = "grid_container"> 
                <div className = "rate"> { movie ? "Rating: " + movie.vote_average + "/10" : "" } </div> 
                <div className = "rate"> { movie ? "Votes: " + movie.vote_count : "" } </div> 
                <div className = "rate"> { movie ? "Duration: " + movie.runtime + "mins" : "" } </div> 
                <div className = "rate"> { movie ? "Release Date: " + movie.release_date : "" } </div>
                </div >
                <br></br><br></br>
                <div className = "data"><b>Synopsis:</b>{movie?" "+movie.overview : ""}</div >
                <br></br> 
                <div className = "grid_containertwo">
                {movie && movie.homepage && (
                    <div className="linki">
                        <a href={movie.homepage} target="_blank" rel="noreferrer">
                            Homepage
                        </a>
                    </div>
                )}
                {movie && movie.imdb_id && (
                    <div className="linki">
                        <a href={ "https://www.imdb.com/title/" + movie.imdb_id } target = "_blank" rel = "noreferrer" >
                        Rate the film at IMDB 
                        </a>
                    </div>
                )}
                    
                </div>
                    { loggedUser ? ( < button onClick = {() => addToFavorites(movie) } > <span> Add to Favourites </span></button > ) : "" } 
                    <button onClick = { () => navigate(-1) } > <span> Go back </span></button>
                </>
                );
                }
export default Movie;