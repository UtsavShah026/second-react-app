

import React, { useState } from 'react';

function Header() {
  const [theme, setTheme] = useState({
    color: 'black',
    backgroundColor: 'white'
  });
  const [btnText, setBtnText] = useState('Dark Mode');

  const change1 = () => {
    if (theme.color === 'black') {
      setTheme({ color: 'white', backgroundColor: 'black' });
      setBtnText('Light Mode');
    } else {
      setTheme({ color: 'black', backgroundColor: 'white' });
      setBtnText('Dark Mode');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow" style={theme}>
      <div className="container d-flex justify-content-between align-items-center" >
        <div className="d-flex align-items-center text-decoration-none">
          <img  src="/assets/company_logo/logo.png" alt="Maruti Enterprise Logo" width="90" />
          <h1 className="mb-0 pb-0 mt-0 pt-0 navbar-brand h2 logo text-dark font-weight-bold" >
            Maruti<br />Enterprise
          </h1>
        </div>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="align-self-center collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
          <div className="flex-fill">
            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
              <li className="nav-item">
                <a className="nav-link" href="index.html" style={theme}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html" style={theme}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html" style={theme}>Contact</a>
              </li>
              <li className="nav-item" style={theme}>
                <button onClick={change1} type="button" className="btn btn-primary" style={{ color: theme.color, backgroundColor: theme.backgroundColor }}>
                  {btnText}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
