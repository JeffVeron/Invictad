import React, { useState,useEffect} from "react";
import { scienceQuestions } from "../ScienceMultipleChoiceQuestions";   
import * as motion from "motion/react-client";
import useXpStore from "../xpStore";
import confetti from "canvas-confetti";
   

 const ball = {
    position: "relative",
    border: "5px solid #333",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    fontFamily: "Arial, sans-serif",
  };

 const wrapText = (text, maxCharsPerLine = 25) => {
  const words = text.split(' ');
  const lines = [];
  let currentLine = "";

  for (let word of words) {
    if ((currentLine + word).length <= maxCharsPerLine) {
      currentLine += word + " ";
    } else {
      lines.push(currentLine.trim());
      currentLine = word + " ";
    }
  }
  if (currentLine) lines.push(currentLine.trim());
  return lines;
};




function Frame_4({children }) {
   const [questionNumber, setQuestionNumber] = useState(0); 
   const [notStarted, setNotStarted] = useState(true);  
   const [startQuest, setStartQuest] = useState(false); 


   
  const [startLevel3, setStartLevel3] = useState(true);
  const [started, setStarted] = useState(false);
  const [hidenStartButton,setHidenStartButton] = useState(true) 
  const [correctAnswerA, setCorrectAnswerA] = useState(false);
    const [correctAnswerB, setCorrectAnswerB] = useState(false);
    const [correctAnswerC, setCorrectAnswerC] = useState(false);
    const [correctAnswerD, setCorrectAnswerD] = useState(false);
    const [wrongAnswerA, setWrongAnswerA] = useState(false);
    const [wrongAnswerB, setWrongAnswerB] = useState(false);
    const [wrongAnswerC, setWrongAnswerC] = useState(false);
    const [wrongAnswerD, setWrongAnswerD] = useState(false);
 const xp = useXpStore((state) => state.xp)
  const addXp = useXpStore((state) => state.addXp)
  const deductXp = useXpStore((state) => state.deductXp)
  const [continnue , setContinnue] =  useState(false)
  const [nextQuestion, setNextQuestion] = useState(false);
  const [borderColorA, setBorderColorA] = useState("none");
  const [borderColorB, setBorderColorB] = useState("none");
  const [borderColorC, setBorderColorC] = useState("none");
  const [borderColorD, setBorderColorD] = useState("none");
  const [hideQuestion ,setHideQuestion] = useState(false)




        const handleClick = () => {
   setNotStarted(false);
   setStartQuest(true);
        }

const lines =  wrapText(scienceQuestions.level_5[questionNumber].question)



const answer = scienceQuestions.level_5[questionNumber].answer;
  const [A_answer, B_answer, C_answer, D_answer] = scienceQuestions.level_5[questionNumber].options;
  const [A_answerBox, B_answerBox, C_answerBox, D_answerBox] = [
    A_answer === answer ? true : false,
    B_answer === answer ? true : false,
    C_answer === answer ? true : false,
    D_answer === answer ? true : false,
  ];

const glowCorrect  = 'url(#glowCorrect)'
const glowWrong = 'url(#glowWrong)'

useEffect(()=>{
  if (correctAnswerA || correctAnswerB || correctAnswerC || correctAnswerD) {
    setContinnue(true);
    addXp(3);
    setHideQuestion(true);
   
  } else if (wrongAnswerA || wrongAnswerB || wrongAnswerC || wrongAnswerD) {
    deductXp(3);
    setContinnue(false);
    setHideQuestion(false); 
  }
},[correctAnswerA, correctAnswerB, correctAnswerC, correctAnswerD, wrongAnswerA, wrongAnswerB, wrongAnswerC, wrongAnswerD, addXp, deductXp])

  function check_A_Answer() {

      if(A_answerBox){
    setCorrectAnswerA(true);
      setWrongAnswerA(false);
     setBorderColorA(glowCorrect);
     addXp()   
     setHideQuestion(true);
 
   } else {
    setWrongAnswerA(true);
    setBorderColorA(glowWrong);
    setHideQuestion(false);

   }
   


    if (
      scienceQuestions.level_5[questionNumber].answer ===
      scienceQuestions.level_5[questionNumber].options[0]
    ) {
       setWrongAnswerA(false);
      setCorrectAnswerA(true);   
      setBorderColorA(glowCorrect);
       addXp()
       setHideQuestion(true);
    } 
    if (wrongAnswerA){
        setBorderColorA(glowWrong);
        setHideQuestion(false);
    }
  }

    function check_B_Answer() {
    //  console.log('clicked B')
    //  console.log( scienceQuestions.level_2[questionNumber].answer)
    //  console.log( scienceQuestions.level_2[questionNumber].options[1] )
   if(B_answerBox){
    setCorrectAnswerB(true);
      setWrongAnswerB(false);
     setBorderColorB(glowCorrect);
     setHideQuestion(true);
   } else {
    setWrongAnswerB(true);
    setHideQuestion(false);
   }
   
   
    if (
      scienceQuestions.level_5[questionNumber].answer === scienceQuestions.level_5[questionNumber].options[1]
    ) {
      setCorrectAnswerB(true);
      setWrongAnswerB(false);
     setBorderColorB(glowCorrect);
     setHideQuestion(true);
    } else {
      setWrongAnswerB(true);
      setHideQuestion(false);
    }
        if (wrongAnswerB){
        setBorderColorB(glowWrong);
        setHideQuestion(false);
    }

  }

    function check_C_Answer() {
    if (
      scienceQuestions.level_5[questionNumber].answer ===
      scienceQuestions.level_5[questionNumber].options[2]
    ) {
      setCorrectAnswerC(true);
      setWrongAnswerC(false);  
    setBorderColorC(glowCorrect);
    setHideQuestion(true);
       
    }else {
      setWrongAnswerC(true);
      setHideQuestion(false);
    } 
    
    if (wrongAnswerC){
        setBorderColorC(glowWrong);
        setHideQuestion(false); 
    }
  }

    function check_D_Answer() {
     // alert('clicked')
    //alert(scienceQuestions.level_2[questionNumber].options[3])
       if(D_answerBox){
    setCorrectAnswerD(true);
      setWrongAnswerD(false);
     setBorderColorD(glowCorrect);
     setHideQuestion(true); 
   } else {
    setWrongAnswerD(true);
    setHideQuestion(false); 
   }



   
    if (
      scienceQuestions.level_5[questionNumber].answer === scienceQuestions.level_5[questionNumber].options[3]
    ) {
      setCorrectAnswerD(true);
      setWrongAnswerD(false);
      setBorderColorD(glowCorrect);
      setHideQuestion(true);
    }  else {
      setWrongAnswerD(true);
      setHideQuestion(false); 
    }

    if (wrongAnswerD){
        setBorderColorD(glowWrong);
        setHideQuestion(false);
    }
  }



  useEffect(()=>{
    if (nextQuestion) {
      setQuestionNumber((prev) => prev + 1);
      setNextQuestion(false);
      setCorrectAnswerA(false);
      setCorrectAnswerB(false);
      setCorrectAnswerC(false);
      setCorrectAnswerD(false);
      setWrongAnswerA(false);
      setWrongAnswerB(false);
      setWrongAnswerC(false);
      setWrongAnswerD(false);
      setBorderColorA("none");
      setBorderColorB("none");
      setBorderColorC("none");
      setBorderColorD("none");
      setContinnue(false);
     // setNextQuestion(false);

     //alert('next question')

      if (questionNumber === scienceQuestions.level_5.length - 1) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
        alert("Congratulations! You have completed Level 2!");
        // Reset to start level 2 again
        setStartLevel3(true);
        setStarted(false);
        setQuestionNumber(0);
      }
    }
  },[continnue , nextQuestion])
 




    return (
        <div
            style={{
                width: '90%',
                height: '70%',        
                justifyContent:'center',
                alignContent: 'center',
                display: 'flex',
                alignItems:'center',
                alignSelf:'center',
                marginLeft:'40px'
               
            }}
        >
 
  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 500 500"
  preserveAspectRatio="none"
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
  
{/* #00FF0D */}

    <filter id="glowCorrect" x="-50%" y="-50%" width="200%" height="200%">
     <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#00ff0d" floodOpacity="1" /> 
     <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#00ff0d" floodOpacity="0.7" /> 
     <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#00ff0d" floodOpacity="0.5" />
    </filter>

    



  </defs>

  <path
    style={{
      stroke: '#0ff',
      fill: 'none',
      strokeWidth: '10px',
      filter: 'url(#glow)',
    }}
    d="M 30.189 47.856 L 390.395 46.484 L 439.108 80.789 L 441.166 268.782 L 409.605 311.321 L 300.514 315.438 L 263.465 284.563 C 257.393 284.563 80.275 278.388 80.275 278.388 L 31.561 251.629 L 30.189 47.856 Z"
  />

  <g>


 <g 
 transform="translate(40, 80)" 
 
 style = {{
  display: 'flex',
  backgroundColor:'white',
  fill:'white'
 }}
  >
      
      <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z"
       y='20'   
       x= '0'    
      dominantBaseline="middle" textAnchor="middle"

      style = {{
      stroke: '#0ff',
      fill: 'none',
      filter: 'url(#glow)',     
      }}   
    /> 
    
        <text x="140" y="0" dominantBaseline="middle" textAnchor="middle" style={{
        fill: '#0ff',
        fontFamily: 'Orbitron, sans-serif',
        filter: 'url(#glow)',
        display: 'flex',
        flexDirection:'row',

      }}>
      Number of Questions Answered
    </text> 
    
      <text
       x="340" 
       y="0" 
       dominantBaseline="middle"
        textAnchor="middle"
         style={{
        fill: '#0ff',  
        fontFamily: 'Orbitron, sans-serif',
        filter: 'url(#glow)',
      }} 
      >
         {`[ ${questionNumber} / ${scienceQuestions.level_4.length} ]`}  
      </text>  
  </g>


{
  notStarted && (
      <g transform="translate(150, 150)">
     
    <path
      x ='50%'
      y ='50%'
      d="M 0,0 m -30,0 a 30,30 0 1,0 60,0 a 30,30 0 1,0 -60,0"
      fill="none"
      stroke="#0ff"
      strokeWidth="5"
      filter = 'url(#glow)'
      cursor = 'pointer' 
      onClick={handleClick}
    />  
    <text
     x="0"
     y="5"   
     textAnchor="middle"  
     fontSize="10"  
     fill="#0ff" 
     cursor = 'pointer' 
     filter='url(#glow)' 
     onClick={handleClick}      
     >
      Start Quest
    </text>      
  </g>
  )
}

{startQuest && (
  <g transform="translate(50, 90)">
    <path 
    fill = 'none'
    stroke="#0ff" 
    d="M10,20 H290 V180 H10 Z"
    
    />
    <text    
      transform="translate(40, 40)"             
      textAnchor="middle"  
      fontSize="10"  
      fill="#0ff" 
      filter='url(#glow)' 
    >
      Question  {questionNumber + 1} 
    </text> 
   

{
  !hideQuestion && (
       <motion.text 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
         duration: 1,
         repeat: Infinity,
         scale: { type: "bounce", visualDuration: 0.4, bounce: 0.5 },
        }}
      style={ball}  
      x= '50'         
      y= '45'    
      textAnchor="middle"    
      fontSize="15"    
      fill="pink"  
      filter='url(#glow)'    
    >
      {lines.map((line, index) => (
          <tspan key={index} x="150" dy={index === 0 ? 0 : 25}>
            {line}
          </tspan>
        ))}
    </motion.text>  
  )
}


{/* 
  <foreignObject x="10" y="10" width="280" height="130">
    <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: '16px', color: 'black' }}>
      This is a long paragraph that will automatically wrap inside the foreignObject area.
    </div>
  </foreignObject> */}

  { continnue && (
    <g
     transform="translate(80, 20)"  
     cursor = 'pointer'
              onClick={() => {
                setNextQuestion(true)
                setHideQuestion(false);       
               } }
    >
      {/* <rect stroke-width='5' x="0" y="0" width="100" height="50" fill="#ba87ff"  rx = '20' ry = '15'  />   */}
    <path 
     rx="10"
     ry ='10'
    stroke="#0ff"
    strokeWidth="5" 
        cursor = 'pointer'
              onClick={() => {
                setNextQuestion(true)
                setHideQuestion(false);       
               } }
    fill = 'none'    
    d="M10,20 H100 V80 H10 Z"/>   


        <text
        x= '5'       
        y= '50' 
        fill="#0ff"   
        fontsize = '4'
        filter = 'url(#glow2)' 
        cursor = 'pointer' 

        >Next Question</text>
    </g>
  )}

/*  Answer Box A  */
  <g
   viewBox="500 500 0 0"
   preserveAspectRatio="none"
    transform="translate(10, 80)  scale(0.25)"
    onClick={check_A_Answer}
    cursor="pointer"
    filter={`${borderColorA}`} 
   // fill = 'white'          
  >
    <path 
          style={{
      
              stroke: '#0ff',
               fill: 'none',
                strokeWidth: '6px',}}
                d="M 24.33 120.751 L 9.302 157.245 C 9.302 157.245 31.452 212.278 33.632 216.637 L 93.023 216.637 L 47.943 145.796 L 68.694 120.751 C 33.819 120.751 24.33 120.751 24.33 120.751 Z"
                />
                <path 
                style={{
                  stroke: '#0ff',
                  fill: 'none',
                  strokeWidth: '5px' }}
                  d="M 87.299 120.751 L 71.556 145.796 L 93.023 145.796 L 103.757 127.191 L 190.34 126.476 L 191.055 120.751 L 85.867 120.751"
                  />
                  <path style={{
                      stroke: '#0ff',
                       fill: 'none',
                        strokeWidth: '5px'}}
                        d="M 71.557 151.521 L 93.023 151.521 L 124.508 208.051 L 244.723 208.05 L 244.723 216.637 L 110.912 216.637 L 71.556 151.52"
                        />
                        
                        
                        <path 
                        style={{stroke: '#0ff',
                           fill: 'none',
                           strokeWidth: '5px'}}
                       d="M 115.206 130.769 L 103.041 145.796 L 133.095 200.178 L 244.723 200.894 L 254.025 189.445 L 279.07 189.445 L 286.225 198.748 L 398.569 198.748 L 427.907 151.52 L 412.88 127.191 L 118.068 131.485"
                       />
                       
                       <path 
                       style={{
                          stroke: '#0ff',
                           fill: 'none',
                          strokeWidth: '5px'}}
                       d="M 418.605 120.751 L 312.702 120.751 L 311.27 113.596 L 427.191 113.596 L 453.667 145.796 L 435.778 145.796 L 416.458 120.751"
                       />
                       <path 
                       style={{
                          stroke: '#0ff',
                          fill: 'none',
                          strokeWidth: '5px',}}
                          d="M 436.493 157.245 L 447.227 157.961 L 415.742 216.637 L 284.795 216.637 L 284.795 210.197 L 409.302 208.766 L 436.493 157.245 Z"
                          />
                      <path 
                      style={{
                          stroke: '#0ff',
                          fill: 'none',
                          strokeWidth:'5px'}}
                    d="M 437.925 112.165 C 437.9 112.165 461.961 140.787 463.685 140.787 L 464.401 148.659 L 427.907 216.637 L 475.134 216.637 L 500 138.64 L 478.712 110.734 L 437.925 112.165 Z"
                    />
                    <path
                     style={{
                      stroke: '#0ff',
                       strokeWidth: '5px',
                        fill: 'none'}}
                   d="M 254.025 215.206 L 279.07 216.637 L 284.795 228.086 L 296.959 227.37 L 284.795 249.553 L 250.447 248.837 L 238.283 226.656 L 251.879 227.37 L 254.025 215.206 Z"
                   />
        <text
        x= '50%'
        y ='35%'
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#0ff"
        filter="url(#glow2)"  
        fontSize = '40'  
        style = {{
          justifyContent: 'center',
          alignItems: 'center',     
        }}
        >
        A. {scienceQuestions.level_5[questionNumber].options[0]}
        </text>
  </g>

  {/* Answer Box B */}
   <g
   viewBox="500 500 0 0"   
   preserveAspectRatio="none"
    transform="translate(10, 120)  scale(0.25)"  
      onClick={check_B_Answer}
    cursor = 'pointer'  
    filter = {`${borderColorB}`}         
  >
    <path 
          style={{
      
              stroke: '#0ff',
               fill: 'none',
                strokeWidth: '6px',}}
                d="M 24.33 120.751 L 9.302 157.245 C 9.302 157.245 31.452 212.278 33.632 216.637 L 93.023 216.637 L 47.943 145.796 L 68.694 120.751 C 33.819 120.751 24.33 120.751 24.33 120.751 Z"
                />
                <path 
                style={{
                  stroke: '#0ff',
                  fill: 'none',
                  strokeWidth: '5px' }}
                  d="M 87.299 120.751 L 71.556 145.796 L 93.023 145.796 L 103.757 127.191 L 190.34 126.476 L 191.055 120.751 L 85.867 120.751"
                  />
                  <path style={{
                      stroke: '#0ff',
                       fill: 'none',
                        strokeWidth: '5px'}}
                        d="M 71.557 151.521 L 93.023 151.521 L 124.508 208.051 L 244.723 208.05 L 244.723 216.637 L 110.912 216.637 L 71.556 151.52"
                        />
                        
                        
                        <path 
                        style={{stroke: '#0ff',
                           fill: 'none',
                           strokeWidth: '5px'}}
                       d="M 115.206 130.769 L 103.041 145.796 L 133.095 200.178 L 244.723 200.894 L 254.025 189.445 L 279.07 189.445 L 286.225 198.748 L 398.569 198.748 L 427.907 151.52 L 412.88 127.191 L 118.068 131.485"
                       />
                       
                       <path 
                       style={{
                          stroke: '#0ff',
                           fill: 'none',
                          strokeWidth: '5px'}}
                       d="M 418.605 120.751 L 312.702 120.751 L 311.27 113.596 L 427.191 113.596 L 453.667 145.796 L 435.778 145.796 L 416.458 120.751"
                       />
                       <path 
                       style={{
                          stroke: '#0ff',
                          fill: 'none',
                          strokeWidth: '5px',}}
                          d="M 436.493 157.245 L 447.227 157.961 L 415.742 216.637 L 284.795 216.637 L 284.795 210.197 L 409.302 208.766 L 436.493 157.245 Z"
                          />
                      <path 
                      style={{
                          stroke: '#0ff',
                          fill: 'none',
                          strokeWidth:'5px'}}
                    d="M 437.925 112.165 C 437.9 112.165 461.961 140.787 463.685 140.787 L 464.401 148.659 L 427.907 216.637 L 475.134 216.637 L 500 138.64 L 478.712 110.734 L 437.925 112.165 Z"
                    />
                    <path
                     style={{
                      stroke: '#0ff',
                       strokeWidth: '5px',
                        fill: 'none'}}
                   d="M 254.025 215.206 L 279.07 216.637 L 284.795 228.086 L 296.959 227.37 L 284.795 249.553 L 250.447 248.837 L 238.283 226.656 L 251.879 227.37 L 254.025 215.206 Z"
                   />
        <text
        x= '50%'
        y ='35%'
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#0ff"
        filter="url(#glow2)"
        fontSize = '40'  
        style = {{
          justifyContent: 'center',
          alignItems: 'center',     
        }}
        >
         B. {scienceQuestions.level_5[questionNumber].options[1]}
        </text>
  </g>

 {/*  Answer Box C */}
  <g
   viewBox="500 500 0 0"   
   preserveAspectRatio="none"
    transform="translate(160, 80)  scale(0.25)"     
      onClick={check_C_Answer}
    cursor = 'pointer'  
    filter = {`${borderColorC}`}
          
  >
    <path 
          style={{
      
              stroke: '#0ff',
               fill: 'none',
                strokeWidth: '6px',}}
                d="M 24.33 120.751 L 9.302 157.245 C 9.302 157.245 31.452 212.278 33.632 216.637 L 93.023 216.637 L 47.943 145.796 L 68.694 120.751 C 33.819 120.751 24.33 120.751 24.33 120.751 Z"
                />
                <path 
                style={{
                  stroke: '#0ff',
                  fill: 'none',
                  strokeWidth: '5px' }}
                  d="M 87.299 120.751 L 71.556 145.796 L 93.023 145.796 L 103.757 127.191 L 190.34 126.476 L 191.055 120.751 L 85.867 120.751"
                  />
                  <path style={{
                      stroke: '#0ff',
                       fill: 'none',
                        strokeWidth: '5px'}}
                        d="M 71.557 151.521 L 93.023 151.521 L 124.508 208.051 L 244.723 208.05 L 244.723 216.637 L 110.912 216.637 L 71.556 151.52"
                        />
                        
                        
                        <path 
                        style={{stroke: '#0ff',
                           fill: 'none',
                           strokeWidth: '5px'}}
                       d="M 115.206 130.769 L 103.041 145.796 L 133.095 200.178 L 244.723 200.894 L 254.025 189.445 L 279.07 189.445 L 286.225 198.748 L 398.569 198.748 L 427.907 151.52 L 412.88 127.191 L 118.068 131.485"
                       />
                       
                       <path 
                       style={{
                          stroke: '#0ff',
                           fill: 'none',
                          strokeWidth: '5px'}}
                       d="M 418.605 120.751 L 312.702 120.751 L 311.27 113.596 L 427.191 113.596 L 453.667 145.796 L 435.778 145.796 L 416.458 120.751"
                       />
                       <path 
                       style={{
                          stroke: '#0ff',
                          fill: 'none',
                          strokeWidth: '5px',}}
                          d="M 436.493 157.245 L 447.227 157.961 L 415.742 216.637 L 284.795 216.637 L 284.795 210.197 L 409.302 208.766 L 436.493 157.245 Z"
                          />
                      <path 
                      style={{
                          stroke: '#0ff',
                          fill: 'none',
                          strokeWidth:'5px'}}
                    d="M 437.925 112.165 C 437.9 112.165 461.961 140.787 463.685 140.787 L 464.401 148.659 L 427.907 216.637 L 475.134 216.637 L 500 138.64 L 478.712 110.734 L 437.925 112.165 Z"
                    />
                    <path
                     style={{
                      stroke: '#0ff',
                       strokeWidth: '5px',
                        fill: 'none'}}
                   d="M 254.025 215.206 L 279.07 216.637 L 284.795 228.086 L 296.959 227.37 L 284.795 249.553 L 250.447 248.837 L 238.283 226.656 L 251.879 227.37 L 254.025 215.206 Z"
                   />
        <text
        x= '50%'
        y ='35%'
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#0ff"
        filter="url(#glow2)"
        fontSize = '40'  
        style = {{
          justifyContent: 'center',
          alignItems: 'center',     
        }}
        >
           C. {scienceQuestions.level_5[questionNumber].options[2]}
        </text>
  </g>

 {/*  Answer Box D */}
  <g
   viewBox="500 500 0 0"   
   preserveAspectRatio="none"
    transform="translate(160, 120)  scale(0.25)"    
      onClick={check_D_Answer}
    cursor = 'pointer'
    filter = {`${borderColorD}`}                
  >
    <path 
          style={{
      
              stroke: '#0ff',
               fill: 'none',
                strokeWidth: '6px',}}
                d="M 24.33 120.751 L 9.302 157.245 C 9.302 157.245 31.452 212.278 33.632 216.637 L 93.023 216.637 L 47.943 145.796 L 68.694 120.751 C 33.819 120.751 24.33 120.751 24.33 120.751 Z"
                />
                <path 
                style={{
                  stroke: '#0ff',
                  fill: 'none',
                  strokeWidth: '5px' }}
                  d="M 87.299 120.751 L 71.556 145.796 L 93.023 145.796 L 103.757 127.191 L 190.34 126.476 L 191.055 120.751 L 85.867 120.751"
                  />
                  <path style={{
                      stroke: '#0ff',
                       fill: 'none',
                        strokeWidth: '5px'}}
                        d="M 71.557 151.521 L 93.023 151.521 L 124.508 208.051 L 244.723 208.05 L 244.723 216.637 L 110.912 216.637 L 71.556 151.52"
                        />
                        
                        
                        <path 
                        style={{stroke: '#0ff',
                           fill: 'none',
                           strokeWidth: '5px'}}
                       d="M 115.206 130.769 L 103.041 145.796 L 133.095 200.178 L 244.723 200.894 L 254.025 189.445 L 279.07 189.445 L 286.225 198.748 L 398.569 198.748 L 427.907 151.52 L 412.88 127.191 L 118.068 131.485"
                       />
                       
                       <path 
                       style={{
                          stroke: '#0ff',
                           fill: 'none',
                          strokeWidth: '5px'}}
                       d="M 418.605 120.751 L 312.702 120.751 L 311.27 113.596 L 427.191 113.596 L 453.667 145.796 L 435.778 145.796 L 416.458 120.751"
                       />
                       <path 
                       style={{
                          stroke: '#0ff',
                          fill: 'none',
                          strokeWidth: '5px',}}
                          d="M 436.493 157.245 L 447.227 157.961 L 415.742 216.637 L 284.795 216.637 L 284.795 210.197 L 409.302 208.766 L 436.493 157.245 Z"
                          />
                      <path 
                      style={{
                          stroke: '#0ff',
                          fill: 'none',
                          strokeWidth:'5px'}}
                    d="M 437.925 112.165 C 437.9 112.165 461.961 140.787 463.685 140.787 L 464.401 148.659 L 427.907 216.637 L 475.134 216.637 L 500 138.64 L 478.712 110.734 L 437.925 112.165 Z"
                    />
                    <path
                     style={{
                      stroke: '#0ff',
                       strokeWidth: '5px',
                        fill: 'none'}}
                   d="M 254.025 215.206 L 279.07 216.637 L 284.795 228.086 L 296.959 227.37 L 284.795 249.553 L 250.447 248.837 L 238.283 226.656 L 251.879 227.37 L 254.025 215.206 Z"
                   />
        <text
        x= '50%'
        y ='35%'
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#0ff"
        filter="url(#glow2)"
        fontSize = '40'  
        style = {{
          justifyContent: 'center',
          alignItems: 'center',     
        }}
        >
          D. {scienceQuestions.level_5[questionNumber].options[3]} 
        </text>
  </g> 

    </g> 

   
)
    }
 



    
  </g>


</svg>

 
        </div>
    )
}


export default Frame_4    