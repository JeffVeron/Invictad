import React from 'react'
import Frame_1 from './frames/Frame_1'
import Frame_2 from './frames/Frame_2'
import Frame_3 from './frames/Frame_3'
import Frame_4 from './frames/Frame_4'
import Frame_5 from './frames/Frame_5'
import {Link} from 'react-router-dom'





function GeneralScience() {
  return (
    <div>


<div
style = {{
  display:'flex',
  flexDirection:'column',
  width:'100%',
  height:'100%',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
  justifySelf: 'center',  
}}
>
      <h1
      style = {{
        textShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
        color: '#0ff', 
        fontWeight: 'bold',  
        backgroundColor: '#001f3f',
      }}
      >General Science Progression</h1>


                   <div
        style = {{
       width:'100%',
      
        alignItems: 'center',   
        justifyContent: 'center',   
        alignSelf: 'center',
        justifySelf: 'center', 
        display: 'flex',
        flexDirection: 'column',    
        }}
        > 
 
  <div style={{
     width: '100%',
     justifyContent:'center',
    alignContent: 'center',
    display: 'flex',
   alignItems:'center',
  alignSelf:'center',   
      }}>
 
    

    <svg 
    viewBox='00 00 500 600'                          
    xmlns="http://www.w3.org/2000/svg"  
    preserveAspectRatio="none" 
    width="800"
   height="700" 
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




 <g id="Layer_1" 
 transform = 'translate(-70, 0)'     
 >
    
 
   <path id="svg_1" 
   d="m85.00002,88c2.59062,464.99999 2.59062,464.99999 2.59062,464.99999c0,0 702.05934,-1.0473 702.05934,-1.0473c0,0 119.16874,-47.12838 124.34999,-51.31757"
    opacity="NaN" 
    fill="none"
     stroke="#0ff"
     strokeWidth = '10px'
     filter='url(#glow)'
     />
  <path id="svg_2"
   d="m82.99999,81l869.00001,-5l-4.8144,403l-103.5097,1" 
   opacity="NaN" 
   fill="none"
    stroke="#0ff"
    strokeWidth = '10px'
     filter='url(#glow)'
    />
  <path id="svg_4" 
  d="m82,43l206,0l46,20l81,-1" 
  opacity="NaN"
   stroke="#0ff" 
   fill="none"
  strokeWidth = '10px'
   filter='url(#glow)'
   />

  <path id="svg_5"
   d="m93,581l213,3l24,-17l70,-1" 
   opacity="NaN"
    stroke="#0ff" 
    fill="none"
    strokeWidth = '10px'
    filter='url(#glow)'
    />
  <path id="svg_6" 
  d="m915,54l64,0l1,219"
   opacity="NaN" 
   stroke="#000"
    fill="none"   
    strokeWidth = '10px'
    />
    <path
     d="m596,187c0,0 -4,268 -4,268"
      stroke="#0ff"
       fill="none"
       strokeWidth = '10px'
       filter='url(#glow)' 
        />
 </g>
 
<g   
 transform="translate(-10, 45) scale(0.36)"  
 cursor ='pointer'
 >
   <Link to="/labbasics">
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
    >Lab Basics </text>
  </g>
    </Link>
 </g>


  <g   
 transform="translate(-10, 150) scale(0.36)"  
 cursor= 'pointer'
 >
   <Link to = "/atomicAlley">
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
    >Atomic Alley </text>  
  </g>
  </Link>
 </g>


  <g   
 transform="translate(-10, 250) scale(0.36)"  
 cursor= 'pointer'
 >
   <Link to = "/newtonsPlayground">
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
    >Newtoms Playground</text>  
  </g>
  </Link>
 </g>

   <g   
 transform="translate(-10, 350) scale(0.36)"  
 cursor= 'pointer'
 >
   <Link to = "/biologyBasics">
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
    >Biology Basics</text>  
  </g>
  </Link>
 </g>


   <g   
 transform="translate(250, 45) scale(0.36)"  
 cursor= 'pointer'
 >
   <Link to = "/earthExploreres">
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
    >Earth Explorers </text>  
  </g>
  </Link>
 </g>

      <g   
 transform="translate(250, 150) scale(0.36)"  
 cursor= 'pointer'
 >
   <Link to = "/cosmicCuriosities">
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
    >Cosmic Curiosities</text>  
  </g>
  </Link>
 </g>

   <g   
 transform="translate(250, 250) scale(0.36)"  
 cursor= 'pointer'
 >
   <Link to = "/environmentalExplorers">
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
    >Environmental Explorers </text>  
  </g>
  </Link>
 </g>


    <g   
 transform="translate(250, 345) scale(0.36)"  
 cursor= 'pointer'
 >
   <Link to = "/ecosystemExplorers">
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
    >Ecosystem Explorers </text>  
  </g>
  </Link>
 </g>



</svg>

  </div>


 
{/* 
            <svg width="800" height="600"   transform = 'scale(0.4)' xmlns="http://www.w3.org/2000/svg">
 <g id="Layer_1">
  <title>Layer 1</title>
  <path id="svg_14" d="m73,245c47,-64 47,-64 47,-64l-47,64z" opacity="NaN" stroke="#000" fill="none"/>
  <path id="svg_15" d="m110,182c86,0 87,0 87,0c0,0 47,61 47,61c0,0 -34,73 -34,73c0,0 -89,1 -89,1c0,0 -44,-73 -44,-73" opacity="NaN" stroke="#000" fill="none"/>
  <path stroke="#000" id="svg_16" d="m116,250c19.60318,-39.67742 20.63492,-41 20.63492,-41c0,0 42.30159,1.32258 44.36508,0" opacity="NaN" fill="none"/>
  <path stroke="#000" id="svg_17" d="m177.67105,204c25.18421,38.0597 26.32895,39.32836 26.32895,39.32836c0,0 -19.46053,45.67164 -19.46053,45.67164c0,0 -45.78948,0 -45.78948,0c0,0 -21.75,-40.59702 -21.75,-40.59702" opacity="NaN" fill="none"/>
  <path id="svg_21" d="m144,236" opacity="NaN" stroke="#000" fill="none"/>
  <path id="svg_22" d="m160,262" opacity="NaN" stroke="#000" fill="none"/>
  <path stroke="#000" id="svg_23" d="m139.62712,224.03922c0,0 37.47458,-1.03922 37.47458,-1.03922c0,0 15.89831,19.7451 15.89831,19.7451c0,0 -15.89831,33.2549 -15.89831,33.2549c0,0 -36.33898,0 -36.33898,0c0,0 -14.76271,-24.94118 -14.76271,-24.94118c0,0 13.62712,-27.01961 13.62712,-27.01961l-0.00001,0.00001z" opacity="NaN" fill="none"/>
  <path id="svg_24" d="m145,217" opacity="NaN" stroke="#000" fill="none"/>
  <path id="svg_25" d="m141,217c40,0 40,0 40,0c0,0 17,20 14,23" opacity="NaN" stroke="#000" fill="none"/>
  <path d="m99,232c0,0 0,-1 0,-2c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.61732,-1.07613 1,-2c0.5412,-1.30656 1.07612,-1.61731 2,-2c1.30656,-0.5412 2,-2 3,-2c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.29289,-0.29289 2,-1c0.70711,-0.70711 1,-1 1,-2c0,-1 0.70711,-2.29289 0,-3c-0.70711,-0.70711 -1.29289,1.29289 -2,2c-0.70711,0.70711 -1.07612,0.61731 -2,1c-1.30656,0.5412 -2.4588,1.69344 -3,3c-0.38268,0.92387 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,2c-1,1 -2.29289,1.29289 -3,2c-0.70711,0.70711 -0.61732,1.07613 -1,2c-0.5412,1.30656 -1.29289,1.29289 -2,2c-0.70711,0.70711 0,2 1,2l1,-1l0,-1l1,0" id="svg_26" stroke="#000" fill="none"/>
  <path d="m128,195c1,0 1,-1 2,-1c1,0 2,0 3,0c1,0 2,0 3,0c3,0 4,0 5,0c1,0 2.07613,-0.38269 3,0c1.30656,0.5412 2,1 4,1c1,0 1.69344,0.4588 3,1c0.92387,0.38269 2,1 4,1c1,0 3,0 4,0c1,0 1.29289,-0.29289 2,-1c0.70711,-0.70711 1.70711,-1.29289 1,-2c-0.70711,-0.70711 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,0c-1,0 -3.02582,0.32036 -5,0c-3.12144,-0.50655 -4,-1 -5,-1c-1,0 -2,0 -3,0c-1,0 -1,1 -2,2l0,1" id="svg_27" stroke="#000" fill="none"/>
  <path d="m192,196c0,0 0.29289,0.29289 1,1c0.70711,0.70711 1,1 2,2c1,1 2,1 2,2c0,1 0.29289,1.29289 1,2c0.70711,0.70711 1,1 2,1c1,0 1.29289,0.29289 2,1c0.70711,0.70711 1.29289,1.29289 2,2c0.70711,0.70711 1.4588,0.69344 2,2c0.38269,0.92387 2.4588,1.69344 3,3c0.38269,0.92387 0,2 -1,2c-1,0 -1,-1 -2,-1c-1,0 -2,-1 -3,-1c-1,0 -2.29289,-1.29289 -3,-2c-0.70711,-0.70711 0,-2 0,-3c0,-1 -0.29289,-1.29289 -1,-2c-0.70711,-0.70711 -1.07613,-0.61731 -2,-1c-1.30656,-0.5412 -2,-1 -3,-2c-1,-1 -2,-1 -3,-1l-1,0" id="svg_28" stroke="#000" fill="none"/>
  <path d="m215,241c0,0 0.38269,1.07613 0,2c-0.5412,1.30656 -1,2 -1,4c0,1 -0.4588,1.69344 -1,3c-0.38269,0.92387 0.70711,3.29289 0,4c-0.70711,0.70711 -1,1 -1,2c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 0,2 0,3c0,1 -1,2 -1,3c0,1 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1.29289,1.29291 -2,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-1.41422,1.41422 -0.29289,3.29291 -1,4c-0.70711,0.70709 -1.70711,0.70709 -1,0c0.70711,-0.70709 1.29289,-1.29291 2,-2c0.70711,-0.70709 1.29289,-0.29291 2,-1c0.70711,-0.70709 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1.4588,-1.69345 2,-3c0.38269,-0.92389 -0.38269,-2.07611 0,-3c0.5412,-1.30655 1,-2 1,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 0,-2 0,-3c0,-1 0,-2 0,-3c0,-1 0.29289,-1.29289 1,-2c0.70711,-0.70711 2,0 3,0c1,0 2,0 2,1c0,1 -0.29289,1.29289 -1,2c-0.70711,0.70711 -0.69344,1.4588 -2,2c-0.92387,0.38269 -0.29289,1.29289 -1,2c-0.70711,0.70711 -1,1 -2,1c-1,0 -0.61731,1.07613 -1,2c-0.5412,1.30655 -0.71022,2.04291 -1,3c-1.04483,3.45084 -2.4588,3.69345 -3,5c-0.38269,0.92389 -0.29289,1.29291 -1,2c-0.70711,0.70709 -0.29289,1.29291 -1,2c-0.70711,0.70709 -1,1 -1,2l-1,0" id="svg_29" stroke="#000" fill="none"/>
  <path stroke="#000" id="svg_33" d="m94,193c22,-26 21,-27 21,-27c0,0 97,0 97,0c0,0 25,31 25,31" opacity="NaN" fill="none"/>
  <path stroke="#000" id="svg_34" d="m99,312c19,24 19,24 19,24c0,0 100,0 102,-2" opacity="NaN" fill="none"/>
  <path stroke="#000" id="svg_35" d="m220,333c12,-23 12,-23 12,-23" opacity="NaN" fill="none"/>
  <path id="svg_39" d="m166.00001,371.13889c98.51232,-0.30556 97.51724,-0.30556 97.51724,-0.30556c0,0 17.91133,9.16667 17.91133,9.16667c0,0 58.70936,-0.30556 58.70936,-0.30556c0,0 20.89655,-7.94444 20.89655,-7.94444c-4,0 410.96552,-2.75 410.96552,-2.75" opacity="NaN" fill="none" stroke="#000"/>
  <path id="svg_40" d="m748,357c37,-23 37,-23 37,-23c0,0 2,-153 2,-153c0,0 -31,-25 -31,-25c0,0 -492,6 -492,6" opacity="NaN" stroke="#000" fill="none"/>
  <path id="svg_41" d="m227,170c30,0 30,0 30,0c0,0 1,39 1,39c0,0 63,0 63,0c0,0 0,-39 0,-39" opacity="NaN" stroke="#000" fill="none"/>
  <path id="svg_42" d="m320,199c402,-6 402,-5 402,-6c0,-1 -804,12 -402,6z" opacity="NaN" stroke="#000" fill="none"/>
  <path id="svg_43" d="m1121,455c0,41 -1,83 0,41c1,-42 0,-82 0,-41z" opacity="NaN" stroke="#000" fill="none"/>
  <path id="svg_44" d="m722,194l-1,-39l46,1l1,35" opacity="NaN" stroke="#000" fill="none"/>
  <path id="svg_38" d="m137,353.6c102.6899,-1.6 102.6899,-1.6 102.6899,-1.6c0,0 25.67248,8 25.67248,8c0,0 485.63766,-3.6 485.63766,-3.6" opacity="NaN" fill="none" stroke="#000"/>
  <path id="svg_36" d="m199,345c33,0 34,1 34,1c0,0 12,-18 12,-18" opacity="NaN" stroke="#000" fill="none"/>
  <path id="svg_46" d="m301,322" opacity="NaN" stroke="#000" fill="none"/>
  <path fill="none" stroke="#000" opacity="NaN" d="m263,220l1,47l14,8l0,17l-14,8l0,29l-14,2l0,15l16,5l479,-6l31,-19l1,-117l-514,11z" id="svg_1"/>
  <rect fill="none" stroke="#000" x="263" y="168" width="53" height="35" id="svg_2"/>
 </g>

</svg> */}

        </div>  



  {/*  <Link
              to = {'/labBasics'}    
              >
         <p
         style = {{
             fontSize: '24px',
             color: '#ffda2e',
             textShadow: '-2px 2px 3px #000',
             fontWeight: 'bold',
             margin: 0,
             justifyContent: 'center',
             alignItems: 'center',   
         }}
         >Lab Basics(Introductory Level)</p>
         </Link> 
         
         */}

     {/*  </Frame_3> */}

{/*  


       <Frame_3
            style = {{
              backgroundColor:'red',
              width:'100%',
              height:'60%'
            }}
            >
         <p
         style = {{
             fontSize: '24px',
             color: '#ffda2e',
             textShadow: '-2px 2px 3px #000',
             fontWeight: 'bold',
             margin: 0,
             justifyContent: 'center',
             alignItems: 'center',   
         }}
         >Atomic Alley (Chemistry Focus) </p>
      </Frame_3>

<Frame_3
            style = {{
              backgroundColor:'red',
              width:'100%',
              height:'60%'
            }}
            >
         <p
         style = {{
             fontSize: '24px',
             color: '#ffda2e',
             textShadow: '-2px 2px 3px #000',
             fontWeight: 'bold',
             margin: 0,
             justifyContent: 'center',
             alignItems: 'center',   
         }}
         > 
Newton's Playground (Physics Focus)
         </p>
 </Frame_3>

      <Frame_3
            style = {{
              backgroundColor:'red',
              width:'100%',
              height:'60%'
            }}
            >
         <p
         style = {{
             fontSize: '24px',
             color: '#ffda2e',
             textShadow: '-2px 2px 3px #000',
             fontWeight: 'bold',
             margin: 0,
             justifyContent: 'center',
             alignItems: 'center',   
         }}
         > 
Biology Basics (Biology Focus)
         </p>
      </Frame_3>


      <Frame_3
            style = {{
              backgroundColor:'red',
              width:'100%',
              height:'60%'
            }}
            >
         <p
         style = {{
             fontSize: '24px',
             color: '#ffda2e',
             textShadow: '-2px 2px 3px #000',
             fontWeight: 'bold',
             margin: 0,
             justifyContent: 'center',
             alignItems: 'center',   
         }}
         > 
Earth Explorers (Earth Science Focus)  
         </p>
      </Frame_3>


      <Frame_3
            style = {{
              backgroundColor:'red',
              width:'100%',
              height:'60%'
            }}
            >
         <p
         style = {{
             fontSize: '24px',
             color: '#ffda2e',
             textShadow: '-2px 2px 3px #000',
             fontWeight: 'bold',
             margin: 0,
             justifyContent: 'center',
             alignItems: 'center',   
         }}
         > 
Cosmic Curiosities( Astronomy Focus )
         </p>
      </Frame_3>

      <Frame_3
            style = {{
              backgroundColor:'red',
              width:'100%',
              height:'60%'
            }}
            >
         <p
         style = {{
             fontSize: '24px',
             color: '#ffda2e',
             textShadow: '-2px 2px 3px #000',
             fontWeight: 'bold',
             margin: 0,
             justifyContent: 'center',
             alignItems: 'center',   
         }}
         > 
Environmental Explorers (Environmental Science Focus)
         </p>
      </Frame_3>

      <Frame_3
            style = {{
              backgroundColor:'red',
              width:'100%',
              height:'60%'
            }}
            >
         <p
         style = {{
             fontSize: '24px',
             color: '#ffda2e',
             textShadow: '-2px 2px 3px #000',
             fontWeight: 'bold',
             margin: 0,
             justifyContent: 'center',
             alignItems: 'center',   
         }}
         > 
Ecosystem Explorer (Environmental Science)
         </p>
      </Frame_3>

           <Frame_3
            style = {{
              backgroundColor:'red',
              width:'100%',
              height:'60%'
            }}
            >
         <p
         style = {{
             fontSize: '24px',
             color: '#ffda2e',
             textShadow: '-2px 2px 3px #000',
             fontWeight: 'bold',
             margin: 0,
             justifyContent: 'center',
             alignItems: 'center',   
         }}
         > 
 Theory of Everything (Interdisciplinary focus)
         </p>
      </Frame_3>
      
      
       */}

         


        </div>


    {/*   <div>
        <p>Lab Basics(Introductory Level)</p>
        <p>Atomic Alley (Chemistry Focus) </p>
        <p>Newton's Playground (Physics Focus) </p>
        <p>Biology Basics (Biology Focus) </p>
        <p>Earth Explorers (Earth Science Focus) </p>   
        <p>Cosmic Curiosities( Astronomy Focus ) </p>
        <p>Environmental Explorers (Environmental Science Focus) </p>
        <p>Ecosystem Explorer (Environmental Science)</p>
        <p>Theory of Everything (Interdisciplinary focus)</p>
    </div> */}
    </div>
  )
}

export default GeneralScience
