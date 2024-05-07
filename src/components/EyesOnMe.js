// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe() {
  return (
        <button on Blur = {() => {
            console.log('Hey! Eyes on me!')
        
        }}
        onFocus = {() => {
            console.log('Good!')
        }}>Eyes On Me</button>
  )
  
}

export default EyesOnMe
