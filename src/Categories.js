import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import IconFrame from './frames/IconFrame'
import { MdOutlineScience } from "react-icons/md";
//import { MdScience } from "react-icons/md" 
import { MdScience } from "react-icons/md"
import { BiBorderBottom } from 'react-icons/bi';
//import { AiFillAlert } from "react-icons/ai";
import ProgressBar from "./frames/ProgressBar";
import CategoryCard from './frames/CategoryCard'
import { GiAsteroid } from "react-icons/gi";
import { GiPlantRoots } from "react-icons/gi";
import { SlChemistry } from "react-icons/sl";
import { FaEarthAfrica } from "react-icons/fa6";






function Categories() {
 const glowText = "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff"
  const glowText2 = "0 0 5px #FE5D26, 0 0 10px #FE5D26, 0 0 20px #FE5D26"
  const glowBorder =  '1px 1px 10px #0ff, 1px 1px 15px #0ff, 2px 12px 10px #0ff'
  const glowBorder2 = "0 0 5px #FE5D26, 0 0 10px #FE5D26, 0 0 20px #FE5D26"
   const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
    style = {{
       margin:'0px',
       padding:0, 
     //marginTop:'400px',  
      width:'100%',
      //height:'100mvh',
      height:'6000px',  
      //backgroundColor:'brown',
      backgroundColor:'#001f3f',
      justifyContent:'center',
      justifySelf:'center',
      alignItems:'center',
      alignSelf:'center'

    }}
    
    >
      <h1
      style = {{
        fontFamily: 'Orbitron, sans-serif',
        fontSize: '45px',
        color:'#ffda2e',
        fontWeight:'bold',
        textShadow:"0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff"

      }}
      >CHALLENGES</h1>
        <div style={{
           display: 'flex',
            flexDirection: 'column', 
            alignItems: 'center',
           
            }}>
           
           <div
           style = {{
            marginLeft:'-50%',   
            width :'200px',
            height: '25px',        
           // backgroundColor:'white',
            display:'flex',
            flexDirection:'row',
            alignItems: 'center',
            justifyContent: 'space-around',

           }}
           > 
           <div
           style = {{
             display:'flex',
            justifycontent:'center',
            alignItems:'center',
            alignSelf:'center',
            width:'50%',
            height:'20px',
            //backgroundColor:"yellow",
            border:'3px solid blue',
             clipPath:'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)'
           }}
           >
                 <p
             style = {{
               color: '#ffda2e',
              fontWeight:'bold',
              textShadow: glowText,
              fontFamily: 'Orbitron, sans-serif',
              textAlign: 'center',
                       //textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              justifySelf: 'center',
              alignSelf: 'center',
              height:'100%',
              paddingLeft:'20px',
             // width:'auto'
             
             }}
             >Mission</p>
           </div>

                        <div
           style = {{
            display:'flex',
            justifycontent:'center',
            alignItems:'center',
            alignSelf:'center',
            width:'50%',
            height:'20px',
           // backgroundColor:"yellow",
            border:'3px solid blue',
             clipPath:'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',

           }}
           >
                 <p
             style = {{
               color: '#ffda2e',
               fontWeight:'bold',
              textShadow: glowText,
              fontFamily: 'Orbitron, sans-serif',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              justifySelf: 'center',
              alignSelf: 'center',
              height:'100%',
              width:'auto',
              paddingLeft:'20px',
             
             }}
             >Weekly</p>
           </div>
          </div>
   <div> 

<div 
style = {styles.gridContainer}
>    


  
<CategoryCard
/* style = {styles.box} */
link = {'/generalScience'}
cardTitle = {'General Science Progression'}
>
  <IconFrame>
  <MdScience
   size={45}
   color={'#ffda2e'}
   style={
    styles.iconStyle} 
    />
    </IconFrame>
</CategoryCard> 
          
 
<CategoryCard
 
link = {'/spaceAndAstronomy'}
cardTitle = {'Space and Astronomy'}
>
  <IconFrame>
  <GiAsteroid 
   size={45}
   color={'#ffda2e'}
   style={
    styles.iconStyle} 
    />
    </IconFrame>
</CategoryCard>



<CategoryCard
 
link = {'/biology'}
cardTitle = {'Biology'}
>
  <IconFrame>
<GiPlantRoots
   size={45}
   color={'#ffda2e'}
   style={
    styles.iconStyle} 
    />
    </IconFrame>
</CategoryCard>




            

 <CategoryCard
  
link = {'/physicsAndChemistry'}
cardTitle = {'Physics and Chemistry'}
>
  <IconFrame>
  <SlChemistry
   size={45}
   color={'#ffda2e'}
   style={
    styles.iconStyle} 
    />
    </IconFrame>
</CategoryCard>

<CategoryCard
 
link = {'/earthAndEnvironmentalScience'}
cardTitle = {'Earth and Environmental Science'}
>
  <IconFrame>
  <FaEarthAfrica
   size={45}
   color={'#ffda2e'}
   style={
    styles.iconStyle} 
    />
    </IconFrame>
</CategoryCard>
</div>


         
            
          </div>
    </div>
    </div>
  )
}

export default Categories

const styles  = {
  cardBox:{
   marginTop:'20px',  
   height:'40%',  
   width:'25%',
   border:'5px #ffda2e solid',
   boxShadow:'-4px 4px 3px 4px -3px #FFDA2E',
   borderRadius :'20px',
  },
  iconFrame :{  
  alignItems:'center',
  height: '200px',
   width:'200px',
   alignItems:'center',
   alignSelf:'center',
   justfiyContent:'center',
   justifySelf:'center',
  //backgroundColor:'yellow',
  
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
    textShadow: '-4px 4px 3px #FFDA2E',
    fontFamily: 'Orbitron, sans-serif',
    textAlign: 'center',
    height:'100px',
    marginBottoma: '20px',
    width:'100%',
    marginTop:'-40px',
    fontSize: '20px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textDecoration:'none',
    textDecorationLine: 'none',
    BiBorderBottom: '2px #ffda2e solid',
    //backgroundColor:'white'
    
  },
  gridContainer:{
      /*  display: 'grid',
     gridTemplateColumns: 'repeat(2, 2fr)', 
     gap: '5px' ,
    justfiyContent:'center',
     justifySelf:'center',
     alignItems:'center',
     alignSelf:'center' */
     
  },
  box:{
      //background: lightblue;
  padding: '20px'
  //text-align: center;
  }
}
