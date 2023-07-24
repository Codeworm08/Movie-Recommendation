import React, { useContext } from 'react';
import UserContext from '../UserContext';
const Favorites = () => {
    const {users, loggedUser,deleteFav} = useContext(UserContext);
    const handleDeleteFromFavorites = (movie) => {
        deleteFav(movie.id);
        alert(`${movie.original_title} has been removed from your favorites!`);
    };
    return (
        <div>
            <h1>Favourites</h1>
            {users[loggedUser].favorites.length >0? (
                <div>
                
                    {users[loggedUser].favorites.map((movie) => (
                        <div>
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${movie ? movie.backdrop_path : ""}`} alt="Movie Poster"/>
                        <h2>{movie.original_title}</h2>
                        <div className="data" ><b>Synopsis:</b>{movie?" "+movie.overview : ""}</div><br></br><br></br>
                        <button onClick={() => handleDeleteFromFavorites(movie)}><span>Remove from Favorites</span></button>
                        </div>
                    ))}
                
            </div>
            ):(
                <div className='fav'>No favourites yet!</div>
            )}
        </div>
    );
}
export default Favorites