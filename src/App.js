import './App.css';
import TrendingPage from './components/trending';
import Recommend from './components/recommend';
import Genre from './components/genre';
import Movie from './components/movie'
import { Link, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    
        <ul>
        <li><Link to="/">Trending</Link></li>
        <li><Link to="/choose">Recommend</Link></li>
        
        </ul>
      
      <div className="App">    
        <Routes>
        <Route path="/" element={<TrendingPage/>}/>
        <Route path="/choose" element={<Genre/>}/>
        <Route path="movie/:id" element={<Movie />}/>
        <Route path="/recommendation/:genre" element={<Recommend />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
