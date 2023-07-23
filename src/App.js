import './App.css';
import TrendingPage from './components/trending';
import Recommend from './components/recommend';
import UserContext from './UserContext';
import Genre from './components/genre';
import Movie from './components/movie'
import { Link, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import Register from './components/Register';
import { useContext } from 'react';
import SignOut from './components/SignOut';
import Favorites from './components/favorites';
function App() {
  const {isLoggedIn,loggedUser}=useContext(UserContext);
  return (
    <>
      <div className='App'>
      {isLoggedIn? (
        <>
          <ul>
          <li><Link to="/">Trending</Link></li>
          <li><Link to="/choose">Recommend</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
          <li><Link to="/signout">Sign Out</Link></li>
          </ul>          
        </>
      ):(
        <>
          <ul>
          <li><Link to="/">Trending</Link></li>
          <li><Link to="/choose">Recommend</Link></li>
          <li className="log"><Link to="/signin">Log In</Link></li>
          <li><Link to="/register">Register</Link></li>
          </ul>          
        </>
      )}
      </div>      
      <div className="App">    
        <Routes>
        <Route path="/" element={<TrendingPage/>}/>
        <Route path="/choose" element={<Genre/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/signout" element={<SignOut/>}/>
        <Route path="movie/:id" element={<Movie />}/>
        <Route path="/recommendation/:genre" element={<Recommend />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
