import React,{useState,useEffect} from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';

function Header({search}) {

    const [movie, setMovie] = useState('')
    //const[searchmovie , setsearchmovie] = useState('')
    const moviesubmit=async(e)=>{
        e.preventDefault();
       

        
        search(movie)
        setMovie('')
    }

//useEffect(() => {
   //search(searchmovie)
   
//}, [searchmovie])

    return (
        <div className="header_container">
            <div className="header_title">
                <h1>
                    CRITIC.

                </h1>
            </div>
            <div className="header_smearch">
                <form type="submit" onSubmit={moviesubmit}>
                <SearchIcon />
                
                <input type ="text" value ={movie} onChange={(e)=>setMovie(e.target.value)}placeholder="Search Something" className="header_input"></input>
                </form></div>
            <div className="header_links_container" >
                <ul className="header_links">
                    <li style={{padding:10, textDecoration:'none' , fontWeight:'bold'}}>Movies</li>
                    <li style={{padding:10 ,fontWeight:'bold'}}>TV</li>
                    <li style={{padding:8, fontWeight:'bold'}}>News</li>
                    <li style={{padding:8 , fontWeight:'bold'}}>About</li>
                </ul>
            </div>
            <div className="header_buttons">
                <Button style={{fontWeight:'bold'}}> Log In</Button>
                <Button style={{backgroundColor:'#00FFFF'}}> Sign Out</Button>
            </div>
            
        </div>
    )
}

export default Header
