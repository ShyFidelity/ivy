import React, { useState } from 'react';
import Main from './pages/Main';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import BookNow from './pages/BookNow';
import NavTabs from './NavTabs';
import './App.css'

export default function Container() {
    const [currentPage, setCurrentPage] = useState('Home');


    const renderPage = () => {
        if (currentPage === 'Main') {
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
    }

    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <div>
          <NavTabs  currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        </div>
    )


}