import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './ProductDetail.css';

const ProductDetail = ({ product, onClose }) => {
    const { addToCart } = useContext(CartContext);
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({ name: '', rating: '', comment: '' });

    const handleAddToCart = () => {
        addToCart(product);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
    };

    const handleAddReview = () => {
        setReviews([...reviews, newReview]);
        setNewReview({ name: '', rating: '', comment: '' });
    };

    if (!product) return null;

    return (
        <div className="product-detail">
            <div className="product-detail-content">
                <button className="close-btn" onClick={onClose}>Cerrar</button>
                <img src={product.image} alt={product.name} className="product-image" />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p className="product-price">{product.price}</p>
                <button className="add-to-cart-btn" onClick={handleAddToCart}>Añadir al carrito</button>

                <div className="reviews">
                    <h3>Reseñas</h3>
                    {reviews.length === 0 ? (
                        <p>No hay reseñas todavía.</p>
                    ) : (
                        reviews.map((review, index) => (
                            <div key={index} className="review">
                                <p><strong>{review.name}</strong> - {review.rating} estrellas</p>
                                <p>{review.comment}</p>
                            </div>
                        ))
                    )}
                </div>

                <div className="add-review">
                    <h3>Agregar una Reseña</h3>
                    <input
                        type="text"
                        name="name"
                        placeholder="Tu nombre"
                        value={newReview.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="number"
                        name="rating"
                        placeholder="Calificación (1-5)"
                        value={newReview.rating}
                        onChange={handleInputChange}
                    />
                    <textarea
                        name="comment"
                        placeholder="Comentario"
                        value={newReview.comment}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleAddReview}>Enviar Reseña</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
