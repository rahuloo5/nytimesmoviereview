import React,{useState , useEffect} from 'react'
import Movie from './Movie'



function Body({search}) {
const [movies , setMovies] = useState([])

useEffect(async()=>{
    



    const API = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${search}&api-key=Kmi4vlm9hJPnU47DR4RuRd6KQA2avUH8`

     await fetch(API)
    .then(res=>res.json())
    .then(data=>{
        setMovies(data.results)
       
    })
},[search])


    return (


        <div>
            {
                movies.length>0? <Movie  data ={movies}  />:
                <div>
                    <h1>
                        Movie is not availabe 
                        </h1>


                </div>
            }
        
                
               
          
            
        </div>
    )
}

export default Body
