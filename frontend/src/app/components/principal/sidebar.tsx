'use client';
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <div className="w-64 h-full bg-gray-800 text-white">
            <div className="p-4 text-2xl font-bold">Dashboard</div>
            <ul>
                <li className="p-4 hover:bg-gray-700"><Link to="/profile">Perfil</Link></li>
                <li className="p-4 hover:bg-gray-700"><Link to="/logout">Cerrar sesión</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
