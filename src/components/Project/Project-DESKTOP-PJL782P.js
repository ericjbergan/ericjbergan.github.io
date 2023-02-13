import React from 'react';
import './Project.css';

const projects = [
    {
        name: "Clicky Game",
        imageURL: "./ClickyGame.JPG",
        description: "Simple React app that tests your memory and observation skills. This was my first React app other than this profile.",
        runApp: "https://clicky-game-ejb.herokuapp.com",
        seeCode: "https://github.com/ericjbergan/clickygame.github.io"
    },
    {
        name: "Gem Collector",
        imageURL: "./gemcollector.jpg",
        description: "A game for improving basic math and memory skills. It uses lots of RNG for such a small app.",
        runApp: "https://ericjbergan.github.io/crystal-collector.github.io/",
        seeCode: "https://github.com/ericjbergan/crystal-collector.github.io"
    },
    {
        name: "Burger",
        imageURL: "./oregon-trail.jpg",
        description: "A small, no-frills full stack app for adding data to a MySQL db and retrieving and deleting it. It would be a good to-do list with a few changes.",
        runApp: "https://eat-da-burger-ejb.herokuapp.com",
        seeCode: "https://github.com/ericjbergan/burger.github.io"
    }
];


const Projects = () => {

   return projects.map(card => {
        return (
            <div className="project-card">
                <div className="img-div">
                    <img src={card.imageURL} alt="" className="projectImg"></img>
                    <div className="link-wrapper">
                        <a href={card.runApp} target="_blank" rel="noopener noreferrer">
                            <button type="button">Run App</button></a>
                        <a href={card.seeCode} target="_blank" rel="noopener noreferrer">
                            <button type="button" className="runApp">See Code</button></a>
                    </div>
                </div>
                <div className="desc-div">
                    <p className="project-desc">{card.description}</p>
                </div>
            </div>
        )
    })
}

export default Projects;
