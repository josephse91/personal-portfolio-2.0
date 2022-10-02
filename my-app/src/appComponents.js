import { GithubIcon, LinkedinIcon } from "./svgIcons"

export function Panel() {

    let amp = "\u0026"
    return(
        <div className="panel">
            <div className= "panelItem" id="thumbnail">
                <div id="smallPic"></div>
                <h1>Serge-Edouard</h1>
                <h1>Joseph</h1>
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
            Content
        </div>
    )
}