import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ closeModal }) => {
    const [isLogin, setIsLogin] = useState(true); // Статус для переключення між входом та реєстрацією
    const [phone, setPhone] = useState(''); // Стан для номера телефону
    const [password, setPassword] = useState(''); // Стан для пароля
    const [confirmPassword, setConfirmPassword] = useState(''); // Стан для підтвердження пароля

    const toggleForm = () => {
        setIsLogin(!isLogin); // Перемикаємо між формою входу та реєстрації
    };

    // Функція для обробки змін в полях
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            // Логіка для входу
            console.log("Вхід з номером телефону:", phone, "і паролем:", password);
        } else {
            // Логіка для реєстрації
            if (password !== confirmPassword) {
                alert("Паролі не співпадають");
                return;
            }
            console.log("Реєстрація з номером телефону:", phone, "і паролем:", password);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={closeModal}>X</button>
                
                <h2>{isLogin ? 'Вхід' : 'Реєстрація'}</h2>
                <form onSubmit={handleSubmit}>
                    {/* Поле для номера телефону */}
                    <input
                        type="tel"
                        placeholder="Номер телефону"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    {/* Поле для пароля */}
                    <input
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {/* Поле для підтвердження пароля (тільки для реєстрації) */}
                    {!isLogin && (
                        <input
                            type="password"
                            placeholder="Підтвердження пароля"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    )}
                    <button type="submit">{isLogin ? 'Увійти' : 'Зареєструватися'}</button>
                </form>

                <p>
                    {isLogin ? 'Ще немає акаунту?' : 'Вже є акаунт?'}
                    <button onClick={toggleForm}>{isLogin ? 'Зареєструватися' : 'Увійти'}</button>
                </p>
            </div>
        </div>
    );
};

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
};

export default Modal;
