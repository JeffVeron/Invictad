
import React, { useState, useEffect} from 'react';
import { scienceQuestions } from './ScienceMultipleChoiceQuestions';
 import { FaCheckCircle } from "react-icons/fa";
 import { IoMdCloseCircle } from "react-icons/io";
 import { FaLightbulb } from "react-icons/fa";
 import { GiJigsawPiece } from "react-icons/gi";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import * as motion from "motion/react-client"
import confetti from 'canvas-confetti';
import useXpStore from './xpStore'



 function Level_1() {
  const [started, setStarted] = useState(false);
  const [challengeStarted, setChallengeStarted] = useState(true);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [questionNumber , setQuestionNumber] = useState(0);
  const [newQuestion, setNewQuestion] = useState(false);
  const [continued, setContinued] = useState(true);
 // const [xp , setXp] = useState(0)
  const [wrongAnswer, setWrongAnswer] =  useState(false)
  const [correctIconForA, setCorrectIconForA] = useState(false);
  const [wrongIconForA, setWrongIconForA] = useState(false);
    const [correctIconForB, setCorrectIconForB] = useState(false);
  const [wrongIconForB, setWrongIconForB] = useState(false);
    const [correctIconForC, setCorrectIconForC] = useState(false);
  const [wrongIconForC, setWrongIconForC] = useState(false);
    const [correctIconForD, setCorrectIconForD] = useState(false);
  const [wrongIconForD, setWrongIconForD] = useState(false);
  const [tryAgain, setTryAgainToast] = useState(false)
  const xp = useXpStore((state) => state.xp)
  const addXp = useXpStore((state) => state.addXp)
  const deductXp = useXpStore((state) => state.deductXp)
  const [restart,  setRestart] = useState('false')
  const [isPlaying, setIsPlaying] = useState(true);
  const [key, setKey] = useState(0)

  const glowText = "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff"
  const glowText2 = "0 0 5px #FE5D26, 0 0 10px #FE5D26, 0 0 20px #FE5D26"
  const glowBorder =  '1px 1px 10px #0ff, 1px 1px 15px #0ff, 2px 12px 10px #0ff'
  const glowBorder2 = "0 0 5px #FE5D26, 0 0 10px #FE5D26, 0 0 20px #FE5D26"
  


  
const A_answerBoxStyle = {
              backgroundColor: 'white',
            width: '80%',
            height: '15vh',
            borderRadius: '15px',
            padding: '10px',
          //  marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
}

const B_answerBoxStyle = {
              backgroundColor: 'white',
            width: '80%',
            height: '15vh',
            borderRadius: '15px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px',
}

const C_answerBoxStyle = {
              backgroundColor: 'white',
            width: '80%',
            height: '15vh',
            borderRadius: '15px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
}

const D_answerBoxStyle = {
              backgroundColor: 'white',
            width: '80%',
            height: '15vh',
            borderRadius: '15px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px',
}

const hintStyle = {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '70px',
                height: '35px',
                backgroundColor: '#FE5D26',
                borderRadius: '10px', 
               opacity:0.7,
}

  //const levelNumber = 1;
//  var  questionNumber = 0 
const answer = scienceQuestions.level_1[questionNumber].answer;
  const [A_answer, B_answer, C_answer, D_answer] = scienceQuestions.level_1[questionNumber].options;
  const [A_answerBox, B_answerBox, C_answerBox, D_answerBox] = [
    A_answer === answer ? true : false,
    B_answer === answer ? true : false,
    C_answer === answer ? true : false,
    D_answer === answer ? true : false,
  ];





    const restartTimer = () => {
    setKey(prevKey => prevKey + 1); // re-mounts the timer
    setIsPlaying(true); // resumes playing
  };


useEffect(()=>{
  if(challengeStarted){
    setRestart(false)
  }
},[challengeStarted])


  useEffect(() => {
  if (correctAnswer) {
    setTryAgainToast(false);
  }
}, [correctAnswer]);


   useEffect(() => {
        if (correctAnswer){
          setStarted(true)
          addXp()
          setTryAgainToast(false)
          setRestart(false)
         // setXp(prev=> prev + 10);  
        }
        if(wrongAnswer){
          setTryAgainToast(true)
         // deductXp()
         // setXp(prev => prev - 3)
        }
  },[ correctAnswer, questionNumber, wrongAnswer, addXp, deductXp]); 


   useEffect(() => {
    let timeout;
    if (tryAgain) {
      timeout = setTimeout(() => {
        setTryAgainToast(false);
      }, 700);
    }
    return () => clearTimeout(timeout);
  }, [tryAgain]);



  function checkAnswer_A(){
    if (A_answerBox) {
      setCorrectAnswer(true);
      handleClick();
      setCorrectIconForA(true)
      setTryAgainToast(false)    
      setRestart(false) 
      setIsPlaying(false);
    } else {
      setCorrectAnswer(false)
      setWrongIconForA(true)   
      setTryAgainToast(true)
      setWrongAnswer(true)
      deductXp()
  }

/* 
  if (!correctAnswer){
    setWrongAnswer(true)
  }
  if (correctAnswer){
    setWrongAnswer(false)
  } */
  if (questionNumber === scienceQuestions.level_1.length - 1) {
    setContinued(false);
    setNewQuestion(true);}
  }

  function checkAnswer_B(){
        if(B_answerBox){
      setCorrectAnswer(true)
      handleClick()
      setCorrectIconForB(true)
      setTryAgainToast(false)
       setRestart(false) 
       setIsPlaying(false);
    } else {
      setCorrectAnswer(false)
      setWrongIconForB(true)
       setTryAgainToast(true)
       deductXp()
    }

  /*    if (!correctAnswer){
    setWrongAnswer(true)
  }
  if (correctAnswer){
    setWrongAnswer(false)
  } */


  if (questionNumber === scienceQuestions.level_1.length - 1) {
    setContinued(false);
    setNewQuestion(true);}
  }

  function checkAnswer_C(){
           if(C_answerBox){
      setCorrectAnswer(true)
      handleClick()
      setCorrectIconForC(true)
      setTryAgainToast(false)
       setRestart(false) 
       setIsPlaying(false);
    } else {
      setCorrectAnswer(false)
      setWrongIconForC(true)
       setTryAgainToast(true)
       deductXp()
    }

 /*    if (!correctAnswer){
    setWrongAnswer(true)
  }
  if (correctAnswer){
    setWrongAnswer(false)
  } */

  if (questionNumber === scienceQuestions.level_1.length - 1) {
    setContinued(false);
    setNewQuestion(true);}

  }

  function checkAnswer_D (){
     if(D_answerBox){
           setCorrectAnswer(true)
           setCorrectIconForD(true)
            setTryAgainToast(false)
             setRestart(false) 
             setIsPlaying(false);
      handleClick()
    } else {
      setCorrectAnswer(false)  
    setWrongIconForD(true)
     setTryAgainToast(true)
     deductXp()
    }

/*      if (!correctAnswer){
    setWrongAnswer(true)
  }
  if (correctAnswer){
    setWrongAnswer(false)
  } */
  if (questionNumber === scienceQuestions.level_1.length - 1) {
    setContinued(false);
    setNewQuestion(true);}

  }

  function handleClick() {
    confetti({ particleCount: 500, spread: 100, origin: { y: 0.6 } });

  }

  return (
    <div
    style = {{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      fontFamily: 'Arial, sans-serif',
      color: '#333'
    }}
    >
      <h1
        style={{
          margin:'0',
          textAlign: 'center',
          color: '#4682B4',
          fontSize: '30px',
          fontWeight:'bold',
    
        }}
      >
        LEVEL ONE
      </h1>

      {
        challengeStarted && (
                <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
         // marginTop: '20px',
          height: '40vh',
          width: '50%',
          alignSelf: 'center',
         // backgroundColor: '#4682B4',
          //borderRadius: '10px',
          justifyContent: 'center',
          boxShadow: glowBorder,   
          border : '2px solid white',
          opacity: 0.7,
          padding: '15px'
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: '30px',
            marginTop: '20px',
            borderBottom: '2px solidhsl(71, 99.10%, 57.30%)',
            paddingBottom: '10px',
            textShadow: glowText
          }}
        >
        Notice
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: 'white',
            padding: '10px',
            borderTop: '2px solid hsl(71, 99.10%, 57.30%)',
            borderBottom: '2px solid hsl(71, 99.10%, 57.30%)',
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(5px)",
            textShadow:glowText 
          }}
        >
          You have 6 seconds to answer a Question before the  time is up. Answer all the questions correctly to earn XP and move on to the next level.
        </p>
        <button
           onClick={() => {
  setStarted(true);
  setChallengeStarted(false);
  setRestart(false)
}}
          style={{
            padding: '10px 20px',
            backgroundColor: 'yellow',
            color: '#001f3f',
            fontSize: '23px',
            borderRadius: '5px',
            opacity: 1,
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Start Challenge
        </button>

      </div>
        )

      }

      {
        restart && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh',
              width: '100%',
              backgroundColor: '#282c34',
              color: 'white',
              border:'2px solid white',   
              boxShadow: glowBorder   ,

            }}
          >
            <h1
            style = {{
              textShadow: glowText2
            }}
            >Time is Up </h1>
            <p
            style = {{
              textShadow:glowText,
              borderTop :'3px solid white',
              borderBottom:'3px solid white',
              boxShadow: glowBorder2,  
              color: 'white',
              padding: '10px',
              width: '80%',
              textAlign: 'center',  
              height: '30%', 
              justifyContent: 'center',
              alignItems: 'center',  

            }}
            >You did not answer the question on time . </p>
            <button
              onClick={() => {
                setRestart(false);
                setChallengeStarted(true)
                setWrongAnswer(true);
                setCorrectAnswer(false);
                setStarted(false);
                setQuestionNumber(0);
                setContinued(true);
                setNewQuestion(false);
                setTryAgainToast(false)
                setCorrectIconForA(false)
                setCorrectIconForB(false)
                setCorrectIconForC(false)
                setCorrectIconForD(false)
                setWrongIconForA(false)
                setWrongIconForB(false)
                setWrongIconForC(false)
                setWrongIconForD(false)
              }}
              style={{
                padding: '10px 20px',
                backgroundColor: '#FE5D26',
                color: 'white',
                fontSize: '20px',
                borderRadius: '5px',
              }}
            >
              Restart Challenge 
            </button>
          </div>
        )
      }


      
        {started && (
          <div style={{
          //marginTop: '20px',
          color: 'white',
         
        }}>

          <p
          style = {{
          marginBottom : '35px',
          width: '80px',
          height:'80px',
          background :'linear-gradient(135deg, #333, #f33)',
          clipPath:'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          margin: '20px auto',
          boxShadow:'0 0 20px rgba(10, 200, 55, 0.7)',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          alignSelf: 'center',
          border:'3px solid white',
          color: 'white',
          textShadow: glowText2,
          fontWeight:'bold'

          

          }}
          >XP  {xp} </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyItems: 'center',
              justifySelf: 'center',
              alignContent: 'center',
              //  marginTop: '20px',
              height: '40vh',
              width: '90%',
              alignSelf: 'center',
              backgroundColor: '#0a0f3d',
              borderRadius: '10px',
              justifyContent: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              opacity: 0.7,
              //  padding: '15px'
            }}
          >

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                //backgroundColor:'red',
                width: '100%'
              }}
            >


              <motion.div
                style={hintStyle}

                whileHover={{
                  scale: [null, 1.1, 1.6],
                  transition: {
                    duration: 0.5,
                    times: [0, 0.6, 1],
                    ease: ["easeInOut", "easeOut"],
                  },
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                <FaLightbulb color={'white'} size={20} style={{ opacity: 1 }} />
                <p
                  style={{
                    color: 'white',
                    fontSize: '12px',
                    fontWeightht: 'bold',
                    marginLeft: '10px',
                    marginRight: '10px',
                    opacity: 1
                  }}
                >Hint</p>
              </motion.div>


              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  width: '80px',
                  height: '35px',
                  backgroundColor: '#FE5D26',
                  borderRadius: '10px',
                }}

              >

                <GiJigsawPiece color={'white'} size={20} style={{ opacity: 1 }} />
                <p
                  style={{
                    color: 'black',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    marginLeft: '10px',
                    marginRight: '10px',
                    opacity: 1
                  }}
                >{questionNumber + 1} of {scienceQuestions.level_1.length}</p>
              </div>

            </div>







            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: 'auto',
                backgroundColor: '#0a0f3d',
                borderRadius: '10px',
              }}
            >




              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  width: '100%',
                  padding: '15px',
                  color: 'white',
                  marginTop: '-40px',
                }}

              >
                <p
                  style={{
                    fontSize: '25px',
                  }}
                >Question</p>  <p style={{ color: '#FE5D26', fontSize: '25px', }}>{questionNumber + 1}</p>
              </div>

              <p
                style={{
                  opacity: 0.5,
                  color: 'white',
                  fontSize: '14px',
                  marginTop: '-10px',
                  justifyContent: 'flex-start',
                  display: 'flex',
                  marginRight: '80%',
                  marginLeft: '10px',
                }}
              >Topic</p>
              <p
                style={{
                  opacity: 0.5,
                  color: 'white',
                  fontSize: '14px',
                  // marginTop: '10px',
                  justifyContent: 'flex-start',
                  display: 'flex',
                  marginRight: '80%',
                  marginLeft: '10px',
                  marginTop: '-13px',
                }}
              >-------</p>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', /* height: '15vh' */ }}>
                <CountdownCircleTimer
                  key={key}
                  isPlaying={isPlaying}
                  duration={15}
                  colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                  colorsTime={[7, 5, 2, 0]}
                  size={80}
                  strokeWidth={10}
                  trailColor="red"
                  onComplete={() => {
                    setRestart(true);
                    setWrongAnswer(true);
                    setCorrectAnswer(false);
                    setStarted(false);
                    if(correctAnswer){setRestart(false)}
                    return { shouldRepeat: true, delay: 1.5 };
                  }}
                >
                  {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
              </div>


              <div
                style={{
                  backgroundColor: "black",
                  width: '100%',
                  height: 'auto',
                  display: 'flex',
                  opacity: 0.9,
                  border: '3px solid #FE5D26',
                  borderRadius: '10px',
                  padding: '10px',
                  marginBottom: '20px',
                  marginTop: '10px'
                }}
              >
                <p
                  style={{
                    opacity: 1,
                    fontWeight: 'bold',
                    zIndex: 1
                  }}

                >{scienceQuestions.level_1[questionNumber].question}
                </p>
              </div>







            </div>
          </div>


          {correctAnswer && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: 'auto',
                backgroundColor: 'white',
                borderRadius: '10px',
                padding: '15px',
                opacity: 0.7
              }}
            >
              <h2 style={{ color: 'green', fontSize: '24px' }}>Correct Answer!</h2>
              <button
                onClick={() => {
                  setTryAgainToast(false)
                  setCorrectAnswer(false);
                  setNewQuestion(true);
                  setContinued(false);
                   

                } }
                style={{
                  color: 'white',
                  fontSize: '24px',
                  backgroundColor: '#FE5D26',
                  borderRadius: '15px',
                  width: '40%',
                  opacity: 1
                }}>Next</button>
            </div>
          )}


          {tryAgain && (
            <div
              style = {{
                display:'flex',
                flexDirection: 'row',
                justifyContent:'space-between',
                justifyItems:'center',
                justifySelf:'center',
                alignContent:'center',
                alignItems:'center',
              //  backgroundColor:'red',
              ////  width:'40%',
                heigth:'15%',
                padding:'10px',
                borderRadius:'10px',
                marginTop:'40px',
                border: '2px solid #FE5D26',

              }}>
 
            <p 
              style = {{
                 color: 'red',   
             // backgroundColor:'grey',
            //  marginLeft:'10px',
              justifyItems:'center',
                justifySelf:'center',
                alignContent:'center',
                alignItems:'center', 
                textShadow: glowText, 
             //   height: '50px',
              //  width:'50px',
                fontWeight: 'bold',
              //  borderRadius: '50%',

            }}
            >-1 Xp</p>
            </div>
 )
}
  


 {
  newQuestion && (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 'auto',
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '15px',
        opacity:0.7
      }}
    >
      <h2 style={{ color: '#FE5D26', fontSize: '24px' }}>New Question!</h2>
     

                   <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1,
                            repeat: Infinity, 
                            scale: { type: "bounce", visualDuration: 0.4, bounce: 0.5 },
                        }}
                            style={{
                              width:'100%'
                            }}
                    >
                       <button
        onClick={() => {
         setTryAgainToast(false)
         setContinued(true);
         setQuestionNumber(prev => prev + 1);
         setNewQuestion(false);
         setIsPlaying(true);    
         setCorrectIconForA(false)
         setCorrectIconForB(false)
         setCorrectIconForC(false)
         setCorrectIconForD(false)
         setWrongIconForA(false)
         setWrongIconForB(false)
         setWrongIconForC(false)
         setWrongIconForD(false)
         restartTimer()
        }}
        style = {{
          color: 'white', 
          fontSize: '20px' ,
           backgroundColor:'#FE5D26', 
           borderRadius:'15px' ,
            width:'60%',
            opacity: 1
            }}>Continue</button>
                      </motion.div>
    </div>
  )
 }

