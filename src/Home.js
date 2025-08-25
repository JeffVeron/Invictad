import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
/* import About from "./About"; */
import { FaStar } from "react-icons/fa";
import { GiChest } from "react-icons/gi";
 import * as motion from "motion/react-client"





function Home () {
  return (
    <div 
    style={{
     // marginTop:'-400px',
      height: '800px',
      width: "100%",
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
    >

       <nav
           style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around' ,
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#282c34',
      color: 'white',
      padding: '20px',
      textDecoration: 'none', 
    }}
      >
        <Link  to="/" 
         style ={{
          textDecoration: 'none',
          color: 'white',
          fontSize: '30px',
          fontWeight: 'bold'
        }}
        >Home</Link>  

        <Link to="/about "      /* /about */   /* /about */
         style ={{
          textDecoration: 'none',
          color: 'white', 
          fontSize: '30px',
          fontWeight: 'bold'
        }} >About</Link>  
         
      </nav>

        <div
        style={{
          display: 'flex',
          flexDirection:'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: '70%',
          marginBottom: '20px',

        }}
        >


 
       <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1,
                repeat: Infinity, 
                scale: { type: "bounce", visualDuration: 0.4, bounce: 0.5 },
            }}
            style={ball}
        >
          <p
          style = {{
            alignSelf :'center',
            justifySelf: 'center',
            justifyContent: 'center',
            alignItems: 'center', 
            marginBottom: '20px', 
          }}
          >start</p>
          <div
          style ={{
  content: "''",
    position: 'absolute',
    bottom: '-20px',
    left: '50%',
    marginLeft: '-10px',
    width: '0',
    height: '0',
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderTop: '10px solid white',
    borderTopColor: 'white',
          }}
          ></div>
          </motion.div>

      <div 
        style = {{
          backgroundColor: '#343A40',
          width: 104,
          height: 90,
          alignSelf: 'center',
          alignContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems : 'center' , 
          borderRadius:'50%'


        }}
        >

         <Link  to="/level_1" 
          style ={{
          textDecoration: 'none',
          color: 'white',
        }}>
          <div
          style={{
            backgroundColor: 'grey',
            width: 100,
            height: 80,
            alignSelf: 'center',
            alignContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems : 'center' ,
            borderRadius:'50%',
            marginBottom: '12px'
          }}
          >
                      <FaStar 
          style = {{
            color: '#343A40',
            fontSize: 50,
            alignSelf:'center',
            alignContent:'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems : 'center' ,
            borderRadius:'50%'
          }}
          />
          
   </div>
   </Link>  
          </div>

          
 
 


 <div 
        style = {{
          backgroundColor: '#343A40',
          width: 104,
          height: 90,
          alignSelf: 'center',
          alignContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems : 'center' , 
          borderRadius:'50%'


        }}
        >
           <Link  to="/level_2" 
          style ={{
          textDecoration: 'none',
          color: 'white',
        }}>
          <div
          style={{
            backgroundColor: 'grey',
            width: 100,
            height: 80,
            alignSelf: 'center',
            alignContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems : 'center' ,
            borderRadius:'50%',
            marginBottom: '12px'
          }}
          >
                      <FaStar 
          style = {{
            color: '#343A40',
            fontSize: 50,
            alignSelf:'center',
            alignContent:'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems : 'center' ,
            borderRadius:'50%'
          }}
          />
   </div>
   </Link>
          </div>

 
     <div 
        style = {{
          backgroundColor: '#343A40',
          width: 100,
          height: 100,
          alignSelf: 'center',
          alignContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems : 'center' , 
          borderRadius:'50%'


        }}
        >
         <Link  to="/level_3" 
          style ={{
          textDecoration: 'none',
          color: 'white',
        }}>
          <div
          style={{
            backgroundColor: 'grey',
            width: 80,
            height: 80,
            alignSelf: 'center',
            alignContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems : 'center' ,
            borderRadius:'50%'
          }}
          >
                      <FaStar 
          style = {{
            color: '#343A40',
            fontSize: 50,
            alignSelf:'center',
            alignContent:'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems : 'center' ,
            borderRadius:'50%'
          }}
          />
   </div>
   </Link>
          </div>
  

 
        <div 
        
         style = {{
          backgroundColor: ' #343A40',
          width: 100,
          height: 100,
          alignSelf: 'center',
          alignContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems : 'center' , 
          borderRadius:'50%'


        }}
        >
                     <Link  to="/categories" 
          style ={{
          textDecoration: 'none',
          color: 'white',
        }}>
          <div 
           style={{
            backgroundColor: 'grey',
            width: 80,
            height: 80,
            alignSelf: 'center',
            alignContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems : 'center' ,
            borderRadius:'50%'
          }}
          >
           <GiChest  
            style = {{
            color: '#343A40',
            fontSize: 50,
            alignSelf:'center',
            alignContent:'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems : 'center' ,
            borderRadius:'50%'
          }}
           />
          </div>
          
          </Link>
         </div>


        </div>

  
 
     <footer
     style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around' ,
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#282c34',
      color: 'white',
      padding: '20px',
    }}
     >

      <div>
        <p
         style ={{
          textDecoration: 'none',
          color: 'white',
          fontSize: '30px',
          fontWeight: 'bold'
        }}
        >Subject</p>
      </div>

      <div>
        <p
         style ={{
          textDecoration: 'none',
          color: 'white',
          fontSize: '30px',
          fontWeight: 'bold'
        }}
        >Xp</p>
      </div>

      <div>
        <p
         style ={{
          textDecoration: 'none',
          color: 'white',
          fontSize: '30px',
          fontWeight: 'bold'
        }}
        >Heart</p>
      </div>

      </footer>
    </div>
  )
}

export default Home
const ball ={
      position: 'relative',
      width: '100px',
      height:'auto',
      backgroundColor: 'white',
      border: '2px solid #333',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      fontFamily: 'Arial, sans-serif',
   
}