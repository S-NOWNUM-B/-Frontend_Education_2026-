import React from 'react';

function Card({ title, children, className = '' }) {
    const combinedClassName = `card ${className}`.trim();

    return (
        <>
            <h3>{title}</h3>
            <div>
                {children}
            </div>
        </>
    )
}

export default Card;