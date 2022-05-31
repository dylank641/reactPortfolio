import React from 'react';
import Nav from '../Nav';

function Header(props) {

    const { currentPage, setCurrentPage } = props;

    return (
        <header>
            <div className="container flex-row justify-space-between align-center py-3">
                <h1 id="name-header" className="page-title text-secondary bg-dark py-2 px-3">Dylan Killelea</h1>
                <Nav
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                ></Nav>
            </div>
        </header>
    )
}

export default Header;