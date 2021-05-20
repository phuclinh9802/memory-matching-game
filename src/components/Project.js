import React from 'react';
import Data from '../data/data.json'
import Card from './Card'

var auto = "auto";
const style = {
    margin: "auto",
    width: "50%",
    height: "80%",
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    justifyItems: "center",
    alignItems: "center"
}

var userData = Data;
var newData = userData.data;
// use projects to pass in the data from data.json to display each card's info


const Projects = () => {
    // var doubledData = iterate(newData);
    function iterate(arr) {
        let new_arr = [];
        for (let i = 0; i < arr.length; i++) {
            // copy all elements, essentially doubling the existing elements.
            new_arr.push(arr[i]);
            new_arr.push(arr[i]);
        }

        arr = new_arr;
        return arr;
    }

    //function to shuffle data
    function shuffle(arr) {
        var currentIndex = arr.length;
        var temp = 0;
        var random = 0;
        while (currentIndex !== 0) {
            random = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temp = arr[currentIndex];
            arr[currentIndex] = arr[random];
            arr[random] = temp;
        }
        return arr;
    }
    // data that is duplicated 
    let doubledData = iterate(newData);
    // shuffle the duplicated data
    let randomData = shuffle(doubledData);
    return (
        <div
            style={style}
            className="Projects"
        >
            {randomData.map((item, index) => {
                return (
                    <Card project={item} card={doubledData[index]} key={`card-${index}`} />
                );
            })}
        </div>
    )
}

export default Projects;