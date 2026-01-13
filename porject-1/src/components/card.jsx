import React from 'react'
import '../App.css';

function Card(props) {
  return (
    <>
    <div className="child"><img src={props.userimg} alt="user image" />
    <h1>{props.username}</h1>
    <h3>hey there how are you </h3><button>FOLLOW</button></div>
    
    

    </>
    

  )
}

export default Card
