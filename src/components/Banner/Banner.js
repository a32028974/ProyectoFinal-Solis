import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <h1>Bienvenido a nuestra tienda</h1>
                <p>Encuentra los mejores productos a los mejores precios</p>
                <button className="shop-now-btn">Compra Ahora</button>
            </div>
        </div>
    );
};

export default Banner;
