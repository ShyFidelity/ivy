import './Nav.css'

function NavTabs({currentPage, handlePageChange}) {

    return(
        <div>
            <ul className="nav">
                <li><a href="#Main"
                onClick={()=>handlePageChange('Main')}
                className={currentPage=== 'Home' ? 'nav-link-active' : 'nav-link'}
                >Main</a>
                </li>

                <li><a href="#BookNow"
                onClick={()=>handlePageChange('BookNow')}
                className={currentPage==='BookNow' ? 'nav-link-active' : 'nav-link'}>Book Now!</a></li>

                <li><a href="#Contact"
                onClick={()=>handlePageChange('Contact')}
                className={currentPage==='Contact' ? 'nav-link-active' : 'nav-link'}>Contact</a></li>

                <li><a href="#Gallery"
                onClick={()=>handlePageChange('Gallery')}
                className={currentPage==='Gallery' ? 'nav-link-active' : 'nav-link'}>Gallery</a></li>

            </ul>

        </div>
    )
    
}


export default NavTabs;