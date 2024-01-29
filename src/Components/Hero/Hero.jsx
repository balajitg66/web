import React from "react";
import arrow from "../../Assets/arrow.png";
import pause from "../../Assets/pause.png";
import play from "../../Assets/play.png";
import "./Hero.css";
const Hero =({heroData,setHeroCount,heroCount,setPlayStatus,playStatus})=>{
    return(
        <div className="hero">
             <div className="hero-text">
             <p>{heroData[heroCount].text1}</p>
             <p>{heroData[heroCount].text2}</p>
             </div>
             <div className="hero-explore">
                <p>Explore the Speed</p>
                <img src={arrow} style={{height:"32px", width:"40px"}}  alt=""></img>
             </div>
             <div className="hero-dot-play">
                <ul className="hero-dots">
                    <li onClick={()=>{setHeroCount(0)}} className={heroCount ===0 ?"hero-dot orange" :"hero-dot"}></li>
                    <li onClick={()=>{setHeroCount(1)}}className={heroCount ===1 ?"hero-dot orange" :"hero-dot"} ></li>
                    <li onClick={()=>{setHeroCount(2)}} className={heroCount ===2 ?"hero-dot orange" :"hero-dot"}></li>
                </ul>
                <div className="hero-play">
                    <img onClick={()=>{setPlayStatus(!playStatus)}} src={playStatus?pause:play} style={{width:"40px", height:"40px"}} alt=""></img>
                    <p>{!playStatus?"See the video":"pause video"}</p>
                </div>
             </div>
        </div>
    )
}; 
export default Hero;