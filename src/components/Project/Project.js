import React from 'react';
import './Project.css';

const projects = [
    {
        name: "Clicky Game",
        imageURL: "./ClickyGame.JPG",
        description: "Simple React app that tests your memory and observation skills. This was my first React app " +
            "other than this profile.",
        runApp: "https://ericjbergan.github.io/clickygame.github.io/",
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
        name: "Oregon Trail",
        imageURL: "./oregon-trail.jpg",
        description: "A conversion of an old Basic language version of Oregon Trail to modern Java. Must be cloned" +
            "in order to run it.",
        runApp: "https://github.com/ericjbergan/oregon-trail-java",
        seeCode: "https://github.com/ericjbergan/oregon-trail-java"
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
