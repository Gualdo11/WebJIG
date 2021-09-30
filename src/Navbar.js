import React from "react";
import { NavbarWrapper } from "./styles/NavbarStyles";

function Navbar({ open }) {
  return (
    <NavbarWrapper open={open}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <a className="navbar-brand" href="#">Juan Ignacio Guallini | Web Designer</a>

  <div>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://www.linkedin.com/in/juan-ignacio-guallini-3743b450/">Linkedin</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://github.com/Gualdo11">GitHub</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://twitter.com/Gualdo11">Twitter</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Mi CV</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Envío de formularios con Formik</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Buscador de imágenes</a>
      </li>
    </ul>
  </div>
</nav>
    </NavbarWrapper>
  );
}

export default Navbar;
