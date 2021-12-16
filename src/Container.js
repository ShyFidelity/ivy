import React, { useState } from 'react';
import Main from './pages/Main';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
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
    }

    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <div className="renderPage">
          <NavTabs  currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        </div>
    )


}