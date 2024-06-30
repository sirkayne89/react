import React, { useState } from 'react';
import BildS from './../../image/S.png';


const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav>
      <div className="logo">
        <a href="#top">
          <img src={BildS} alt="Logo" />
        </a>
      </div>
      <div className="menu-knopf" onClick={toggleMenu}>
        <ion-icon name={menuActive ? "close-outline" : "menu-outline"}></ion-icon>
      </div>
      <ul className={`menu ${menuActive ? "active" : ""}`}>
        <li>
          <a href="#ueber-mich" onClick={() => setMenuActive(false)}>Über mich</a>
        </li>
        <li>
          <a href="#lebenslauf" onClick={() => setMenuActive(false)}>Lebenslauf</a>
        </li>
        <li>
          <a href="#kenntnisse" onClick={() => setMenuActive(false)}>Kenntnisse</a>
        </li>
        <li>
          <a href="#projekte" onClick={() => setMenuActive(false)}>Projekte</a>
        </li>
        <li>
          <a href="#unterlagen" onClick={() => setMenuActive(false)}>Unterlagen</a>
        </li>
        <li>
          <a href="#kontakt" onClick={() => setMenuActive(false)}>Kontakt</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
