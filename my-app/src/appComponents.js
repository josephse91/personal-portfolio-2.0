import { GithubIcon, LinkedinIcon } from "./svgIcons";
import selfIcon from "./images/Icon picture.png";
import languages from "./images/Language_Collection.png";
import {ProgressBar} from "./progressBar";
import { Journey } from "./journey";

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

export function Content(props) {

    return(
        <div id="content">
            <Home />
            <About loadingDiv={props.loadingDiv} journey={props.journey} close={props.close} />
        </div>
    )
}

function Home() {
    return(
        <div className="home">
        </div>
    )
}

function About(props) {
    return(
        <div className="about">
            <div className="pathContainer">
                <Journey journey={props.journey} close={props.close}/>
                {/* <h1 id="pathTitle">Journey of Learning</h1> */}
                <div className="allJourneys">
                    <div id="mechanical_engineer" className="journeyOuterContainer">
                        <h1>Mechanical Engineering</h1>
                        <ProgressBar loadingDiv={props.loadingDiv} />
                    </div>
                    <div id="investment_advisor" className="journeyOuterContainer">
                        <h1>Investment Advisor</h1>
                        <ProgressBar loadingDiv={props.loadingDiv} />
                    </div>
                    <div id="real_estate" className="journeyOuterContainer">
                        <h1>Real Estate</h1>
                        <ProgressBar loadingDiv={props.loadingDiv} />
                    </div>
                    <div id="software_engineering" className="journeyOuterContainer">
                        <h1>Software Engineering</h1>
                        <ProgressBar loadingDiv={props.loadingDiv} />
                    </div>
                </div>
                
            </div>
            <div className="aboutMeContainer">
                <h1 id="aboutMeHeader">About <span>Me</span></h1>
                <div id="aboutMeText">
                    <p>
                    I’m a born tinkerer. Something about being able to create allows me to feel like I’m leaving my imprint on the world. There's a euphoric feeling about breaking the limits of your own mind. Programming gives me that feeling. 
                    </p>
                    
                    <p>
                    In 2021, I decided to commit to the App Academy Open curriculum. Being self-taught, I was able to build a strong foundation of engineering principles.
                    </p>

                    <p>
                    Outside of coding, I typically gravitate to things that are cerebral. I love poker, Connect 4 and studying sports stats. Every two years, I even test my mental capacity by solving a game called Pokemon Puzzle League. It’s a tradition I’ve carried since I was in grade school. Try it! You won’t regret it!
                    </p>

                    <p>Feel free to hover into parts of my journey</p>
                </div>
            </div>
        </div>
    )
}