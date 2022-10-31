export let Journey = function(props) {

    let journey = (props.journey || "Nothing to see Here");
    let currentJourney = journey.journeySelect
    let stage = journey.stage;
    let close = props.close;
    console.log(props,journey,currentJourney,stage)
    let me, ia, re, swe;

    me = function(stage) {
        let text
        if (stage === "Inception") {
            text = "This is the beginning";
        } else if ( stage === "Preparation") {
            text = "This is the prep"
        } else if (stage === "Success") {
            text = "How I succeeded"
        }

        return (
            <div id="me_text">
                <h1 className="journeyTitle">{currentJourney}</h1>
                <p className="journeyText">{text}</p>
            </div>
        )
    }

    ia = function(stage) {
        let text
        if (stage === "Inception") {
            text = "This is the beginning";
        } else if ( stage === "Preparation") {
            text = "This is the prep"
        } else if (stage === "Success") {
            text = "How I succeeded"
        }

        return (
            <div id="me_text">
                <h1 className="journeyTitle">{currentJourney}</h1>
                <p className="journeyText">{text}</p>
            </div>
        )
    }

    re = function(stage) {
        let text
        if (stage === "Inception") {
            text = "This is the beginning";
        } else if ( stage === "Preparation") {
            text = "This is the prep"
        } else if (stage === "Success") {
            text = "How I succeeded"
        }

        return (
            <div id="me_text">
                <h1 className="journeyTitle">{currentJourney}</h1>
                <p className="journeyText">{text}</p>
            </div>
        )
    }

    swe = function(stage) {
        let text
        if (stage === "Inception") {
            text = "This is the beginning";
        } else if ( stage === "Preparation") {
            text = "This is the prep"
        } else if (stage === "Success") {
            text = "How I succeeded"
        }

        return (
            <div id="me_text">
                <h1 className="journeyTitle">{currentJourney}</h1>
                <p className="journeyText">{text}</p>
            </div>
        )
    }

    let journeyOptions = {
        "Mechanical Engineering": me(stage),
        "Investment Advisor": ia(stage),
        "Real Estate": re(stage),
        "Software Engineering": swe(stage)
    }

    return(
        <div id="journeyContainer" onClick={close}>
            <div id="journey">
                {journeyOptions[currentJourney]}
            </div>
        </div>
    )
}