import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


const NavBarComponent = () => {
    return ( <Navbar bg="light" expand="lg" style={{marginBottom:'20px'}} >
    <Container>
      <Navbar.Brand href="#home">People of the company</Navbar.Brand>
    </Container>
  </Navbar> );
}
 
export default NavBarComponent;

