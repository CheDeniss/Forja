import React from 'react';
import "../../styles/Homepage/homepage.css";

const Homepage = ({ healthStatus  }) => {
    return (
        <div className="homepage">
            <h1>Homepage</h1>
            <h3>Статус сервера: {healthStatus || 'Не виконано запит'}</h3>
        </div>
    );
};

export default Homepage;
