import './App.css';
import Recommend from './components/recommend';
import Genre from './components/genre';
import { Link, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <div className='Nav'>
        <Link to="/">Trending</Link>
        <Link to="/choose">Recommend</Link>
      </div>
      <div className="App">    
        <Routes>
        <Route path="/choose" element={<Genre/>}/>
        <Route path="/recommendation/:genre" element={<Recommend />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
