import {Panel,Content} from "./appComponents";
import {Journey} from "./journey";
import React, { useState, useEffect } from 'react';

function App() {

  // This is the lifted state for the Journey details in the about me component
  let [loader,loaderUpdate] = useState(false);
  let [width,progressStatus] = useState(0);
  let [journeyType,setJourney] = useState(null);
  let [journeyVisible,setVisibility] = useState(false)

  // The async rerender which alters the loading bar of the journeys
  useEffect(() => {
    if (loader) {
        setTimeout(() => {
          progressStatus(width + 2.5)
            setWidth();
        }, "10")
    }
    
})

// Event handler functions for the lifted up state of the About me Component
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
    console.log(e)

    let journeySelect = e.target.parentElement.previousSibling.innerHTML;
    let stage = e.target.innerText;

    let journeyDetails = {
      journeySelect: journeySelect,
      stage: stage
    }
    setJourney(() => ({
      ...journeyDetails
    }));
    
    if (!created && statusCheck === "status") {
        loaderUpdate(true)
        let loaderDiv = document.createElement("div");
        loaderDiv.setAttribute("id","statusLoader");
        loaderDiv.classList.add(selectedClass);
        e.target.appendChild(loaderDiv);
    } else {
        if (created) created.remove();
        loaderUpdate(false);
        progressStatus(0);
    }
  }

  let visible = function() {
    if (width >= 100) {
      setVisibility(true)
      loaderUpdate(false);
      let journey = document.getElementById("journeyContainer")
      journey.style.zIndex = "2";
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

  // General format of the page
  return (
    <div id="app">
      <Panel />
      <Content loadingDiv={loadingDiv} journey={journeyType} close={close}/>
    </div>
  );
}

export default App;
