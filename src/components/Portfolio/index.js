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
                        imageUrl="code-quiz.PNG"
                    ></Project>
                </div>
                <div className='project-container'>
                    <Project
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        projectTitle="Password Generator"
                        technologiesUsed = "Password generator will ask you several questions about the length of your preferred password and the special characters you want included.It will then generate a random password, it was built using HTML, CSS, and JavaScript"
                        applicationUrl = "https://dylank641.github.io/my-password-generator/"
                        repositoryUrl = "https://github.com/dylank641/my-password-generator"
                        imageUrl="passGen.png"
                    ></Project>
                </div>
                <div className='project-container'>
                    <Project
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        projectTitle="Portfolio (Built with HTML and CSS)"
                        technologiesUsed = "This was my first time building a real one page website. While it was quite simple to build, this project really opened my eyes to the infinite amount of possibilties you can pursue with code."
                        applicationUrl = "https://dylank641.github.io/portfolio/"
                        repositoryUrl = "https://github.com/dylank641/portfolio"
                        imageUrl="ogPort.PNG"
                    ></Project>
                </div>
                <div className='project-container'>
                    <Project
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        projectTitle="Work Day Scheduler"
                        technologiesUsed = "This app was designed to keep the 9 to 5 worker on track throughout his day. This app was built with HTML, CSS, and Javascript"
                        applicationUrl = "https://dylank641.github.io/day-scheduler/"
                        repositoryUrl = "https://github.com/dylank641/day-scheduler"
                        imageUrl="workDay.png"
                    ></Project>
                </div>
            </div>
            
        </section>
    )
}

export default Port;