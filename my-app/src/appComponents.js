import { GithubIcon, LinkedinIcon } from "./svgIcons"
import selfIcon from "./images/Icon picture.png"
import languages from "./images/Language_Collection.png"

export function Panel() {

    let amp = "\u0026"
    return(
        <div className="panel">
            <div className= "panelItem" id="thumbnail">
                <div id="smallPic">
                    <img className="selfIcon" src={selfIcon} alt="Serge Joseph Icon" />      
                </div>
                <h1 className="nameTag">Serge-Edouard</h1>
                <h1 className="nameTag">Joseph</h1>
            </div>
            <div className="menu panelItem">
                <a className="menuOption" id="homeButton" href="#">Home</a>
                <a className="menuOption" id="aboutButton" href="#">About</a>
                <a className="menuOption" id="expButton" href="#">Education {amp} Experience</a>
                <a className="menuOption" id="portfolioButton" href="#">Portfolio</a>
                <a className="menuOption" id="contactButton" href="#">Contact</a>
            </div>
            <div className= "panelItem" id="menuContacts">
                <LinkedinIcon />
                <GithubIcon />
            </div>
        </div>
    )
}

export function Content() {
    return(
        <div className="content">
            <Home />
            <About />
        </div>
    )
}

function Home() {
    return(
        <div className="home"></div>
    )
}

function About() {
    return(
        <div className="about">
            <div className="langContainer"><img className="langImg" src={languages} /></div>
            <div className="aboutMeContainer">
                <h1 id="aboutMeHeader">About <span>Me</span></h1>
            </div>
        </div>
    )
}