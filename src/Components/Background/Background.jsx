import React from "react";
import image1 from "../../Assets/1.jpg";
import image2 from "../../Assets/2.jpg";
import image3 from "../../Assets/3.jpg";
import video1 from "../../Assets/BlackCar.mp4";
import "./Background.css";

const Background =({heroCount,playStatus})=>{

    if(playStatus){
        return(
            <video className="background" autoPlay loop muted>
                <source src={video1} type="video/mp4"></source>
            </video>
        )
    }else if(heroCount === 0){
        return<img src={image1} className="background" alt=""></img>
    }else if(heroCount ===1){
        return<img src={image2} className="background" alt=""></img>
    }else if(heroCount === 2){
        return<img src={image3} className="background" alt=""></img>
    }

};

export default Background;