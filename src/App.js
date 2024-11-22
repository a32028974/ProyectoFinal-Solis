import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Categories from './components/Categories/Categories';
import ProductList from './components/ProductList/ProductList';
import Footer from './components/Footer/Footer';
import Auth from './components/Auth/Auth';

function App() {
    const [user, setUser] = useState(null);

    const handleLogin = (username) => {
        setUser(username);
    };

    return (
        <CartProvider>
            <div>
                <NavBar />
                <Banner />
                {user ? (
                    <>
                        <Categories />
                        <ProductList />
                        <Footer />
                    </>
                ) : (
                    <Auth onLogin={handleLogin} />
                )}
            </div>
        </CartProvider>
    );
}

export default App;
