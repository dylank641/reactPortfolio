import React from 'react';

function Project(props) {

    const { 
        projectTitle,
        descrip,
        applicationUrl,
        repositoryUrl,
        imageUrl
    } = props;

    let style = "";

    switch (imageUrl) {
        case "noteTaker.png":
            style = "noteTaker";
            break;
        case "weatherApp.png":
            style = "weatherApp";
            break;
        case "code-quiz.PNG":
            style = "code-quiz";
            break;
        case "passGen.png":
            style = "passGen";
            break;
        case "ogPort.PNG":
            style = "ogPort";
            break;
        case "workDay.png":
            style = "workDay";
            break;
        default:
            style = "";
            break;
    }

    return (
        <div>
            <div>
                <div className='project-info'>
                    <a href={applicationUrl} target="_blank" rel="noreferrer">{projectTitle}-Click here to deploy app</a><br />
                    {descrip}<br />
                    <a href={repositoryUrl} target="_blank" rel="noreferrer">View repository</a>
                </div>
                <a href={applicationUrl} target="_blank" rel="noreferrer">
                    <div className={style}>&nbsp;</div>
                </a>
            </div>
            
        </div>
    )
}

export default Project;