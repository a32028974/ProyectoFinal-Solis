import React, { useState } from 'react';
import './ProductList.css';
import ProductDetail from '../ProductDetail/ProductDetail';

const ProductList = ({ selectedCategory }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        { id: 1, name: 'Producto 1', price: '$100', description: 'Descripción del Producto 1', image: '/images/product1.jpg', category: 'Electrónica' },
        { id: 2, name: 'Producto 2', price: '$150', description: 'Descripción del Producto 2', image: '/images/product2.jpg', category: 'Ropa' },
        { id: 3, name: 'Producto 3', price: '$200', description: 'Descripción del Producto 3', image: '/images/product3.jpg', category: 'Accesorios' },
    ];

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseDetail = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="product-list">
            <h2>Nuestros Productos</h2>
            <div className="product-items">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
            {selectedProduct && <ProductDetail product={selectedProduct} onClose={handleCloseDetail} />}
        </div>
    );
};

export default ProductList;
