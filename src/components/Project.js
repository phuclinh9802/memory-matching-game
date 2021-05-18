import React from 'react';
import Data from '../data/data.json'
import Card from './Card'

const style = {
    margin: "auto",
    width: "50%"
}
// use projects to pass in the data from data.json to display each card's info
const Projects = () => {
    return (
        <div
            style={style}
            className="Projects"
        >
            {Data.map((item, index) => (
                <Card project={item} key={`card-${index}`} />
            ))}
        </div>
    )
}

export default Projects;