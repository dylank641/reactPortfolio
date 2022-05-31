import React from 'react';
import Project from '../Projects';

function Port(props) {

    const { currentPage, setCurrentPage } = props;

    return (
        <section className='my-3' id="resume">
            <h2 id="portfolio-header" className='text-dark bg-primary p-2 display-inline-block'>My Projects</h2>
            <div className="portfolio-container">
                <div className='project-container'>
                    <Project
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        projectTitle="Note Taker"
                        technologiesUsed = "An application that allows you to take notes instantly, save them, and also delete them when you please. This application was created using Express and UUID Moduels."
                        applicationUrl = "https://tranquil-fjord-08020.herokuapp.com/"
                        repositoryUrl = "https://github.com/dylank641/noteTaker"
                        imageUrl="noteTaker.png"
                    ></Project>
                </div>
                <div className='project-container'>
                    <Project
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        projectTitle="Weather App"
                        technologiesUsed = "The Weather App gives you the current weather and a 5 day forecast of any city around the world. This was my first project using an API!"
                        applicationUrl = "https://dylank641.github.io/weather-dashboard/"
                        repositoryUrl = "https://github.com/dylank641/weather-dashboard"
                        imageUrl="weatherApp.png"
                    ></Project>
                </div>
                <div className='project-container'>
                    <Project
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        projectTitle="Coding Quiz"
                        technologiesUsed = "This quiz will test you on you knowledge of javascript. It was made with basic HTML, CSS, and Javascript."
                        applicationUrl = "https://dylank641.github.io/code-quiz/"
                        repositoryUrl = "https://github.com/dylank641/code-quiz"
                        imageUrl="code-quiz.png"
                    ></Project>
               
            
        </section>
    )
}

export default Port;