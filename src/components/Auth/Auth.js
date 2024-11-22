import React, { useState } from 'react';
import './Auth.css';

const Auth = ({ onLogin }) => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [formData, setFormData] = useState({ username: '', password: '' });

    // Lista de usuarios predefinidos
    const [users, setUsers] = useState([
        { username: 'admin', password: 'admin123' },
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
    ]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegister = () => {
        setUsers([...users, formData]);
        setFormData({ username: '', password: '' });
        alert("Usuario registrado con éxito");
        setIsRegistering(false);
    };

    const handleLogin = () => {
        const userExists = users.some(
            user => user.username === formData.username && user.password === formData.password
        );

        if (userExists) {
            onLogin(formData.username);
            alert("Inicio de sesión exitoso");
            setFormData({ username: '', password: '' });
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    };

    return (
        <div className="auth">
            <h2>{isRegistering ? 'Registro' : 'Inicio de Sesión'}</h2>
            <input
                type="text"
                name="username"
                placeholder="Nombre de usuario"
                value={formData.username}
                onChange={handleInputChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleInputChange}
            />
            {isRegistering ? (
                <button onClick={handleRegister}>Registrar</button>
            ) : (
                <button onClick={handleLogin}>Iniciar Sesión</button>
            )}
            <p onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering ? '¿Ya tienes una cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
            </p>
        </div>
    );
};

export default Auth;
