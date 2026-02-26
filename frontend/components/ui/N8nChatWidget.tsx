// components/N8nChatWidget.tsx
'use client';

import { useEffect, useRef } from 'react';

export const N8nChatWidget = () => {
    // Usamos useRef para asegurarnos de que el script solo se cargue una vez,
    // incluso si el componente se re-renderiza (ej. en desarrollo con Strict Mode).
    const scriptLoaded = useRef(false);

    useEffect(() => {
        // Evita la doble inicialización en desarrollo
        if (scriptLoaded.current) return;

        // 1. Crear el elemento script
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/n8n-embedded-chat-interface@latest/output/index.js';
        script.async = true;
        script.onload = () => {
            // Opcional: alguna acción cuando el script se haya cargado
            console.log('n8n chat widget script loaded');
        };
        document.body.appendChild(script);

        // 2. Crear el elemento personalizado del chat (después de que el script se haya cargado)
        // Es buena práctica esperar a que el script esté listo. Podemos hacerlo en el onload.
        script.onload = () => {
            // Verificar si el elemento ya existe para no duplicarlo
            if (!document.querySelector('n8n-embedded-chat-interface')) {
                const chatElement = document.createElement('n8n-embedded-chat-interface');
                chatElement.setAttribute('label', 'Mi Asistente IA');
                chatElement.setAttribute('hostname', process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL!);
                chatElement.setAttribute('open-on-start', 'false');
                // Aquí puedes añadir más atributos de personalización si los necesitas
                // chatElement.setAttribute('primary-color', '#2563eb');

                // Encuentra un contenedor o añádelo directamente al body
                // En este ejemplo, lo añadiremos a un div con id "n8n-chat-container"
                const container = document.getElementById('n8n-chat-container');
                if (container) {
                    container.appendChild(chatElement);
                } else {
                    // Fallback: crea un contenedor o añádelo al body
                    const newContainer = document.createElement('div');
                    newContainer.id = 'n8n-chat-container';
                    newContainer.appendChild(chatElement);
                    document.body.appendChild(newContainer);
                }
            }
        };

        scriptLoaded.current = true;

        // Cleanup: opcional, pero podrías querer eliminar el script y el widget si el componente se desmonta
        return () => {
            // document.body.removeChild(script); // Descomentar con precaución
            // document.getElementById('n8n-chat-container')?.remove();
        };
    }, []);

    // Este div actuará como el punto de anclaje para nuestro widget
    return <div id="n8n-chat-container"></div>;
};