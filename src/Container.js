import React, { useState } from 'react';
import Main from './pages/Main';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import BookNow from './pages/BookNow';
import Services from './pages/Services';
import NavTabs from './NavTabs';
import './App.css'

export default function Container() {
    const [currentPage, setCurrentPage] = useState('Home');


    const renderPage = () => {
        if (currentPage === '/') {
            return <Main />;
        }
        if ( currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage=== 'Gallery') {
            return <Gallery />
        }
        if (currentPage=== 'BookNow'){
            return <BookNow />

        }
        if (currentPage=== 'Services'){
            return <Services />
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <div>
          <NavTabs  currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        </div>
    )


}