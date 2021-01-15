import React from 'react'
import './Movie.css'
import Fallimage from '../../images/movie.jpg'

const Movie =({data})=>{

   {/* 
    const title=  data.map((movie)=>movie.display_title)
    const short_summary = data.map((movie)=>movie.summary_short)
    const rating = data.map((movie)=>movie.mpaa_rating)
   
   const release = data.map((movie)=>movie.opening_date)
   const review = data.map((movie)=>movie.headline)
   console.log(review)

   */}
   
   const xyz = data.map((movie)=> movie.multimedia)
   const image = xyz.map((item)=>item)
   console.log(image)

    
    const fullreview=(url)=>{

        window.location.href=url;
    }

    
return (
    <>


    {data.map((movie)=>{

return(

    <section className="product">
	<div className="product__photo">
		<div className="photo-container">
			<div className="photo-main">
				<div className="controls">
				
					
				</div>
  
                     
                    {movie.multimedia!= null?<img src={movie.multimedia.src} alt="Movie" style={{height:'90%' , width:'70%' , paddingLeft:25}}/>
                                 
                         :
                            <img src ={Fallimage} style={{height:'90%' , width:'70%' , paddingLeft:25}} alt="fallback"/>
                          }
                   
                     

                      

                    
                     </div>
                   </div>
	</div>

    <div className="product__info">
		<div className="title">
            <h1>{movie.display_title}</h1>
			
			<span>{movie.headline}</span>
		</div>
		<div className="rating">
			 <span>{movie.mpaa_rating}</span>
		</div>
	
		<div className="summary">
			<h3>Short Summary</h3>
			<ul>
				<li>{movie.summary_short}</li>
			</ul>
		</div>
		<button className="revbtn" onClick={()=>fullreview(movie.link.url)}>Full Review</button>
	</div>
</section>

)
})}

</>
)
}







export default Movie
