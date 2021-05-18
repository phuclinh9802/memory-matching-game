import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip'; // import card flip library for simplicity

//styling card
const CardStyleFront = {
    boxShadow: "0 0px 20px 0 rgba(0,0,0,0.2)",
    padding: "20px",
    margin: "20px",
    width: "200px",
    height: "300px",
    background: "rgba(219, 102, 102, 0.75)"
}

const CardStyleBack = {
    boxShadow: "0 0px 20px 0 rgba(0,0,0,0.2)",
    padding: "20px",
    margin: "20px",
    width: "200px",
    height: "300px",
}

// create Card component with prop showing the elements in each item
const Card = ({ project }) => {

    // initially, set flipped to false
    const [isFlipped, setIsFlipped] = useState(false);

    // render
    return (
        // not flipped yet initially
        // when clicking, set flipped to opposite bool (true -> false, and on the contrary)
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div style={CardStyleFront} onClick={() => setIsFlipped((prev) => !prev)} className="front">
            </div>
            <div style={CardStyleBack} onClick={() => setIsFlipped((prev) => !prev)} className="back">
                <img src={project.img} />
            </div>

        </ReactCardFlip>
    )
}

export default Card;