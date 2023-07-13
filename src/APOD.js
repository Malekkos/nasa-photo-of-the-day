import React from "react";
// import dData from "./inCaseOfWorst"
// console.log(dData);
const NPhoto = (props) => {
  console.log(props)
  return (
    <div className="wrapper">
      <h1 className="header">NASA's photo of the day - {props.photo.date}</h1>
      <p className="title">{props.photo.title}</p>
      <img className="photo" src={props.photo.hdurl}></img>
      <h3 className="explanation">{props.photo.explanation}</h3>
    </div>
  )
}

export default NPhoto