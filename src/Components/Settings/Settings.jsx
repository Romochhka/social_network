import React, { useState } from 'react';
import './Settings.module.css';

const Settings = () => {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [privacy, setPrivacy] = useState('public');
    const [password, setPassword] = useState('');

    const handleSave = () => {
        // Логика для сохранения настроек
        alert('Настройки сохранены!');
    };

    return (
        <div className="settings-container">
            <h2>Настройки</h2>

            <div className="settings-option">
                <label>Email уведомления</label>
                <input
                    type="checkbox"
                    checked={emailNotifications}
                    onChange={() => setEmailNotifications(!emailNotifications)}
                />
            </div>

            <div className="settings-option">
                <label>Приватность профиля</label>
                <select value={privacy} onChange={(e) => setPrivacy(e.target.value)}>
                    <option value="public">Публичный</option>
                    <option value="private">Приватный</option>
                </select>
            </div>

            <div className="settings-option">
                <label>Изменить пароль</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button onClick={handleSave}>Сохранить</button>
        </div>
    );
};

export default Settings;
