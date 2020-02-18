import React from 'react';
import HeaderBody from './HeaderBody';
import NavTop from './NavTop';
import NavBottom from './NavBottom';

function Header() {
    return(
      <div className="HeaderMain">
      <style jsx>{`
        body {
          margin: 0;
        }
        .HeaderMain {
          width: 100%;
          padding: 0px;
        }
        `}
        </style>
        <p>This is the Header</p>
        <NavTop/>
        <HeaderBody/>
        <NavBottom/>
      </div>
    );
}

export default Header;
