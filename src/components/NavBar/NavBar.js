import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './NavBar.css';

const NavBar = () => {
    const { cart } = useContext(CartContext);

    return (
        <nav className="navbar">
            <h1>Mi Ecommerce</h1>
            <div className="cart-indicator">
                🛒 {cart.length}
            </div>
        </nav>
    );
};

export default NavBar;
