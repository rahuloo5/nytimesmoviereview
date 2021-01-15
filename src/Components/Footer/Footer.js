import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './Footer.css'
function Footer() {
    return (
        <div className="footer_container">
            <div className="critic">
                <h2 style={{fontWeight:'bold',color:'black'}}>critic.</h2>
                <div className="social">
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <YouTubeIcon/>

                

                </div>

            </div>
            <div className="critic_movie">
                <h2 style={{fontWeight:'bold',color:'black'}}>MOVIES</h2>
                <h5>In Theatres</h5>
                <h5>Box Office</h5>
                <h5>DVD Streming</h5>
                <h5>Top Rated</h5>

            </div>
            <div className="critic_tv">
                <h2 style={{fontWeight:'bold',color:'black'}}>TV</h2>

            <h5>New Release</h5>
                <h5>Most Popular</h5>
                <h5>Streming</h5>
                <h5>Top Rated</h5>
                </div>
                <div className="critic_news">
                    <h2 style={{fontWeight:'bold',color:'black'}}>NEWS</h2>
                <h5>Columns</h5>
                <h5>Best and Worst</h5>
                <h5>Watchable</h5>
                <h5>Critic Latest</h5>

                </div>
                <div className="about">
                    <h2 style={{fontWeight:'bold',color:'black'}}>ABOUT</h2>
                <h5>About  Critic</h5>
                <h5>Critic Submission </h5>
                <h5>Careers</h5>
                <h5>Faq</h5>
                    </div>
            
        </div>
    )
}

export default Footer
