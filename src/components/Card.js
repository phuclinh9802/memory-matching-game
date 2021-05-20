import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip'; // import card flip library for simplicity
import data from '../data/data.json';

//styling card
const CardStyleFront = {
    boxShadow: "0 0px 20px 0 rgba(0,0,0,0.5)",
    padding: "20px",
    margin: "20px",
    width: "150px",
    height: "250px",
    background: "rgba(219, 102, 102, 0.75)"
}

const CardStyleBack = {
    boxShadow: "0 0px 20px 0 rgba(0,0,0,0.2)",
    padding: "20px",
    margin: "20px",
    width: "150px",
    height: "250px",
}

// create Card component with prop showing the elements in each item
const Card = ({ project, card }) => {

    // initially, set flipped to false
    const [isFlipped, setIsFlipped] = useState(false);

    // now, we need to check if id equals to each other, if so then alert box "Game Over!"
    /*
        first, create a randomized value from 1 - 2 -> create a button to randomize the images (essentially "New Game")
        initialize boolean state - isMatched -> if matched -> alert box
                                             -> if not, reflip both cards.
    */
    const [isMatched, setIsMatched] = useState(false);
    // set state for 2 cards that are flipped
    const [firstCard, setFirstCard] = useState(0);
    const [secondCard, setSecondCard] = useState(0);

    function checkMatched(index1, index2) {
        // if-else to check if index 1 === index 2
        if (index1 === index2) {
            setIsMatched(true);
        }
        else {
            setIsMatched(false);
        }
        return isMatched;
    }

    // render
    return (
        // not flipped yet initially
        // when clicking, set flipped to opposite bool (true -> false, and on the contrary)
        <div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div style={CardStyleFront}
                    onClick={() => {
                        setIsFlipped((prev) => !prev);
                        // when card flipped, 
                        // console.log(card);
                        setFirstCard(() => card.id)
                        console.log(card.id)
                    }}
                    className="front"
                >
                </div>
                <div style={CardStyleBack} onClick={() => {
                    setIsFlipped((prev) => !prev)
                    console.log(false);
                }} className="back">
                    <img src={project.image} />
                </div>
            </ReactCardFlip>
            <div>
                {
                    // () => checkMatched ? console.log("hello") : console.log("hi")
                    //     //     (<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    //     //         <div style={CardStyleFront} onChange={() => setIsFlipped((prev) => !prev)} className="front">
                    //     //         </div>
                    //     //         {/* <div style={CardStyleBack} onClick={() => setIsFlipped((prev) => !prev)} className="back">
                    //     //     <img src={project.image} />
                    //     // </div> */}
                    //     //     </ReactCardFlip>) : ""
                }
            </div>
        </div>


    );
}

export default Card;


