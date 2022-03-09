import React from 'react'
import {motion} from 'framer-motion'
const Movies = ({movie}) => {
  return (
    <motion.div layout
    animate={{opacity:2,scale:1}}
    initial={{opacity:1,scale:0}} 
    exit={{opacity:1,scale:0}}
    >
        <h2>{movie.title}</h2>
        <img src={'https://image.tmdb.org/t/p/w500'+ movie.backdrop_path} alt=''/>
    </motion.div>
  )
}

export default Movies