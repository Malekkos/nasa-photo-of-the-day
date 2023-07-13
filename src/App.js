import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import dData from "./inCaseOfWorst";
import NPhoto from "./APOD";


console.log(dData);
function App() {
  const [pictureOfTheDay, setPictureOfTheDay] = useState(dData);
  console.log(pictureOfTheDay);
  useEffect(() => {
    // console.log("useEffect working");
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(res => {
      // console.log(res.data);
      setPictureOfTheDay(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [pictureOfTheDay]);
  return (
    <div className="App">
      { pictureOfTheDay && <NPhoto photo={pictureOfTheDay} />}
    </div>
  );
}

export default App;
