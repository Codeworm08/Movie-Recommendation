import './App.css';
import TrendingPage from './components/trending';
import Recommend from './components/recommend';
import UserContext from './UserContext';
import Genre from './components/genre';
import Movie from './components/movie'
import { Link, Route, Routes,useNavigate} from 'react-router-dom';
import SignIn from './components/SignIn';
import Register from './components/Register';
import { useContext } from 'react';
import Favorites from './components/favorites';

function App() {
  const {isLoggedIn,loggedUser,logoutUser}=useContext(UserContext);
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    logoutUser(loggedUser);
    navigate("/");
}
  return (
    <>
      
      {isLoggedIn? (
        <>
          <ul>
          <li><Link to="/">Trending</Link></li>
          <li><Link to="/choose">Recommendation</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
          <li className="log"><Link to="/" onClick={event => handleSubmit(event)}>Sign Out</Link></li>
          </ul>
        </>
      ):(
        <>
         <ul>
          <li><Link to="/">Trending</Link></li>
          <li><Link to="/choose">Recommend</Link></li>
          <li className="log"><Link to="/signin">Sign In</Link></li>
          <li className="log"><Link to="/register">Register</Link></li>
          </ul>
        </>
      )}
        
      
      <div className="App">    
        <Routes>
        <Route path="/" element={<TrendingPage/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/choose" element={<Genre/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="movie/:id" element={<Movie />}/>
        <Route path="/recommendation/:genre" element={<Recommend />}/>
        </Routes>
      </div>
    </>
  );
}


export default App;