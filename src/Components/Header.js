import React from "react";
import "../Components/Header.scss";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="https://www.google.com/" className="navbar-brand text-center">
              Employee Managemnet Application
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
