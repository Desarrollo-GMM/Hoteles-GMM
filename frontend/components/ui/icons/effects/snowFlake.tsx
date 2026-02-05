'use client'

interface ComponentProps { }

const SnowFlake: React.FC<ComponentProps> = () => {
    return (
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 L50 90 M30 30 L70 70 M70 30 L30 70 M10 50 L90 50 M25 25 L75 75 M75 25 L25 75"
                stroke="white" stroke-width="2" fill="none" />
        </svg>
    )
    
}

export default SnowFlake