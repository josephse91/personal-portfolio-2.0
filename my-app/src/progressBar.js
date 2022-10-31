import React from 'react';

export function ProgressBar(props) {

    let loadingDiv = props.loadingDiv;

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