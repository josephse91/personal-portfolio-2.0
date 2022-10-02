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
                <a className="menuOption" id="homeButton">Home</a>
                <a className="menuOption" id="aboutButton">About</a>
                <a className="menuOption" id="expButton">Education {amp} Experience</a>
                <a className="menuOption" id="portfolioButton">Portfolio</a>
                <a className="menuOption" id="contactButton">Contact</a>
            </div>
            <div className= "panelItem" id="menuContacts">Contacts</div>
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