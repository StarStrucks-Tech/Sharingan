import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

interface NavLink {
  href: string;
  label: string;
  isNew?: boolean;
}

interface NavbarProps {
  brandLink: string;
  brandImage: string;
  brandAltText: string;
  navLinks: NavLink[];
  hasContact?: boolean;
  hasListProperty?: boolean;
  hasLogin?: boolean;
  isMobileMenu?: boolean;
  onToggleMobileMenu?: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  brandLink = "/",
  brandImage = "",
  brandAltText = "",
  navLinks = [],
  hasContact = true,
  hasListProperty = false,
  hasLogin = true,
  isMobileMenu = false,
  onToggleMobileMenu,
}) => {
  const defaultNavLinks: NavLink[] = [
    { href: "/#budApp", label: "For Students" },
    { href: "/#lordApp", label: "For Property Owners" },
    { href: "/healthy", label: "Homversity Healthy", isNew: true },
  ];
  return (
    <div className="container">
      <div className="nav_content">
        <div className="nav_content_group">
          <div className="left_items">
            <div className="brand_id">
              <a href={brandLink}>
                <img src={"https://www.homversity.com/assets/images/logo-default.svg"} alt={brandAltText} />
              </a>
            </div>
            <div className="nav_links">
              <ul>
                {navLinks.length ? (
                  navLinks.map((link) => (
                    <li key={link.href}>
                      <Link to={link.href}>
                        {link.label}
                        {link.isNew && <span className="newHeader">New</span>}
                      </Link>
                    </li>
                  ))
                ) : (
                  defaultNavLinks.map((link) => (
                    <li key={link.href}>
                      <Link to={link.href}>
                        {link.label}
                        {link.isNew && <span className="newHeader">New</span>}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
          <div className="right_items">
            {hasContact && (
              <div className="nav_links buttons">
                <ul>
                  <li>
                    <a className="contact" href="tel:+916352896141">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                          <path d="M3.654 1.328a.678.678 0 0 1 .823-.531l2.958.711c.312.075.543.36.57.676l.359 3.628c.027.276-.07.552-.256.736l-1.008.98a11.29 11.29 0 0 0 4.516 4.516l.98-1.008c.184-.186.46-.283.736-.256l3.628.359c.316.027.6.258.676.57l.711 2.958a.678.678 0 0 1-.531.823l-2.98.356c-.522.062-1.045.09-1.568.09-1.056 0-2.102-.144-3.116-.424a15.449 15.449 0 0 1-5.956-4.93A15.449 15.449 0 0 1 .424 4.684C.144 3.67 0 2.624 0 1.568c0-.523.028-1.046.09-1.568L.356.667a.678.678 0 0 1 .531-.823z"/>
                        </svg>
                      </span>
                      Call Us
                    </a>
                  </li>
                </ul>
              </div>
            )}
            {hasListProperty && (
              <div className="nav_links buttons">
                <ul>
                  <li>
                    <a className="btn_grey button" href="">
                      List Your Property
                    </a>
                  </li>
                </ul>
              </div>
            )}
            {hasLogin && (
              <div className="nav_links buttons">
                <ul>
                  <li>
                    <Link className="btn_primary button text-white" to="/signin">
                      LOGIN
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        {isMobileMenu && (
          <div className="burger_menu" onClick={() => onToggleMobileMenu && onToggleMobileMenu(!isMobileMenu)}>
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
