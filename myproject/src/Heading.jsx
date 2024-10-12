import React from "react";

function Heading() {
    const currcolor = {
        color: ""
    };
    
    let greeting;
    const currentTime = new Date();  // Corrected to `Date`
    const currentHours = currentTime.getHours();  // Corrected to `currentTime`

    if (currentHours < 12) {
        greeting = "GOOD MORNING";
        currcolor.color = "red";  // Used `currcolor` instead of `customStyle`
    } else if (currentHours < 18) {
        greeting = "GOOD EVENING";
        currcolor.color = "green";  // Used `currcolor` instead of `customStyle`
    } else {
        greeting = "GOOD NIGHT";
        currcolor.color = "blue";  // Used `currcolor` instead of `customStyle`
    }

    return <h1 className="Heading" style={currcolor}>{greeting}</h1>;
}

export default Heading;
