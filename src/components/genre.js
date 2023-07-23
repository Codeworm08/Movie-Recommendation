import React ,{ useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
const Genre = () =>{
    const [list,setList] = useState([]);
    const [ids,setID] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmNhMDcwNWY3ODYyZjU0MjNiNGU1NDlmYjNhOGZiMyIsInN1YiI6IjY0YjI5YTk3Nzg1NzBlMDBhZDRiM2Y4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nY0UleBRTji3p2GE8QoUvNkUT336itn9UZID_uacDqA'
            }
        };
          
          fetch('https://api.themoviedb.org/3/genre/movie/list', options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setList(response.genres);
            })
            .catch(err => console.error(err));
    }, [])
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const selectedIDs = Array.from(event.target.genres).filter((genre)=>genre.checked).map((genre)=>genre.value).join('%7C');
        setID(selectedIDs);
        console.log(ids);
        navigate(`/recommendation/${selectedIDs}`);        
    };
    return (
        <> 
            <h1>Movie Cavern</h1>
            <form onSubmit={handleFormSubmit}>
                {list.map((genre) => (
                   
                    <div className="genree" key={genre.id}>
                        <input className="radio" type="checkbox" id={genre.id} name="genres" value={genre.id}/>
                        <label htmlFor={genre.id}>{genre.name}</label>
                    </div>
                    
                ))}
                <button type="submit"><span>Submit</span></button>
            </form>
        </>
    )
}
export default Genre