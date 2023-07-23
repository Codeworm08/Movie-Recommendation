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
            <h2>Favorites</h2>
            {users[loggedUser].favorites.length >0? (
                <ul>
                    {users[loggedUser].favorites.map((movie) => (
                        <li>
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} alt="Movie Poster"/>
                        <h3>{movie.original_title}</h3>
                        <p>{movie.overview}</p>
                        <button onClick={() => handleDeleteFromFavorites(movie)}>Remove from Favorites</button>
                        </li>
                    ))}
                </ul>
            ):(
                <p>No favorites yet!</p>
            )}
        </div>
    );
}
export default Favorites