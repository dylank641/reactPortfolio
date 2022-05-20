import React from 'react';

function About() {
    return (
        <section className='my-3' id="about">
            <h2 id="about-header" className=''>About Me</h2>
            <div className='about-container'>
                <img id="texas-image" src={require(`../../assets/texas.jpg`)} alt="Welcome to Texas Sign" />
                <p>I was born and raised in the great state of Texas. I grew up like any other kid in a neighborhood, ride our bikes until the sun goes down
                     and then wake up to do it again. At a young age I grew a passion for computers, weather it was playing games or making websistes, I was
                      all over it. In a way I guess you can say that's where my web development career started.
                </p>
                
            </div>
        </section>
    )
}

export default About;