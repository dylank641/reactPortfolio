import React from 'react';
import './style.css'

function Nav(props) {

    const { currentPage, setCurrentPage } = props;

    return (
        <nav className="">
            {currentPage === 'about'
                ? <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark nav-current" href="#about" onClick={() => setCurrentPage('about')}>About Me</a>
                : <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark nav-option" href="#about" onClick={() => setCurrentPage('about')}>About Me</a>
            }
            {currentPage === 'portfolio'
                ? <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark nav-current" href="#portfolio" onClick={() => setCurrentPage('portfolio')}>Portfolio</a>
                : <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark nav-option" href="#portfolio" onClick={() => setCurrentPage('portfolio')}>Portfolio</a>
            }
            {currentPage === 'contact'
                ? <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark nav-current" href="#contact" onClick={() => setCurrentPage('contact')}>Contact</a>
                : <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark nav-option" href="#contact" onClick={() => setCurrentPage('contact')}>Contact</a>
            }
            {currentPage === 'resume'
                ? <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark nav-current" href="#resume" onClick={() => setCurrentPage('resume')}>Resume</a>
                : <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark nav-option" href="#resume" onClick={() => setCurrentPage('resume')}>Resume</a>
            }
        </nav>
    )
}

export default Nav;