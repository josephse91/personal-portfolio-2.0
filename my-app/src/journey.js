export let Journey = function(props) {

    let journey = (props.journeySelect || "Nothing to see Here");
    let close = props.close;

    let me, ia, re, swe;

    let journeyOptions = {
        "mechanical engineering": me,
        "investment advisor": ia,
        "real estate": re,
        "software engineering": swe
    }

    return(
        <div id="journeyContainer" onClick={close}>
            <div id="journey">
                <h1>{journey}</h1>
            </div>
        </div>
    )
}