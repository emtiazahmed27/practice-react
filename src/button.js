import React from 'react'

function MyButton({props,onClick}){
    return(
    <button onClick={onClick}>click is {props} times</button>
    )
  }
export default  MyButton  