import React from 'react'
//import { MdScience } from "react-icons/md"
//import { AiFillAlert } from "react-icons/ai";



function IconFrame({children}) {
  return (
    <div
    
    style = {{
        width:'90%',
        height:'90%',      
        alignItems: 'center',   
        justifyContent: 'center',   
        alignSelf: 'center',
        justifySelf: 'center', 
        display: 'flex',
        flexDirection: 'column',     
    }}>
 
 
 
  <div
   style={{
     position: "relative", 
     width: "100%",
     height:'100%',
     marginTop: '-40px', 
    
      }}>
      <svg
        viewBox="0 0 800 500"
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          marginLeft:'22%',
          textShadow:'-4px 4px 3px #FFDA2E',
          boXShadow:'-4px 4px 3px #FFDA2E'
        }}
      >
        <path
          style={{
            stroke: "#ffda2e",
            strokeWidth: "25px",
            fill: "none",
            textShadow: '-4px 4px 3px #FFDA2E'
          }}
          d="M 124.871 93.139 L 345.111 92.453 L 448.027 231.046 L 331.389 415.609 L 145.455 413.551 L 28.131 237.221 L 124.871 93.139 Z"
        ></path>

        <path
          style={{
            stroke: "#ffda2e",
            fill: "none",
            strokeWidth: "7px",
          }}
          d="M 141.338 122.642 L 327.273 121.269 L 406.861 233.791 L 316.295 384.734 L 161.921 385.42 L 60.377 239.966 L 141.338 122.642 Z"
        ></path>
      </svg>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          pointerEvents: "auto", 
        }}
      >
        {children}
      </div>
    </div>



    </div>
  )
}

export default IconFrame
