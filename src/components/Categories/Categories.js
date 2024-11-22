import React from 'react';
import './Categories.css';

const Categories = ({ onSelectCategory }) => {
    const categories = [
        { id: 1, name: 'Electrónica' },
        { id: 2, name: 'Ropa' },
        { id: 3, name: 'Accesorios' },
        { id: 4, name: 'Hogar' },
    ];

    return (
        <div className="categories">
            <h2>Categorías</h2>
            <div className="category-list">
                {categories.map(category => (
                    <button
                        key={category.id}
                        className="category-item"
                        onClick={() => onSelectCategory(category.name)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Categories;
