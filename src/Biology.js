


/* 
1. living cells 
2. digestion
3. life cycle of organisms-housefly
4. Animal production
5. FOOD TEST 
6. farming systems 
7.prokaryotic cells 
8. carbon cycle 
9. life cycle of organisms - mosquito 
10. animal feed 
11. dentition
12. ecosystem 
13. specialized cells 
14.life cycle of organisms - grasshopper 
15. 
 */






import React, { useState } from "react";
import {Link} from 'react-router-dom' 

function Biology() {
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
      >Biology</h1>  





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



 <g>
   
  <ellipse fill="none" filter = 'url(#glow)'  strokeWidth = '10' cx="487.00008" cy="324" id="svg_1" rx="467.00002" ry="309" stroke="#0ff"  />
  <path fill="none" stroke="grey" opacity="NaN" d="m760,578" id="svg_8"/>
  <path fill="none" opacity="NaN" d="m925,450c3,8 3,8 3,8l-3,-8z" id="svg_11" stroke="#00ff0d" />
  <path fill="none" opacity="NaN" d="m825,608l153,-227l-153,227z" id="svg_13" stroke="#00ff0d"  strokWidth ='9' /> 
  <path fill="none" stroke="#0ff" d="m688.54496,611.73358l15.21429,-17.49997l40.57145,0l15.21429,17.49997l-15.21429,17.49997l-40.57145,0l-15.21429,-17.49997z" id="svg_15"/>
  <path fill="none" stroke="#0ff" d="m686.55502,581.52361l11.78573,-10.99998l31.42861,0l11.78572,10.99998l-11.78572,10.99998l-31.42861,0l-11.78573,-10.99998z" id="svg_16"/>
  <path fill="none" stroke="#0ff" d="m675.61002,553.90643l10.2857,-15.50003l27.42854,0l10.2857,15.50003l-10.2857,15.50003l-27.42854,0l-10.2857,-15.50003z" id="svg_17"/>
  <path fill="none" stroke="#0ff" d="m636.80502,520.57643l16.92856,-15.99999l45.14283,0l16.92856,15.99999l-16.92856,15.99999l-45.14283,0l-16.92856,-15.99999z" id="svg_18"/>
  <path fill="none" stroke="#0ff" d="m240.79501,589.30356l24.21429,-26l64.57143,0l24.21428,26l-24.21428,26l-64.57143,0l-24.21429,-26z" id="svg_19"/>
  <path fill="none" stroke="#0ff" d="m272.59999,542.47641l16.92858,-19l45.14287,0l16.92857,19l-16.92857,19l-45.14287,0l-16.92858,-19z" id="svg_20"/>
  <path fill="none" stroke="#0ff" d="m304.47499,508.13643l11.57143,-15.5l30.85715,0l11.57143,15.5l-11.57143,15.5l-30.85715,0l-11.57143,-15.5z" id="svg_21"/>
  <path fill="none" stroke="grey" d="m217.40499,530.1214l14.78572,-34.49999l39.42857,0l14.78571,34.49999l-14.78571,34.49999l-39.42857,0l-14.78572,-34.49999z" id="svg_23"/>
  <path fill="none" stroke="grey" d="m192.04,478.57359l16.92858,-17.5l45.14287,0l16.92857,17.5l-16.92857,17.5l-45.14287,0l-16.92858,-17.5z" id="svg_24"/>
  <path fill="none" stroke="grey" d="m139.305,500.71142l15.21429,-23l40.57143,0l15.21428,23l-15.21428,23l-40.57143,0l-15.21429,-23z" id="svg_25"/>
  <path fill="none" stroke="grey" d="m279.09499,476.29646l12.64286,-15.5l33.71429,0l12.64285,15.5l-12.64285,15.5l-33.71429,0l-12.64286,-15.5z" id="svg_26"/>
  <path fill="none" stroke="grey" d="m569.25494,575.4114l16.50001,-37.99999l44.00002,0l16.5,37.99999l-16.5,37.99999l-44.00002,0l-16.50001,-37.99999z" id="svg_27"/>
  <path fill="none" stroke="grey" d="m658.69498,586.49347l6.64284,-10.99997l17.71425,0l6.64284,10.99997l-6.64284,10.99997l-17.71425,0l-6.64284,-10.99997z" id="svg_28"/>
  <path fill="none" stroke="grey" d="m732.80008,535.9964l11.78572,-15.49998l31.42857,0l11.78571,15.49998l-11.78571,15.49998l-31.42857,0l-11.78572,-15.49998z" id="svg_29"/>
  <path fill="none" stroke="grey" d="m720.87497,497.21143l12.64285,-19.50001l33.71426,0l12.64284,19.50001l-12.64284,19.50001l-33.71426,0l-12.64285,-19.50001z" id="svg_30"/>
  <path fill="none" stroke="grey" opacity="NaN" d="m22,125" id="svg_31"/>
  <polyline fill="none" stroke="#0ff" points="848,234 848,234 " id="svg_40" stroke-linecap="round"/>
  <polyline fill="none" stroke="#0ff" points="854,296 854,296 " id="svg_41" stroke-linecap="round" transform="rotate(-180 854 296)"/>
  <ellipse fill="none" cx="806.5" cy="47.5" id="svg_43" rx="53.5" ry="36.5" stroke="#0ff"/>
  <ellipse fill="none" stroke="#0ff" cx="920" cy="150" id="svg_44" rx="36" ry="47"/>
  <ellipse fill="none" cx="919.5" cy="149.5" id="svg_45" rx="26.5" ry="29.5" stroke="#0ff"/>
  <path fill="none" d="m223.785,531.07143l10.92857,-25.5l29.14286,0l10.92857,25.5l-10.92857,25.5l-29.14286,0l-10.92857,-25.5z" id="svg_46" stroke="#0ff"/>
  <path fill="none" d="m255.6,588.21643l18.85714,-17.00003l50.2857,0l18.85713,17.00003l-18.85713,17.00003l-50.2857,0l-18.85714,-17.00003z" id="svg_47" stroke="#0ff"/>
  <path fill="none" d="m576.99999,575.34638l12.64287,-24.99997l33.71432,0l12.64287,24.99997l-12.64287,24.99997l-33.71432,0l-12.64287,-24.99997z" id="svg_48" stroke="#0ff"/>
  <path fill="none" d="m650.69498,520.04642l10.07143,-9.49999l26.85714,0l10.07143,9.49999l-10.07143,9.49999l-26.85714,0l-10.07143,-9.49999z" id="svg_49" stroke="#0ff"/>
  <path fill="none" d="m730.27498,495.69144l8.57143,-14.00002l22.85715,0l8.57143,14.00002l-8.57143,14.00002l-22.85715,0l-8.57143,-14.00002z" id="svg_50" stroke="grey"/>
  <path fill="none" d="m742.24002,535.9714l7.92858,-10.5l21.14289,0l7.92858,10.5l-7.92858,10.5l-21.14289,0l-7.92858,-10.5z" id="svg_51" stroke="#00ff0d"/>
  <path id="svg_2" d="m16,75c60,0 61,-1 61,-1c0,0 18,16 18,16c0,0 200,-7 200,-7c0,0 2,64 2,64" opacity="NaN" stroke="#00ff0d" fill="none"/>
  <path id="svg_5" d="m985,298l-141,0l-45,54l-70,-1l-37,-43l43,-61l77,-2l44,73l-95,109l39,59l59,2l37,-55l-39,-47l-73,-4l7,241l169,1" opacity="NaN" stroke="#00ff0d" fill="none"/>
  <path stroke="#00ff0d" id="svg_6" d="m27.92437,151.05625l98.16807,-3.05625l10.90756,484.92498l-118,4.075" opacity="NaN" fill="none"/>
  <path id="svg_7" d="m168,18l0,28l38,13l33,-22l228,-3" opacity="NaN" stroke="#00ff0d" fill="none"/>
  <path stroke="#00ff0d"  strokeWidtth = '6' id="svg_9" d="m977,52.72414l-97.696,-2.72414l-27.52,49.03448l-53.664,0l-6.88,29.96552l-158.24001,-2.72414" opacity="NaN" fill="none"/>
  <ellipse stroke="#00ff0d" ry="26" rx="35.5" id="svg_10" cy="49" cx="805.5" fill="none"/>
 </g>




<g   
 transform="translate(130, 45) scale(0.36)"  
 cursor ='pointer'
 >
   <Link to="/plantAndAnimalCells">
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
    > Plant And Animal Cells  </text>
  </g>
    </Link>
 </g>


  <g   
 transform="translate(130, 150) scale(0.36)"  
 cursor= 'pointer'
 >
   <Link to = "/digestion">
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
    > Digestion </text>  
  </g>
  </Link>
 </g>


  <g   
 transform="translate(130, 250) scale(0.36)"  
 cursor= 'pointer'
 >
   <Link to = "/housefly">
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
    >Life Cycle of A Housefly</text>  
  </g>
  </Link>
 </g>

   <g   
 transform="translate(130, 350) scale(0.36)"  
 cursor= 'pointer'
 >
   <Link to = "/animalProduction">
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
    >Animal Production</text>  
  </g>
  </Link>
 </g>


   <g   
 transform="translate(550, 45) scale(0.36)"  
 cursor= 'pointer'
 >
   <Link to = "/farmingSystems">
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
    > Farming Systems </text>  
  </g>
  </Link>
 </g>

      <g   
 transform="translate(550, 150) scale(0.36)"  
 cursor= 'pointer'
 >
   <Link to = "/prokaryoticCells">
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
    > Prokaryotic Cells</text>  
  </g>
  </Link>
 </g>

   <g   
 transform="translate(550, 250) scale(0.36)"  
 cursor= 'pointer'
 >
   <Link to = "/carbonCycle">
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
    > Carbon Cycle </text>  
  </g>
  </Link>
 </g>


    <g   
 transform="translate(550, 345) scale(0.36)"  
 cursor= 'pointer'
 >
   <Link to = "/mosquito">
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
    > Life Cycle of a Mosquito </text>  
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



 <g>
   
  <ellipse fill="none" filter = 'url(#glow)'  strokeWidth = '10' cx="487.00008" cy="324" id="svg_1" rx="467.00002" ry="309" stroke="#0ff"  />
  <path fill="none" stroke="grey" opacity="NaN" d="m760,578" id="svg_8"/>
  <path fill="none" opacity="NaN" d="m925,450c3,8 3,8 3,8l-3,-8z" id="svg_11" stroke="#00ff0d" />
  <path fill="none" opacity="NaN" d="m825,608l153,-227l-153,227z" id="svg_13" stroke="#00ff0d"  strokWidth ='9' /> 
  <path fill="none" stroke="#0ff" d="m688.54496,611.73358l15.21429,-17.49997l40.57145,0l15.21429,17.49997l-15.21429,17.49997l-40.57145,0l-15.21429,-17.49997z" id="svg_15"/>
  <path fill="none" stroke="#0ff" d="m686.55502,581.52361l11.78573,-10.99998l31.42861,0l11.78572,10.99998l-11.78572,10.99998l-31.42861,0l-11.78573,-10.99998z" id="svg_16"/>
  <path fill="none" stroke="#0ff" d="m675.61002,553.90643l10.2857,-15.50003l27.42854,0l10.2857,15.50003l-10.2857,15.50003l-27.42854,0l-10.2857,-15.50003z" id="svg_17"/>
  <path fill="none" stroke="#0ff" d="m636.80502,520.57643l16.92856,-15.99999l45.14283,0l16.92856,15.99999l-16.92856,15.99999l-45.14283,0l-16.92856,-15.99999z" id="svg_18"/>
  <path fill="none" stroke="#0ff" d="m240.79501,589.30356l24.21429,-26l64.57143,0l24.21428,26l-24.21428,26l-64.57143,0l-24.21429,-26z" id="svg_19"/>
  <path fill="none" stroke="#0ff" d="m272.59999,542.47641l16.92858,-19l45.14287,0l16.92857,19l-16.92857,19l-45.14287,0l-16.92858,-19z" id="svg_20"/>
  <path fill="none" stroke="#0ff" d="m304.47499,508.13643l11.57143,-15.5l30.85715,0l11.57143,15.5l-11.57143,15.5l-30.85715,0l-11.57143,-15.5z" id="svg_21"/>
  <path fill="none" stroke="grey" d="m217.40499,530.1214l14.78572,-34.49999l39.42857,0l14.78571,34.49999l-14.78571,34.49999l-39.42857,0l-14.78572,-34.49999z" id="svg_23"/>
  <path fill="none" stroke="grey" d="m192.04,478.57359l16.92858,-17.5l45.14287,0l16.92857,17.5l-16.92857,17.5l-45.14287,0l-16.92858,-17.5z" id="svg_24"/>
  <path fill="none" stroke="grey" d="m139.305,500.71142l15.21429,-23l40.57143,0l15.21428,23l-15.21428,23l-40.57143,0l-15.21429,-23z" id="svg_25"/>
  <path fill="none" stroke="grey" d="m279.09499,476.29646l12.64286,-15.5l33.71429,0l12.64285,15.5l-12.64285,15.5l-33.71429,0l-12.64286,-15.5z" id="svg_26"/>
  <path fill="none" stroke="grey" d="m569.25494,575.4114l16.50001,-37.99999l44.00002,0l16.5,37.99999l-16.5,37.99999l-44.00002,0l-16.50001,-37.99999z" id="svg_27"/>
  <path fill="none" stroke="grey" d="m658.69498,586.49347l6.64284,-10.99997l17.71425,0l6.64284,10.99997l-6.64284,10.99997l-17.71425,0l-6.64284,-10.99997z" id="svg_28"/>
  <path fill="none" stroke="grey" d="m732.80008,535.9964l11.78572,-15.49998l31.42857,0l11.78571,15.49998l-11.78571,15.49998l-31.42857,0l-11.78572,-15.49998z" id="svg_29"/>
  <path fill="none" stroke="grey" d="m720.87497,497.21143l12.64285,-19.50001l33.71426,0l12.64284,19.50001l-12.64284,19.50001l-33.71426,0l-12.64285,-19.50001z" id="svg_30"/>
  <path fill="none" stroke="grey" opacity="NaN" d="m22,125" id="svg_31"/>
  <polyline fill="none" stroke="#0ff" points="848,234 848,234 " id="svg_40" stroke-linecap="round"/>
  <polyline fill="none" stroke="#0ff" points="854,296 854,296 " id="svg_41" stroke-linecap="round" transform="rotate(-180 854 296)"/>
  <ellipse fill="none" cx="806.5" cy="47.5" id="svg_43" rx="53.5" ry="36.5" stroke="#0ff"/>
  <ellipse fill="none" stroke="#0ff" cx="920" cy="150" id="svg_44" rx="36" ry="47"/>
  <ellipse fill="none" cx="919.5" cy="149.5" id="svg_45" rx="26.5" ry="29.5" stroke="#0ff"/>
  <path fill="none" d="m223.785,531.07143l10.92857,-25.5l29.14286,0l10.92857,25.5l-10.92857,25.5l-29.14286,0l-10.92857,-25.5z" id="svg_46" stroke="#0ff"/>
  <path fill="none" d="m255.6,588.21643l18.85714,-17.00003l50.2857,0l18.85713,17.00003l-18.85713,17.00003l-50.2857,0l-18.85714,-17.00003z" id="svg_47" stroke="#0ff"/>
  <path fill="none" d="m576.99999,575.34638l12.64287,-24.99997l33.71432,0l12.64287,24.99997l-12.64287,24.99997l-33.71432,0l-12.64287,-24.99997z" id="svg_48" stroke="#0ff"/>
  <path fill="none" d="m650.69498,520.04642l10.07143,-9.49999l26.85714,0l10.07143,9.49999l-10.07143,9.49999l-26.85714,0l-10.07143,-9.49999z" id="svg_49" stroke="#0ff"/>
  <path fill="none" d="m730.27498,495.69144l8.57143,-14.00002l22.85715,0l8.57143,14.00002l-8.57143,14.00002l-22.85715,0l-8.57143,-14.00002z" id="svg_50" stroke="grey"/>
  <path fill="none" d="m742.24002,535.9714l7.92858,-10.5l21.14289,0l7.92858,10.5l-7.92858,10.5l-21.14289,0l-7.92858,-10.5z" id="svg_51" stroke="#00ff0d"/>
  <path id="svg_2" d="m16,75c60,0 61,-1 61,-1c0,0 18,16 18,16c0,0 200,-7 200,-7c0,0 2,64 2,64" opacity="NaN" stroke="#00ff0d" fill="none"/>
  <path id="svg_5" d="m985,298l-141,0l-45,54l-70,-1l-37,-43l43,-61l77,-2l44,73l-95,109l39,59l59,2l37,-55l-39,-47l-73,-4l7,241l169,1" opacity="NaN" stroke="#00ff0d" fill="none"/>
  <path stroke="#00ff0d" id="svg_6" d="m27.92437,151.05625l98.16807,-3.05625l10.90756,484.92498l-118,4.075" opacity="NaN" fill="none"/>
  <path id="svg_7" d="m168,18l0,28l38,13l33,-22l228,-3" opacity="NaN" stroke="#00ff0d" fill="none"/>
  <path stroke="#00ff0d"  strokeWidtth = '6' id="svg_9" d="m977,52.72414l-97.696,-2.72414l-27.52,49.03448l-53.664,0l-6.88,29.96552l-158.24001,-2.72414" opacity="NaN" fill="none"/>
  <ellipse stroke="#00ff0d" ry="26" rx="35.5" id="svg_10" cy="49" cx="805.5" fill="none"/>
 </g>




<g   
 transform="translate(130, 145) scale(0.36)"  
 cursor ='pointer'
 >
   <Link to="/animalFeed">
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
    > Animal Feed </text>  
    </g>
    </Link>
 </g>


  <g   
 transform="translate(130, 250) scale(0.36)"  
 cursor= 'pointer'
 >
   <Link to = "/dentition">
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
    > Dentition </text>  
  </g>
  </Link>
 </g>


  <g   
 transform="translate(330, 350) scale(0.36)"  
 cursor= 'pointer'
 >
   <Link to = "/ecosystem">
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
    > Ecosystem</text>  
  </g>
  </Link>
 </g>

   <g   
 transform="translate(550, 245) scale(0.36)"  
 cursor= 'pointer'
 >
   <Link to = "/specialized cells">
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
    > Specialized Cells</text>  
  </g>
  </Link>
 </g>


   <g   
 transform="translate(550, 145) scale(0.36)"  
 cursor= 'pointer'
 >
   <Link to = "/grasshopper" >
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
    > Life Cycle of Grasshoppers </text>  
  </g>
  </Link>
 </g>

    
</svg>









    </div>
  )
}

export default Biology
