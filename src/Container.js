import React, { useState } from 'react';
import Main from './pages/Main'
import Contact from './pages/Contact'
import NavTabs from './NavTabs';

export default function Container() {
    const [currentPage, setCurrentPage] = useState('Home');


    const renderPage = () => {
        if (currentPage === 'Main') {
            return <Main />;
        }
        if ( currentPage === 'Contact') {
            return <Contact />
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