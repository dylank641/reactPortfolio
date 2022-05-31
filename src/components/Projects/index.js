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
            style = "tech-blog";
            break;
        case "weatherApp.png":
            style = "note-taker";
            break;
        case "code-quiz.PNG":
            style = "code-quiz";
            break;
        case "passGen.png":
            style = "workday-scheduler";
            break;
        case "ogPort.PNG":
            style = "password-generator";
            break;
        case "workDay.png":
            style = "run-buddy";
            break;
        default:
            style = "";
            break;
    }

    return (
        <div>
            <div>
                <div className='project-info'>
                    <a href={applicationUrl} target="_blank" rel="noreferrer">{projectTitle}</a><br />
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