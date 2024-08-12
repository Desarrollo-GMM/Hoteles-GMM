'use client';
import React from 'react';
import Sidebar from './sidebar';

interface DashboardProps {
    userData: UserResponse | null;
}

const Dashboard: React.FC<DashboardProps> = ({ userData }) => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 p-6 bg-gray-100">
                <h1 className="text-3xl font-bold mb-4">Bienvenido, {userData?.full_name}</h1>
                {userData ? (
                    <div>
                        <p><strong>Nombre Completo:</strong> {userData.full_name}</p>
                        <p><strong>Apellido Paterno:</strong> {userData.apaterno}</p>
                        <p><strong>Apellido Materno:</strong> {userData.amaterno ?? 'No disponible'}</p>
                        <p><strong>Email:</strong> {userData.email}</p>
                    </div>
                ) : (
                    <p>Cargando datos del usuario...</p>
                )}
            </main>
        </div>
    );
};

export default Dashboard;
