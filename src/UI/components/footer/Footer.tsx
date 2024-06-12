import React from 'react';
import './footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section company-info">
          <h3>Company</h3>
          <p><a href="#">Link1</a></p>
          <p><a href="#">Link2</a></p>
          <p><a href="#">Link3</a></p>
        </div>
        <div className="footer-section support">
          <h3>Support</h3>
          <p>Help Center</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
        </div>
        
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: info@company.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: abc Street, City, Country</p>
        </div>
        <div className="info-section">
          <h2>PGPod</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatum ea earum nisi fugiat omnis perferendis iusto laboriosam ipsa. Perspiciatis quo voluptatibus fuga?</p>
        </div>
      </div>

      <div className="footer-bottom">
      <div className=" social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
        <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

