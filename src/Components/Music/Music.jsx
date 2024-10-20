import React from 'react';
import './Music.module.css'

const MyMusic = () => {
    const musicTracks = [
        { title: 'Track 1', artist: 'Artist 1', duration: '3:45' },
        { title: 'Track 2', artist: 'Artist 2', duration: '4:12' },
        { title: 'Track 3', artist: 'Artist 3', duration: '2:58' },
    ];

    return (
        <div className="music-container">
            <h2>Моя музыка</h2>
            {musicTracks.map((track, index) => (
                <div key={index} className="music-track">
                    <span>{track.title}</span> - <span>{track.artist}</span> <span>({track.duration})</span>
                </div>
            ))}
        </div>
    );
};

export default MyMusic;
