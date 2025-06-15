import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom'; // Importar Link

function BarraTitulo(args) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="my-2" color="dark" dark>
        <NavbarBrand tag={Link} to="/" className="d-flex align-items-center">
          <img
            alt="logo"
            src="https://cdn1.iconfinder.com/data/icons/soleicons-solid-vol-1/64/reactjs_javascript_library_atom_atomic_react-512.png"
            style={{ height: 40, width: 40, marginRight: 10 }}
          />
          La Academia - Ana Camila Aguirre Chuquimia
        </NavbarBrand>
      </Navbar>

      <Navbar {...args} className='my-2' color="secondary">  
        <NavbarBrand>Menu</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/">Inicio</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/oferta-curso">Oferta de Cursos</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default BarraTitulo;
