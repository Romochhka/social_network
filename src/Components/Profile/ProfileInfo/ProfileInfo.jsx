import React from 'react';
import './ProfileInfo.module.css';

const Profile = () => {
    const user = {
        avatar: 'https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg',
        name: 'Иван Иванов',
        status: 'Всегда онлайн!',
        birthdate: '1 января 1990',
        city: 'Москва',
        friendsCount: 150,
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src={user.avatar} alt="avatar" className="profile-avatar" />
                <div className="profile-info">
                    <h2>{user.name}</h2>
                    <p className="profile-status">{user.status}</p>
                </div>
                <div className="profile-actions">
                    <button>Добавить в друзья</button>
                    <button>Отправить сообщение</button>
                    <button>Изменить профиль</button>
                </div>
            </div>

            <div className="profile-details">
                <h3>Информация:</h3>
                <p><strong>Дата рождения:</strong> {user.birthdate}</p>
                <p><strong>Город:</strong> {user.city}</p>
                <p><strong>Друзья:</strong> {user.friendsCount}</p>
            </div>
        </div>
    );
};

export default Profile;
