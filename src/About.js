import React from 'react'
import * as motion from "motion/react-client"

function About() {
  return (

    <div>
       <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1,
                repeat: Infinity, 
                scale: { type: "bounce", visualDuration: 0.4, bounce: 0.5 },
            }}
            style={ball}
        />
    </div>

  )
}

export default About


const ball = {
    width: 100,
    height: 100,
    backgroundColor: "#dd00ee",
    borderRadius: "50%",
}