{
  continued && (
    <div
      style={{
        height: 'auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        justifyItems: 'center',
        justigySelf: 'center',  
        alignItems: 'center',
        alignContent: 'center',
        marginTop: '50px',  
        marginLeft:'4%',
         
       // backgroundColor: 'red',  
      }}
    >
      {/* Left Column */}
      <div
        style={{
          height: 'auto',
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
         // backgroundColor:'blue'
        }}
      >
        {/* Box A */}
 

 <motion.div
            onClick={() => {checkAnswer_A()}}

      animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                //repeat: Infinity,
                repeatDelay: 1,
            }}
            style={A_answerBoxStyle}
        >
           <p
            style={{
              borderRadius: '50%',
              backgroundColor: 'yellow',
              fontWeight: 'bold',
              height: '25px',
              width: '25px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
               cursor:'pointer'
            }}
          >
            A
          </p>
          <p
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px',
              marginTop: '-30px',
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {scienceQuestions.level_1[questionNumber].options[0]} 
              

  {correctIconForA &&(
 <FaCheckCircle color="green" size={25} />
  ) }

  {wrongIconForA && (
 <IoMdCloseCircle color="#FE5D26" size={25} />
  )}

             
          </p>
        </motion.div>

        {/* Box B */}
 

        <motion.div
          onClick={() => { checkAnswer_B()}}
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                //repeat: Infinity,
                repeatDelay: 1,
            }}
            style={B_answerBoxStyle}
        >
                    <p
            style={{
              borderRadius: '50%',
              backgroundColor: 'green',
              fontWeight: 'bold',
              height: '25px',
              width: '25px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
               cursor:'pointer'
            }}
          >
            B
          </p>
          <p
            style={{
              padding: '10px',
              marginTop: '-30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'center',
            }}
          >
            {scienceQuestions.level_1[questionNumber].options[1]} 
            
  {correctIconForB &&(
 <FaCheckCircle color="green" size={25} />
  ) }

  {wrongIconForB && (
 <IoMdCloseCircle color="#FE5D26" size={25} />
  )}

          </p>
 
        </motion.div>


      </div>

      {/* Right Column */}
      <div
        style={{
          height: 'auto',
          width: '50%',
         // backgroundColor: 'green',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',   
        }}
      >
        {/* Box C */}
     

         <motion.div
         onClick={() => { checkAnswer_C()}}
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                //repeat: Infinity,
                repeatDelay: 1,
            }}
            style={C_answerBoxStyle}
        >
           <p
            style={{
              borderRadius: '50%',
              backgroundColor: 'blue',
              fontWeight: 'bold',
              height: '25px',
              width: '25px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
               cursor:'pointer'
            }}
          >
            C
          </p>
          <p
            style={{
              padding: '10px',
              marginTop: '-30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {scienceQuestions.level_1[questionNumber].options[2]}  
            
  {correctIconForC &&(
 <FaCheckCircle color="green" size={25} />
  ) }

  {wrongIconForC && (
 <IoMdCloseCircle color="#FE5D26" size={25} />
  )}

          </p>
        </motion.div>

        {/* Box D */}
     


        <motion.div 
         onClick={() => { checkAnswer_D()}}
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                //repeat: Infinity,
                repeatDelay: 1,
            }}
            style={D_answerBoxStyle} 
        >
                   <p
            style={{
              borderRadius: '50%',
              backgroundColor: '#00b2a9',
              fontWeight: 'bold',
              height: '25px',
              width: '25px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
               cursor:'pointer'
            }}
          >
            D
          </p>
          <p
            style={{
              padding: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: '-30px',
              cursor:'pointer'
            }}
          >
            {scienceQuestions.level_1[questionNumber].options[3]}  
           
  {correctIconForD &&(
 <FaCheckCircle color="green" size={25} />
  ) }

  {wrongIconForD && (
 <IoMdCloseCircle color="#FE5D26" size={25} />
  )}

          </p>
        </motion.div>

      </div>

    </div>
  )
}





            
          </div>
       )} 
    </div>
  );
}

export default Level_1;
