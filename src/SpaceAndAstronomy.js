
/* 
Launch Pad (Easy)

Orbit Outpost

Martian Mysteries

Jupiter’s Challenge

Black Hole Enigma

Supernova Showdown

Exoplanet Expedition

Dark Matter Riddle

Wormhole Paradox

Edge of the Universe


////////
1. The sun 
2. The planets 
3. The moon
4. The stars
5. The galaxies
6. The Inner planets
7. The outer planets
8. The asteroid belt
9. The Kuiper belt
// 10. The Oort cloud
11. The Milky Way galaxy
12. Meteors and meteorites
13. Comets
// 14. The Big Bang theory
15. The life cycle of stars 
// 16. The solar system

// 
  
 */

import React, { useState } from "react";
import {Link} from 'react-router-dom' 


function SpaceAndAstronomy() {

  return (
     <div   
     style = {{
        height :'12000px',
        width :'100%',
        backgroundColor: '#001f3f'  
     }}
     >
      <h1
            style = {{
        textShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
        color: '#0ff', 
        fontWeight: 'bold',  
        backgroundColor: '#001f3f',
      }}
      > Space and Astronomy </h1>  

       <svg
        viewBox = '0 0 1000 900'
         xmlns="http://www.w3.org/2000/svg"       
         >

<defs>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#0ff" floodOpacity="1" />
      <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#0ff" floodOpacity="0.7" />
      <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#0ff" floodOpacity="0.5" />
    </filter>

    <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#d4fc05" floodOpacity="1" />
      <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#d4fc05" floodOpacity="0.7" />
      <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#d4fc05" floodOpacity="0.5" />
    </filter>

    
    <filter id="glowWrong" x="-50%" y="-50%" width="200%" height="200%">
     <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#fe0194" floodOpacity="1" /> 
     <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#fe0194" floodOpacity="0.7" /> 
     <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#fe0194" floodOpacity="0.5" />
    </filter>
  
    <filter id="glowCorrect" x="-50%" y="-50%" width="200%" height="200%">
     <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#00ff0d" floodOpacity="1" /> 
     <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#00ff0d" floodOpacity="0.7" /> 
     <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#00ff0d" floodOpacity="0.5" />
    </filter>

    </defs>




 <g id="Layer_1">
   
  <path fill="none" stroke="#0ff"  strokeWidth = '10' opacity="NaN" d="m188,20l66,-3l80,41l321,-3l74,-35l102,0l73,46l6,535l-48,27l-92,4l-47,-27l-396,4l-67,24l-82,-1l-52,-47l4,-515l58,-50z" id="svg_1"/>
  <path stroke="#0ff" strokeWidth = '10'
   id="svg_2"
    d="m181,87c0,0 25.62376,-28 25.62376,-28c0,0 38.43564,-1 38.43564,-1c0,0 83.76998,46 83.76998,46c0,0 337.05098,-8 337.05098,-8c0,0 65.04493,-44 65.04493,-44c0,0 75.88575,-1 75.88575,-1c0,0 60.4067,37 40.4067,27c7,5 15.76847,494 14.78294,501" opacity="NaN" fill="none"/>
  <path id="svg_3" d="m180,87" opacity="NaN"  strokeWidth = '10' stroke="#0ff" fill="none"/>
  <path id="svg_4"  strokeWidth = '10' d="m182,86l2,123l35,-26l-1,285l-30,23c0,0 -2,65 -2,69c0,4 40,27 40,27c0,0 40,-1 40,-1c0,0 48,-13 48,-13c0,0 409,-8 409,-8c0,0 70,32 70,32c0,0 43,-2 43,-2c0,0 27,-17 27,-17" opacity="NaN" stroke="#0ff" fill="none"/>
  <path id="svg_5" strokeWidth = '10' d="m148,252c0,0 41,-25 41,-25c0,0 -2,37 -2,37c0,0 -41,25 -40,25" opacity="NaN" stroke="#0ff" fill="none"/>
  <path id="svg_6" strokeWidth = '10'  d="m157,327c0,0 32,-18 34,-20c2,-2 0,31 0,31c0,0 -33,16 -33,16" opacity="NaN" stroke="#0ff" fill="none"/>
  <path id="svg_7"  strokeWidth = '10' d="m165,388c0,0 28,-13 28,-13c0,0 -2,33 -2,33c0,0 -22,10 -22,10" opacity="NaN" stroke="#0ff" fill="none"/>
  <path id="svg_8" strokeWidth = '10' d="m169,443c0,0 26,-12 25,-11c-1,1 -25,11 -25,11z" opacity="NaN" stroke="#0ff" fill="none"/>
  <path id="svg_9" strokeWidth = '10'  d="m175,462c0,0 22,-11 22,-11c0,0 -1,16 -1,16c0,0 -18,9 -18,9" opacity="NaN" stroke="#0ff" fill="none"/>
  <path id="svg_10" strokeWidth = '10'  d="m881,209c0,0 4,210 4,210c0,0 -12,-1 -12,-1c0,0 -5,-288 -5,-288c0,0 27,-1 25,-1" opacity="NaN" stroke="#0ff" fill="none"/>
  <path id="svg_12" strokeWidth = '10' d="m889,149c0,0 10,339 10,339c0,0 -20,-2 -20,-2c0,0 -2,-42 -2,-42c0,0 12,0 13,-1" opacity="NaN" stroke="#0ff" fill="none"/>
  <ellipse stroke="#0ff" ry="13.5"  strokeWidth = '10' rx="19" id="svg_13" cy="36.5" cx="361" fill="none"/>
  <ellipse stroke="#0ff"  strokeWidth = '10' ry="13" rx="22" id="svg_14" cy="37" cx="471" fill="none"/>
  <ellipse stroke="#0ff"  strokeWidth = '10' ry="13.5" rx="26" id="svg_15" cy="38.5" cx="593" fill="none"/>
  <path id="svg_16"  strokeWidth = '10' d="m135.775,313.29749l3.43772,0l1.06228,-8.78524l1.06228,8.78524l3.43772,0l-2.78117,5.42952l1.06234,8.78524l-2.78117,-5.42966l-2.78117,5.42966l1.06234,-8.78524l-2.78117,-5.42952z" stroke="#0ff" fill="none"/>
  <path id="svg_17" strokeWidth = '10'  d="m131.78999,371.92233l3.81969,0l1.18031,-10.69508l1.18032,10.69508l3.81969,0l-3.09019,6.60985l1.18038,10.69508l-3.09019,-6.61003l-3.09019,6.61003l1.18038,-10.69508l-3.09019,-6.60985z" stroke="#0ff" fill="none"/>
  <path id="svg_18" strokeWidth = '10' d="m135.75001,429.09004l5.34756,0l1.65244,-14.13278l1.65244,14.13278l5.34756,0l-4.32626,8.73444l1.65252,14.13278l-4.32626,-8.73468l-4.32626,8.73468l1.65252,-14.13278l-4.32626,-8.73444z" stroke="#0ff" fill="none"/>
  <path id="svg_19" strokeWidth = '10' d="m140.73499,485.65417l4.58363,0l1.41638,-12.98689l1.41638,12.98689l4.58362,0l-3.70822,8.02625l1.41645,12.98689l-3.70823,-8.02647l-3.70823,8.02647l1.41645,-12.98689l-3.70823,-8.02625z" stroke="#0ff" fill="none"/>
  <path id="svg_20" strokeWidth = '10' d="m137.75001,198.25002l4.58362,0l1.41637,-14.13278l1.41638,14.13278l4.58362,0l-3.70822,8.73444l1.41645,14.13278l-3.70822,-8.73467l-3.70822,8.73467l1.41645,-14.13278l-3.70822,-8.73444z" stroke="#0ff" fill="none"/>
 </g>



 <g   
 transform="translate(210, 45) scale(0.4)"  
 cursor ='pointer'
 >
   <Link to="/theSun">
  <path id="svg_14" d="m73,245c47,-64 47,-64 47,-64l-47,64z" opacity="NaN" stroke="#0ff"  filter='url(#glow)' fill="none" strokeWidth = '6'/>
  <path id="svg_15" d="m110,182c86,0 87,0 87,0c0,0 47,61 47,61c0,0 -34,73 -34,73c0,0 -89,1 -89,1c0,0 -44,-73 -44,-73" opacity="NaN" stroke="#0ff"   filter='url(#glow)' fill="none"  strokeWidth = '6' />
  <path stroke="#0ff"  filter='url(#glow)' id="svg_16" d="m116,250c19.60318,-39.67742 20.63492,-41 20.63492,-41c0,0 42.30159,1.32258 44.36508,0" opacity="NaN" fill="none"  strokeWidth = '6' />
  <path stroke="#0ff" filter ='url(#glow)'  strokeWidth = '6'  id="svg_17" d="m177.67105,204c25.18421,38.0597 26.32895,39.32836 26.32895,39.32836c0,0 -19.46053,45.67164 -19.46053,45.67164c0,0 -45.78948,0 -45.78948,0c0,0 -21.75,-40.59702 -21.75,-40.59702" opacity="NaN" fill="none"/>
  <path id="svg_21" d="m144,236" opacity="NaN" stroke="#0ff" filter = 'url(#glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_22" d="m160,262" opacity="NaN" stroke="#0ff"  filter = 'url(#glow)' strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"filter = 'url(#glow)' id="svg_23" strokeWidth = '6'  d="m139.62712,224.03922c0,0 37.47458,-1.03922 37.47458,-1.03922c0,0 15.89831,19.7451 15.89831,19.7451c0,0 -15.89831,33.2549 -15.89831,33.2549c0,0 -36.33898,0 -36.33898,0c0,0 -14.76271,-24.94118 -14.76271,-24.94118c0,0 13.62712,-27.01961 13.62712,-27.01961l-0.00001,0.00001z" opacity="NaN" fill="none"/>
  <path id="svg_24" d="m145,217" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_25" d="m141,217c40,0 40,0 40,0c0,0 17,20 14,23" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path d="m99,232c0,0 0,-1 0,-2c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.61732,-1.07613 1,-2c0.5412,-1.30656 1.07612,-1.61731 2,-2c1.30656,-0.5412 2,-2 3,-2c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 1,-1 1,-2c0,-1 0.70711,-2.29289 0,-3c-0.70711,-0.70711 -1.29289,1.29289 -2,2c-0.70711,0.70711 -1.07612,0.61731 -2,1c-1.30656,0.5412 -2.4588,1.69344 -3,3c-0.38268,0.92387 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,2c-1,1 -2.29289,1.29289 -3,2c-0.70711,0.70711 -0.61732,1.07613 -1,2c-0.5412,1.30656 -1.29289,1.29289 -2,2c-0.70711,0.70711 0,2 1,2l1,-1l0,-1l1,0" id="svg_26" strokeWidth = '6'  stroke="#0ff"    filter='url(#glow)'  fill="none"/>
  <path d="m128,195c1,0 1,-1 2,-1c1,0 2,0 3,0c1,0 2,0 3,0c3,0 4,0 5,0c1,0 2.07613,-0.38269 3,0c1.30656,0.5412 2,1 4,1c1,0 1.69344,0.4588 3,1c0.92387,0.38269 2,1 4,1c1,0 3,0 4,0c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 1.70711,-1.29289 1,-2c-0.70711,-0.70711 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -3.02582,0.32036 -5,0c-3.12144,-0.50655 -4,-1 -5,-1c-1,0 -2,0 -3,0c-1,0 -1,1 -2,2l0,1" id="svg_27" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6'  fill="none"/>
  <path d="m192,196c0,0 0.29289,0.29289 1,1c0.70711,0.70711 1,1 2,2c1,1 2,1 2,2c0,1 0.29289,1.29289 1,2c0.70711,0.70711 1,1 2,1c1,0 1.29289,0.29289 2,1c0.70711,0.70711 1.29289,1.29289 2,2c0.70711,0.70711 1.4588,0.69344 2,2c0.38269,0.92387 2.4588,1.69344 3,3c0.38269,0.92387 0,2 -1,2c-1,0 -1,-1 -2,-1c-1,0 -2,-1 -3,-1c-1,0 -2.29289,-1.29289 -3,-2c-0.70711,-0.70711 0,-2 0,-3c0,-1 -0.29289,-1.29289 -1,-2c-0.70711,-0.70711 -1.07613,-0.61731 -2,-1c-1.30656,-0.5412 -2,-1 -3,-2c-1,-1 -2,-1 -3,-1l-1,0" id="svg_28" stroke="#0ff"   filter='url(#glow)' strokeWidth = '6' fill="none"/>
  <path d="m215,241c0,0 0.38269,1.07613 0,2c-0.5412,1.30656 -1,2 -1,4c0,1 -0.4588,1.69344 -1,3c-0.38269,0.92387 0.70711,3.29289 0,4c-0.70711,0.70711 -1,1 -1,2c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 0,2 0,3c0,1 -1,2 -1,3c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1.29289,1.29291 -2,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-1.41422,1.41422 -0.29289,3.29291 -1,4c-0.70711,0.70709 -1.70711,0.70709 -1,0c0.70711,-0.70709 1.29289,-1.29291 2,-2c0.70711,-0.70709 1.29289,-0.29291 2,-1c0.70711,-0.70709 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1.4588,-1.69345 2,-3c0.38269,-0.92389 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1,-2 1,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 0,-2 0,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 2,0 3,0c1,0 2,0 2,1c0,1 -0.29289,1.29289 -1,2c-0.70711,0.70711 -0.69344,1.4588 -2,2c-0.92387,0.38269 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,1c-1,0 -0.61731,1.07613 -1,2c-0.5412,1.30655 -0.71022,2.04291 -1,3c-1.04483,3.45084 -2.4588,3.69345 -3,5c-0.38269,0.92389 -0.29289,1.29291 -1,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1,1 -1,2l-1,0" id="svg_29" strokeWidth = '6' stroke="#0ff"  filter='url(#glow)'  fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_33" d="m94,193c22,-26 21,-27 21,-27c0,0 97,0 97,0c0,0 25,31 25,31" opacity="NaN"    strokeWidth = '6' fill="none"/>
  <path stroke="#0ff" filter = 'url(glow)' id="svg_34" d="m99,312c19,24 19,24 19,24c0,0 100,0 102,-2" opacity="NaN" strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_35" d="m220,333c12,-23 12,-23 12,-23" opacity="NaN"  strokeWidth = '6' fill="none"/>
  <path id="svg_39" strokeWidth = '6'  d="m166.00001,371.13889c98.51232,-0.30556 97.51724,-0.30556 97.51724,-0.30556c0,0 17.91133,9.16667 17.91133,9.16667c0,0 58.70936,-0.30556 58.70936,-0.30556c0,0 20.89655,-7.94444 20.89655,-7.94444c-4,0 410.96552,-2.75 410.96552,-2.75" opacity="NaN" fill="none" stroke="#0ff" filter = 'url(glow)' />
  <path id="svg_40" strokeWidth = '6'  d="m748,357c37,-23 37,-23 37,-23c0,0 2,-153 2,-153c0,0 -31,-25 -31,-25c0,0 -492,6 -492,6" opacity="NaN" stroke="#0ff"  filter= 'url(glow)' fill="none"/>
  <path id="svg_41" strokeWidth = '6'  d="m227,170c30,0 30,0 30,0c0,0 1,39 1,39c0,0 63,0 63,0c0,0 0,-39 0,-39" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_42" strokeWidth = '6'  d="m320,199c402,-6 402,-5 402,-6c0,-1 -804,12 -402,6z" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  {/* <path id="svg_43" strokeWidth = '6'  d="m1121,455c0,41 -1,83 0,41c1,-42 0,-82 0,-41z" opacity="NaN" stroke="#0ff" filter = 'url(glow)'  fill="none"/> */}
  <path id="svg_44" strokeWidth = '6'  d="m722,194l-1,-39l46,1l1,35" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_38" strokeWidth = '6'  d="m137,353.6c102.6899,-1.6 102.6899,-1.6 102.6899,-1.6c0,0 25.67248,8 25.67248,8c0,0 485.63766,-3.6 485.63766,-3.6" opacity="NaN" fill="none" filter = 'url(glow)' stroke="#0ff"/>
  <path id="svg_36" strokeWidth = '6'  d="m199,345c33,0 34,1 34,1c0,0 12,-18 12,-18" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' fill="none"/>
  <path id="svg_46" strokeWidth = '6'  d="m301,322" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' fill="none"/>
  <path fill="none"  strokeWidth ='6' stroke="#0ff" filter = 'url(glow)' opacity="NaN" d="m263,220l1,47l14,8l0,17l-14,8l0,29l-14,2l0,15l16,5l479,-6l31,-19l1,-117l-514,11z" id="svg_1"/>
  <rect fill="green" strokeWidth ='6'  stroke="#0ff" filter = 'url(glowWrong)' x="263" y="168" width="53" height="35" id="svg_2"/>   
  <g 
  transform = 'translate(40 , 0) scale(1.5)'
  >
    
    <text fontSize="24" 
    fontWeight="bold" 
    fill="#0ff" 
    filter = 'url(glow2)' 
    x="270" 
    y="190" 
    id="svg_3"
    > The Sun </text>
  </g>
    </Link>
 </g>


  <g   
 transform="translate(210, 150) scale(0.4)"  
 cursor= 'pointer'
 >
   <Link to = "/thePlanets">
  <path id="svg_14" d="m73,245c47,-64 47,-64 47,-64l-47,64z" opacity="NaN" stroke="#0ff"  filter='url(#glow)' fill="none" strokeWidth = '6'/>
  <path id="svg_15" d="m110,182c86,0 87,0 87,0c0,0 47,61 47,61c0,0 -34,73 -34,73c0,0 -89,1 -89,1c0,0 -44,-73 -44,-73" opacity="NaN" stroke="#0ff"   filter='url(#glow)' fill="none"  strokeWidth = '6' />
  <path stroke="#0ff"  filter='url(#glow)' id="svg_16" d="m116,250c19.60318,-39.67742 20.63492,-41 20.63492,-41c0,0 42.30159,1.32258 44.36508,0" opacity="NaN" fill="none"  strokeWidth = '6' />
  <path stroke="#0ff" filter ='url(glow)'  strokeWidth = '6'  id="svg_17" d="m177.67105,204c25.18421,38.0597 26.32895,39.32836 26.32895,39.32836c0,0 -19.46053,45.67164 -19.46053,45.67164c0,0 -45.78948,0 -45.78948,0c0,0 -21.75,-40.59702 -21.75,-40.59702" opacity="NaN" fill="none"/>
  <path id="svg_21" d="m144,236" opacity="NaN" stroke="#0ff" filter = 'url(glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_22" d="m160,262" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"filter = 'url(glow)' id="svg_23" strokeWidth = '6'  d="m139.62712,224.03922c0,0 37.47458,-1.03922 37.47458,-1.03922c0,0 15.89831,19.7451 15.89831,19.7451c0,0 -15.89831,33.2549 -15.89831,33.2549c0,0 -36.33898,0 -36.33898,0c0,0 -14.76271,-24.94118 -14.76271,-24.94118c0,0 13.62712,-27.01961 13.62712,-27.01961l-0.00001,0.00001z" opacity="NaN" fill="none"/>
  <path id="svg_24" d="m145,217" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_25" d="m141,217c40,0 40,0 40,0c0,0 17,20 14,23" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path d="m99,232c0,0 0,-1 0,-2c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.61732,-1.07613 1,-2c0.5412,-1.30656 1.07612,-1.61731 2,-2c1.30656,-0.5412 2,-2 3,-2c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 1,-1 1,-2c0,-1 0.70711,-2.29289 0,-3c-0.70711,-0.70711 -1.29289,1.29289 -2,2c-0.70711,0.70711 -1.07612,0.61731 -2,1c-1.30656,0.5412 -2.4588,1.69344 -3,3c-0.38268,0.92387 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,2c-1,1 -2.29289,1.29289 -3,2c-0.70711,0.70711 -0.61732,1.07613 -1,2c-0.5412,1.30656 -1.29289,1.29289 -2,2c-0.70711,0.70711 0,2 1,2l1,-1l0,-1l1,0" id="svg_26" strokeWidth = '6'  stroke="#0ff"    filter='url(#glow)'  fill="none"/>
  <path d="m128,195c1,0 1,-1 2,-1c1,0 2,0 3,0c1,0 2,0 3,0c3,0 4,0 5,0c1,0 2.07613,-0.38269 3,0c1.30656,0.5412 2,1 4,1c1,0 1.69344,0.4588 3,1c0.92387,0.38269 2,1 4,1c1,0 3,0 4,0c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 1.70711,-1.29289 1,-2c-0.70711,-0.70711 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -3.02582,0.32036 -5,0c-3.12144,-0.50655 -4,-1 -5,-1c-1,0 -2,0 -3,0c-1,0 -1,1 -2,2l0,1" id="svg_27" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6'  fill="none"/>
  <path d="m192,196c0,0 0.29289,0.29289 1,1c0.70711,0.70711 1,1 2,2c1,1 2,1 2,2c0,1 0.29289,1.29289 1,2c0.70711,0.70711 1,1 2,1c1,0 1.29289,0.29289 2,1c0.70711,0.70711 1.29289,1.29289 2,2c0.70711,0.70711 1.4588,0.69344 2,2c0.38269,0.92387 2.4588,1.69344 3,3c0.38269,0.92387 0,2 -1,2c-1,0 -1,-1 -2,-1c-1,0 -2,-1 -3,-1c-1,0 -2.29289,-1.29289 -3,-2c-0.70711,-0.70711 0,-2 0,-3c0,-1 -0.29289,-1.29289 -1,-2c-0.70711,-0.70711 -1.07613,-0.61731 -2,-1c-1.30656,-0.5412 -2,-1 -3,-2c-1,-1 -2,-1 -3,-1l-1,0" id="svg_28" stroke="#0ff"   filter='url(#glow)' strokeWidth = '6' fill="none"/>
  <path d="m215,241c0,0 0.38269,1.07613 0,2c-0.5412,1.30656 -1,2 -1,4c0,1 -0.4588,1.69344 -1,3c-0.38269,0.92387 0.70711,3.29289 0,4c-0.70711,0.70711 -1,1 -1,2c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 0,2 0,3c0,1 -1,2 -1,3c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1.29289,1.29291 -2,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-1.41422,1.41422 -0.29289,3.29291 -1,4c-0.70711,0.70709 -1.70711,0.70709 -1,0c0.70711,-0.70709 1.29289,-1.29291 2,-2c0.70711,-0.70709 1.29289,-0.29291 2,-1c0.70711,-0.70709 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1.4588,-1.69345 2,-3c0.38269,-0.92389 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1,-2 1,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 0,-2 0,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 2,0 3,0c1,0 2,0 2,1c0,1 -0.29289,1.29289 -1,2c-0.70711,0.70711 -0.69344,1.4588 -2,2c-0.92387,0.38269 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,1c-1,0 -0.61731,1.07613 -1,2c-0.5412,1.30655 -0.71022,2.04291 -1,3c-1.04483,3.45084 -2.4588,3.69345 -3,5c-0.38269,0.92389 -0.29289,1.29291 -1,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1,1 -1,2l-1,0" id="svg_29" strokeWidth = '6' stroke="#0ff"  filter='url(#glow)'  fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_33" d="m94,193c22,-26 21,-27 21,-27c0,0 97,0 97,0c0,0 25,31 25,31" opacity="NaN"    strokeWidth = '6' fill="none"/>
  <path stroke="#0ff" filter = 'url(glow)' id="svg_34" d="m99,312c19,24 19,24 19,24c0,0 100,0 102,-2" opacity="NaN" strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_35" d="m220,333c12,-23 12,-23 12,-23" opacity="NaN"  strokeWidth = '6' fill="none"/>
  <path id="svg_39" strokeWidth = '6'  d="m166.00001,371.13889c98.51232,-0.30556 97.51724,-0.30556 97.51724,-0.30556c0,0 17.91133,9.16667 17.91133,9.16667c0,0 58.70936,-0.30556 58.70936,-0.30556c0,0 20.89655,-7.94444 20.89655,-7.94444c-4,0 410.96552,-2.75 410.96552,-2.75" opacity="NaN" fill="none" stroke="#0ff" filter = 'url(glow)' />
  <path id="svg_40" strokeWidth = '6'  d="m748,357c37,-23 37,-23 37,-23c0,0 2,-153 2,-153c0,0 -31,-25 -31,-25c0,0 -492,6 -492,6" opacity="NaN" stroke="#0ff"  filter= 'url(glow)' fill="none"/>
  <path id="svg_41" strokeWidth = '6'  d="m227,170c30,0 30,0 30,0c0,0 1,39 1,39c0,0 63,0 63,0c0,0 0,-39 0,-39" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_42" strokeWidth = '6'  d="m320,199c402,-6 402,-5 402,-6c0,-1 -804,12 -402,6z" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  {/* <path id="svg_43" strokeWidth = '6'  d="m1121,455c0,41 -1,83 0,41c1,-42 0,-82 0,-41z" opacity="NaN" stroke="green" filter = 'url(glow)'  fill="none"/> */}
  <path id="svg_44" strokeWidth = '6'  d="m722,194l-1,-39l46,1l1,35" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_38" strokeWidth = '6'  d="m137,353.6c102.6899,-1.6 102.6899,-1.6 102.6899,-1.6c0,0 25.67248,8 25.67248,8c0,0 485.63766,-3.6 485.63766,-3.6" opacity="NaN" fill="none" filter = 'url(glow)' stroke="#0ff"/>
  <path id="svg_36" strokeWidth = '6'  d="m199,345c33,0 34,1 34,1c0,0 12,-18 12,-18" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' fill="none"/>
  <path id="svg_46" strokeWidth = '6'  d="m301,322" opacity="NaN" stroke="green"   filter = 'url(glow)' fill="none"/>
  <path fill="none"  strokeWidth ='6' stroke="#0ff" filter = 'url(glow)' opacity="NaN" d="m263,220l1,47l14,8l0,17l-14,8l0,29l-14,2l0,15l16,5l479,-6l31,-19l1,-117l-514,11z" id="svg_1"/>
  <rect fill="#00FF0D" strokeWidth ='6'  stroke="#0ff" filter = 'url(glow)' x="263" y="168" width="53" height="35" id="svg_2"/>   
  <g 
  transform = 'translate(40 , 0) scale(1.5)'
  >
    <text fontSize="24" 
    fontWeight="bold" 
    fill="#0ff" 
    filter = 'url(glow2)' 
    x="270" 
    y="190" 
    id="svg_3"
    >The Planets </text>  
  </g>
  </Link>
 </g>


  <g   
 transform="translate(210, 250) scale(0.4)"  
 cursor= 'pointer'
 >
   <Link to = "/theMoon">
  <path id="svg_14" d="m73,245c47,-64 47,-64 47,-64l-47,64z" opacity="NaN" stroke="#0ff"  filter='url(#glow)' fill="none" strokeWidth = '6'/>
  <path id="svg_15" d="m110,182c86,0 87,0 87,0c0,0 47,61 47,61c0,0 -34,73 -34,73c0,0 -89,1 -89,1c0,0 -44,-73 -44,-73" opacity="NaN" stroke="#0ff"   filter='url(#glow)' fill="none"  strokeWidth = '6' />
  <path stroke="#0ff"  filter='url(#glow)' id="svg_16" d="m116,250c19.60318,-39.67742 20.63492,-41 20.63492,-41c0,0 42.30159,1.32258 44.36508,0" opacity="NaN" fill="none"  strokeWidth = '6' />
  <path stroke="#0ff" filter ='url(glow)'  strokeWidth = '6'  id="svg_17" d="m177.67105,204c25.18421,38.0597 26.32895,39.32836 26.32895,39.32836c0,0 -19.46053,45.67164 -19.46053,45.67164c0,0 -45.78948,0 -45.78948,0c0,0 -21.75,-40.59702 -21.75,-40.59702" opacity="NaN" fill="none"/>
  <path id="svg_21" d="m144,236" opacity="NaN" stroke="#0ff" filter = 'url(glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_22" d="m160,262" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"filter = 'url(glow)' id="svg_23" strokeWidth = '6'  d="m139.62712,224.03922c0,0 37.47458,-1.03922 37.47458,-1.03922c0,0 15.89831,19.7451 15.89831,19.7451c0,0 -15.89831,33.2549 -15.89831,33.2549c0,0 -36.33898,0 -36.33898,0c0,0 -14.76271,-24.94118 -14.76271,-24.94118c0,0 13.62712,-27.01961 13.62712,-27.01961l-0.00001,0.00001z" opacity="NaN" fill="none"/>
  <path id="svg_24" d="m145,217" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_25" d="m141,217c40,0 40,0 40,0c0,0 17,20 14,23" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path d="m99,232c0,0 0,-1 0,-2c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.61732,-1.07613 1,-2c0.5412,-1.30656 1.07612,-1.61731 2,-2c1.30656,-0.5412 2,-2 3,-2c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 1,-1 1,-2c0,-1 0.70711,-2.29289 0,-3c-0.70711,-0.70711 -1.29289,1.29289 -2,2c-0.70711,0.70711 -1.07612,0.61731 -2,1c-1.30656,0.5412 -2.4588,1.69344 -3,3c-0.38268,0.92387 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,2c-1,1 -2.29289,1.29289 -3,2c-0.70711,0.70711 -0.61732,1.07613 -1,2c-0.5412,1.30656 -1.29289,1.29289 -2,2c-0.70711,0.70711 0,2 1,2l1,-1l0,-1l1,0" id="svg_26" strokeWidth = '6'  stroke="#0ff"    filter='url(#glow)'  fill="none"/>
  <path d="m128,195c1,0 1,-1 2,-1c1,0 2,0 3,0c1,0 2,0 3,0c3,0 4,0 5,0c1,0 2.07613,-0.38269 3,0c1.30656,0.5412 2,1 4,1c1,0 1.69344,0.4588 3,1c0.92387,0.38269 2,1 4,1c1,0 3,0 4,0c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 1.70711,-1.29289 1,-2c-0.70711,-0.70711 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -3.02582,0.32036 -5,0c-3.12144,-0.50655 -4,-1 -5,-1c-1,0 -2,0 -3,0c-1,0 -1,1 -2,2l0,1" id="svg_27" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6'  fill="none"/>
  <path d="m192,196c0,0 0.29289,0.29289 1,1c0.70711,0.70711 1,1 2,2c1,1 2,1 2,2c0,1 0.29289,1.29289 1,2c0.70711,0.70711 1,1 2,1c1,0 1.29289,0.29289 2,1c0.70711,0.70711 1.29289,1.29289 2,2c0.70711,0.70711 1.4588,0.69344 2,2c0.38269,0.92387 2.4588,1.69344 3,3c0.38269,0.92387 0,2 -1,2c-1,0 -1,-1 -2,-1c-1,0 -2,-1 -3,-1c-1,0 -2.29289,-1.29289 -3,-2c-0.70711,-0.70711 0,-2 0,-3c0,-1 -0.29289,-1.29289 -1,-2c-0.70711,-0.70711 -1.07613,-0.61731 -2,-1c-1.30656,-0.5412 -2,-1 -3,-2c-1,-1 -2,-1 -3,-1l-1,0" id="svg_28" stroke="#0ff"   filter='url(#glow)' strokeWidth = '6' fill="none"/>
  <path d="m215,241c0,0 0.38269,1.07613 0,2c-0.5412,1.30656 -1,2 -1,4c0,1 -0.4588,1.69344 -1,3c-0.38269,0.92387 0.70711,3.29289 0,4c-0.70711,0.70711 -1,1 -1,2c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 0,2 0,3c0,1 -1,2 -1,3c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1.29289,1.29291 -2,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-1.41422,1.41422 -0.29289,3.29291 -1,4c-0.70711,0.70709 -1.70711,0.70709 -1,0c0.70711,-0.70709 1.29289,-1.29291 2,-2c0.70711,-0.70709 1.29289,-0.29291 2,-1c0.70711,-0.70709 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1.4588,-1.69345 2,-3c0.38269,-0.92389 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1,-2 1,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 0,-2 0,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 2,0 3,0c1,0 2,0 2,1c0,1 -0.29289,1.29289 -1,2c-0.70711,0.70711 -0.69344,1.4588 -2,2c-0.92387,0.38269 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,1c-1,0 -0.61731,1.07613 -1,2c-0.5412,1.30655 -0.71022,2.04291 -1,3c-1.04483,3.45084 -2.4588,3.69345 -3,5c-0.38269,0.92389 -0.29289,1.29291 -1,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1,1 -1,2l-1,0" id="svg_29" strokeWidth = '6' stroke="#0ff"  filter='url(#glow)'  fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_33" d="m94,193c22,-26 21,-27 21,-27c0,0 97,0 97,0c0,0 25,31 25,31" opacity="NaN"    strokeWidth = '6' fill="none"/>
  <path stroke="#0ff" filter = 'url(glow)' id="svg_34" d="m99,312c19,24 19,24 19,24c0,0 100,0 102,-2" opacity="NaN" strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_35" d="m220,333c12,-23 12,-23 12,-23" opacity="NaN"  strokeWidth = '6' fill="none"/>
  <path id="svg_39" strokeWidth = '6'  d="m166.00001,371.13889c98.51232,-0.30556 97.51724,-0.30556 97.51724,-0.30556c0,0 17.91133,9.16667 17.91133,9.16667c0,0 58.70936,-0.30556 58.70936,-0.30556c0,0 20.89655,-7.94444 20.89655,-7.94444c-4,0 410.96552,-2.75 410.96552,-2.75" opacity="NaN" fill="none" stroke="#0ff" filter = 'url(glow)' />
  <path id="svg_40" strokeWidth = '6'  d="m748,357c37,-23 37,-23 37,-23c0,0 2,-153 2,-153c0,0 -31,-25 -31,-25c0,0 -492,6 -492,6" opacity="NaN" stroke="#0ff"  filter= 'url(glow)' fill="none"/>
  <path id="svg_41" strokeWidth = '6'  d="m227,170c30,0 30,0 30,0c0,0 1,39 1,39c0,0 63,0 63,0c0,0 0,-39 0,-39" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_42" strokeWidth = '6'  d="m320,199c402,-6 402,-5 402,-6c0,-1 -804,12 -402,6z" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  {/* <path id="svg_43" strokeWidth = '6'  d="m1121,455c0,41 -1,83 0,41c1,-42 0,-82 0,-41z" opacity="NaN" stroke="green" filter = 'url(glow)'  fill="none"/> */}
  <path id="svg_44" strokeWidth = '6'  d="m722,194l-1,-39l46,1l1,35" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_38" strokeWidth = '6'  d="m137,353.6c102.6899,-1.6 102.6899,-1.6 102.6899,-1.6c0,0 25.67248,8 25.67248,8c0,0 485.63766,-3.6 485.63766,-3.6" opacity="NaN" fill="none" filter = 'url(glow)' stroke="#0ff"/>
  <path id="svg_36" strokeWidth = '6'  d="m199,345c33,0 34,1 34,1c0,0 12,-18 12,-18" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' fill="none"/>
  <path id="svg_46" strokeWidth = '6'  d="m301,322" opacity="NaN" stroke="green"   filter = 'url(glow)' fill="none"/>
  <path fill="none"  strokeWidth ='6' stroke="#0ff" filter = 'url(glow)' opacity="NaN" d="m263,220l1,47l14,8l0,17l-14,8l0,29l-14,2l0,15l16,5l479,-6l31,-19l1,-117l-514,11z" id="svg_1"/>
  <rect fill="#00FF0D" strokeWidth ='6'  stroke="#0ff" filter = 'url(glowCorrect)' x="263" y="168" width="53" height="35" id="svg_2"/>   
  <g 
  transform = 'translate(-20 , 0) scale(1.5)'
  >
    <text fontSize="24" 
    fontWeight="bold" 
    fill="#0ff" 
    filter = 'url(glow2)' 
    x="270" 
    y="190" 
    id="svg_3"
    >  The Moon</text>  
  </g>
  </Link>
 </g>

   <g   
 transform="translate(210, 350) scale(0.4)"  
 cursor= 'pointer'
 >
   <Link to = "/theStars">
  <path id="svg_14" d="m73,245c47,-64 47,-64 47,-64l-47,64z" opacity="NaN" stroke="#0ff"  filter='url(#glow)' fill="none" strokeWidth = '6'/>
  <path id="svg_15" d="m110,182c86,0 87,0 87,0c0,0 47,61 47,61c0,0 -34,73 -34,73c0,0 -89,1 -89,1c0,0 -44,-73 -44,-73" opacity="NaN" stroke="#0ff"   filter='url(#glow)' fill="none"  strokeWidth = '6' />
  <path stroke="#0ff"  filter='url(#glow)' id="svg_16" d="m116,250c19.60318,-39.67742 20.63492,-41 20.63492,-41c0,0 42.30159,1.32258 44.36508,0" opacity="NaN" fill="none"  strokeWidth = '6' />
  <path stroke="#0ff" filter ='url(glow)'  strokeWidth = '6'  id="svg_17" d="m177.67105,204c25.18421,38.0597 26.32895,39.32836 26.32895,39.32836c0,0 -19.46053,45.67164 -19.46053,45.67164c0,0 -45.78948,0 -45.78948,0c0,0 -21.75,-40.59702 -21.75,-40.59702" opacity="NaN" fill="none"/>
  <path id="svg_21" d="m144,236" opacity="NaN" stroke="#0ff" filter = 'url(glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_22" d="m160,262" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"filter = 'url(glow)' id="svg_23" strokeWidth = '6'  d="m139.62712,224.03922c0,0 37.47458,-1.03922 37.47458,-1.03922c0,0 15.89831,19.7451 15.89831,19.7451c0,0 -15.89831,33.2549 -15.89831,33.2549c0,0 -36.33898,0 -36.33898,0c0,0 -14.76271,-24.94118 -14.76271,-24.94118c0,0 13.62712,-27.01961 13.62712,-27.01961l-0.00001,0.00001z" opacity="NaN" fill="none"/>
  <path id="svg_24" d="m145,217" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_25" d="m141,217c40,0 40,0 40,0c0,0 17,20 14,23" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path d="m99,232c0,0 0,-1 0,-2c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.61732,-1.07613 1,-2c0.5412,-1.30656 1.07612,-1.61731 2,-2c1.30656,-0.5412 2,-2 3,-2c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 1,-1 1,-2c0,-1 0.70711,-2.29289 0,-3c-0.70711,-0.70711 -1.29289,1.29289 -2,2c-0.70711,0.70711 -1.07612,0.61731 -2,1c-1.30656,0.5412 -2.4588,1.69344 -3,3c-0.38268,0.92387 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,2c-1,1 -2.29289,1.29289 -3,2c-0.70711,0.70711 -0.61732,1.07613 -1,2c-0.5412,1.30656 -1.29289,1.29289 -2,2c-0.70711,0.70711 0,2 1,2l1,-1l0,-1l1,0" id="svg_26" strokeWidth = '6'  stroke="#0ff"    filter='url(#glow)'  fill="none"/>
  <path d="m128,195c1,0 1,-1 2,-1c1,0 2,0 3,0c1,0 2,0 3,0c3,0 4,0 5,0c1,0 2.07613,-0.38269 3,0c1.30656,0.5412 2,1 4,1c1,0 1.69344,0.4588 3,1c0.92387,0.38269 2,1 4,1c1,0 3,0 4,0c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 1.70711,-1.29289 1,-2c-0.70711,-0.70711 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -3.02582,0.32036 -5,0c-3.12144,-0.50655 -4,-1 -5,-1c-1,0 -2,0 -3,0c-1,0 -1,1 -2,2l0,1" id="svg_27" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6'  fill="none"/>
  <path d="m192,196c0,0 0.29289,0.29289 1,1c0.70711,0.70711 1,1 2,2c1,1 2,1 2,2c0,1 0.29289,1.29289 1,2c0.70711,0.70711 1,1 2,1c1,0 1.29289,0.29289 2,1c0.70711,0.70711 1.29289,1.29289 2,2c0.70711,0.70711 1.4588,0.69344 2,2c0.38269,0.92387 2.4588,1.69344 3,3c0.38269,0.92387 0,2 -1,2c-1,0 -1,-1 -2,-1c-1,0 -2,-1 -3,-1c-1,0 -2.29289,-1.29289 -3,-2c-0.70711,-0.70711 0,-2 0,-3c0,-1 -0.29289,-1.29289 -1,-2c-0.70711,-0.70711 -1.07613,-0.61731 -2,-1c-1.30656,-0.5412 -2,-1 -3,-2c-1,-1 -2,-1 -3,-1l-1,0" id="svg_28" stroke="#0ff"   filter='url(#glow)' strokeWidth = '6' fill="none"/>
  <path d="m215,241c0,0 0.38269,1.07613 0,2c-0.5412,1.30656 -1,2 -1,4c0,1 -0.4588,1.69344 -1,3c-0.38269,0.92387 0.70711,3.29289 0,4c-0.70711,0.70711 -1,1 -1,2c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 0,2 0,3c0,1 -1,2 -1,3c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1.29289,1.29291 -2,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-1.41422,1.41422 -0.29289,3.29291 -1,4c-0.70711,0.70709 -1.70711,0.70709 -1,0c0.70711,-0.70709 1.29289,-1.29291 2,-2c0.70711,-0.70709 1.29289,-0.29291 2,-1c0.70711,-0.70709 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1.4588,-1.69345 2,-3c0.38269,-0.92389 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1,-2 1,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 0,-2 0,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 2,0 3,0c1,0 2,0 2,1c0,1 -0.29289,1.29289 -1,2c-0.70711,0.70711 -0.69344,1.4588 -2,2c-0.92387,0.38269 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,1c-1,0 -0.61731,1.07613 -1,2c-0.5412,1.30655 -0.71022,2.04291 -1,3c-1.04483,3.45084 -2.4588,3.69345 -3,5c-0.38269,0.92389 -0.29289,1.29291 -1,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1,1 -1,2l-1,0" id="svg_29" strokeWidth = '6' stroke="#0ff"  filter='url(#glow)'  fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_33" d="m94,193c22,-26 21,-27 21,-27c0,0 97,0 97,0c0,0 25,31 25,31" opacity="NaN"    strokeWidth = '6' fill="none"/>
  <path stroke="#0ff" filter = 'url(glow)' id="svg_34" d="m99,312c19,24 19,24 19,24c0,0 100,0 102,-2" opacity="NaN" strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_35" d="m220,333c12,-23 12,-23 12,-23" opacity="NaN"  strokeWidth = '6' fill="none"/>
  <path id="svg_39" strokeWidth = '6'  d="m166.00001,371.13889c98.51232,-0.30556 97.51724,-0.30556 97.51724,-0.30556c0,0 17.91133,9.16667 17.91133,9.16667c0,0 58.70936,-0.30556 58.70936,-0.30556c0,0 20.89655,-7.94444 20.89655,-7.94444c-4,0 410.96552,-2.75 410.96552,-2.75" opacity="NaN" fill="none" stroke="#0ff" filter = 'url(glow)' />
  <path id="svg_40" strokeWidth = '6'  d="m748,357c37,-23 37,-23 37,-23c0,0 2,-153 2,-153c0,0 -31,-25 -31,-25c0,0 -492,6 -492,6" opacity="NaN" stroke="#0ff"  filter= 'url(glow)' fill="none"/>
  <path id="svg_41" strokeWidth = '6'  d="m227,170c30,0 30,0 30,0c0,0 1,39 1,39c0,0 63,0 63,0c0,0 0,-39 0,-39" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_42" strokeWidth = '6'  d="m320,199c402,-6 402,-5 402,-6c0,-1 -804,12 -402,6z" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  {/* <path id="svg_43" strokeWidth = '6'  d="m1121,455c0,41 -1,83 0,41c1,-42 0,-82 0,-41z" opacity="NaN" stroke="green" filter = 'url(glow)'  fill="none"/> */}
  <path id="svg_44" strokeWidth = '6'  d="m722,194l-1,-39l46,1l1,35" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_38" strokeWidth = '6'  d="m137,353.6c102.6899,-1.6 102.6899,-1.6 102.6899,-1.6c0,0 25.67248,8 25.67248,8c0,0 485.63766,-3.6 485.63766,-3.6" opacity="NaN" fill="none" filter = 'url(glow)' stroke="#0ff"/>
  <path id="svg_36" strokeWidth = '6'  d="m199,345c33,0 34,1 34,1c0,0 12,-18 12,-18" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' fill="none"/>
  <path id="svg_46" strokeWidth = '6'  d="m301,322" opacity="NaN" stroke="green"   filter = 'url(glow)' fill="none"/>
  <path fill="none"  strokeWidth ='6' stroke="#0ff" filter = 'url(glow)' opacity="NaN" d="m263,220l1,47l14,8l0,17l-14,8l0,29l-14,2l0,15l16,5l479,-6l31,-19l1,-117l-514,11z" id="svg_1"/>
  <rect fill="#00FF0D" strokeWidth ='6'  stroke="#0ff" filter = 'url(glow)' x="263" y="168" width="53" height="35" id="svg_2"/>   
  <g 
  transform = 'translate(40 , 0) scale(1.5)'
  >
    <text fontSize="24" 
    fontWeight="bold" 
    fill="#0ff" 
    filter = 'url(glow2)' 
    x="270" 
    y="190" 
    id="svg_3"
    >The Stars</text>  
  </g>
  </Link>
 </g>


   <g   
 transform="translate(530, 45) scale(0.4)"  
 cursor= 'pointer'
 >
   <Link to = "/theGalaxies">
  <path id="svg_14" d="m73,245c47,-64 47,-64 47,-64l-47,64z" opacity="NaN" stroke="#0ff"  filter='url(#glow)' fill="none" strokeWidth = '6'/>
  <path id="svg_15" d="m110,182c86,0 87,0 87,0c0,0 47,61 47,61c0,0 -34,73 -34,73c0,0 -89,1 -89,1c0,0 -44,-73 -44,-73" opacity="NaN" stroke="#0ff"   filter='url(#glow)' fill="none"  strokeWidth = '6' />
  <path stroke="#0ff"  filter='url(#glow)' id="svg_16" d="m116,250c19.60318,-39.67742 20.63492,-41 20.63492,-41c0,0 42.30159,1.32258 44.36508,0" opacity="NaN" fill="none"  strokeWidth = '6' />
  <path stroke="#0ff" filter ='url(glow)'  strokeWidth = '6'  id="svg_17" d="m177.67105,204c25.18421,38.0597 26.32895,39.32836 26.32895,39.32836c0,0 -19.46053,45.67164 -19.46053,45.67164c0,0 -45.78948,0 -45.78948,0c0,0 -21.75,-40.59702 -21.75,-40.59702" opacity="NaN" fill="none"/>
  <path id="svg_21" d="m144,236" opacity="NaN" stroke="#0ff" filter = 'url(glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_22" d="m160,262" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"filter = 'url(glow)' id="svg_23" strokeWidth = '6'  d="m139.62712,224.03922c0,0 37.47458,-1.03922 37.47458,-1.03922c0,0 15.89831,19.7451 15.89831,19.7451c0,0 -15.89831,33.2549 -15.89831,33.2549c0,0 -36.33898,0 -36.33898,0c0,0 -14.76271,-24.94118 -14.76271,-24.94118c0,0 13.62712,-27.01961 13.62712,-27.01961l-0.00001,0.00001z" opacity="NaN" fill="none"/>
  <path id="svg_24" d="m145,217" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_25" d="m141,217c40,0 40,0 40,0c0,0 17,20 14,23" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path d="m99,232c0,0 0,-1 0,-2c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.61732,-1.07613 1,-2c0.5412,-1.30656 1.07612,-1.61731 2,-2c1.30656,-0.5412 2,-2 3,-2c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 1,-1 1,-2c0,-1 0.70711,-2.29289 0,-3c-0.70711,-0.70711 -1.29289,1.29289 -2,2c-0.70711,0.70711 -1.07612,0.61731 -2,1c-1.30656,0.5412 -2.4588,1.69344 -3,3c-0.38268,0.92387 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,2c-1,1 -2.29289,1.29289 -3,2c-0.70711,0.70711 -0.61732,1.07613 -1,2c-0.5412,1.30656 -1.29289,1.29289 -2,2c-0.70711,0.70711 0,2 1,2l1,-1l0,-1l1,0" id="svg_26" strokeWidth = '6'  stroke="#0ff"    filter='url(#glow)'  fill="none"/>
  <path d="m128,195c1,0 1,-1 2,-1c1,0 2,0 3,0c1,0 2,0 3,0c3,0 4,0 5,0c1,0 2.07613,-0.38269 3,0c1.30656,0.5412 2,1 4,1c1,0 1.69344,0.4588 3,1c0.92387,0.38269 2,1 4,1c1,0 3,0 4,0c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 1.70711,-1.29289 1,-2c-0.70711,-0.70711 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -3.02582,0.32036 -5,0c-3.12144,-0.50655 -4,-1 -5,-1c-1,0 -2,0 -3,0c-1,0 -1,1 -2,2l0,1" id="svg_27" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6'  fill="none"/>
  <path d="m192,196c0,0 0.29289,0.29289 1,1c0.70711,0.70711 1,1 2,2c1,1 2,1 2,2c0,1 0.29289,1.29289 1,2c0.70711,0.70711 1,1 2,1c1,0 1.29289,0.29289 2,1c0.70711,0.70711 1.29289,1.29289 2,2c0.70711,0.70711 1.4588,0.69344 2,2c0.38269,0.92387 2.4588,1.69344 3,3c0.38269,0.92387 0,2 -1,2c-1,0 -1,-1 -2,-1c-1,0 -2,-1 -3,-1c-1,0 -2.29289,-1.29289 -3,-2c-0.70711,-0.70711 0,-2 0,-3c0,-1 -0.29289,-1.29289 -1,-2c-0.70711,-0.70711 -1.07613,-0.61731 -2,-1c-1.30656,-0.5412 -2,-1 -3,-2c-1,-1 -2,-1 -3,-1l-1,0" id="svg_28" stroke="#0ff"   filter='url(#glow)' strokeWidth = '6' fill="none"/>
  <path d="m215,241c0,0 0.38269,1.07613 0,2c-0.5412,1.30656 -1,2 -1,4c0,1 -0.4588,1.69344 -1,3c-0.38269,0.92387 0.70711,3.29289 0,4c-0.70711,0.70711 -1,1 -1,2c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 0,2 0,3c0,1 -1,2 -1,3c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1.29289,1.29291 -2,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-1.41422,1.41422 -0.29289,3.29291 -1,4c-0.70711,0.70709 -1.70711,0.70709 -1,0c0.70711,-0.70709 1.29289,-1.29291 2,-2c0.70711,-0.70709 1.29289,-0.29291 2,-1c0.70711,-0.70709 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1.4588,-1.69345 2,-3c0.38269,-0.92389 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1,-2 1,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 0,-2 0,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 2,0 3,0c1,0 2,0 2,1c0,1 -0.29289,1.29289 -1,2c-0.70711,0.70711 -0.69344,1.4588 -2,2c-0.92387,0.38269 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,1c-1,0 -0.61731,1.07613 -1,2c-0.5412,1.30655 -0.71022,2.04291 -1,3c-1.04483,3.45084 -2.4588,3.69345 -3,5c-0.38269,0.92389 -0.29289,1.29291 -1,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1,1 -1,2l-1,0" id="svg_29" strokeWidth = '6' stroke="#0ff"  filter='url(#glow)'  fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_33" d="m94,193c22,-26 21,-27 21,-27c0,0 97,0 97,0c0,0 25,31 25,31" opacity="NaN"    strokeWidth = '6' fill="none"/>
  <path stroke="#0ff" filter = 'url(glow)' id="svg_34" d="m99,312c19,24 19,24 19,24c0,0 100,0 102,-2" opacity="NaN" strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_35" d="m220,333c12,-23 12,-23 12,-23" opacity="NaN"  strokeWidth = '6' fill="none"/>
  <path id="svg_39" strokeWidth = '6'  d="m166.00001,371.13889c98.51232,-0.30556 97.51724,-0.30556 97.51724,-0.30556c0,0 17.91133,9.16667 17.91133,9.16667c0,0 58.70936,-0.30556 58.70936,-0.30556c0,0 20.89655,-7.94444 20.89655,-7.94444c-4,0 410.96552,-2.75 410.96552,-2.75" opacity="NaN" fill="none" stroke="#0ff" filter = 'url(glow)' />
  <path id="svg_40" strokeWidth = '6'  d="m748,357c37,-23 37,-23 37,-23c0,0 2,-153 2,-153c0,0 -31,-25 -31,-25c0,0 -492,6 -492,6" opacity="NaN" stroke="#0ff"  filter= 'url(glow)' fill="none"/>
  <path id="svg_41" strokeWidth = '6'  d="m227,170c30,0 30,0 30,0c0,0 1,39 1,39c0,0 63,0 63,0c0,0 0,-39 0,-39" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_42" strokeWidth = '6'  d="m320,199c402,-6 402,-5 402,-6c0,-1 -804,12 -402,6z" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  {/* <path id="svg_43" strokeWidth = '6'  d="m1121,455c0,41 -1,83 0,41c1,-42 0,-82 0,-41z" opacity="NaN" stroke="green" filter = 'url(glow)'  fill="none"/> */}
  <path id="svg_44" strokeWidth = '6'  d="m722,194l-1,-39l46,1l1,35" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_38" strokeWidth = '6'  d="m137,353.6c102.6899,-1.6 102.6899,-1.6 102.6899,-1.6c0,0 25.67248,8 25.67248,8c0,0 485.63766,-3.6 485.63766,-3.6" opacity="NaN" fill="none" filter = 'url(glow)' stroke="#0ff"/>
  <path id="svg_36" strokeWidth = '6'  d="m199,345c33,0 34,1 34,1c0,0 12,-18 12,-18" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' fill="none"/>
  <path id="svg_46" strokeWidth = '6'  d="m301,322" opacity="NaN" stroke="green"   filter = 'url(glow)' fill="none"/>
  <path fill="none"  strokeWidth ='6' stroke="#0ff" filter = 'url(glow)' opacity="NaN" d="m263,220l1,47l14,8l0,17l-14,8l0,29l-14,2l0,15l16,5l479,-6l31,-19l1,-117l-514,11z" id="svg_1"/>
  <rect fill="#00FF0D" strokeWidth ='6'  stroke="#0ff" filter = 'url(glow)' x="263" y="168" width="53" height="35" id="svg_2"/>   
  <g 
  transform = 'translate(10 , 0) scale(1.5)'
  >
    <text fontSize="24" 
    fontWeight="bold" 
    fill="#0ff" 
    filter = 'url(glow2)' 
    x="270" 
    y="190" 
    id="svg_3"
    > The Galaxies </text>  
  </g>
  </Link>
 </g>

      <g   
 transform="translate(530, 150) scale(0.4)"  
 cursor= 'pointer'
 >
   <Link to = "/theInnerPlanets">
  <path id="svg_14" d="m73,245c47,-64 47,-64 47,-64l-47,64z" opacity="NaN" stroke="#0ff"  filter='url(#glow)' fill="none" strokeWidth = '6'/>
  <path id="svg_15" d="m110,182c86,0 87,0 87,0c0,0 47,61 47,61c0,0 -34,73 -34,73c0,0 -89,1 -89,1c0,0 -44,-73 -44,-73" opacity="NaN" stroke="#0ff"   filter='url(#glow)' fill="none"  strokeWidth = '6' />
  <path stroke="#0ff"  filter='url(#glow)' id="svg_16" d="m116,250c19.60318,-39.67742 20.63492,-41 20.63492,-41c0,0 42.30159,1.32258 44.36508,0" opacity="NaN" fill="none"  strokeWidth = '6' />
  <path stroke="#0ff" filter ='url(glow)'  strokeWidth = '6'  id="svg_17" d="m177.67105,204c25.18421,38.0597 26.32895,39.32836 26.32895,39.32836c0,0 -19.46053,45.67164 -19.46053,45.67164c0,0 -45.78948,0 -45.78948,0c0,0 -21.75,-40.59702 -21.75,-40.59702" opacity="NaN" fill="none"/>
  <path id="svg_21" d="m144,236" opacity="NaN" stroke="#0ff" filter = 'url(glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_22" d="m160,262" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"filter = 'url(glow)' id="svg_23" strokeWidth = '6'  d="m139.62712,224.03922c0,0 37.47458,-1.03922 37.47458,-1.03922c0,0 15.89831,19.7451 15.89831,19.7451c0,0 -15.89831,33.2549 -15.89831,33.2549c0,0 -36.33898,0 -36.33898,0c0,0 -14.76271,-24.94118 -14.76271,-24.94118c0,0 13.62712,-27.01961 13.62712,-27.01961l-0.00001,0.00001z" opacity="NaN" fill="none"/>
  <path id="svg_24" d="m145,217" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_25" d="m141,217c40,0 40,0 40,0c0,0 17,20 14,23" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path d="m99,232c0,0 0,-1 0,-2c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.61732,-1.07613 1,-2c0.5412,-1.30656 1.07612,-1.61731 2,-2c1.30656,-0.5412 2,-2 3,-2c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 1,-1 1,-2c0,-1 0.70711,-2.29289 0,-3c-0.70711,-0.70711 -1.29289,1.29289 -2,2c-0.70711,0.70711 -1.07612,0.61731 -2,1c-1.30656,0.5412 -2.4588,1.69344 -3,3c-0.38268,0.92387 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,2c-1,1 -2.29289,1.29289 -3,2c-0.70711,0.70711 -0.61732,1.07613 -1,2c-0.5412,1.30656 -1.29289,1.29289 -2,2c-0.70711,0.70711 0,2 1,2l1,-1l0,-1l1,0" id="svg_26" strokeWidth = '6'  stroke="#0ff"    filter='url(#glow)'  fill="none"/>
  <path d="m128,195c1,0 1,-1 2,-1c1,0 2,0 3,0c1,0 2,0 3,0c3,0 4,0 5,0c1,0 2.07613,-0.38269 3,0c1.30656,0.5412 2,1 4,1c1,0 1.69344,0.4588 3,1c0.92387,0.38269 2,1 4,1c1,0 3,0 4,0c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 1.70711,-1.29289 1,-2c-0.70711,-0.70711 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -3.02582,0.32036 -5,0c-3.12144,-0.50655 -4,-1 -5,-1c-1,0 -2,0 -3,0c-1,0 -1,1 -2,2l0,1" id="svg_27" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6'  fill="none"/>
  <path d="m192,196c0,0 0.29289,0.29289 1,1c0.70711,0.70711 1,1 2,2c1,1 2,1 2,2c0,1 0.29289,1.29289 1,2c0.70711,0.70711 1,1 2,1c1,0 1.29289,0.29289 2,1c0.70711,0.70711 1.29289,1.29289 2,2c0.70711,0.70711 1.4588,0.69344 2,2c0.38269,0.92387 2.4588,1.69344 3,3c0.38269,0.92387 0,2 -1,2c-1,0 -1,-1 -2,-1c-1,0 -2,-1 -3,-1c-1,0 -2.29289,-1.29289 -3,-2c-0.70711,-0.70711 0,-2 0,-3c0,-1 -0.29289,-1.29289 -1,-2c-0.70711,-0.70711 -1.07613,-0.61731 -2,-1c-1.30656,-0.5412 -2,-1 -3,-2c-1,-1 -2,-1 -3,-1l-1,0" id="svg_28" stroke="#0ff"   filter='url(#glow)' strokeWidth = '6' fill="none"/>
  <path d="m215,241c0,0 0.38269,1.07613 0,2c-0.5412,1.30656 -1,2 -1,4c0,1 -0.4588,1.69344 -1,3c-0.38269,0.92387 0.70711,3.29289 0,4c-0.70711,0.70711 -1,1 -1,2c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 0,2 0,3c0,1 -1,2 -1,3c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1.29289,1.29291 -2,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-1.41422,1.41422 -0.29289,3.29291 -1,4c-0.70711,0.70709 -1.70711,0.70709 -1,0c0.70711,-0.70709 1.29289,-1.29291 2,-2c0.70711,-0.70709 1.29289,-0.29291 2,-1c0.70711,-0.70709 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1.4588,-1.69345 2,-3c0.38269,-0.92389 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1,-2 1,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 0,-2 0,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 2,0 3,0c1,0 2,0 2,1c0,1 -0.29289,1.29289 -1,2c-0.70711,0.70711 -0.69344,1.4588 -2,2c-0.92387,0.38269 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,1c-1,0 -0.61731,1.07613 -1,2c-0.5412,1.30655 -0.71022,2.04291 -1,3c-1.04483,3.45084 -2.4588,3.69345 -3,5c-0.38269,0.92389 -0.29289,1.29291 -1,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1,1 -1,2l-1,0" id="svg_29" strokeWidth = '6' stroke="#0ff"  filter='url(#glow)'  fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_33" d="m94,193c22,-26 21,-27 21,-27c0,0 97,0 97,0c0,0 25,31 25,31" opacity="NaN"    strokeWidth = '6' fill="none"/>
  <path stroke="#0ff" filter = 'url(glow)' id="svg_34" d="m99,312c19,24 19,24 19,24c0,0 100,0 102,-2" opacity="NaN" strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_35" d="m220,333c12,-23 12,-23 12,-23" opacity="NaN"  strokeWidth = '6' fill="none"/>
  <path id="svg_39" strokeWidth = '6'  d="m166.00001,371.13889c98.51232,-0.30556 97.51724,-0.30556 97.51724,-0.30556c0,0 17.91133,9.16667 17.91133,9.16667c0,0 58.70936,-0.30556 58.70936,-0.30556c0,0 20.89655,-7.94444 20.89655,-7.94444c-4,0 410.96552,-2.75 410.96552,-2.75" opacity="NaN" fill="none" stroke="#0ff" filter = 'url(glow)' />
  <path id="svg_40" strokeWidth = '6'  d="m748,357c37,-23 37,-23 37,-23c0,0 2,-153 2,-153c0,0 -31,-25 -31,-25c0,0 -492,6 -492,6" opacity="NaN" stroke="#0ff"  filter= 'url(glow)' fill="none"/>
  <path id="svg_41" strokeWidth = '6'  d="m227,170c30,0 30,0 30,0c0,0 1,39 1,39c0,0 63,0 63,0c0,0 0,-39 0,-39" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_42" strokeWidth = '6'  d="m320,199c402,-6 402,-5 402,-6c0,-1 -804,12 -402,6z" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  {/* <path id="svg_43" strokeWidth = '6'  d="m1121,455c0,41 -1,83 0,41c1,-42 0,-82 0,-41z" opacity="NaN" stroke="green" filter = 'url(glow)'  fill="none"/> */}
  <path id="svg_44" strokeWidth = '6'  d="m722,194l-1,-39l46,1l1,35" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_38" strokeWidth = '6'  d="m137,353.6c102.6899,-1.6 102.6899,-1.6 102.6899,-1.6c0,0 25.67248,8 25.67248,8c0,0 485.63766,-3.6 485.63766,-3.6" opacity="NaN" fill="none" filter = 'url(glow)' stroke="#0ff"/>
  <path id="svg_36" strokeWidth = '6'  d="m199,345c33,0 34,1 34,1c0,0 12,-18 12,-18" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' fill="none"/>
  <path id="svg_46" strokeWidth = '6'  d="m301,322" opacity="NaN" stroke="green"   filter = 'url(glow)' fill="none"/>
  <path fill="none"  strokeWidth ='6' stroke="#0ff" filter = 'url(glow)' opacity="NaN" d="m263,220l1,47l14,8l0,17l-14,8l0,29l-14,2l0,15l16,5l479,-6l31,-19l1,-117l-514,11z" id="svg_1"/>
  <rect fill="#00FF0D" strokeWidth ='6'  stroke="#0ff" filter = 'url(glow)' x="263" y="168" width="53" height="35" id="svg_2"/>   
  <g 
  transform = 'translate(-10 , 0) scale(1.5)'
  >
    <text fontSize="24" 
    fontWeight="bold" 
    fill="#0ff" 
    filter = 'url(glow2)' 
    x="270" 
    y="190" 
    id="svg_3"
    >The Inner Planets</text>  
  </g>
  </Link>
 </g>

   <g   
 transform="translate(530, 250) scale(0.4)"  
 cursor= 'pointer'
 >
   <Link to = "/theOuterPlanets">
  <path id="svg_14" d="m73,245c47,-64 47,-64 47,-64l-47,64z" opacity="NaN" stroke="#0ff"  filter='url(#glow)' fill="none" strokeWidth = '6'/>
  <path id="svg_15" d="m110,182c86,0 87,0 87,0c0,0 47,61 47,61c0,0 -34,73 -34,73c0,0 -89,1 -89,1c0,0 -44,-73 -44,-73" opacity="NaN" stroke="#0ff"   filter='url(#glow)' fill="none"  strokeWidth = '6' />
  <path stroke="#0ff"  filter='url(#glow)' id="svg_16" d="m116,250c19.60318,-39.67742 20.63492,-41 20.63492,-41c0,0 42.30159,1.32258 44.36508,0" opacity="NaN" fill="none"  strokeWidth = '6' />
  <path stroke="#0ff" filter ='url(glow)'  strokeWidth = '6'  id="svg_17" d="m177.67105,204c25.18421,38.0597 26.32895,39.32836 26.32895,39.32836c0,0 -19.46053,45.67164 -19.46053,45.67164c0,0 -45.78948,0 -45.78948,0c0,0 -21.75,-40.59702 -21.75,-40.59702" opacity="NaN" fill="none"/>
  <path id="svg_21" d="m144,236" opacity="NaN" stroke="#0ff" filter = 'url(glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_22" d="m160,262" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"filter = 'url(glow)' id="svg_23" strokeWidth = '6'  d="m139.62712,224.03922c0,0 37.47458,-1.03922 37.47458,-1.03922c0,0 15.89831,19.7451 15.89831,19.7451c0,0 -15.89831,33.2549 -15.89831,33.2549c0,0 -36.33898,0 -36.33898,0c0,0 -14.76271,-24.94118 -14.76271,-24.94118c0,0 13.62712,-27.01961 13.62712,-27.01961l-0.00001,0.00001z" opacity="NaN" fill="none"/>
  <path id="svg_24" d="m145,217" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_25" d="m141,217c40,0 40,0 40,0c0,0 17,20 14,23" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path d="m99,232c0,0 0,-1 0,-2c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.61732,-1.07613 1,-2c0.5412,-1.30656 1.07612,-1.61731 2,-2c1.30656,-0.5412 2,-2 3,-2c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 1,-1 1,-2c0,-1 0.70711,-2.29289 0,-3c-0.70711,-0.70711 -1.29289,1.29289 -2,2c-0.70711,0.70711 -1.07612,0.61731 -2,1c-1.30656,0.5412 -2.4588,1.69344 -3,3c-0.38268,0.92387 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,2c-1,1 -2.29289,1.29289 -3,2c-0.70711,0.70711 -0.61732,1.07613 -1,2c-0.5412,1.30656 -1.29289,1.29289 -2,2c-0.70711,0.70711 0,2 1,2l1,-1l0,-1l1,0" id="svg_26" strokeWidth = '6'  stroke="#0ff"    filter='url(#glow)'  fill="none"/>
  <path d="m128,195c1,0 1,-1 2,-1c1,0 2,0 3,0c1,0 2,0 3,0c3,0 4,0 5,0c1,0 2.07613,-0.38269 3,0c1.30656,0.5412 2,1 4,1c1,0 1.69344,0.4588 3,1c0.92387,0.38269 2,1 4,1c1,0 3,0 4,0c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 1.70711,-1.29289 1,-2c-0.70711,-0.70711 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -3.02582,0.32036 -5,0c-3.12144,-0.50655 -4,-1 -5,-1c-1,0 -2,0 -3,0c-1,0 -1,1 -2,2l0,1" id="svg_27" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6'  fill="none"/>
  <path d="m192,196c0,0 0.29289,0.29289 1,1c0.70711,0.70711 1,1 2,2c1,1 2,1 2,2c0,1 0.29289,1.29289 1,2c0.70711,0.70711 1,1 2,1c1,0 1.29289,0.29289 2,1c0.70711,0.70711 1.29289,1.29289 2,2c0.70711,0.70711 1.4588,0.69344 2,2c0.38269,0.92387 2.4588,1.69344 3,3c0.38269,0.92387 0,2 -1,2c-1,0 -1,-1 -2,-1c-1,0 -2,-1 -3,-1c-1,0 -2.29289,-1.29289 -3,-2c-0.70711,-0.70711 0,-2 0,-3c0,-1 -0.29289,-1.29289 -1,-2c-0.70711,-0.70711 -1.07613,-0.61731 -2,-1c-1.30656,-0.5412 -2,-1 -3,-2c-1,-1 -2,-1 -3,-1l-1,0" id="svg_28" stroke="#0ff"   filter='url(#glow)' strokeWidth = '6' fill="none"/>
  <path d="m215,241c0,0 0.38269,1.07613 0,2c-0.5412,1.30656 -1,2 -1,4c0,1 -0.4588,1.69344 -1,3c-0.38269,0.92387 0.70711,3.29289 0,4c-0.70711,0.70711 -1,1 -1,2c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 0,2 0,3c0,1 -1,2 -1,3c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1.29289,1.29291 -2,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-1.41422,1.41422 -0.29289,3.29291 -1,4c-0.70711,0.70709 -1.70711,0.70709 -1,0c0.70711,-0.70709 1.29289,-1.29291 2,-2c0.70711,-0.70709 1.29289,-0.29291 2,-1c0.70711,-0.70709 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1.4588,-1.69345 2,-3c0.38269,-0.92389 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1,-2 1,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 0,-2 0,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 2,0 3,0c1,0 2,0 2,1c0,1 -0.29289,1.29289 -1,2c-0.70711,0.70711 -0.69344,1.4588 -2,2c-0.92387,0.38269 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,1c-1,0 -0.61731,1.07613 -1,2c-0.5412,1.30655 -0.71022,2.04291 -1,3c-1.04483,3.45084 -2.4588,3.69345 -3,5c-0.38269,0.92389 -0.29289,1.29291 -1,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1,1 -1,2l-1,0" id="svg_29" strokeWidth = '6' stroke="#0ff"  filter='url(#glow)'  fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_33" d="m94,193c22,-26 21,-27 21,-27c0,0 97,0 97,0c0,0 25,31 25,31" opacity="NaN"    strokeWidth = '6' fill="none"/>
  <path stroke="#0ff" filter = 'url(glow)' id="svg_34" d="m99,312c19,24 19,24 19,24c0,0 100,0 102,-2" opacity="NaN" strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_35" d="m220,333c12,-23 12,-23 12,-23" opacity="NaN"  strokeWidth = '6' fill="none"/>
  <path id="svg_39" strokeWidth = '6'  d="m166.00001,371.13889c98.51232,-0.30556 97.51724,-0.30556 97.51724,-0.30556c0,0 17.91133,9.16667 17.91133,9.16667c0,0 58.70936,-0.30556 58.70936,-0.30556c0,0 20.89655,-7.94444 20.89655,-7.94444c-4,0 410.96552,-2.75 410.96552,-2.75" opacity="NaN" fill="none" stroke="#0ff" filter = 'url(glow)' />
  <path id="svg_40" strokeWidth = '6'  d="m748,357c37,-23 37,-23 37,-23c0,0 2,-153 2,-153c0,0 -31,-25 -31,-25c0,0 -492,6 -492,6" opacity="NaN" stroke="#0ff"  filter= 'url(glow)' fill="none"/>
  <path id="svg_41" strokeWidth = '6'  d="m227,170c30,0 30,0 30,0c0,0 1,39 1,39c0,0 63,0 63,0c0,0 0,-39 0,-39" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_42" strokeWidth = '6'  d="m320,199c402,-6 402,-5 402,-6c0,-1 -804,12 -402,6z" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  {/* <path id="svg_43" strokeWidth = '6'  d="m1121,455c0,41 -1,83 0,41c1,-42 0,-82 0,-41z" opacity="NaN" stroke="green" filter = 'url(glow)'  fill="none"/> */}
  <path id="svg_44" strokeWidth = '6'  d="m722,194l-1,-39l46,1l1,35" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_38" strokeWidth = '6'  d="m137,353.6c102.6899,-1.6 102.6899,-1.6 102.6899,-1.6c0,0 25.67248,8 25.67248,8c0,0 485.63766,-3.6 485.63766,-3.6" opacity="NaN" fill="none" filter = 'url(glow)' stroke="#0ff"/>
  <path id="svg_36" strokeWidth = '6'  d="m199,345c33,0 34,1 34,1c0,0 12,-18 12,-18" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' fill="none"/>
  <path id="svg_46" strokeWidth = '6'  d="m301,322" opacity="NaN" stroke="green"   filter = 'url(glow)' fill="none"/>
  <path fill="none"  strokeWidth ='6' stroke="#0ff" filter = 'url(glow)' opacity="NaN" d="m263,220l1,47l14,8l0,17l-14,8l0,29l-14,2l0,15l16,5l479,-6l31,-19l1,-117l-514,11z" id="svg_1"/>
  <rect fill="#00FF0D" strokeWidth ='6'  stroke="#0ff" filter = 'url(glow)' x="263" y="168" width="53" height="35" id="svg_2"/>   
  <g 
  transform = 'translate(-120 , 0) scale(1.5)'
  >
    <text fontSize="24" 
    fontWeight="bold" 
    fill="#0ff" 
    filter = 'url(glow2)' 
    x="270" 
    y="190" 
    id="svg_3"
    > The Outer Panets</text>  
  </g>
  </Link>
 </g>


    <g   
 transform="translate(530, 345) scale(0.4)"  
 cursor= 'pointer'
 >
   <Link to = "/theAsteroidBelt">
  <path id="svg_14" d="m73,245c47,-64 47,-64 47,-64l-47,64z" opacity="NaN" stroke="#0ff"  filter='url(#glow)' fill="none" strokeWidth = '6'/>
  <path id="svg_15" d="m110,182c86,0 87,0 87,0c0,0 47,61 47,61c0,0 -34,73 -34,73c0,0 -89,1 -89,1c0,0 -44,-73 -44,-73" opacity="NaN" stroke="#0ff"   filter='url(#glow)' fill="none"  strokeWidth = '6' />
  <path stroke="#0ff"  filter='url(#glow)' id="svg_16" d="m116,250c19.60318,-39.67742 20.63492,-41 20.63492,-41c0,0 42.30159,1.32258 44.36508,0" opacity="NaN" fill="none"  strokeWidth = '6' />
  <path stroke="#0ff" filter ='url(glow)'  strokeWidth = '6'  id="svg_17" d="m177.67105,204c25.18421,38.0597 26.32895,39.32836 26.32895,39.32836c0,0 -19.46053,45.67164 -19.46053,45.67164c0,0 -45.78948,0 -45.78948,0c0,0 -21.75,-40.59702 -21.75,-40.59702" opacity="NaN" fill="none"/>
  <path id="svg_21" d="m144,236" opacity="NaN" stroke="#0ff" filter = 'url(glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_22" d="m160,262" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"filter = 'url(glow)' id="svg_23" strokeWidth = '6'  d="m139.62712,224.03922c0,0 37.47458,-1.03922 37.47458,-1.03922c0,0 15.89831,19.7451 15.89831,19.7451c0,0 -15.89831,33.2549 -15.89831,33.2549c0,0 -36.33898,0 -36.33898,0c0,0 -14.76271,-24.94118 -14.76271,-24.94118c0,0 13.62712,-27.01961 13.62712,-27.01961l-0.00001,0.00001z" opacity="NaN" fill="none"/>
  <path id="svg_24" d="m145,217" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_25" d="m141,217c40,0 40,0 40,0c0,0 17,20 14,23" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path d="m99,232c0,0 0,-1 0,-2c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.61732,-1.07613 1,-2c0.5412,-1.30656 1.07612,-1.61731 2,-2c1.30656,-0.5412 2,-2 3,-2c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 1,-1 1,-2c0,-1 0.70711,-2.29289 0,-3c-0.70711,-0.70711 -1.29289,1.29289 -2,2c-0.70711,0.70711 -1.07612,0.61731 -2,1c-1.30656,0.5412 -2.4588,1.69344 -3,3c-0.38268,0.92387 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,2c-1,1 -2.29289,1.29289 -3,2c-0.70711,0.70711 -0.61732,1.07613 -1,2c-0.5412,1.30656 -1.29289,1.29289 -2,2c-0.70711,0.70711 0,2 1,2l1,-1l0,-1l1,0" id="svg_26" strokeWidth = '6'  stroke="#0ff"    filter='url(#glow)'  fill="none"/>
  <path d="m128,195c1,0 1,-1 2,-1c1,0 2,0 3,0c1,0 2,0 3,0c3,0 4,0 5,0c1,0 2.07613,-0.38269 3,0c1.30656,0.5412 2,1 4,1c1,0 1.69344,0.4588 3,1c0.92387,0.38269 2,1 4,1c1,0 3,0 4,0c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 1.70711,-1.29289 1,-2c-0.70711,-0.70711 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -3.02582,0.32036 -5,0c-3.12144,-0.50655 -4,-1 -5,-1c-1,0 -2,0 -3,0c-1,0 -1,1 -2,2l0,1" id="svg_27" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6'  fill="none"/>
  <path d="m192,196c0,0 0.29289,0.29289 1,1c0.70711,0.70711 1,1 2,2c1,1 2,1 2,2c0,1 0.29289,1.29289 1,2c0.70711,0.70711 1,1 2,1c1,0 1.29289,0.29289 2,1c0.70711,0.70711 1.29289,1.29289 2,2c0.70711,0.70711 1.4588,0.69344 2,2c0.38269,0.92387 2.4588,1.69344 3,3c0.38269,0.92387 0,2 -1,2c-1,0 -1,-1 -2,-1c-1,0 -2,-1 -3,-1c-1,0 -2.29289,-1.29289 -3,-2c-0.70711,-0.70711 0,-2 0,-3c0,-1 -0.29289,-1.29289 -1,-2c-0.70711,-0.70711 -1.07613,-0.61731 -2,-1c-1.30656,-0.5412 -2,-1 -3,-2c-1,-1 -2,-1 -3,-1l-1,0" id="svg_28" stroke="#0ff"   filter='url(#glow)' strokeWidth = '6' fill="none"/>
  <path d="m215,241c0,0 0.38269,1.07613 0,2c-0.5412,1.30656 -1,2 -1,4c0,1 -0.4588,1.69344 -1,3c-0.38269,0.92387 0.70711,3.29289 0,4c-0.70711,0.70711 -1,1 -1,2c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 0,2 0,3c0,1 -1,2 -1,3c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1.29289,1.29291 -2,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-1.41422,1.41422 -0.29289,3.29291 -1,4c-0.70711,0.70709 -1.70711,0.70709 -1,0c0.70711,-0.70709 1.29289,-1.29291 2,-2c0.70711,-0.70709 1.29289,-0.29291 2,-1c0.70711,-0.70709 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1.4588,-1.69345 2,-3c0.38269,-0.92389 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1,-2 1,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 0,-2 0,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 2,0 3,0c1,0 2,0 2,1c0,1 -0.29289,1.29289 -1,2c-0.70711,0.70711 -0.69344,1.4588 -2,2c-0.92387,0.38269 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,1c-1,0 -0.61731,1.07613 -1,2c-0.5412,1.30655 -0.71022,2.04291 -1,3c-1.04483,3.45084 -2.4588,3.69345 -3,5c-0.38269,0.92389 -0.29289,1.29291 -1,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1,1 -1,2l-1,0" id="svg_29" strokeWidth = '6' stroke="#0ff"  filter='url(#glow)'  fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_33" d="m94,193c22,-26 21,-27 21,-27c0,0 97,0 97,0c0,0 25,31 25,31" opacity="NaN"    strokeWidth = '6' fill="none"/>
  <path stroke="#0ff" filter = 'url(glow)' id="svg_34" d="m99,312c19,24 19,24 19,24c0,0 100,0 102,-2" opacity="NaN" strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_35" d="m220,333c12,-23 12,-23 12,-23" opacity="NaN"  strokeWidth = '6' fill="none"/>
  <path id="svg_39" strokeWidth = '6'  d="m166.00001,371.13889c98.51232,-0.30556 97.51724,-0.30556 97.51724,-0.30556c0,0 17.91133,9.16667 17.91133,9.16667c0,0 58.70936,-0.30556 58.70936,-0.30556c0,0 20.89655,-7.94444 20.89655,-7.94444c-4,0 410.96552,-2.75 410.96552,-2.75" opacity="NaN" fill="none" stroke="#0ff" filter = 'url(glow)' />
  <path id="svg_40" strokeWidth = '6'  d="m748,357c37,-23 37,-23 37,-23c0,0 2,-153 2,-153c0,0 -31,-25 -31,-25c0,0 -492,6 -492,6" opacity="NaN" stroke="#0ff"  filter= 'url(glow)' fill="none"/>
  <path id="svg_41" strokeWidth = '6'  d="m227,170c30,0 30,0 30,0c0,0 1,39 1,39c0,0 63,0 63,0c0,0 0,-39 0,-39" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_42" strokeWidth = '6'  d="m320,199c402,-6 402,-5 402,-6c0,-1 -804,12 -402,6z" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  {/* <path id="svg_43" strokeWidth = '6'  d="m1121,455c0,41 -1,83 0,41c1,-42 0,-82 0,-41z" opacity="NaN" stroke="green" filter = 'url(glow)'  fill="none"/> */}
  <path id="svg_44" strokeWidth = '6'  d="m722,194l-1,-39l46,1l1,35" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_38" strokeWidth = '6'  d="m137,353.6c102.6899,-1.6 102.6899,-1.6 102.6899,-1.6c0,0 25.67248,8 25.67248,8c0,0 485.63766,-3.6 485.63766,-3.6" opacity="NaN" fill="none" filter = 'url(glow)' stroke="#0ff"/>
  <path id="svg_36" strokeWidth = '6'  d="m199,345c33,0 34,1 34,1c0,0 12,-18 12,-18" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' fill="none"/>
  <path id="svg_46" strokeWidth = '6'  d="m301,322" opacity="NaN" stroke="green"   filter = 'url(glow)' fill="none"/>
  <path fill="none"  strokeWidth ='6' stroke="#0ff" filter = 'url(glow)' opacity="NaN" d="m263,220l1,47l14,8l0,17l-14,8l0,29l-14,2l0,15l16,5l479,-6l31,-19l1,-117l-514,11z" id="svg_1"/>
  <rect fill="#00FF0D" strokeWidth ='6'  stroke="#0ff" filter = 'url(glow)' x="263" y="168" width="53" height="35" id="svg_2"/>   
  <g 
  transform = 'translate(-120 , 0) scale(1.5)'
  >
    <text fontSize="24" 
    fontWeight="bold" 
    fill="#0ff" 
    filter = 'url(glow2)' 
    x="270" 
    y="190" 
    id="svg_3"
    > The Asteroid Belt </text>  
  </g>
  </Link>
 </g>







</svg>

       <svg
        viewBox = '0 0 1000 900'
         xmlns="http://www.w3.org/2000/svg"       
         >


  <defs>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#0ff" floodOpacity="1" />
      <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#0ff" floodOpacity="0.7" />
      <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#0ff" floodOpacity="0.5" />
    </filter>

    <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#d4fc05" floodOpacity="1" />
      <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#d4fc05" floodOpacity="0.7" />
      <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#d4fc05" floodOpacity="0.5" />
    </filter>

    
    <filter id="glowWrong" x="-50%" y="-50%" width="200%" height="200%">
     <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#fe0194" floodOpacity="1" /> 
     <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#fe0194" floodOpacity="0.7" /> 
     <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#fe0194" floodOpacity="0.5" />
    </filter>
  
    <filter id="glowCorrect" x="-50%" y="-50%" width="200%" height="200%">
     <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#00ff0d" floodOpacity="1" /> 
     <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#00ff0d" floodOpacity="0.7" /> 
     <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#00ff0d" floodOpacity="0.5" />
    </filter>

    </defs>




  <g id="Layer_1">
   
  <path fill="none" stroke="#0ff"  strokeWidth = '10' opacity="NaN" d="m188,20l66,-3l80,41l321,-3l74,-35l102,0l73,46l6,535l-48,27l-92,4l-47,-27l-396,4l-67,24l-82,-1l-52,-47l4,-515l58,-50z" id="svg_1"/>
  <path stroke="#0ff" strokeWidth = '10'
   id="svg_2"
    d="m181,87c0,0 25.62376,-28 25.62376,-28c0,0 38.43564,-1 38.43564,-1c0,0 83.76998,46 83.76998,46c0,0 337.05098,-8 337.05098,-8c0,0 65.04493,-44 65.04493,-44c0,0 75.88575,-1 75.88575,-1c0,0 60.4067,37 40.4067,27c7,5 15.76847,494 14.78294,501" opacity="NaN" fill="none"/>
  <path id="svg_3" d="m180,87" opacity="NaN"  strokeWidth = '10' stroke="#0ff" fill="none"/>
  <path id="svg_4"  strokeWidth = '10' d="m182,86l2,123l35,-26l-1,285l-30,23c0,0 -2,65 -2,69c0,4 40,27 40,27c0,0 40,-1 40,-1c0,0 48,-13 48,-13c0,0 409,-8 409,-8c0,0 70,32 70,32c0,0 43,-2 43,-2c0,0 27,-17 27,-17" opacity="NaN" stroke="#0ff" fill="none"/>
  <path id="svg_5" strokeWidth = '10' d="m148,252c0,0 41,-25 41,-25c0,0 -2,37 -2,37c0,0 -41,25 -40,25" opacity="NaN" stroke="#0ff" fill="none"/>
  <path id="svg_6" strokeWidth = '10'  d="m157,327c0,0 32,-18 34,-20c2,-2 0,31 0,31c0,0 -33,16 -33,16" opacity="NaN" stroke="#0ff" fill="none"/>
  <path id="svg_7"  strokeWidth = '10' d="m165,388c0,0 28,-13 28,-13c0,0 -2,33 -2,33c0,0 -22,10 -22,10" opacity="NaN" stroke="#0ff" fill="none"/>
  <path id="svg_8" strokeWidth = '10' d="m169,443c0,0 26,-12 25,-11c-1,1 -25,11 -25,11z" opacity="NaN" stroke="#0ff" fill="none"/>
  <path id="svg_9" strokeWidth = '10'  d="m175,462c0,0 22,-11 22,-11c0,0 -1,16 -1,16c0,0 -18,9 -18,9" opacity="NaN" stroke="#0ff" fill="none"/>
  <path id="svg_10" strokeWidth = '10'  d="m881,209c0,0 4,210 4,210c0,0 -12,-1 -12,-1c0,0 -5,-288 -5,-288c0,0 27,-1 25,-1" opacity="NaN" stroke="#0ff" fill="none"/>
  <path id="svg_12" strokeWidth = '10' d="m889,149c0,0 10,339 10,339c0,0 -20,-2 -20,-2c0,0 -2,-42 -2,-42c0,0 12,0 13,-1" opacity="NaN" stroke="#0ff" fill="none"/>
  <ellipse stroke="#0ff" ry="13.5"  strokeWidth = '10' rx="19" id="svg_13" cy="36.5" cx="361" fill="none"/>
  <ellipse stroke="#0ff"  strokeWidth = '10' ry="13" rx="22" id="svg_14" cy="37" cx="471" fill="none"/>
  <ellipse stroke="#0ff"  strokeWidth = '10' ry="13.5" rx="26" id="svg_15" cy="38.5" cx="593" fill="none"/>
  <path id="svg_16"  strokeWidth = '10' d="m135.775,313.29749l3.43772,0l1.06228,-8.78524l1.06228,8.78524l3.43772,0l-2.78117,5.42952l1.06234,8.78524l-2.78117,-5.42966l-2.78117,5.42966l1.06234,-8.78524l-2.78117,-5.42952z" stroke="#0ff" fill="none"/>
  <path id="svg_17" strokeWidth = '10'  d="m131.78999,371.92233l3.81969,0l1.18031,-10.69508l1.18032,10.69508l3.81969,0l-3.09019,6.60985l1.18038,10.69508l-3.09019,-6.61003l-3.09019,6.61003l1.18038,-10.69508l-3.09019,-6.60985z" stroke="#0ff" fill="none"/>
  <path id="svg_18" strokeWidth = '10' d="m135.75001,429.09004l5.34756,0l1.65244,-14.13278l1.65244,14.13278l5.34756,0l-4.32626,8.73444l1.65252,14.13278l-4.32626,-8.73468l-4.32626,8.73468l1.65252,-14.13278l-4.32626,-8.73444z" stroke="#0ff" fill="none"/>
  <path id="svg_19" strokeWidth = '10' d="m140.73499,485.65417l4.58363,0l1.41638,-12.98689l1.41638,12.98689l4.58362,0l-3.70822,8.02625l1.41645,12.98689l-3.70823,-8.02647l-3.70823,8.02647l1.41645,-12.98689l-3.70823,-8.02625z" stroke="#0ff" fill="none"/>
  <path id="svg_20" strokeWidth = '10' d="m137.75001,198.25002l4.58362,0l1.41637,-14.13278l1.41638,14.13278l4.58362,0l-3.70822,8.73444l1.41645,14.13278l-3.70822,-8.73467l-3.70822,8.73467l1.41645,-14.13278l-3.70822,-8.73444z" stroke="#0ff" fill="none"/>
 </g>







 
 <g   
 transform="translate(210, 45) scale(0.4)"  
 cursor ='pointer'
 >
   <Link to="/theKuiperBelt">
  <path id="svg_14" d="m73,245c47,-64 47,-64 47,-64l-47,64z" opacity="NaN" stroke="#0ff"  filter='url(#glow)' fill="none" strokeWidth = '6'/>
  <path id="svg_15" d="m110,182c86,0 87,0 87,0c0,0 47,61 47,61c0,0 -34,73 -34,73c0,0 -89,1 -89,1c0,0 -44,-73 -44,-73" opacity="NaN" stroke="#0ff"   filter='url(#glow)' fill="none"  strokeWidth = '6' />
  <path stroke="#0ff"  filter='url(#glow)' id="svg_16" d="m116,250c19.60318,-39.67742 20.63492,-41 20.63492,-41c0,0 42.30159,1.32258 44.36508,0" opacity="NaN" fill="none"  strokeWidth = '6' />
  <path stroke="#0ff" filter ='url(#glow)'  strokeWidth = '6'  id="svg_17" d="m177.67105,204c25.18421,38.0597 26.32895,39.32836 26.32895,39.32836c0,0 -19.46053,45.67164 -19.46053,45.67164c0,0 -45.78948,0 -45.78948,0c0,0 -21.75,-40.59702 -21.75,-40.59702" opacity="NaN" fill="none"/>
  <path id="svg_21" d="m144,236" opacity="NaN" stroke="#0ff" filter = 'url(#glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_22" d="m160,262" opacity="NaN" stroke="#0ff"  filter = 'url(#glow)' strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"filter = 'url(#glow)' id="svg_23" strokeWidth = '6'  d="m139.62712,224.03922c0,0 37.47458,-1.03922 37.47458,-1.03922c0,0 15.89831,19.7451 15.89831,19.7451c0,0 -15.89831,33.2549 -15.89831,33.2549c0,0 -36.33898,0 -36.33898,0c0,0 -14.76271,-24.94118 -14.76271,-24.94118c0,0 13.62712,-27.01961 13.62712,-27.01961l-0.00001,0.00001z" opacity="NaN" fill="none"/>
  <path id="svg_24" d="m145,217" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_25" d="m141,217c40,0 40,0 40,0c0,0 17,20 14,23" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path d="m99,232c0,0 0,-1 0,-2c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.61732,-1.07613 1,-2c0.5412,-1.30656 1.07612,-1.61731 2,-2c1.30656,-0.5412 2,-2 3,-2c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 1,-1 1,-2c0,-1 0.70711,-2.29289 0,-3c-0.70711,-0.70711 -1.29289,1.29289 -2,2c-0.70711,0.70711 -1.07612,0.61731 -2,1c-1.30656,0.5412 -2.4588,1.69344 -3,3c-0.38268,0.92387 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,2c-1,1 -2.29289,1.29289 -3,2c-0.70711,0.70711 -0.61732,1.07613 -1,2c-0.5412,1.30656 -1.29289,1.29289 -2,2c-0.70711,0.70711 0,2 1,2l1,-1l0,-1l1,0" id="svg_26" strokeWidth = '6'  stroke="#0ff"    filter='url(#glow)'  fill="none"/>
  <path d="m128,195c1,0 1,-1 2,-1c1,0 2,0 3,0c1,0 2,0 3,0c3,0 4,0 5,0c1,0 2.07613,-0.38269 3,0c1.30656,0.5412 2,1 4,1c1,0 1.69344,0.4588 3,1c0.92387,0.38269 2,1 4,1c1,0 3,0 4,0c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 1.70711,-1.29289 1,-2c-0.70711,-0.70711 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -3.02582,0.32036 -5,0c-3.12144,-0.50655 -4,-1 -5,-1c-1,0 -2,0 -3,0c-1,0 -1,1 -2,2l0,1" id="svg_27" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6'  fill="none"/>
  <path d="m192,196c0,0 0.29289,0.29289 1,1c0.70711,0.70711 1,1 2,2c1,1 2,1 2,2c0,1 0.29289,1.29289 1,2c0.70711,0.70711 1,1 2,1c1,0 1.29289,0.29289 2,1c0.70711,0.70711 1.29289,1.29289 2,2c0.70711,0.70711 1.4588,0.69344 2,2c0.38269,0.92387 2.4588,1.69344 3,3c0.38269,0.92387 0,2 -1,2c-1,0 -1,-1 -2,-1c-1,0 -2,-1 -3,-1c-1,0 -2.29289,-1.29289 -3,-2c-0.70711,-0.70711 0,-2 0,-3c0,-1 -0.29289,-1.29289 -1,-2c-0.70711,-0.70711 -1.07613,-0.61731 -2,-1c-1.30656,-0.5412 -2,-1 -3,-2c-1,-1 -2,-1 -3,-1l-1,0" id="svg_28" stroke="#0ff"   filter='url(#glow)' strokeWidth = '6' fill="none"/>
  <path d="m215,241c0,0 0.38269,1.07613 0,2c-0.5412,1.30656 -1,2 -1,4c0,1 -0.4588,1.69344 -1,3c-0.38269,0.92387 0.70711,3.29289 0,4c-0.70711,0.70711 -1,1 -1,2c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 0,2 0,3c0,1 -1,2 -1,3c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1.29289,1.29291 -2,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-1.41422,1.41422 -0.29289,3.29291 -1,4c-0.70711,0.70709 -1.70711,0.70709 -1,0c0.70711,-0.70709 1.29289,-1.29291 2,-2c0.70711,-0.70709 1.29289,-0.29291 2,-1c0.70711,-0.70709 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1.4588,-1.69345 2,-3c0.38269,-0.92389 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1,-2 1,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 0,-2 0,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 2,0 3,0c1,0 2,0 2,1c0,1 -0.29289,1.29289 -1,2c-0.70711,0.70711 -0.69344,1.4588 -2,2c-0.92387,0.38269 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,1c-1,0 -0.61731,1.07613 -1,2c-0.5412,1.30655 -0.71022,2.04291 -1,3c-1.04483,3.45084 -2.4588,3.69345 -3,5c-0.38269,0.92389 -0.29289,1.29291 -1,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1,1 -1,2l-1,0" id="svg_29" strokeWidth = '6' stroke="#0ff"  filter='url(#glow)'  fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_33" d="m94,193c22,-26 21,-27 21,-27c0,0 97,0 97,0c0,0 25,31 25,31" opacity="NaN"    strokeWidth = '6' fill="none"/>
  <path stroke="#0ff" filter = 'url(glow)' id="svg_34" d="m99,312c19,24 19,24 19,24c0,0 100,0 102,-2" opacity="NaN" strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_35" d="m220,333c12,-23 12,-23 12,-23" opacity="NaN"  strokeWidth = '6' fill="none"/>
  <path id="svg_39" strokeWidth = '6'  d="m166.00001,371.13889c98.51232,-0.30556 97.51724,-0.30556 97.51724,-0.30556c0,0 17.91133,9.16667 17.91133,9.16667c0,0 58.70936,-0.30556 58.70936,-0.30556c0,0 20.89655,-7.94444 20.89655,-7.94444c-4,0 410.96552,-2.75 410.96552,-2.75" opacity="NaN" fill="none" stroke="#0ff" filter = 'url(glow)' />
  <path id="svg_40" strokeWidth = '6'  d="m748,357c37,-23 37,-23 37,-23c0,0 2,-153 2,-153c0,0 -31,-25 -31,-25c0,0 -492,6 -492,6" opacity="NaN" stroke="#0ff"  filter= 'url(glow)' fill="none"/>
  <path id="svg_41" strokeWidth = '6'  d="m227,170c30,0 30,0 30,0c0,0 1,39 1,39c0,0 63,0 63,0c0,0 0,-39 0,-39" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_42" strokeWidth = '6'  d="m320,199c402,-6 402,-5 402,-6c0,-1 -804,12 -402,6z" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  {/* <path id="svg_43" strokeWidth = '6'  d="m1121,455c0,41 -1,83 0,41c1,-42 0,-82 0,-41z" opacity="NaN" stroke="#0ff" filter = 'url(glow)'  fill="none"/> */}
  <path id="svg_44" strokeWidth = '6'  d="m722,194l-1,-39l46,1l1,35" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_38" strokeWidth = '6'  d="m137,353.6c102.6899,-1.6 102.6899,-1.6 102.6899,-1.6c0,0 25.67248,8 25.67248,8c0,0 485.63766,-3.6 485.63766,-3.6" opacity="NaN" fill="none" filter = 'url(glow)' stroke="#0ff"/>
  <path id="svg_36" strokeWidth = '6'  d="m199,345c33,0 34,1 34,1c0,0 12,-18 12,-18" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' fill="none"/>
  <path id="svg_46" strokeWidth = '6'  d="m301,322" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' fill="none"/>
  <path fill="none"  strokeWidth ='6' stroke="#0ff" filter = 'url(glow)' opacity="NaN" d="m263,220l1,47l14,8l0,17l-14,8l0,29l-14,2l0,15l16,5l479,-6l31,-19l1,-117l-514,11z" id="svg_1"/>
  <rect fill="green" strokeWidth ='6'  stroke="#0ff" filter = 'url(glowWrong)' x="263" y="168" width="53" height="35" id="svg_2"/>   
  <g 
  transform = 'translate(40 , 0) scale(1.5)'
  >
    
    <text fontSize="24" 
    fontWeight="bold" 
    fill="#0ff" 
    filter = 'url(glow2)' 
    x="270" 
    y="190" 
    id="svg_3"
    >The Kuiper Belt </text>
  </g>
    </Link>
 </g>


  <g   
 transform="translate(210, 150) scale(0.4)"  
 cursor= 'pointer'
 >
   <Link to = "/theOortCloud">
  <path id="svg_14" d="m73,245c47,-64 47,-64 47,-64l-47,64z" opacity="NaN" stroke="#0ff"  filter='url(#glow)' fill="none" strokeWidth = '6'/>
  <path id="svg_15" d="m110,182c86,0 87,0 87,0c0,0 47,61 47,61c0,0 -34,73 -34,73c0,0 -89,1 -89,1c0,0 -44,-73 -44,-73" opacity="NaN" stroke="#0ff"   filter='url(#glow)' fill="none"  strokeWidth = '6' />
  <path stroke="#0ff"  filter='url(#glow)' id="svg_16" d="m116,250c19.60318,-39.67742 20.63492,-41 20.63492,-41c0,0 42.30159,1.32258 44.36508,0" opacity="NaN" fill="none"  strokeWidth = '6' />
  <path stroke="#0ff" filter ='url(glow)'  strokeWidth = '6'  id="svg_17" d="m177.67105,204c25.18421,38.0597 26.32895,39.32836 26.32895,39.32836c0,0 -19.46053,45.67164 -19.46053,45.67164c0,0 -45.78948,0 -45.78948,0c0,0 -21.75,-40.59702 -21.75,-40.59702" opacity="NaN" fill="none"/>
  <path id="svg_21" d="m144,236" opacity="NaN" stroke="#0ff" filter = 'url(glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_22" d="m160,262" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"filter = 'url(glow)' id="svg_23" strokeWidth = '6'  d="m139.62712,224.03922c0,0 37.47458,-1.03922 37.47458,-1.03922c0,0 15.89831,19.7451 15.89831,19.7451c0,0 -15.89831,33.2549 -15.89831,33.2549c0,0 -36.33898,0 -36.33898,0c0,0 -14.76271,-24.94118 -14.76271,-24.94118c0,0 13.62712,-27.01961 13.62712,-27.01961l-0.00001,0.00001z" opacity="NaN" fill="none"/>
  <path id="svg_24" d="m145,217" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_25" d="m141,217c40,0 40,0 40,0c0,0 17,20 14,23" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path d="m99,232c0,0 0,-1 0,-2c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.61732,-1.07613 1,-2c0.5412,-1.30656 1.07612,-1.61731 2,-2c1.30656,-0.5412 2,-2 3,-2c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 1,-1 1,-2c0,-1 0.70711,-2.29289 0,-3c-0.70711,-0.70711 -1.29289,1.29289 -2,2c-0.70711,0.70711 -1.07612,0.61731 -2,1c-1.30656,0.5412 -2.4588,1.69344 -3,3c-0.38268,0.92387 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,2c-1,1 -2.29289,1.29289 -3,2c-0.70711,0.70711 -0.61732,1.07613 -1,2c-0.5412,1.30656 -1.29289,1.29289 -2,2c-0.70711,0.70711 0,2 1,2l1,-1l0,-1l1,0" id="svg_26" strokeWidth = '6'  stroke="#0ff"    filter='url(#glow)'  fill="none"/>
  <path d="m128,195c1,0 1,-1 2,-1c1,0 2,0 3,0c1,0 2,0 3,0c3,0 4,0 5,0c1,0 2.07613,-0.38269 3,0c1.30656,0.5412 2,1 4,1c1,0 1.69344,0.4588 3,1c0.92387,0.38269 2,1 4,1c1,0 3,0 4,0c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 1.70711,-1.29289 1,-2c-0.70711,-0.70711 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -3.02582,0.32036 -5,0c-3.12144,-0.50655 -4,-1 -5,-1c-1,0 -2,0 -3,0c-1,0 -1,1 -2,2l0,1" id="svg_27" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6'  fill="none"/>
  <path d="m192,196c0,0 0.29289,0.29289 1,1c0.70711,0.70711 1,1 2,2c1,1 2,1 2,2c0,1 0.29289,1.29289 1,2c0.70711,0.70711 1,1 2,1c1,0 1.29289,0.29289 2,1c0.70711,0.70711 1.29289,1.29289 2,2c0.70711,0.70711 1.4588,0.69344 2,2c0.38269,0.92387 2.4588,1.69344 3,3c0.38269,0.92387 0,2 -1,2c-1,0 -1,-1 -2,-1c-1,0 -2,-1 -3,-1c-1,0 -2.29289,-1.29289 -3,-2c-0.70711,-0.70711 0,-2 0,-3c0,-1 -0.29289,-1.29289 -1,-2c-0.70711,-0.70711 -1.07613,-0.61731 -2,-1c-1.30656,-0.5412 -2,-1 -3,-2c-1,-1 -2,-1 -3,-1l-1,0" id="svg_28" stroke="#0ff"   filter='url(#glow)' strokeWidth = '6' fill="none"/>
  <path d="m215,241c0,0 0.38269,1.07613 0,2c-0.5412,1.30656 -1,2 -1,4c0,1 -0.4588,1.69344 -1,3c-0.38269,0.92387 0.70711,3.29289 0,4c-0.70711,0.70711 -1,1 -1,2c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 0,2 0,3c0,1 -1,2 -1,3c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1.29289,1.29291 -2,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-1.41422,1.41422 -0.29289,3.29291 -1,4c-0.70711,0.70709 -1.70711,0.70709 -1,0c0.70711,-0.70709 1.29289,-1.29291 2,-2c0.70711,-0.70709 1.29289,-0.29291 2,-1c0.70711,-0.70709 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1.4588,-1.69345 2,-3c0.38269,-0.92389 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1,-2 1,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 0,-2 0,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 2,0 3,0c1,0 2,0 2,1c0,1 -0.29289,1.29289 -1,2c-0.70711,0.70711 -0.69344,1.4588 -2,2c-0.92387,0.38269 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,1c-1,0 -0.61731,1.07613 -1,2c-0.5412,1.30655 -0.71022,2.04291 -1,3c-1.04483,3.45084 -2.4588,3.69345 -3,5c-0.38269,0.92389 -0.29289,1.29291 -1,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1,1 -1,2l-1,0" id="svg_29" strokeWidth = '6' stroke="#0ff"  filter='url(#glow)'  fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_33" d="m94,193c22,-26 21,-27 21,-27c0,0 97,0 97,0c0,0 25,31 25,31" opacity="NaN"    strokeWidth = '6' fill="none"/>
  <path stroke="#0ff" filter = 'url(glow)' id="svg_34" d="m99,312c19,24 19,24 19,24c0,0 100,0 102,-2" opacity="NaN" strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_35" d="m220,333c12,-23 12,-23 12,-23" opacity="NaN"  strokeWidth = '6' fill="none"/>
  <path id="svg_39" strokeWidth = '6'  d="m166.00001,371.13889c98.51232,-0.30556 97.51724,-0.30556 97.51724,-0.30556c0,0 17.91133,9.16667 17.91133,9.16667c0,0 58.70936,-0.30556 58.70936,-0.30556c0,0 20.89655,-7.94444 20.89655,-7.94444c-4,0 410.96552,-2.75 410.96552,-2.75" opacity="NaN" fill="none" stroke="#0ff" filter = 'url(glow)' />
  <path id="svg_40" strokeWidth = '6'  d="m748,357c37,-23 37,-23 37,-23c0,0 2,-153 2,-153c0,0 -31,-25 -31,-25c0,0 -492,6 -492,6" opacity="NaN" stroke="#0ff"  filter= 'url(glow)' fill="none"/>
  <path id="svg_41" strokeWidth = '6'  d="m227,170c30,0 30,0 30,0c0,0 1,39 1,39c0,0 63,0 63,0c0,0 0,-39 0,-39" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_42" strokeWidth = '6'  d="m320,199c402,-6 402,-5 402,-6c0,-1 -804,12 -402,6z" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  {/* <path id="svg_43" strokeWidth = '6'  d="m1121,455c0,41 -1,83 0,41c1,-42 0,-82 0,-41z" opacity="NaN" stroke="green" filter = 'url(glow)'  fill="none"/> */}
  <path id="svg_44" strokeWidth = '6'  d="m722,194l-1,-39l46,1l1,35" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_38" strokeWidth = '6'  d="m137,353.6c102.6899,-1.6 102.6899,-1.6 102.6899,-1.6c0,0 25.67248,8 25.67248,8c0,0 485.63766,-3.6 485.63766,-3.6" opacity="NaN" fill="none" filter = 'url(glow)' stroke="#0ff"/>
  <path id="svg_36" strokeWidth = '6'  d="m199,345c33,0 34,1 34,1c0,0 12,-18 12,-18" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' fill="none"/>
  <path id="svg_46" strokeWidth = '6'  d="m301,322" opacity="NaN" stroke="green"   filter = 'url(glow)' fill="none"/>
  <path fill="none"  strokeWidth ='6' stroke="#0ff" filter = 'url(glow)' opacity="NaN" d="m263,220l1,47l14,8l0,17l-14,8l0,29l-14,2l0,15l16,5l479,-6l31,-19l1,-117l-514,11z" id="svg_1"/>
  <rect fill="#00FF0D" strokeWidth ='6'  stroke="#0ff" filter = 'url(glow)' x="263" y="168" width="53" height="35" id="svg_2"/>   
  <g 
  transform = 'translate(40 , 0) scale(1.5)'
  >
    <text fontSize="24" 
    fontWeight="bold" 
    fill="#0ff" 
    filter = 'url(glow2)' 
    x="270" 
    y="190" 
    id="svg_3"
    > The Oort Cloud </text>  
  </g>
  </Link>
 </g>


  <g   
 transform="translate(210, 250) scale(0.4)"  
 cursor= 'pointer'
 >
   <Link to = "/milkyWayGalaxy">
  <path id="svg_14" d="m73,245c47,-64 47,-64 47,-64l-47,64z" opacity="NaN" stroke="#0ff"  filter='url(#glow)' fill="none" strokeWidth = '6'/>
  <path id="svg_15" d="m110,182c86,0 87,0 87,0c0,0 47,61 47,61c0,0 -34,73 -34,73c0,0 -89,1 -89,1c0,0 -44,-73 -44,-73" opacity="NaN" stroke="#0ff"   filter='url(#glow)' fill="none"  strokeWidth = '6' />
  <path stroke="#0ff"  filter='url(#glow)' id="svg_16" d="m116,250c19.60318,-39.67742 20.63492,-41 20.63492,-41c0,0 42.30159,1.32258 44.36508,0" opacity="NaN" fill="none"  strokeWidth = '6' />
  <path stroke="#0ff" filter ='url(glow)'  strokeWidth = '6'  id="svg_17" d="m177.67105,204c25.18421,38.0597 26.32895,39.32836 26.32895,39.32836c0,0 -19.46053,45.67164 -19.46053,45.67164c0,0 -45.78948,0 -45.78948,0c0,0 -21.75,-40.59702 -21.75,-40.59702" opacity="NaN" fill="none"/>
  <path id="svg_21" d="m144,236" opacity="NaN" stroke="#0ff" filter = 'url(glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_22" d="m160,262" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"filter = 'url(glow)' id="svg_23" strokeWidth = '6'  d="m139.62712,224.03922c0,0 37.47458,-1.03922 37.47458,-1.03922c0,0 15.89831,19.7451 15.89831,19.7451c0,0 -15.89831,33.2549 -15.89831,33.2549c0,0 -36.33898,0 -36.33898,0c0,0 -14.76271,-24.94118 -14.76271,-24.94118c0,0 13.62712,-27.01961 13.62712,-27.01961l-0.00001,0.00001z" opacity="NaN" fill="none"/>
  <path id="svg_24" d="m145,217" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_25" d="m141,217c40,0 40,0 40,0c0,0 17,20 14,23" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path d="m99,232c0,0 0,-1 0,-2c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.61732,-1.07613 1,-2c0.5412,-1.30656 1.07612,-1.61731 2,-2c1.30656,-0.5412 2,-2 3,-2c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 1,-1 1,-2c0,-1 0.70711,-2.29289 0,-3c-0.70711,-0.70711 -1.29289,1.29289 -2,2c-0.70711,0.70711 -1.07612,0.61731 -2,1c-1.30656,0.5412 -2.4588,1.69344 -3,3c-0.38268,0.92387 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,2c-1,1 -2.29289,1.29289 -3,2c-0.70711,0.70711 -0.61732,1.07613 -1,2c-0.5412,1.30656 -1.29289,1.29289 -2,2c-0.70711,0.70711 0,2 1,2l1,-1l0,-1l1,0" id="svg_26" strokeWidth = '6'  stroke="#0ff"    filter='url(#glow)'  fill="none"/>
  <path d="m128,195c1,0 1,-1 2,-1c1,0 2,0 3,0c1,0 2,0 3,0c3,0 4,0 5,0c1,0 2.07613,-0.38269 3,0c1.30656,0.5412 2,1 4,1c1,0 1.69344,0.4588 3,1c0.92387,0.38269 2,1 4,1c1,0 3,0 4,0c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 1.70711,-1.29289 1,-2c-0.70711,-0.70711 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -3.02582,0.32036 -5,0c-3.12144,-0.50655 -4,-1 -5,-1c-1,0 -2,0 -3,0c-1,0 -1,1 -2,2l0,1" id="svg_27" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6'  fill="none"/>
  <path d="m192,196c0,0 0.29289,0.29289 1,1c0.70711,0.70711 1,1 2,2c1,1 2,1 2,2c0,1 0.29289,1.29289 1,2c0.70711,0.70711 1,1 2,1c1,0 1.29289,0.29289 2,1c0.70711,0.70711 1.29289,1.29289 2,2c0.70711,0.70711 1.4588,0.69344 2,2c0.38269,0.92387 2.4588,1.69344 3,3c0.38269,0.92387 0,2 -1,2c-1,0 -1,-1 -2,-1c-1,0 -2,-1 -3,-1c-1,0 -2.29289,-1.29289 -3,-2c-0.70711,-0.70711 0,-2 0,-3c0,-1 -0.29289,-1.29289 -1,-2c-0.70711,-0.70711 -1.07613,-0.61731 -2,-1c-1.30656,-0.5412 -2,-1 -3,-2c-1,-1 -2,-1 -3,-1l-1,0" id="svg_28" stroke="#0ff"   filter='url(#glow)' strokeWidth = '6' fill="none"/>
  <path d="m215,241c0,0 0.38269,1.07613 0,2c-0.5412,1.30656 -1,2 -1,4c0,1 -0.4588,1.69344 -1,3c-0.38269,0.92387 0.70711,3.29289 0,4c-0.70711,0.70711 -1,1 -1,2c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 0,2 0,3c0,1 -1,2 -1,3c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1.29289,1.29291 -2,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-1.41422,1.41422 -0.29289,3.29291 -1,4c-0.70711,0.70709 -1.70711,0.70709 -1,0c0.70711,-0.70709 1.29289,-1.29291 2,-2c0.70711,-0.70709 1.29289,-0.29291 2,-1c0.70711,-0.70709 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1.4588,-1.69345 2,-3c0.38269,-0.92389 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1,-2 1,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 0,-2 0,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 2,0 3,0c1,0 2,0 2,1c0,1 -0.29289,1.29289 -1,2c-0.70711,0.70711 -0.69344,1.4588 -2,2c-0.92387,0.38269 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,1c-1,0 -0.61731,1.07613 -1,2c-0.5412,1.30655 -0.71022,2.04291 -1,3c-1.04483,3.45084 -2.4588,3.69345 -3,5c-0.38269,0.92389 -0.29289,1.29291 -1,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1,1 -1,2l-1,0" id="svg_29" strokeWidth = '6' stroke="#0ff"  filter='url(#glow)'  fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_33" d="m94,193c22,-26 21,-27 21,-27c0,0 97,0 97,0c0,0 25,31 25,31" opacity="NaN"    strokeWidth = '6' fill="none"/>
  <path stroke="#0ff" filter = 'url(glow)' id="svg_34" d="m99,312c19,24 19,24 19,24c0,0 100,0 102,-2" opacity="NaN" strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_35" d="m220,333c12,-23 12,-23 12,-23" opacity="NaN"  strokeWidth = '6' fill="none"/>
  <path id="svg_39" strokeWidth = '6'  d="m166.00001,371.13889c98.51232,-0.30556 97.51724,-0.30556 97.51724,-0.30556c0,0 17.91133,9.16667 17.91133,9.16667c0,0 58.70936,-0.30556 58.70936,-0.30556c0,0 20.89655,-7.94444 20.89655,-7.94444c-4,0 410.96552,-2.75 410.96552,-2.75" opacity="NaN" fill="none" stroke="#0ff" filter = 'url(glow)' />
  <path id="svg_40" strokeWidth = '6'  d="m748,357c37,-23 37,-23 37,-23c0,0 2,-153 2,-153c0,0 -31,-25 -31,-25c0,0 -492,6 -492,6" opacity="NaN" stroke="#0ff"  filter= 'url(glow)' fill="none"/>
  <path id="svg_41" strokeWidth = '6'  d="m227,170c30,0 30,0 30,0c0,0 1,39 1,39c0,0 63,0 63,0c0,0 0,-39 0,-39" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_42" strokeWidth = '6'  d="m320,199c402,-6 402,-5 402,-6c0,-1 -804,12 -402,6z" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  {/* <path id="svg_43" strokeWidth = '6'  d="m1121,455c0,41 -1,83 0,41c1,-42 0,-82 0,-41z" opacity="NaN" stroke="green" filter = 'url(glow)'  fill="none"/> */}
  <path id="svg_44" strokeWidth = '6'  d="m722,194l-1,-39l46,1l1,35" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_38" strokeWidth = '6'  d="m137,353.6c102.6899,-1.6 102.6899,-1.6 102.6899,-1.6c0,0 25.67248,8 25.67248,8c0,0 485.63766,-3.6 485.63766,-3.6" opacity="NaN" fill="none" filter = 'url(glow)' stroke="#0ff"/>
  <path id="svg_36" strokeWidth = '6'  d="m199,345c33,0 34,1 34,1c0,0 12,-18 12,-18" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' fill="none"/>
  <path id="svg_46" strokeWidth = '6'  d="m301,322" opacity="NaN" stroke="green"   filter = 'url(glow)' fill="none"/>
  <path fill="none"  strokeWidth ='6' stroke="#0ff" filter = 'url(glow)' opacity="NaN" d="m263,220l1,47l14,8l0,17l-14,8l0,29l-14,2l0,15l16,5l479,-6l31,-19l1,-117l-514,11z" id="svg_1"/>
  <rect fill="#00FF0D" strokeWidth ='6'  stroke="#0ff" filter = 'url(glowCorrect)' x="263" y="168" width="53" height="35" id="svg_2"/>   
  <g 
  transform = 'translate(-20 , 0) scale(1.5)'
  >
    <text fontSize="24" 
    fontWeight="bold" 
    fill="#0ff" 
    filter = 'url(glow2)' 
    x="270" 
    y="190" 
    id="svg_3"
    >Milky Way Galaxy</text>  
  </g>
  </Link>
 </g>

   <g   
 transform="translate(210, 350) scale(0.4)"  
 cursor= 'pointer'
 >
   <Link to = "/meteorsAndMeteorites">
  <path id="svg_14" d="m73,245c47,-64 47,-64 47,-64l-47,64z" opacity="NaN" stroke="#0ff"  filter='url(#glow)' fill="none" strokeWidth = '6'/>
  <path id="svg_15" d="m110,182c86,0 87,0 87,0c0,0 47,61 47,61c0,0 -34,73 -34,73c0,0 -89,1 -89,1c0,0 -44,-73 -44,-73" opacity="NaN" stroke="#0ff"   filter='url(#glow)' fill="none"  strokeWidth = '6' />
  <path stroke="#0ff"  filter='url(#glow)' id="svg_16" d="m116,250c19.60318,-39.67742 20.63492,-41 20.63492,-41c0,0 42.30159,1.32258 44.36508,0" opacity="NaN" fill="none"  strokeWidth = '6' />
  <path stroke="#0ff" filter ='url(glow)'  strokeWidth = '6'  id="svg_17" d="m177.67105,204c25.18421,38.0597 26.32895,39.32836 26.32895,39.32836c0,0 -19.46053,45.67164 -19.46053,45.67164c0,0 -45.78948,0 -45.78948,0c0,0 -21.75,-40.59702 -21.75,-40.59702" opacity="NaN" fill="none"/>
  <path id="svg_21" d="m144,236" opacity="NaN" stroke="#0ff" filter = 'url(glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_22" d="m160,262" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"filter = 'url(glow)' id="svg_23" strokeWidth = '6'  d="m139.62712,224.03922c0,0 37.47458,-1.03922 37.47458,-1.03922c0,0 15.89831,19.7451 15.89831,19.7451c0,0 -15.89831,33.2549 -15.89831,33.2549c0,0 -36.33898,0 -36.33898,0c0,0 -14.76271,-24.94118 -14.76271,-24.94118c0,0 13.62712,-27.01961 13.62712,-27.01961l-0.00001,0.00001z" opacity="NaN" fill="none"/>
  <path id="svg_24" d="m145,217" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_25" d="m141,217c40,0 40,0 40,0c0,0 17,20 14,23" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path d="m99,232c0,0 0,-1 0,-2c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.61732,-1.07613 1,-2c0.5412,-1.30656 1.07612,-1.61731 2,-2c1.30656,-0.5412 2,-2 3,-2c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 1,-1 1,-2c0,-1 0.70711,-2.29289 0,-3c-0.70711,-0.70711 -1.29289,1.29289 -2,2c-0.70711,0.70711 -1.07612,0.61731 -2,1c-1.30656,0.5412 -2.4588,1.69344 -3,3c-0.38268,0.92387 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,2c-1,1 -2.29289,1.29289 -3,2c-0.70711,0.70711 -0.61732,1.07613 -1,2c-0.5412,1.30656 -1.29289,1.29289 -2,2c-0.70711,0.70711 0,2 1,2l1,-1l0,-1l1,0" id="svg_26" strokeWidth = '6'  stroke="#0ff"    filter='url(#glow)'  fill="none"/>
  <path d="m128,195c1,0 1,-1 2,-1c1,0 2,0 3,0c1,0 2,0 3,0c3,0 4,0 5,0c1,0 2.07613,-0.38269 3,0c1.30656,0.5412 2,1 4,1c1,0 1.69344,0.4588 3,1c0.92387,0.38269 2,1 4,1c1,0 3,0 4,0c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 1.70711,-1.29289 1,-2c-0.70711,-0.70711 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -3.02582,0.32036 -5,0c-3.12144,-0.50655 -4,-1 -5,-1c-1,0 -2,0 -3,0c-1,0 -1,1 -2,2l0,1" id="svg_27" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6'  fill="none"/>
  <path d="m192,196c0,0 0.29289,0.29289 1,1c0.70711,0.70711 1,1 2,2c1,1 2,1 2,2c0,1 0.29289,1.29289 1,2c0.70711,0.70711 1,1 2,1c1,0 1.29289,0.29289 2,1c0.70711,0.70711 1.29289,1.29289 2,2c0.70711,0.70711 1.4588,0.69344 2,2c0.38269,0.92387 2.4588,1.69344 3,3c0.38269,0.92387 0,2 -1,2c-1,0 -1,-1 -2,-1c-1,0 -2,-1 -3,-1c-1,0 -2.29289,-1.29289 -3,-2c-0.70711,-0.70711 0,-2 0,-3c0,-1 -0.29289,-1.29289 -1,-2c-0.70711,-0.70711 -1.07613,-0.61731 -2,-1c-1.30656,-0.5412 -2,-1 -3,-2c-1,-1 -2,-1 -3,-1l-1,0" id="svg_28" stroke="#0ff"   filter='url(#glow)' strokeWidth = '6' fill="none"/>
  <path d="m215,241c0,0 0.38269,1.07613 0,2c-0.5412,1.30656 -1,2 -1,4c0,1 -0.4588,1.69344 -1,3c-0.38269,0.92387 0.70711,3.29289 0,4c-0.70711,0.70711 -1,1 -1,2c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 0,2 0,3c0,1 -1,2 -1,3c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1.29289,1.29291 -2,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-1.41422,1.41422 -0.29289,3.29291 -1,4c-0.70711,0.70709 -1.70711,0.70709 -1,0c0.70711,-0.70709 1.29289,-1.29291 2,-2c0.70711,-0.70709 1.29289,-0.29291 2,-1c0.70711,-0.70709 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1.4588,-1.69345 2,-3c0.38269,-0.92389 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1,-2 1,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 0,-2 0,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 2,0 3,0c1,0 2,0 2,1c0,1 -0.29289,1.29289 -1,2c-0.70711,0.70711 -0.69344,1.4588 -2,2c-0.92387,0.38269 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,1c-1,0 -0.61731,1.07613 -1,2c-0.5412,1.30655 -0.71022,2.04291 -1,3c-1.04483,3.45084 -2.4588,3.69345 -3,5c-0.38269,0.92389 -0.29289,1.29291 -1,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1,1 -1,2l-1,0" id="svg_29" strokeWidth = '6' stroke="#0ff"  filter='url(#glow)'  fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_33" d="m94,193c22,-26 21,-27 21,-27c0,0 97,0 97,0c0,0 25,31 25,31" opacity="NaN"    strokeWidth = '6' fill="none"/>
  <path stroke="#0ff" filter = 'url(glow)' id="svg_34" d="m99,312c19,24 19,24 19,24c0,0 100,0 102,-2" opacity="NaN" strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_35" d="m220,333c12,-23 12,-23 12,-23" opacity="NaN"  strokeWidth = '6' fill="none"/>
  <path id="svg_39" strokeWidth = '6'  d="m166.00001,371.13889c98.51232,-0.30556 97.51724,-0.30556 97.51724,-0.30556c0,0 17.91133,9.16667 17.91133,9.16667c0,0 58.70936,-0.30556 58.70936,-0.30556c0,0 20.89655,-7.94444 20.89655,-7.94444c-4,0 410.96552,-2.75 410.96552,-2.75" opacity="NaN" fill="none" stroke="#0ff" filter = 'url(glow)' />
  <path id="svg_40" strokeWidth = '6'  d="m748,357c37,-23 37,-23 37,-23c0,0 2,-153 2,-153c0,0 -31,-25 -31,-25c0,0 -492,6 -492,6" opacity="NaN" stroke="#0ff"  filter= 'url(glow)' fill="none"/>
  <path id="svg_41" strokeWidth = '6'  d="m227,170c30,0 30,0 30,0c0,0 1,39 1,39c0,0 63,0 63,0c0,0 0,-39 0,-39" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_42" strokeWidth = '6'  d="m320,199c402,-6 402,-5 402,-6c0,-1 -804,12 -402,6z" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  {/* <path id="svg_43" strokeWidth = '6'  d="m1121,455c0,41 -1,83 0,41c1,-42 0,-82 0,-41z" opacity="NaN" stroke="green" filter = 'url(glow)'  fill="none"/> */}
  <path id="svg_44" strokeWidth = '6'  d="m722,194l-1,-39l46,1l1,35" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_38" strokeWidth = '6'  d="m137,353.6c102.6899,-1.6 102.6899,-1.6 102.6899,-1.6c0,0 25.67248,8 25.67248,8c0,0 485.63766,-3.6 485.63766,-3.6" opacity="NaN" fill="none" filter = 'url(glow)' stroke="#0ff"/>
  <path id="svg_36" strokeWidth = '6'  d="m199,345c33,0 34,1 34,1c0,0 12,-18 12,-18" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' fill="none"/>
  <path id="svg_46" strokeWidth = '6'  d="m301,322" opacity="NaN" stroke="green"   filter = 'url(glow)' fill="none"/>
  <path fill="none"  strokeWidth ='6' stroke="#0ff" filter = 'url(glow)' opacity="NaN" d="m263,220l1,47l14,8l0,17l-14,8l0,29l-14,2l0,15l16,5l479,-6l31,-19l1,-117l-514,11z" id="svg_1"/>
  <rect fill="#00FF0D" strokeWidth ='6'  stroke="#0ff" filter = 'url(glow)' x="263" y="168" width="53" height="35" id="svg_2"/>   
  <g 
  transform = 'translate(40 , 0) scale(1.5)'
  >
    <text fontSize="24" 
    fontWeight="bold" 
    fill="#0ff" 
    filter = 'url(glow2)' 
    x="200" 
    y="190" 
    id="svg_3"
    > Meteors And Meteorites </text>  
  </g>
  </Link>
 </g>


   <g   
 transform="translate(530, 45) scale(0.4)"  
 cursor= 'pointer'
 >
   <Link to = "/comets">
  <path id="svg_14" d="m73,245c47,-64 47,-64 47,-64l-47,64z" opacity="NaN" stroke="#0ff"  filter='url(#glow)' fill="none" strokeWidth = '6'/>
  <path id="svg_15" d="m110,182c86,0 87,0 87,0c0,0 47,61 47,61c0,0 -34,73 -34,73c0,0 -89,1 -89,1c0,0 -44,-73 -44,-73" opacity="NaN" stroke="#0ff"   filter='url(#glow)' fill="none"  strokeWidth = '6' />
  <path stroke="#0ff"  filter='url(#glow)' id="svg_16" d="m116,250c19.60318,-39.67742 20.63492,-41 20.63492,-41c0,0 42.30159,1.32258 44.36508,0" opacity="NaN" fill="none"  strokeWidth = '6' />
  <path stroke="#0ff" filter ='url(glow)'  strokeWidth = '6'  id="svg_17" d="m177.67105,204c25.18421,38.0597 26.32895,39.32836 26.32895,39.32836c0,0 -19.46053,45.67164 -19.46053,45.67164c0,0 -45.78948,0 -45.78948,0c0,0 -21.75,-40.59702 -21.75,-40.59702" opacity="NaN" fill="none"/>
  <path id="svg_21" d="m144,236" opacity="NaN" stroke="#0ff" filter = 'url(glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_22" d="m160,262" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"filter = 'url(glow)' id="svg_23" strokeWidth = '6'  d="m139.62712,224.03922c0,0 37.47458,-1.03922 37.47458,-1.03922c0,0 15.89831,19.7451 15.89831,19.7451c0,0 -15.89831,33.2549 -15.89831,33.2549c0,0 -36.33898,0 -36.33898,0c0,0 -14.76271,-24.94118 -14.76271,-24.94118c0,0 13.62712,-27.01961 13.62712,-27.01961l-0.00001,0.00001z" opacity="NaN" fill="none"/>
  <path id="svg_24" d="m145,217" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_25" d="m141,217c40,0 40,0 40,0c0,0 17,20 14,23" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path d="m99,232c0,0 0,-1 0,-2c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.61732,-1.07613 1,-2c0.5412,-1.30656 1.07612,-1.61731 2,-2c1.30656,-0.5412 2,-2 3,-2c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 1,-1 1,-2c0,-1 0.70711,-2.29289 0,-3c-0.70711,-0.70711 -1.29289,1.29289 -2,2c-0.70711,0.70711 -1.07612,0.61731 -2,1c-1.30656,0.5412 -2.4588,1.69344 -3,3c-0.38268,0.92387 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,2c-1,1 -2.29289,1.29289 -3,2c-0.70711,0.70711 -0.61732,1.07613 -1,2c-0.5412,1.30656 -1.29289,1.29289 -2,2c-0.70711,0.70711 0,2 1,2l1,-1l0,-1l1,0" id="svg_26" strokeWidth = '6'  stroke="#0ff"    filter='url(#glow)'  fill="none"/>
  <path d="m128,195c1,0 1,-1 2,-1c1,0 2,0 3,0c1,0 2,0 3,0c3,0 4,0 5,0c1,0 2.07613,-0.38269 3,0c1.30656,0.5412 2,1 4,1c1,0 1.69344,0.4588 3,1c0.92387,0.38269 2,1 4,1c1,0 3,0 4,0c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 1.70711,-1.29289 1,-2c-0.70711,-0.70711 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -3.02582,0.32036 -5,0c-3.12144,-0.50655 -4,-1 -5,-1c-1,0 -2,0 -3,0c-1,0 -1,1 -2,2l0,1" id="svg_27" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6'  fill="none"/>
  <path d="m192,196c0,0 0.29289,0.29289 1,1c0.70711,0.70711 1,1 2,2c1,1 2,1 2,2c0,1 0.29289,1.29289 1,2c0.70711,0.70711 1,1 2,1c1,0 1.29289,0.29289 2,1c0.70711,0.70711 1.29289,1.29289 2,2c0.70711,0.70711 1.4588,0.69344 2,2c0.38269,0.92387 2.4588,1.69344 3,3c0.38269,0.92387 0,2 -1,2c-1,0 -1,-1 -2,-1c-1,0 -2,-1 -3,-1c-1,0 -2.29289,-1.29289 -3,-2c-0.70711,-0.70711 0,-2 0,-3c0,-1 -0.29289,-1.29289 -1,-2c-0.70711,-0.70711 -1.07613,-0.61731 -2,-1c-1.30656,-0.5412 -2,-1 -3,-2c-1,-1 -2,-1 -3,-1l-1,0" id="svg_28" stroke="#0ff"   filter='url(#glow)' strokeWidth = '6' fill="none"/>
  <path d="m215,241c0,0 0.38269,1.07613 0,2c-0.5412,1.30656 -1,2 -1,4c0,1 -0.4588,1.69344 -1,3c-0.38269,0.92387 0.70711,3.29289 0,4c-0.70711,0.70711 -1,1 -1,2c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 0,2 0,3c0,1 -1,2 -1,3c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1.29289,1.29291 -2,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-1.41422,1.41422 -0.29289,3.29291 -1,4c-0.70711,0.70709 -1.70711,0.70709 -1,0c0.70711,-0.70709 1.29289,-1.29291 2,-2c0.70711,-0.70709 1.29289,-0.29291 2,-1c0.70711,-0.70709 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1.4588,-1.69345 2,-3c0.38269,-0.92389 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1,-2 1,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 0,-2 0,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 2,0 3,0c1,0 2,0 2,1c0,1 -0.29289,1.29289 -1,2c-0.70711,0.70711 -0.69344,1.4588 -2,2c-0.92387,0.38269 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,1c-1,0 -0.61731,1.07613 -1,2c-0.5412,1.30655 -0.71022,2.04291 -1,3c-1.04483,3.45084 -2.4588,3.69345 -3,5c-0.38269,0.92389 -0.29289,1.29291 -1,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1,1 -1,2l-1,0" id="svg_29" strokeWidth = '6' stroke="#0ff"  filter='url(#glow)'  fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_33" d="m94,193c22,-26 21,-27 21,-27c0,0 97,0 97,0c0,0 25,31 25,31" opacity="NaN"    strokeWidth = '6' fill="none"/>
  <path stroke="#0ff" filter = 'url(glow)' id="svg_34" d="m99,312c19,24 19,24 19,24c0,0 100,0 102,-2" opacity="NaN" strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_35" d="m220,333c12,-23 12,-23 12,-23" opacity="NaN"  strokeWidth = '6' fill="none"/>
  <path id="svg_39" strokeWidth = '6'  d="m166.00001,371.13889c98.51232,-0.30556 97.51724,-0.30556 97.51724,-0.30556c0,0 17.91133,9.16667 17.91133,9.16667c0,0 58.70936,-0.30556 58.70936,-0.30556c0,0 20.89655,-7.94444 20.89655,-7.94444c-4,0 410.96552,-2.75 410.96552,-2.75" opacity="NaN" fill="none" stroke="#0ff" filter = 'url(glow)' />
  <path id="svg_40" strokeWidth = '6'  d="m748,357c37,-23 37,-23 37,-23c0,0 2,-153 2,-153c0,0 -31,-25 -31,-25c0,0 -492,6 -492,6" opacity="NaN" stroke="#0ff"  filter= 'url(glow)' fill="none"/>
  <path id="svg_41" strokeWidth = '6'  d="m227,170c30,0 30,0 30,0c0,0 1,39 1,39c0,0 63,0 63,0c0,0 0,-39 0,-39" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_42" strokeWidth = '6'  d="m320,199c402,-6 402,-5 402,-6c0,-1 -804,12 -402,6z" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  {/* <path id="svg_43" strokeWidth = '6'  d="m1121,455c0,41 -1,83 0,41c1,-42 0,-82 0,-41z" opacity="NaN" stroke="green" filter = 'url(glow)'  fill="none"/> */}
  <path id="svg_44" strokeWidth = '6'  d="m722,194l-1,-39l46,1l1,35" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_38" strokeWidth = '6'  d="m137,353.6c102.6899,-1.6 102.6899,-1.6 102.6899,-1.6c0,0 25.67248,8 25.67248,8c0,0 485.63766,-3.6 485.63766,-3.6" opacity="NaN" fill="none" filter = 'url(glow)' stroke="#0ff"/>
  <path id="svg_36" strokeWidth = '6'  d="m199,345c33,0 34,1 34,1c0,0 12,-18 12,-18" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' fill="none"/>
  <path id="svg_46" strokeWidth = '6'  d="m301,322" opacity="NaN" stroke="green"   filter = 'url(glow)' fill="none"/>
  <path fill="none"  strokeWidth ='6' stroke="#0ff" filter = 'url(glow)' opacity="NaN" d="m263,220l1,47l14,8l0,17l-14,8l0,29l-14,2l0,15l16,5l479,-6l31,-19l1,-117l-514,11z" id="svg_1"/>
  <rect fill="#00FF0D" strokeWidth ='6'  stroke="#0ff" filter = 'url(glow)' x="263" y="168" width="53" height="35" id="svg_2"/>   
  <g 
  transform = 'translate(10 , 0) scale(1.5)'
  >
    <text fontSize="24" 
    fontWeight="bold" 
    fill="#0ff" 
    filter = 'url(glow2)' 
    x="270" 
    y="190" 
    id="svg_3"
    > Comets </text>  
  </g>
  </Link>
 </g>

      <g   
 transform="translate(530, 150) scale(0.4)"  
 cursor= 'pointer'
 >
   <Link to = "/bigBangTheory">
  <path id="svg_14" d="m73,245c47,-64 47,-64 47,-64l-47,64z" opacity="NaN" stroke="#0ff"  filter='url(#glow)' fill="none" strokeWidth = '6'/>
  <path id="svg_15" d="m110,182c86,0 87,0 87,0c0,0 47,61 47,61c0,0 -34,73 -34,73c0,0 -89,1 -89,1c0,0 -44,-73 -44,-73" opacity="NaN" stroke="#0ff"   filter='url(#glow)' fill="none"  strokeWidth = '6' />
  <path stroke="#0ff"  filter='url(#glow)' id="svg_16" d="m116,250c19.60318,-39.67742 20.63492,-41 20.63492,-41c0,0 42.30159,1.32258 44.36508,0" opacity="NaN" fill="none"  strokeWidth = '6' />
  <path stroke="#0ff" filter ='url(glow)'  strokeWidth = '6'  id="svg_17" d="m177.67105,204c25.18421,38.0597 26.32895,39.32836 26.32895,39.32836c0,0 -19.46053,45.67164 -19.46053,45.67164c0,0 -45.78948,0 -45.78948,0c0,0 -21.75,-40.59702 -21.75,-40.59702" opacity="NaN" fill="none"/>
  <path id="svg_21" d="m144,236" opacity="NaN" stroke="#0ff" filter = 'url(glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_22" d="m160,262" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"filter = 'url(glow)' id="svg_23" strokeWidth = '6'  d="m139.62712,224.03922c0,0 37.47458,-1.03922 37.47458,-1.03922c0,0 15.89831,19.7451 15.89831,19.7451c0,0 -15.89831,33.2549 -15.89831,33.2549c0,0 -36.33898,0 -36.33898,0c0,0 -14.76271,-24.94118 -14.76271,-24.94118c0,0 13.62712,-27.01961 13.62712,-27.01961l-0.00001,0.00001z" opacity="NaN" fill="none"/>
  <path id="svg_24" d="m145,217" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_25" d="m141,217c40,0 40,0 40,0c0,0 17,20 14,23" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path d="m99,232c0,0 0,-1 0,-2c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.61732,-1.07613 1,-2c0.5412,-1.30656 1.07612,-1.61731 2,-2c1.30656,-0.5412 2,-2 3,-2c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 1,-1 1,-2c0,-1 0.70711,-2.29289 0,-3c-0.70711,-0.70711 -1.29289,1.29289 -2,2c-0.70711,0.70711 -1.07612,0.61731 -2,1c-1.30656,0.5412 -2.4588,1.69344 -3,3c-0.38268,0.92387 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,2c-1,1 -2.29289,1.29289 -3,2c-0.70711,0.70711 -0.61732,1.07613 -1,2c-0.5412,1.30656 -1.29289,1.29289 -2,2c-0.70711,0.70711 0,2 1,2l1,-1l0,-1l1,0" id="svg_26" strokeWidth = '6'  stroke="#0ff"    filter='url(#glow)'  fill="none"/>
  <path d="m128,195c1,0 1,-1 2,-1c1,0 2,0 3,0c1,0 2,0 3,0c3,0 4,0 5,0c1,0 2.07613,-0.38269 3,0c1.30656,0.5412 2,1 4,1c1,0 1.69344,0.4588 3,1c0.92387,0.38269 2,1 4,1c1,0 3,0 4,0c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 1.70711,-1.29289 1,-2c-0.70711,-0.70711 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -3.02582,0.32036 -5,0c-3.12144,-0.50655 -4,-1 -5,-1c-1,0 -2,0 -3,0c-1,0 -1,1 -2,2l0,1" id="svg_27" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6'  fill="none"/>
  <path d="m192,196c0,0 0.29289,0.29289 1,1c0.70711,0.70711 1,1 2,2c1,1 2,1 2,2c0,1 0.29289,1.29289 1,2c0.70711,0.70711 1,1 2,1c1,0 1.29289,0.29289 2,1c0.70711,0.70711 1.29289,1.29289 2,2c0.70711,0.70711 1.4588,0.69344 2,2c0.38269,0.92387 2.4588,1.69344 3,3c0.38269,0.92387 0,2 -1,2c-1,0 -1,-1 -2,-1c-1,0 -2,-1 -3,-1c-1,0 -2.29289,-1.29289 -3,-2c-0.70711,-0.70711 0,-2 0,-3c0,-1 -0.29289,-1.29289 -1,-2c-0.70711,-0.70711 -1.07613,-0.61731 -2,-1c-1.30656,-0.5412 -2,-1 -3,-2c-1,-1 -2,-1 -3,-1l-1,0" id="svg_28" stroke="#0ff"   filter='url(#glow)' strokeWidth = '6' fill="none"/>
  <path d="m215,241c0,0 0.38269,1.07613 0,2c-0.5412,1.30656 -1,2 -1,4c0,1 -0.4588,1.69344 -1,3c-0.38269,0.92387 0.70711,3.29289 0,4c-0.70711,0.70711 -1,1 -1,2c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 0,2 0,3c0,1 -1,2 -1,3c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1.29289,1.29291 -2,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-1.41422,1.41422 -0.29289,3.29291 -1,4c-0.70711,0.70709 -1.70711,0.70709 -1,0c0.70711,-0.70709 1.29289,-1.29291 2,-2c0.70711,-0.70709 1.29289,-0.29291 2,-1c0.70711,-0.70709 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1.4588,-1.69345 2,-3c0.38269,-0.92389 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1,-2 1,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 0,-2 0,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 2,0 3,0c1,0 2,0 2,1c0,1 -0.29289,1.29289 -1,2c-0.70711,0.70711 -0.69344,1.4588 -2,2c-0.92387,0.38269 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,1c-1,0 -0.61731,1.07613 -1,2c-0.5412,1.30655 -0.71022,2.04291 -1,3c-1.04483,3.45084 -2.4588,3.69345 -3,5c-0.38269,0.92389 -0.29289,1.29291 -1,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1,1 -1,2l-1,0" id="svg_29" strokeWidth = '6' stroke="#0ff"  filter='url(#glow)'  fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_33" d="m94,193c22,-26 21,-27 21,-27c0,0 97,0 97,0c0,0 25,31 25,31" opacity="NaN"    strokeWidth = '6' fill="none"/>
  <path stroke="#0ff" filter = 'url(glow)' id="svg_34" d="m99,312c19,24 19,24 19,24c0,0 100,0 102,-2" opacity="NaN" strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_35" d="m220,333c12,-23 12,-23 12,-23" opacity="NaN"  strokeWidth = '6' fill="none"/>
  <path id="svg_39" strokeWidth = '6'  d="m166.00001,371.13889c98.51232,-0.30556 97.51724,-0.30556 97.51724,-0.30556c0,0 17.91133,9.16667 17.91133,9.16667c0,0 58.70936,-0.30556 58.70936,-0.30556c0,0 20.89655,-7.94444 20.89655,-7.94444c-4,0 410.96552,-2.75 410.96552,-2.75" opacity="NaN" fill="none" stroke="#0ff" filter = 'url(glow)' />
  <path id="svg_40" strokeWidth = '6'  d="m748,357c37,-23 37,-23 37,-23c0,0 2,-153 2,-153c0,0 -31,-25 -31,-25c0,0 -492,6 -492,6" opacity="NaN" stroke="#0ff"  filter= 'url(glow)' fill="none"/>
  <path id="svg_41" strokeWidth = '6'  d="m227,170c30,0 30,0 30,0c0,0 1,39 1,39c0,0 63,0 63,0c0,0 0,-39 0,-39" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_42" strokeWidth = '6'  d="m320,199c402,-6 402,-5 402,-6c0,-1 -804,12 -402,6z" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  {/* <path id="svg_43" strokeWidth = '6'  d="m1121,455c0,41 -1,83 0,41c1,-42 0,-82 0,-41z" opacity="NaN" stroke="green" filter = 'url(glow)'  fill="none"/> */}
  <path id="svg_44" strokeWidth = '6'  d="m722,194l-1,-39l46,1l1,35" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_38" strokeWidth = '6'  d="m137,353.6c102.6899,-1.6 102.6899,-1.6 102.6899,-1.6c0,0 25.67248,8 25.67248,8c0,0 485.63766,-3.6 485.63766,-3.6" opacity="NaN" fill="none" filter = 'url(glow)' stroke="#0ff"/>
  <path id="svg_36" strokeWidth = '6'  d="m199,345c33,0 34,1 34,1c0,0 12,-18 12,-18" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' fill="none"/>
  <path id="svg_46" strokeWidth = '6'  d="m301,322" opacity="NaN" stroke="green"   filter = 'url(glow)' fill="none"/>
  <path fill="none"  strokeWidth ='6' stroke="#0ff" filter = 'url(glow)' opacity="NaN" d="m263,220l1,47l14,8l0,17l-14,8l0,29l-14,2l0,15l16,5l479,-6l31,-19l1,-117l-514,11z" id="svg_1"/>
  <rect fill="#00FF0D" strokeWidth ='6'  stroke="#0ff" filter = 'url(glow)' x="263" y="168" width="53" height="35" id="svg_2"/>   
  <g 
  transform = 'translate(-10 , 0) scale(1.5)'
  >
    <text fontSize="24" 
    fontWeight="bold" 
    fill="#0ff" 
    filter = 'url(glow2)' 
    x="270" 
    y="190" 
    id="svg_3"
    > The Big Bang Theory</text>  
  </g>
  </Link>
 </g>

   <g   
 transform="translate(530, 250) scale(0.4)"  
 cursor= 'pointer'
 >
   <Link to = "/solarSystem">
  <path id="svg_14" d="m73,245c47,-64 47,-64 47,-64l-47,64z" opacity="NaN" stroke="#0ff"  filter='url(#glow)' fill="none" strokeWidth = '6'/>
  <path id="svg_15" d="m110,182c86,0 87,0 87,0c0,0 47,61 47,61c0,0 -34,73 -34,73c0,0 -89,1 -89,1c0,0 -44,-73 -44,-73" opacity="NaN" stroke="#0ff"   filter='url(#glow)' fill="none"  strokeWidth = '6' />
  <path stroke="#0ff"  filter='url(#glow)' id="svg_16" d="m116,250c19.60318,-39.67742 20.63492,-41 20.63492,-41c0,0 42.30159,1.32258 44.36508,0" opacity="NaN" fill="none"  strokeWidth = '6' />
  <path stroke="#0ff" filter ='url(glow)'  strokeWidth = '6'  id="svg_17" d="m177.67105,204c25.18421,38.0597 26.32895,39.32836 26.32895,39.32836c0,0 -19.46053,45.67164 -19.46053,45.67164c0,0 -45.78948,0 -45.78948,0c0,0 -21.75,-40.59702 -21.75,-40.59702" opacity="NaN" fill="none"/>
  <path id="svg_21" d="m144,236" opacity="NaN" stroke="#0ff" filter = 'url(glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_22" d="m160,262" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"filter = 'url(glow)' id="svg_23" strokeWidth = '6'  d="m139.62712,224.03922c0,0 37.47458,-1.03922 37.47458,-1.03922c0,0 15.89831,19.7451 15.89831,19.7451c0,0 -15.89831,33.2549 -15.89831,33.2549c0,0 -36.33898,0 -36.33898,0c0,0 -14.76271,-24.94118 -14.76271,-24.94118c0,0 13.62712,-27.01961 13.62712,-27.01961l-0.00001,0.00001z" opacity="NaN" fill="none"/>
  <path id="svg_24" d="m145,217" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_25" d="m141,217c40,0 40,0 40,0c0,0 17,20 14,23" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path d="m99,232c0,0 0,-1 0,-2c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.61732,-1.07613 1,-2c0.5412,-1.30656 1.07612,-1.61731 2,-2c1.30656,-0.5412 2,-2 3,-2c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 1,-1 1,-2c0,-1 0.70711,-2.29289 0,-3c-0.70711,-0.70711 -1.29289,1.29289 -2,2c-0.70711,0.70711 -1.07612,0.61731 -2,1c-1.30656,0.5412 -2.4588,1.69344 -3,3c-0.38268,0.92387 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,2c-1,1 -2.29289,1.29289 -3,2c-0.70711,0.70711 -0.61732,1.07613 -1,2c-0.5412,1.30656 -1.29289,1.29289 -2,2c-0.70711,0.70711 0,2 1,2l1,-1l0,-1l1,0" id="svg_26" strokeWidth = '6'  stroke="#0ff"    filter='url(#glow)'  fill="none"/>
  <path d="m128,195c1,0 1,-1 2,-1c1,0 2,0 3,0c1,0 2,0 3,0c3,0 4,0 5,0c1,0 2.07613,-0.38269 3,0c1.30656,0.5412 2,1 4,1c1,0 1.69344,0.4588 3,1c0.92387,0.38269 2,1 4,1c1,0 3,0 4,0c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 1.70711,-1.29289 1,-2c-0.70711,-0.70711 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -3.02582,0.32036 -5,0c-3.12144,-0.50655 -4,-1 -5,-1c-1,0 -2,0 -3,0c-1,0 -1,1 -2,2l0,1" id="svg_27" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6'  fill="none"/>
  <path d="m192,196c0,0 0.29289,0.29289 1,1c0.70711,0.70711 1,1 2,2c1,1 2,1 2,2c0,1 0.29289,1.29289 1,2c0.70711,0.70711 1,1 2,1c1,0 1.29289,0.29289 2,1c0.70711,0.70711 1.29289,1.29289 2,2c0.70711,0.70711 1.4588,0.69344 2,2c0.38269,0.92387 2.4588,1.69344 3,3c0.38269,0.92387 0,2 -1,2c-1,0 -1,-1 -2,-1c-1,0 -2,-1 -3,-1c-1,0 -2.29289,-1.29289 -3,-2c-0.70711,-0.70711 0,-2 0,-3c0,-1 -0.29289,-1.29289 -1,-2c-0.70711,-0.70711 -1.07613,-0.61731 -2,-1c-1.30656,-0.5412 -2,-1 -3,-2c-1,-1 -2,-1 -3,-1l-1,0" id="svg_28" stroke="#0ff"   filter='url(#glow)' strokeWidth = '6' fill="none"/>
  <path d="m215,241c0,0 0.38269,1.07613 0,2c-0.5412,1.30656 -1,2 -1,4c0,1 -0.4588,1.69344 -1,3c-0.38269,0.92387 0.70711,3.29289 0,4c-0.70711,0.70711 -1,1 -1,2c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 0,2 0,3c0,1 -1,2 -1,3c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1.29289,1.29291 -2,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-1.41422,1.41422 -0.29289,3.29291 -1,4c-0.70711,0.70709 -1.70711,0.70709 -1,0c0.70711,-0.70709 1.29289,-1.29291 2,-2c0.70711,-0.70709 1.29289,-0.29291 2,-1c0.70711,-0.70709 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1.4588,-1.69345 2,-3c0.38269,-0.92389 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1,-2 1,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 0,-2 0,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 2,0 3,0c1,0 2,0 2,1c0,1 -0.29289,1.29289 -1,2c-0.70711,0.70711 -0.69344,1.4588 -2,2c-0.92387,0.38269 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,1c-1,0 -0.61731,1.07613 -1,2c-0.5412,1.30655 -0.71022,2.04291 -1,3c-1.04483,3.45084 -2.4588,3.69345 -3,5c-0.38269,0.92389 -0.29289,1.29291 -1,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1,1 -1,2l-1,0" id="svg_29" strokeWidth = '6' stroke="#0ff"  filter='url(#glow)'  fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_33" d="m94,193c22,-26 21,-27 21,-27c0,0 97,0 97,0c0,0 25,31 25,31" opacity="NaN"    strokeWidth = '6' fill="none"/>
  <path stroke="#0ff" filter = 'url(glow)' id="svg_34" d="m99,312c19,24 19,24 19,24c0,0 100,0 102,-2" opacity="NaN" strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_35" d="m220,333c12,-23 12,-23 12,-23" opacity="NaN"  strokeWidth = '6' fill="none"/>
  <path id="svg_39" strokeWidth = '6'  d="m166.00001,371.13889c98.51232,-0.30556 97.51724,-0.30556 97.51724,-0.30556c0,0 17.91133,9.16667 17.91133,9.16667c0,0 58.70936,-0.30556 58.70936,-0.30556c0,0 20.89655,-7.94444 20.89655,-7.94444c-4,0 410.96552,-2.75 410.96552,-2.75" opacity="NaN" fill="none" stroke="#0ff" filter = 'url(glow)' />
  <path id="svg_40" strokeWidth = '6'  d="m748,357c37,-23 37,-23 37,-23c0,0 2,-153 2,-153c0,0 -31,-25 -31,-25c0,0 -492,6 -492,6" opacity="NaN" stroke="#0ff"  filter= 'url(glow)' fill="none"/>
  <path id="svg_41" strokeWidth = '6'  d="m227,170c30,0 30,0 30,0c0,0 1,39 1,39c0,0 63,0 63,0c0,0 0,-39 0,-39" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_42" strokeWidth = '6'  d="m320,199c402,-6 402,-5 402,-6c0,-1 -804,12 -402,6z" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  {/* <path id="svg_43" strokeWidth = '6'  d="m1121,455c0,41 -1,83 0,41c1,-42 0,-82 0,-41z" opacity="NaN" stroke="green" filter = 'url(glow)'  fill="none"/> */}
  <path id="svg_44" strokeWidth = '6'  d="m722,194l-1,-39l46,1l1,35" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_38" strokeWidth = '6'  d="m137,353.6c102.6899,-1.6 102.6899,-1.6 102.6899,-1.6c0,0 25.67248,8 25.67248,8c0,0 485.63766,-3.6 485.63766,-3.6" opacity="NaN" fill="none" filter = 'url(glow)' stroke="#0ff"/>
  <path id="svg_36" strokeWidth = '6'  d="m199,345c33,0 34,1 34,1c0,0 12,-18 12,-18" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' fill="none"/>
  <path id="svg_46" strokeWidth = '6'  d="m301,322" opacity="NaN" stroke="green"   filter = 'url(glow)' fill="none"/>
  <path fill="none"  strokeWidth ='6' stroke="#0ff" filter = 'url(glow)' opacity="NaN" d="m263,220l1,47l14,8l0,17l-14,8l0,29l-14,2l0,15l16,5l479,-6l31,-19l1,-117l-514,11z" id="svg_1"/>
  <rect fill="#00FF0D" strokeWidth ='6'  stroke="#0ff" filter = 'url(glow)' x="263" y="168" width="53" height="35" id="svg_2"/>   
  <g 
  transform = 'translate(-120 , 0) scale(1.5)'
  >
    <text fontSize="24" 
    fontWeight="bold" 
    fill="#0ff" 
    filter = 'url(glow2)' 
    x="270" 
    y="190" 
    id="svg_3"
    > The Solar System </text>  
  </g>
  </Link>
 </g>


    <g   
 transform="translate(530, 345) scale(0.4)"  
 cursor= 'pointer'
 >
   <Link to = "/theUniverse">
  <path id="svg_14" d="m73,245c47,-64 47,-64 47,-64l-47,64z" opacity="NaN" stroke="#0ff"  filter='url(#glow)' fill="none" strokeWidth = '6'/>
  <path id="svg_15" d="m110,182c86,0 87,0 87,0c0,0 47,61 47,61c0,0 -34,73 -34,73c0,0 -89,1 -89,1c0,0 -44,-73 -44,-73" opacity="NaN" stroke="#0ff"   filter='url(#glow)' fill="none"  strokeWidth = '6' />
  <path stroke="#0ff"  filter='url(#glow)' id="svg_16" d="m116,250c19.60318,-39.67742 20.63492,-41 20.63492,-41c0,0 42.30159,1.32258 44.36508,0" opacity="NaN" fill="none"  strokeWidth = '6' />
  <path stroke="#0ff" filter ='url(glow)'  strokeWidth = '6'  id="svg_17" d="m177.67105,204c25.18421,38.0597 26.32895,39.32836 26.32895,39.32836c0,0 -19.46053,45.67164 -19.46053,45.67164c0,0 -45.78948,0 -45.78948,0c0,0 -21.75,-40.59702 -21.75,-40.59702" opacity="NaN" fill="none"/>
  <path id="svg_21" d="m144,236" opacity="NaN" stroke="#0ff" filter = 'url(glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_22" d="m160,262" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"filter = 'url(glow)' id="svg_23" strokeWidth = '6'  d="m139.62712,224.03922c0,0 37.47458,-1.03922 37.47458,-1.03922c0,0 15.89831,19.7451 15.89831,19.7451c0,0 -15.89831,33.2549 -15.89831,33.2549c0,0 -36.33898,0 -36.33898,0c0,0 -14.76271,-24.94118 -14.76271,-24.94118c0,0 13.62712,-27.01961 13.62712,-27.01961l-0.00001,0.00001z" opacity="NaN" fill="none"/>
  <path id="svg_24" d="m145,217" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path id="svg_25" d="m141,217c40,0 40,0 40,0c0,0 17,20 14,23" opacity="NaN" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6' fill="none"/>
  <path d="m99,232c0,0 0,-1 0,-2c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.61732,-1.07613 1,-2c0.5412,-1.30656 1.07612,-1.61731 2,-2c1.30656,-0.5412 2,-2 3,-2c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 1,-1 1,-2c0,-1 0.70711,-2.29289 0,-3c-0.70711,-0.70711 -1.29289,1.29289 -2,2c-0.70711,0.70711 -1.07612,0.61731 -2,1c-1.30656,0.5412 -2.4588,1.69344 -3,3c-0.38268,0.92387 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,2c-1,1 -2.29289,1.29289 -3,2c-0.70711,0.70711 -0.61732,1.07613 -1,2c-0.5412,1.30656 -1.29289,1.29289 -2,2c-0.70711,0.70711 0,2 1,2l1,-1l0,-1l1,0" id="svg_26" strokeWidth = '6'  stroke="#0ff"    filter='url(#glow)'  fill="none"/>
  <path d="m128,195c1,0 1,-1 2,-1c1,0 2,0 3,0c1,0 2,0 3,0c3,0 4,0 5,0c1,0 2.07613,-0.38269 3,0c1.30656,0.5412 2,1 4,1c1,0 1.69344,0.4588 3,1c0.92387,0.38269 2,1 4,1c1,0 3,0 4,0c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 1.70711,-1.29289 1,-2c-0.70711,-0.70711 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -3.02582,0.32036 -5,0c-3.12144,-0.50655 -4,-1 -5,-1c-1,0 -2,0 -3,0c-1,0 -1,1 -2,2l0,1" id="svg_27" stroke="#0ff"  filter='url(#glow)'  strokeWidth = '6'  fill="none"/>
  <path d="m192,196c0,0 0.29289,0.29289 1,1c0.70711,0.70711 1,1 2,2c1,1 2,1 2,2c0,1 0.29289,1.29289 1,2c0.70711,0.70711 1,1 2,1c1,0 1.29289,0.29289 2,1c0.70711,0.70711 1.29289,1.29289 2,2c0.70711,0.70711 1.4588,0.69344 2,2c0.38269,0.92387 2.4588,1.69344 3,3c0.38269,0.92387 0,2 -1,2c-1,0 -1,-1 -2,-1c-1,0 -2,-1 -3,-1c-1,0 -2.29289,-1.29289 -3,-2c-0.70711,-0.70711 0,-2 0,-3c0,-1 -0.29289,-1.29289 -1,-2c-0.70711,-0.70711 -1.07613,-0.61731 -2,-1c-1.30656,-0.5412 -2,-1 -3,-2c-1,-1 -2,-1 -3,-1l-1,0" id="svg_28" stroke="#0ff"   filter='url(#glow)' strokeWidth = '6' fill="none"/>
  <path d="m215,241c0,0 0.38269,1.07613 0,2c-0.5412,1.30656 -1,2 -1,4c0,1 -0.4588,1.69344 -1,3c-0.38269,0.92387 0.70711,3.29289 0,4c-0.70711,0.70711 -1,1 -1,2c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 0,2 0,3c0,1 -1,2 -1,3c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1.29289,1.29291 -2,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-1.41422,1.41422 -0.29289,3.29291 -1,4c-0.70711,0.70709 -1.70711,0.70709 -1,0c0.70711,-0.70709 1.29289,-1.29291 2,-2c0.70711,-0.70709 1.29289,-0.29291 2,-1c0.70711,-0.70709 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1.4588,-1.69345 2,-3c0.38269,-0.92389 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1,-2 1,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 0,-2 0,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 2,0 3,0c1,0 2,0 2,1c0,1 -0.29289,1.29289 -1,2c-0.70711,0.70711 -0.69344,1.4588 -2,2c-0.92387,0.38269 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,1c-1,0 -0.61731,1.07613 -1,2c-0.5412,1.30655 -0.71022,2.04291 -1,3c-1.04483,3.45084 -2.4588,3.69345 -3,5c-0.38269,0.92389 -0.29289,1.29291 -1,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1,1 -1,2l-1,0" id="svg_29" strokeWidth = '6' stroke="#0ff"  filter='url(#glow)'  fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_33" d="m94,193c22,-26 21,-27 21,-27c0,0 97,0 97,0c0,0 25,31 25,31" opacity="NaN"    strokeWidth = '6' fill="none"/>
  <path stroke="#0ff" filter = 'url(glow)' id="svg_34" d="m99,312c19,24 19,24 19,24c0,0 100,0 102,-2" opacity="NaN" strokeWidth = '6' fill="none"/>
  <path stroke="#0ff"  filter = 'url(glow)' id="svg_35" d="m220,333c12,-23 12,-23 12,-23" opacity="NaN"  strokeWidth = '6' fill="none"/>
  <path id="svg_39" strokeWidth = '6'  d="m166.00001,371.13889c98.51232,-0.30556 97.51724,-0.30556 97.51724,-0.30556c0,0 17.91133,9.16667 17.91133,9.16667c0,0 58.70936,-0.30556 58.70936,-0.30556c0,0 20.89655,-7.94444 20.89655,-7.94444c-4,0 410.96552,-2.75 410.96552,-2.75" opacity="NaN" fill="none" stroke="#0ff" filter = 'url(glow)' />
  <path id="svg_40" strokeWidth = '6'  d="m748,357c37,-23 37,-23 37,-23c0,0 2,-153 2,-153c0,0 -31,-25 -31,-25c0,0 -492,6 -492,6" opacity="NaN" stroke="#0ff"  filter= 'url(glow)' fill="none"/>
  <path id="svg_41" strokeWidth = '6'  d="m227,170c30,0 30,0 30,0c0,0 1,39 1,39c0,0 63,0 63,0c0,0 0,-39 0,-39" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_42" strokeWidth = '6'  d="m320,199c402,-6 402,-5 402,-6c0,-1 -804,12 -402,6z" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  {/* <path id="svg_43" strokeWidth = '6'  d="m1121,455c0,41 -1,83 0,41c1,-42 0,-82 0,-41z" opacity="NaN" stroke="green" filter = 'url(glow)'  fill="none"/> */}
  <path id="svg_44" strokeWidth = '6'  d="m722,194l-1,-39l46,1l1,35" opacity="NaN" stroke="#0ff" filter = 'url(glow)' fill="none"/>
  <path id="svg_38" strokeWidth = '6'  d="m137,353.6c102.6899,-1.6 102.6899,-1.6 102.6899,-1.6c0,0 25.67248,8 25.67248,8c0,0 485.63766,-3.6 485.63766,-3.6" opacity="NaN" fill="none" filter = 'url(glow)' stroke="#0ff"/>
  <path id="svg_36" strokeWidth = '6'  d="m199,345c33,0 34,1 34,1c0,0 12,-18 12,-18" opacity="NaN" stroke="#0ff"  filter = 'url(glow)' fill="none"/>
  <path id="svg_46" strokeWidth = '6'  d="m301,322" opacity="NaN" stroke="green"   filter = 'url(glow)' fill="none"/>
  <path fill="none"  strokeWidth ='6' stroke="#0ff" filter = 'url(glow)' opacity="NaN" d="m263,220l1,47l14,8l0,17l-14,8l0,29l-14,2l0,15l16,5l479,-6l31,-19l1,-117l-514,11z" id="svg_1"/>
  <rect fill="#00FF0D" strokeWidth ='6'  stroke="#0ff" filter = 'url(glow)' x="263" y="168" width="53" height="35" id="svg_2"/>   
  <g 
  transform = 'translate(-120 , 0) scale(1.5)'
  >
    <text fontSize="24" 
    fontWeight="bold" 
    fill="#0ff" 
    filter = 'url(glow2)' 
    x="270" 
    y="190" 
    id="svg_3"
    > The Universe</text>  
  </g>
  </Link>
 </g>



</svg>
    </div>
  )
}

export default SpaceAndAstronomy
 