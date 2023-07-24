import React ,{ useEffect, useState } from "react"
import {useParams,Link, } from 'react-router-dom';
const Recommend = () =>{
    const [ recs, setRecs ] = useState([]);
    
    let params = useParams();
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmNhMDcwNWY3ODYyZjU0MjNiNGU1NDlmYjNhOGZiMyIsInN1YiI6IjY0YjI5YTk3Nzg1NzBlMDBhZDRiM2Y4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nY0UleBRTji3p2GE8QoUvNkUT336itn9UZID_uacDqA'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&with_genres=${params.genre}`, options)
          .then(response => response.json())
          .then(response => {
            console.log(response);
            setRecs(response.results);
          })
          .catch(err => console.error(err));
    },[params.genre])
    return (
        <>
            {recs.map((movie) => (
                <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"black"}}>
                <div className="movie">
                    <h3>{movie.title}</h3>
                    <img src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt="movie thumbnail"/>
                </div>
                </Link>
            ))}
        </>
    )
}
export default Recommend