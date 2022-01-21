import './Nav.css'
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap'; 

function NavTabs({currentPage, handlePageChange}) {

    return(
        
        
        <div>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Ivy Nails</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#Main"
        onClick={()=>handlePageChange('Main')}
        className={currentPage=== 'Home' ? 'nav-link-active' : 'nav-link'}>
        Home</Nav.Link>
        <Nav.Link 
          onClick={()=>handlePageChange('BookNow')}
          className={currentPage==='BookNow' ? 'nav-link-active' : 'nav-link'}
        href="#BookNow">Book Now</Nav.Link>

<Nav.Link 
          onClick={()=>handlePageChange('Contact')}
          className={currentPage==='Contact' ? 'nav-link-active' : 'nav-link'}
        href="#Contact">Contact</Nav.Link>
        
        <Nav.Link 
          onClick={()=>handlePageChange('Gallery')}
          className={currentPage==='Gallery' ? 'nav-link-active' : 'nav-link'}
        href="#Gallery">Gallery</Nav.Link>

            
<Nav.Link 
          onClick={()=>handlePageChange('Services')}
          className={currentPage==='Services' ? 'nav-link-active' : 'nav-link'}
        href="#Services">Services</Nav.Link>
      </Nav>

      
  
    </Navbar.Collapse>
  </Container>
</Navbar>


        </div>
    )
    
}


export default NavTabs;