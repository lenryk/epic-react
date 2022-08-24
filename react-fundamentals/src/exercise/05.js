// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = (
  <div
    className="box--small box"
    style={{fontStyle: 'italic', backgroundColor: 'lightblue'}}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div
    className="box--medium box"
    style={{fontStyle: 'italic', backgroundColor: 'pink'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    className="box--large box"
    style={{fontStyle: 'italic', backgroundColor: 'orange'}}
  >
    large orange box
  </div>
)

// In this function we combine static className with the user inputted to make it more dynamic
// We also add our own style to the existing style object (remember, the order matters!)
// Default className to empty string to stop it showing as undefined (can also add .trim() to remove space)
function Box({className = '', style, children, ...rest}) {
  return (
    <div
      className={`${className} box`}
      style={{...style, fontStyle: 'italic'}}
      {...rest}
    >
      {children}
    </div>
  )
}

// In this function we introduce a size attribute which will control the final className
// This makes the function easier to use by just sending "small" or "large" as the box size instead of a className
function BoxTwo({size, style, children, ...rest}) {
  return (
    <div
      className={`box--${size} box`}
      style={{...style, fontStyle: 'italic'}}
      {...rest}
    >
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <BoxTwo size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </BoxTwo>
    </div>
  )
}

export default App
