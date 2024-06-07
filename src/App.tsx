import React from 'react';
import Navbar from './UI/components/Navbar/Navbar.tsx';

const App: React.FC = () => {
  return (
    <div>
      <Navbar
        brandLink="/"
        brandImage="https://www.homversity.com/assets/images/logo-default.svg"
        brandAltText="Homversity"
        navLinks={[
          { href: "/#budApp", label: "For Students" },
          { href: "/#lordApp", label: "For Property Owners" },
          { href: "/healthy", label: "PGPod Healthy", isNew: true }
        ]}
        hasContact={true}
        hasListProperty={true}
        hasLogin={true}
        isMobileMenu={false}
        onToggleMobileMenu={(isOpen) => console.log("Mobile menu toggled:", isOpen)}
      />
    </div>
  );
};

export default App;
