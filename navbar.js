import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import {Route, Routes, Link} from "react-router-dom";
import Home from "../components/home";
import Books from "../pages/books";
import Dict from "../pages/dict";
import Subjects from "../pages/subject";
import Papers from "../pages/paper";
import About  from '../pages/about';
import Contact from '../pages/contact';





function NavbarMenu() {
  return (
    <>

    <Navbar expand="lg" className="navbarMenu ">
      <Container fluid>
        <Navbar.Brand href="#" className="fs-2 fw-bold ">
        <img
              alt=""
              src={""}
              width="50"
              height="50"
              className="d-inline-block align-center m-3 w-auto "
            />{' '} Geo & GeoPhy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse >
          <Nav
          id="navbarScroll"

           className=" nav-items mx-auto gap-4 text-center fw-bold mx-auto text-warning "
                
          >
            <Nav.Link  as ={Link} to = "/Home" className= " nav-link ">Home</Nav.Link>
            <Nav.Link  as ={Link} to = "/books" className= " nav-link ">Books</Nav.Link>
            <Nav.Link  as ={Link} to = "/dict" className= " nav-link ">Dictionary</Nav.Link>
            <Nav.Link  as ={Link} to = "/subject" className= "nav-link ">Subjects</Nav.Link>
            <Nav.Link  as ={Link} to = "/Papers" className= "nav-link ">Papers</Nav.Link>
            <Nav.Link  as ={Link} to = "/contact" className= "nav-link ">Contact</Nav.Link>
            <Nav.Link  as ={Link} to = "/About" className= "nav-link ">About us</Nav.Link>

          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    <Routes>
      <Route path ='/Home' element ={<Home/>}> </Route>
      <Route path ='/books' element ={<Books/>}> </Route>
      <Route path ='/dict' element ={<Dict/>}> </Route>
      <Route path ='/subject' element ={<Subjects/>}> </Route>
      <Route path = "/Papers" element ={<Papers/>}> </Route>
      <Route path = "/contact" element ={<Contact/>}> </Route>
      <Route path = "/About" element ={<About/>}> </Route>
      

    </Routes>
    
    <br/>
    </>
   
  );
}


export default NavbarMenu;