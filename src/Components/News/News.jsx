import React from 'react';
import './News.module.css';

const News = () => {
    const newsPosts = [
        {
            title: 'Новая функция на сайте!',
            content: 'Теперь вы можете редактировать свои посты прямо с главной страницы.',
            date: '20 октября 2024',
        },
        {
            title: 'Запуск музыкального раздела',
            content: 'Мы добавили новый раздел "My Music", где вы можете слушать и сохранять свои любимые треки!',
            date: '18 октября 2024',
        },
        {
            title: 'Обновление системы сообщений',
            content: 'Теперь вы можете отправлять фото и видео в личных сообщениях.',
            date: '15 октября 2024',
        }
    ];

    return (
        <div className="news-container">
            <h2>Новости</h2>
            {newsPosts.map((post, index) => (
                <div key={index} className="news-post">
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <span>{post.date}</span>
                </div>
            ))}
        </div>
    );
};

export default News;
