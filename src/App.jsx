import React, { useState } from "react";
import Background from "./Components/Background/Background";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

const App =()=>{
let heroData=[
  {text1:"Dive into",text2 :"What you love"},
  {text1:"Indulge",text2:"your passions"},
  {text1:"Dive in to",text2:"your passions"},
]
const [heroCount,setHeroCount]=useState(0);
const [playStatus,setPlayStatus]=useState(false);


  return(
    <div>
  <Background heroCount={heroCount} playStatus={playStatus}/>
  <Navbar/>
  <Hero
    playStatus={playStatus}
    setHeroCount={setHeroCount}
    heroCount={heroCount}
    heroData={heroData}
    setPlayStatus={setPlayStatus}
  />
    
  
    </div>
  )
};
export default App;