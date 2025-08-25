import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import ProgressBar from "./ProgressBar"
//import LabBasics from '../LabBasics';  


function CategoryCard({ children, link, cardTitle }) {

 const [progress, setProgress] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 100);

    return () => clearInterval(interval);
  }, []); 


 

  return (
    <div  style = {styles.cardBox} >
  <Link to ={"./labBasics"} > <p> Lab </p></Link>
  <Link 
   to = {link} 
   style = {{
    textDecoration:'none'
   }}
   >
  <div
   style = {styles.iconFrame}
   >
       {children}
  </div>

<p
style = {styles.cardTitle}
>{cardTitle} </p>

<hr style = {styles.cardLine}  />
<p style = {styles.cardProgressValueStyle}>[0/8]</p>

<div 
style = {styles.progressBarStyle}
>
<h2 
style = {{
  textDecoration:'none',
  color:'#ffda2e',
  textShadow:"0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff"
}}
>Loading...{progress} % </h2>
 <ProgressBar progress={progress} />
</div>

       </Link>
    
    </div>
  )
}

export default CategoryCard

const styles = {
   cardBox:{
   marginTop:'20px',  
   marginBottom:'40px',
   height:'500px',    
   width:'80%',   
   border:'5px #ffda2e solid',
   boxShadow:'4px 4px 3px 4px #FFDA2E, -4px -4px 3px 4px rgba(255, 218, 46, 0.5)',  
   borderRadius :'20px',
   backgroundColor:'rgba(255, 218, 46, 0.06)'
  },
  iconFrame :{  
  alignItems:'center',
  height: '200px',
   width:'200px',
   alignItems:'center',
   alignSelf:'center',
   justfiyContent:'center',
   justifySelf:'center',
  
  },
  iconStyle:{
  alignItems:'center',
  alignSelf:'center',
  justfiyContent:'center',
  justifySelf:'center',
  },
  cardTitle:{
    color: '#ffda2e',
    textDecoration: 'none',
    textShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
    fontFamily: 'Orbitron, sans-serif',
    //fontWeight:'bold',
    textAlign: 'center',
    height:'100px',
    marginBottoma: '20px',
    width:'100%',
    marginTop:'-40px',
    fontSize: '25px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textDecoration:'none',
    textDecorationLine: 'none',
    BiBorderBottom: '2px #ffda2e solid',
  },
  cardLine:{
    color: '#ffda2e',
    width: '100%',
    marginTop: '-20px',
    fontSize: '20px',
    boxShadow:'4px 3px 4px #ffda2e',  
    opacity: 0.5,  
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textDecoration:'none',
    textDecorationLine: 'none',
  },
  cardProgressValueStyle : {
    textDecoration: 'none',
    color: '#ffda2e',
    textDecorationLine:'none',
    fontFamily: 'Orbitron, sans-serif',
    textAlign: 'center',
    fontSize: '20px',  
  },
  progressBarStyle:{
    padding: "40px",
   width: "80%", 
   justifyContent: "center",
   alignItems:'center',
    alignSelf: 'center',
    justifySelf: 'center',
    display: 'flex',
    flexDirection: 'column',
  }
}