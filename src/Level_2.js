import React, { useState, useEffect } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { scienceQuestions } from "./ScienceMultipleChoiceQuestions";
import useXpStore from "./xpStore";
import confetti from "canvas-confetti";
import * as motion from "motion/react-client";

function Level_2() {
  const [startLevel2, setStartLevel2] = useState(true);
  const [started, setStarted] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [borderColorA, setBorderColorA] = useState("white");
  const [borderColorB, setBorderColorB] = useState("white");
  const [borderColorC, setBorderColorC] = useState("white");
  const [borderColorD, setBorderColorD] = useState("white");
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


  const ball = {
    position: "relative",
    border: "5px solid #333",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    fontFamily: "Arial, sans-serif",
  };

 
const answer = scienceQuestions.level_3[questionNumber].answer;
  const [A_answer, B_answer, C_answer, D_answer] = scienceQuestions.level_3[questionNumber].options;
  const [A_answerBox, B_answerBox, C_answerBox, D_answerBox] = [
    A_answer === answer ? true : false,
    B_answer === answer ? true : false,
    C_answer === answer ? true : false,
    D_answer === answer ? true : false,
  ];



useEffect(()=>{
  if (correctAnswerA || correctAnswerB || correctAnswerC || correctAnswerD) {
    setContinnue(true);
    addXp(3);
   
  } else if (wrongAnswerA || wrongAnswerB || wrongAnswerC || wrongAnswerD) {
    deductXp(3);
    setContinnue(false);
  }
},[correctAnswerA, correctAnswerB, correctAnswerC, correctAnswerD, wrongAnswerA, wrongAnswerB, wrongAnswerC, wrongAnswerD, addXp, deductXp])

  function check_A_Answer() {
    if (
      scienceQuestions.level_3[questionNumber].answer ===
      scienceQuestions.level_3[questionNumber].options[0]
    ) {
       setWrongAnswerA(false);
      setCorrectAnswerA(true);   
      setBorderColorA("green");
    } 
    if (wrongAnswerA){
        setBorderColorA("red");
    }
  }

    function check_B_Answer() {
    //  console.log('clicked B')
    //  console.log( scienceQuestions.level_2[questionNumber].answer)
    //  console.log( scienceQuestions.level_2[questionNumber].options[1] )
   if(B_answerBox){
    setCorrectAnswerB(true);
      setWrongAnswerB(false);
     setBorderColorB("green");
   } else {
    setWrongAnswerB(true);
   }
   
   
    if (
      scienceQuestions.level_3[questionNumber].answer === scienceQuestions.level_3[questionNumber].options[1]
    ) {
      setCorrectAnswerB(true);
      setWrongAnswerB(false);
     setBorderColorB("green");
    } else {
      setWrongAnswerB(true);
    }
        if (wrongAnswerB){
        setBorderColorB("red");
    }

  }

    function check_C_Answer() {
    if (
      scienceQuestions.level_3[questionNumber].answer ===
      scienceQuestions.level_3[questionNumber].options[2]
    ) {
      setCorrectAnswerC(true);
      setWrongAnswerC(false);  
    setBorderColorC("green");
       
    }else {
      setWrongAnswerC(true);
    } 
    
    if (wrongAnswerC){
        setBorderColorC("red");
    }
  }

    function check_D_Answer() {
     // alert('clicked')
    //alert(scienceQuestions.level_2[questionNumber].options[3])
       if(D_answerBox){
    setCorrectAnswerD(true);
      setWrongAnswerD(false);
     setBorderColorD("green");
   } else {
    setWrongAnswerD(true);
   }


    if (
      scienceQuestions.level_3[questionNumber].answer === scienceQuestions.level_3[questionNumber].options[3]
    ) {
      setCorrectAnswerD(true);
      setWrongAnswerD(false);
      setBorderColorD("green");
    }  else {
      setWrongAnswerD(true);
    }

    if (wrongAnswerD){
        setBorderColorD("red");
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
      setBorderColorA("white");
      setBorderColorB("white");
      setBorderColorC("white");
      setBorderColorD("white");
      setContinnue(false);
     // setNextQuestion(false);

     //alert('next question')

      if (questionNumber === scienceQuestions.level_3.length - 1) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
        alert("Congratulations! You have completed Level 2!");
        // Reset to start level 2 again
        setStartLevel2(true);
        setStarted(false);
        setQuestionNumber(0);
      }
    }
  },[continnue , nextQuestion])



  return (
    <div
      style={{
        width:'100%',
        height:'100%',
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "10px",
            width: "80%",
            height: "30%",          
            justifyContnet: "center",
            justifySelf: " center",
            alignItems: "center",
            alignSelf: "center",
            alignContent: "center",
          }}
        >
          <BsExclamationCircle
            color={"white"}
            size={30}
            style={{
              border: "2px solid white",
              marginRight: "20px",
              boxShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
              textShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
            }}
          />
          <h2
            style={{
              color: "white",
              border: "2px solid white ",
              width: "70%",
              boxShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
              textShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
            }}
          >
            Level 2
          </h2>
        </div>



<div>
  <p>Xp  {xp} </p>
</div>
        {startLevel2 && (
          <div>
            <p
              style={{
                color: "white",
                fontWeight: "bold",
                textShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
              }}
            >
              [Urgent Quest :{" "}
              <strong> Answer all the questions to progress </strong> ]
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
                width: "80%",
                height: "30%",
                // backgroundColor : '#f0f0f0',
                justifyContent: "center",
                borderRadius: "10px",
                marginTop: "20px",
                border: "2px solid #ccc",
                opacity: 0.7,
                // boxShadow: '0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff',
              }}
            >
              <p
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginBottom: "20px",
                  textShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
                }}
              >
                Number of Questions Answered
              </p>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: "10px",
                    alignContent: "center",
                    justifyContent: "space-between",
                    width: "300px",
                    //alignItems:"center",
                    justifyItems: "center",
                    // backgroundColor: '#4CAF50',
                    padding: "10px",
                    textShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
                  }}
                >
                  <RxAvatar
                    color={"white"}
                    size={30}
                    style={{
                      border: "2px solid white",
                      marginRight: "10px",
                      boxShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
                      textShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
                    }}
                  />
                  <p
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "35px",
                      textShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
                    }}
                  >
                 {  `[ ${questionNumber}/ ${scienceQuestions.level_3.length} ]`  }
                  </p>
                </div>

                <button
                  onClick={() => {
                    setStartLevel2(false);
                    setStarted(true);
                  }}
                  style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    color: "white",
                    textShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
                    backgroundColor: "#282c34",
                    width: "40%",
                  }}
                >
                  Start Quest
                </button>
              </div>
            </div>
          </div>
        )}



        {started && (
          <div>
            <div
              style={{
                width: "90%",
                height: "40%",
                border: "3px solid white",
                borderRight: "10px solid white",
                borderLeft: "10px dashed white",
                borderRadius: "10px",
                boxShadow:
                  "1px 1px 10px #0ff, 1px 1px 15px #0ff, 2px 12px 10px #0ff",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    color: "white",
                    textShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
                  }}
                >
                  Question
                </p>
                <p
                  style={{
                    color: "white ",
                    fontWeight: "bold",
                    textShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
                  }}
                >
                  {questionNumber + 1} / {scienceQuestions.level_3.length}
                </p>

                {/* <div style={cardStyle}> Happy Birthday, Shine Bright! </div>;    */}
              </div>
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
                  style={{
                    fontWeight: "bold",
                    textShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
                  }}
                >
                  {scienceQuestions.level_3[questionNumber].question}{" "}
                </p>
              </motion.div>
            </div>

            <div
              style={{
                marginTop: "30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
                height: "40%",
                //border: '3px solid white',
                borderTop: "10px solid white",
                borderBottom: "10px solid white",
                //  borderRight:'10px solid white',
                //  borderLeft:'10px dashed white',
                borderRadius: "10px",
                // boxShadow: '1px 1px 10px #0ff, 1px 1px 15px #0ff, 2px 12px 10px #0ff'
              }}
            >

          {
            continnue && (
              <div
              onClick={() => {
                setNextQuestion(true)
               //alert('clicked')
               //console.log('clicked')
               } }

              style ={{
                width: '80%',
                height: '20%',
                display: 'flex',
                border:'4px solid orange',
                alignItems: 'center',
                marginTop: '20px',
                justifyContent: 'center',
                cursor:'pointer',
                backgroundColor: 'rgba(19, 207, 19, 0.1)',
                backdropFilter: 'blur(5px)',
                borderRadius: '10px',
                textShadow: '0 0 5px #0ff, 0 0  10px #0ff, 0 0 20px #0ff',
                fontWeight: 'bold',
                fontSize:'large'
              }}
              >
              <p>[Continue /]</p>
              </div>
            )
          }

              <p
                onClick={check_A_Answer}
                style={{
                  border: `2px solid ${borderColorA}`,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(5px)",
                  height: "20%",
                  width: "90%",
                  marginTop: "20px",
                  padding: "10px",
                  fontWeight: "bold",
                  textShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
                  cursor: 'pointer'
                }}
              >
                A. {scienceQuestions.level_3[questionNumber].options[0]}
              </p>
              <p
              onClick={check_B_Answer}
                style={{
                  border: `2px solid ${borderColorB}`,                 
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(5px)",
                  height: "20%",
                  width: "90%",
                  marginTop: "20px",
                  padding: "10px",
                  fontWeight: "bold",
                  textShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
                   cursor: 'pointer',
                }}
              >
                B. {scienceQuestions.level_3[questionNumber].options[1]}
              </p>
              <p
              onClick={check_C_Answer}
                style={{
                 border: `2px solid ${borderColorC}`,
                  cursor: 'pointer',
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(5px)",
                  height: "20%",
                  width: "90%",
                  marginTop: "20px",
                  padding: "10px",
                  fontWeight: "bold",
                  textShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
                }}
              >
                C. {scienceQuestions.level_3[questionNumber].options[2]}
              </p>
              <p
                onClick={check_D_Answer}
                style={{
                  border: `2px solid ${borderColorD}`,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(5px)",
                   cursor: 'pointer',
                  height: "20%",
                  width: "90%",
                  marginTop: "20px",
                  padding: "10px",
                  fontWeight: "bold",
                  textShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
                }}
              >
                D. {scienceQuestions.level_3[questionNumber].options[3]}      
              </p>

            </div>
          </div>
        )}

        <p
          style={{
            color: "white",
            flexDirection: "row",
            width: "60%",
            textAlign: "justify",
            textShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
          }}
        >
          <strong> WARNING : </strong> If you do not complete this quest, you
          will receive an appropriate{" "}
          <strong
            style={{
              color: "red",
              fontWeight: "bold",
              opacity: "0.6",
            }}
          >
            penalty
          </strong>
        </p>

        {/*  <div style={cardStyle}>Happy Birthday, Shine Bright!</div>; */}
      </div>
    </div>
  );
}

export default Level_2;
