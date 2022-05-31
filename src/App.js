import React, { useState, useEffect } from 'react';
import Port from './components/Portfolio';
import Contact from './components/Contact';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './style-google.css';
import './index.css';
import './my-style.css';


function App() {

  const [currentPage, setCurrentPage] = useState('about');

  useEffect(() => {
    document.title = "James Dylan Killelea";
  })

  return (
    <div>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Header>
      <main className='container my-4'>
        {currentPage === 'about' &&
          <About></About>
        }
        {currentPage === 'portfolio' &&
          <Port
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          ></Port>
        }
        {currentPage === 'contact' &&
          <Contact></Contact>
        }
        {currentPage === 'resume' &&
          <Resume></Resume>
        }
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;