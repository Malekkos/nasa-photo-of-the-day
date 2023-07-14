import React from "react";
// import dData from "./inCaseOfWorst"
// console.log(dData);
import * as styles from "./stylesforapod"



const NPhoto = (props) => {
  console.log(props)
  return (
    <styles.Wrapper className="wrapper">
      <h1 className="header">NASA's photo of the day - {props.photo.date}</h1>
      <p className="title">{props.photo.title}</p>
      <img className="photo" src={props.photo.hdurl}></img>
      <h4 className="explanation">{props.photo.explanation}</h4>
    </styles.Wrapper>
  )
}

export default NPhoto