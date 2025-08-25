 

import React, { useState,useEffect} from "react";
import "./App.css";
import Frame_4 from "./frames/Frame_4";
import { scienceQuestions } from "./ScienceMultipleChoiceQuestions";
import { BsExclamationCircle } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import * as motion from "motion/react-client";
import useXpStore from "./xpStore";



const glow = "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff";

 const ball = {
    position: "relative",
    border: "5px solid #333",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    fontFamily: "Arial, sans-serif",
  };



function Level_3() {

  const [showGroup, setShowGroup] = useState(true);
    const xp = useXpStore((state) => state.xp)  

  return (
    <div
      style={{
        width: "100%",
       //height: "100%",
        backgroundColor: "#001f3f",  
        padding: "20px",
      
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <BsExclamationCircle
          color="white"
          size={30}
          style={{
            border: "2px solid white",
            boxShadow: glow,
            textShadow: glow,
          }}
        />
        <h2
          style={{
            color: "white",
            border: "2px solid white",
            padding: "10px 20px",
            boxShadow: glow,
            textShadow: glow,
            margin: 0,
            flexGrow: 1,
            textAlign: "center",
          }}
        >
          Level 3
        </h2>
      </div>





      {/* Notice */}
      <p
        style={{
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "10px",
          textShadow: glow,
        }}
      >
        [Urgent Quest: <strong>Answer all the questions to progress</strong>]
      </p>

      

 <svg
 width  = '20%'
 height = '10%'       
 viewBox=" 0  0 1000 500"   
>

   <filter id="glowXp" x="-50%" y="-50%" width="200%" height="200%">
     <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#00ff0d" floodOpacity="1" /> 
     <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#00ff0d" floodOpacity="0.7" /> 
     <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#00ff0d" floodOpacity="0.5" />
    </filter>

    <filter id="glowXp2" x="-50%" y="-50%" width="200%" height="200%">
     <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#fe0194" floodOpacity="1" /> 
     <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#fe0194" floodOpacity="0.7" /> 
     <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#fe0194" floodOpacity="0.5" />
    </filter>
 <g
  transform="translate(0, 0)" 
  filter = 'url(#glowXp)'   
 >
  <line stroke-width="10" fill="none" x1="179" y1="145" x2="523.00001" y2="144" id="svg_1" stroke-linejoin="undefined" stroke-linecap="undefined" stroke="#0ff"/>
  <polyline fill="none" points="102,307 102,307 " id="svg_2" stroke-linecap="round" stroke="#0ff" stroke-width="10"/>
  <path fill="none" stroke="#0ff" stroke-width="10" opacity="NaN" d="m82,368" id="svg_3"/>
  <path fill="none" opacity="NaN" d="m76.00003,367l330.77099,147l283.22898,-178l-169.93739,-192" id="svg_4" stroke="#0ff" stroke-width="10"/>
  <path stroke-width="10" fill="none" stroke="#0ff" opacity="NaN" d="m83,369l96,-225" id="svg_5"/>
  <path fill="none" opacity="NaN" d="m24.00002,354l113.74999,-242.08334l428.99996,-2.91667l198.24998,235.27778" id="svg_6" stroke="#0ff" stroke-width="10"/>
  <path fill="none" opacity="NaN" d="m189.99999,337.76238c0,0 207.05,104.23762 207.05,104.23762c0,0 202.95,-112 202.95,-112" id="svg_7" stroke="#0ff" stroke-width="10" transform="rotate(-2.00273 395 386)"/>
  <path fill="none" stroke="#0ff" opacity="NaN" d="m184,225" id="svg_8" stroke-width="10"/>
  <path stroke-width="10" fill="none" stroke="#0ff" opacity="NaN" d="m214,191" id="svg_9"/>
  <path fill="none" stroke="#0ff" opacity="NaN" d="m215,202c240,-3 294,-1 294,-1" id="svg_10" stroke-width="10"/>
  <line fill="none" stroke="#0ff" x1="83" y1="368" x2="65" y2="363" id="svg_11" stroke-width="10"/>

 </g>


 <g>
    <text
  transform  = 'translate(350  320)'        
  fontSize='65'
  fill= '#72ff95'
  textAnchor="middle" 
  filter='url(#glowXp2)' 
    > Xp : {xp} </text> 
 </g>

</svg>

      <Frame_4 />

    </div>
  );
}

export default Level_3;
