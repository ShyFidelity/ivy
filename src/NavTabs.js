
function NavTabs({currentPage, handlePageChange}) {

    return(
        <div>
            <ul className="nav">
                <li><a href="#Main"
                onClick={()=>handlePageChange('Main')}
                className={currentPage=== 'Home' ? 'nav-link-active' : 'nav-link'}
                >Main</a>
                </li>

                <li><a href="#Contact"
                onClick={()=>handlePageChange('Contact')}
                className={currentPage==='Contact' ? 'nav-link-active' : 'nav-link'}>Contact</a></li>

                <li><a href="#Gallery"
                onClick={()=>handlePageChange('Gallery')}>Gallery</a></li>

            </ul>

        </div>
    )
    
}


export default NavTabs;