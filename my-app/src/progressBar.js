import React, { useState, useEffect } from 'react';

export function ProgressBar(props) {

    let [loader,loaderUpdate] = useState(false);
    let [width,widthUpdate] = useState(0);

    useEffect(() => {
        if (loader) {
            setTimeout(() => {
                widthUpdate(width + 2)
                setWidth();
            }, "20")
        }
        
    })

    let setWidth = function() {
        let loadDiv = document.getElementById("statusLoader");
        loadDiv.style.width = width + "%";
    }

    let loadingDiv = function(e) {
        e.preventDefault();
        let created = document.getElementById("statusLoader")
        let classes = e.target.className.split(" ");
        let statusCheck = classes[0];
        let selectedClass = classes[1];

        if (!created && statusCheck === "status") {
            loaderUpdate(!loader)
            let loaderDiv = document.createElement("div");
            loaderDiv.setAttribute("id","statusLoader");
            loaderDiv.classList.add(selectedClass);
            e.target.appendChild(loaderDiv);
        } else {
            if (created) created.remove();
            loaderUpdate(!loader);
            widthUpdate(0);
        }

        console.log(width)
    }

    let placeloadingClass = function(e) {
        e.preventDefault();
        
    }

    return(
        <div className="progressBar">
            <div className="status inception" 
            onMouseEnter={loadingDiv}
            onMouseLeave={loadingDiv}>
                <div></div>
                Inception
                <div className="corner rightEdge"></div>
            </div>
            <div className="status preparation"
            onMouseEnter={loadingDiv}
            onMouseLeave={loadingDiv}>
                <div className="corner leftEdge"></div>
                Preparation
                <div className="corner rightEdge"></div>
            </div>
            <div className="status success"
            onMouseEnter={loadingDiv}
            onMouseLeave={loadingDiv}>
                <div className="corner leftEdge"></div>
                Success
                <div></div>
            </div>
        </div>
    )
}