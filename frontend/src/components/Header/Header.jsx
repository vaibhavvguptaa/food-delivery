import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div className='header'>
        <div className='header-contents'>
            <h2>Order your favourite food from here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted to delight every palate. Each creation balances flavor, texture, and presentation, promising an unforgettable culinary journey with every bite.</p>
            <button aria-label="View menu">View menu</button>
        </div>
    </div>
  );
}

export default Header;
