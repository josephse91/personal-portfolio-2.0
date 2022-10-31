import {Panel,Content} from "./appComponents";
import {Journey} from "./journey";
import React, { useState, useEffect } from 'react';

function App() {

  let [loader,loaderUpdate] = useState(false);
  let [width,progressStatus] = useState(0);
  let [journeyType,setJourney] = useState(null);
  let [journeyVisible,setVisibility] = useState(false)

  useEffect(() => {
    if (loader) {
        setTimeout(() => {
          progressStatus(width + 6)
            setWidth();
        }, "20")
    }
    
})

  let setWidth = function() {
      let loadDiv = document.getElementById("statusLoader");
      if (loadDiv) {
          loadDiv.style.width = width + "%";
      } else {
        progressStatus(0);
      }
      visible();
  }

  let loadingDiv = function(e) {
    e.preventDefault();
    let created = document.getElementById("statusLoader")
    let classes = e.target.className.split(" ");
    let statusCheck = classes[0];
    let selectedClass = classes[1];

    let journeySelect = e.target.parentElement.parentElement.className;
    setJourney(journeySelect);
    
    if (!created && statusCheck === "status") {
        loaderUpdate(true)
        let loaderDiv = document.createElement("div");
        loaderDiv.setAttribute("id","statusLoader");
        loaderDiv.classList.add(selectedClass);
        e.target.appendChild(loaderDiv);
    } else {
        if (created) created.remove();
        loaderUpdate(false);
    }
    console.log(width)
  }

  let visible = function() {
    if (width >= 100) {
      setVisibility(true)
      loaderUpdate(false);
      let journey = document.getElementById("journeyContainer")
      journey.style.zIndex = "2";
      
      console.log("ran Visible:",journey, journey.style.zIndex)
      progressStatus(0);
    }
  }

  const close = function(e) {
    e.preventDefault();
    let thisLoader = document.getElementById("statusLoader")
    let journey = e.currentTarget;
    journey.style.zIndex = -3;
    if (thisLoader) thisLoader.remove();
    if (journeyVisible) loaderUpdate(false);
    progressStatus(0);
  }

  let journeySelect = journeyType;

  return (
    <div id="app">
      <Journey journeySelect={journeySelect} close={close}/>
      <Panel />
      <Content loadingDiv={loadingDiv}/>
    </div>
  );
}

export default App;
