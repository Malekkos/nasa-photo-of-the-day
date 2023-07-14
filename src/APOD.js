import React from "react";
// import dData from "./inCaseOfWorst"
// console.log(dData);
import * as styles from "./stylesforapod"



const NPhoto = (props) => {
  console.log(props)
  return (
    <styles.Wrapper className="wrapper">
      <styles.Header className="header">NASA's photo of the day - {props.photo.date}</styles.Header>
      <styles.Title className="title">{props.photo.title}</styles.Title>
      <styles.Image className="photo" src={props.photo.hdurl}></styles.Image>
      <styles.Explanation className="explanation">{props.photo.explanation}</styles.Explanation>
    </styles.Wrapper>
  )
}

export default NPhoto