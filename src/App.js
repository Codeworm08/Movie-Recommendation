import './App.css';
import Recommend from './components/recommend';
import UserContext from './UserContext';
import Genre from './components/genre';
import Movie from './components/movie'
import { Link, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import Register from './components/Register';
import { useContext } from 'react';
import SignOut from './components/SignOut';
function App() {
  const {isLoggedIn,loggedUser}=useContext(UserContext);
  return (
    <>
      <div className='Nav'>
      {isLoggedIn? (
        <>
          <Link to="/favorites">Favorites</Link>
          <Link to="/signout">Sign Out</Link>
        </>
      ):(
        <>
          <Link to="/signin">Sign In</Link>
          <Link to="/register">Register</Link>
        </>
      )}
        <Link to="/">Trending</Link>
        <Link to="/choose">Recommend</Link>
      </div>
      <div className="App">    
        <Routes>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/signout" element={<SignOut/>}/>
        <Route path="/choose" element={<Genre/>}/>
        <Route path="movie/:id" element={<Movie />}/>
        <Route path="/recommendation/:genre" element={<Recommend />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
