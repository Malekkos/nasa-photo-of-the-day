import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import dData from "./inCaseOfWorst";
import NPhoto from "./APOD";
// const apod = axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
// .then(res => {
//   console.log(res.data);
// })
// .catch(err => {
//   console.log(err);
// })
console.log(dData);
function App() {
  const [pictureOfTheDay, setPictureOfTheDay] = useState(dData);
  console.log(pictureOfTheDay);
  useEffect(() => {
    // console.log("useEffect working");
    // const apod = axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    // .then(res => {
    //   console.log(res.data);
    //   return
    // })
    // .catch(err => {
    //   console.log(err);
    // })
  }, [pictureOfTheDay]);
  return (
    <div className="App">
      <NPhoto photo={dData} />
    </div>
  );
}

export default App;
