import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Contacto</h4>
                    <p>Teléfono: +54 123 456 789</p>
                    <p>Email: contacto@mi-ecommerce.com</p>
                </div>
                <div className="footer-section">
                    <h4>Enlaces Rápidos</h4>
                    <ul>
                        <li><a href="#categorias">Categorías</a></li>
                        <li><a href="#productos">Productos</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Síguenos</h4>
                    <p>Redes sociales:</p>
                    <div className="social-links">
                        <a href="https://facebook.com">Facebook</a>
                        <a href="https://instagram.com">Instagram</a>
                        <a href="https://twitter.com">Twitter</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Mi Ecommerce. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
