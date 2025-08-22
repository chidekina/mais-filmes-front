// src/assets/HeartIcon.jsx
import React from 'react';

const HeartIcon = ({ filled = false, size = 28, color = '#e63946', ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={filled ? color : 'none'}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M20.8 4.6c-1.5-1.3-3.8-1.1-5.2.3l-.6.6-.6-.6c-1.4-1.4-3.7-1.6-5.2-.3-1.7 1.5-1.8 4.1-.2 5.7l7 7.2c.4.4 1 .4 1.4 0l7-7.2c1.6-1.6 1.5-4.2-.2-5.7z" />
    </svg>
);

export default HeartIcon;
