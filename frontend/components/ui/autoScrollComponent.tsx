'use client'

interface AutoScrollProps {
    children: React.ReactNode;
    speed?: 'slow' | 'medium' | 'fast' | 'slower';
    direction?: 'horizontal' | 'vertical';
    reverse?: boolean;
    pauseOnHover?: boolean;
    className?: string;
    gap?: number;
}

const AutoScrollComponent: React.FC<AutoScrollProps> = ({
    children,
    speed = 'medium',
    direction = 'horizontal',
    reverse = false,
    pauseOnHover = false,
    className = '',
    gap = 4
}) => {

    const speedClasses = {
        slow: "animate-scroll-slow",
        medium: "animate-scroll-medium",
        fast: "animate-scroll-fast",
        slower: "animate-scroll-slower",
        reverse: "animate-scroll-reverse",
    };

    const getAnimationClass = () => {
        if (reverse) return speedClasses.reverse;
        return speedClasses[speed];
    };

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <div className="w-full">
                <div 
                    className={`
                        flex
                        ${direction === 'vertical' ? 'flex-col' : 'w-max'}
                        ${getAnimationClass()}
                        ${pauseOnHover ? 'hover:animate-scroll-pause' : ''}
                        ${direction === 'horizontal' ? 'min-w-full' : ''}
                    `}
                    style={{
                        gap: `${gap * 0.25}rem` 
                    }}
                >
                    {children}
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AutoScrollComponent;