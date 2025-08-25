import React from 'react'

function Frame_2() {
  return (
   <div>
      <svg
       viewBox="0 0 800 500" 
       width="100%" 
       height="100%" 
       style={styles.svg}>
        <defs>
          <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer frame border */}
        <path
          d="M 40 40 H 760 V 90 L 780 110 V 390 L 760 410 V 460 H 40 V 410 L 20 390 V 110 L 40 90 Z"
          stroke="#ff00ff"
          strokeWidth="4"
          fill="none"
          filter="url(#glow)"
        />

        {/* Inner HUD lines */}
        <path
          d="M 60 60 H 740 V 440 H 60 Z"
          stroke="#ff66ff"
          strokeWidth="1"
          fill="none"
          filter="url(#glow)"
        />

        {/* Top center detail */}
        <rect x="370" y="20" width="60" height="10" fill="#ff00ff" filter="url(#glow)" />
        <line x1="400" y1="10" x2="400" y2="20" stroke="#ff00ff" strokeWidth="2" filter="url(#glow)" />

        {/* Bottom center detail */}
        <rect x="370" y="470" width="60" height="10" fill="#ff00ff" filter="url(#glow)" />
        <line x1="400" y1="480" x2="400" y2="490" stroke="#ff00ff" strokeWidth="2" filter="url(#glow)" />

        {/* Corner circles */}
        {[
          [40, 40],
          [760, 40],
          [760, 460],
          [40, 460]
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="6" fill="#ff00ff" filter="url(#glow)" />
        ))}

        {/* Side connectors */}
        <line x1="20" y1="250" x2="0" y2="250" stroke="#ff00ff" strokeWidth="3" filter="url(#glow)" />
        <line x1="780" y1="250" x2="800" y2="250" stroke="#ff00ff" strokeWidth="3" filter="url(#glow)" />
      </svg>

      <div style={styles.content}>
         <p
         style = {{
          color: '#ff00ff',
          textShadow: '0 0 5px #ff00ff, 0 0 10px #ff00ff',
          fontSize: '24px',
          fontFamily: 'Orbitron, sans-serif',
          textAlign: 'center'
         }}
         >Test</p>
      </div>
    </div>
  )
}

export default Frame_2


const styles = {
    content: {
    position: 'absolute',
    top: '20%',
    left: '10%',
    width: '80%',
    height: '60%',
    color: '#fff',
    fontFamily: 'Orbitron, sans-serif',
    fontSize: '22px',
    textAlign: 'center',
    textShadow: '0 0 5px #ff00ff, 0 0 10px #ff00ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
    svg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
  },
}