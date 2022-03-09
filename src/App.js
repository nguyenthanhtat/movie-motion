import logo from './logo.svg';
import './App.css';
import Movies from './Movies'
import {useEffect,useState} from 'react'
import Filter from './Filter'
import {motion,AnimatePresence} from 'framer-motion'
function App() {
  const [popular,setPopular] = useState([])
  const [filtered,setFiltered] = useState([]);
  const [activeGenre,setActiveGenre] = useState(0);
  useEffect(() =>{
    fetchPopular();
  },[]);
  const fetchPopular = async()=>{
    const data =await fetch('https://api.themoviedb.org/3/movie/popular?api_key=f5bce6bf3e12710afd3b6a955b4ec2c0&language=en-US&page=1');
    const movies  = await data.json();
    console.log(movies,'movies')
    setPopular(movies.results)
    setFiltered(movies.results);
  }
  return (
    <div className="App">
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <motion.div

       layout className="popular-movie">
         <AnimatePresence>
        {filtered.map(movie => {
          return(
          <Movies  key={movie.id} movie={movie} />
          )
        })}
        </AnimatePresence>
        </motion.div>
    </div>
  );
}

export default App;
