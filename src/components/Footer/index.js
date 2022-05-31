import React from 'react';

function Footer() {

    

    // my profile URLs
    let gitURL = "https://github.com/dylank641";
    let linkURL = "https://www.linkedin.com/in/james-killelea-25a60a19a/";
    

    return (
        <footer className='container text-center py-3'>
            <h3 className='text-dark'>

                <a target="_blank" rel="noopener noreferrer" href={gitURL}>
                    <img id="gitHub-profile-image" src={require(`../../assets/texas.jpg`)} alt="me" /><img id="gitHub-octocat-image" src={require(`../../assets/texas.jpg`)} alt="me" />
                </a>

                <span className="gitHub-spacer"></span>

                <a target="_blank" rel="noopener noreferrer" href={linkURL}>
                    <img id="linkedIn-profile-image" src={require(`../../assets/texas.jpg`)} alt="me" />
                </a>
                


            </h3>
        </footer>
    )
}

export default Footer;