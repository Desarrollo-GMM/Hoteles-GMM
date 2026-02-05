// components/FestiveEffect.tsx
'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import Image from 'next/image';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  sway: number;
  swaySpeed: number;
  swayDirection: number;
}

interface FestiveEffectProps {
  /** Elemento visual para el efecto (URL de imagen, SVG como string, o elemento React) */
  effectElement: string | React.ReactNode; 
  /** Controla la visibilidad del efecto */
  visible: boolean;
  /** Tipo de efecto (nieve, confeti, hojas, etc.) */
  effectType?: 'snow' | 'confetti' | 'leaves' | 'rain' | 'stars';
  /** Cantidad de partículas */
  particleCount?: number;
  /** Velocidad general del efecto */
  speed?: number;
  /** Dirección del viento (-1 a 1) */
  wind?: number;
  /** Tamaño máximo de partículas */
  maxSize?: number;
  /** Tamaño mínimo de partículas */
  minSize?: number;
  /** Color dominante (para confeti) */
  primaryColor?: string;
  /** Clase CSS adicional */
  className?: string;
}

const FestiveEffect: React.FC<FestiveEffectProps> = ({
  effectElement,
  visible,
  effectType = 'snow',
  particleCount = 50,
  speed = 1,
  wind = 0,
  maxSize = 30,
  minSize = 10,
  primaryColor = '#ffffff',
  className = '',
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastTimeRef = useRef<number>(0);

  // Inicializar partículas
  const initializeParticles = useCallback(() => {
    if (!containerRef.current) return [];

    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;

    return Array.from({ length: particleCount }, (_, i) => {
      const isConfetti = effectType === 'confetti';
      const isLeaves = effectType === 'leaves';
      
      return {
        id: i,
        x: Math.random() * containerWidth,
        y: -Math.random() * containerHeight, // Comienzan arriba
        size: Math.random() * (maxSize - minSize) + minSize,
        speed: (Math.random() * 0.5 + 0.5) * speed,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        opacity: Math.random() * 0.5 + 0.5,
        sway: Math.random() * 10,
        swaySpeed: Math.random() * 0.05 + 0.02,
        swayDirection: Math.random() > 0.5 ? 1 : -1,
      };
    });
  }, [particleCount, effectType, maxSize, minSize, speed]);

  // Actualizar dimensiones de la ventana
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Reiniciar partículas cuando cambian las props
  useEffect(() => {
    if (visible && containerRef.current) {
      setParticles(initializeParticles());
    } else {
      setParticles([]);
    }
  }, [visible, dimensions, initializeParticles]);

  // Bucle de animación
  useEffect(() => {
    if (!visible || particles.length === 0) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      return;
    }

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const deltaTime = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      setParticles(prev => prev.map(particle => {
        const containerHeight = containerRef.current?.clientHeight || window.innerHeight;
        const containerWidth = containerRef.current?.clientWidth || window.innerWidth;

        let newY = particle.y + particle.speed * (deltaTime * 0.1);
        let newX = particle.x;
        
        // Aplicar efectos específicos según el tipo
        switch (effectType) {
          case 'snow':
          case 'leaves':
            // Movimiento de balanceo (sway)
            newX += Math.sin(particle.sway) * 2;
            particle.sway += particle.swaySpeed * particle.swayDirection;
            
            // Aplicar viento
            newX += wind * 0.5;
            break;
            
          case 'confetti':
            // Movimiento más caótico para confeti
            newX += (Math.sin(particle.sway) * 3) + (wind * 1);
            particle.sway += particle.swaySpeed * 2;
            
            // Rotación más rápida
            particle.rotation += particle.rotationSpeed * 5;
            break;
            
          case 'rain':
            // Caída recta para lluvia
            newX += wind * 1;
            break;
            
          case 'stars':
            // Movimiento suave para estrellas
            newX += Math.sin(particle.sway) * 1 + (wind * 0.3);
            particle.sway += particle.swaySpeed * 0.5;
            break;
        }

        // Rotación general
        particle.rotation += particle.rotationSpeed;

        // Reiniciar partícula cuando sale de la pantalla
        if (newY > containerHeight) {
          newY = -particle.size;
          newX = Math.random() * containerWidth;
        }
        
        if (newX > containerWidth + particle.size) {
          newX = -particle.size;
        } else if (newX < -particle.size) {
          newX = containerWidth + particle.size;
        }

        return {
          ...particle,
          x: newX,
          y: newY,
          rotation: particle.rotation % 360,
        };
      }));

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [visible, particles.length, effectType, wind]);

  // Determinar colores para confeti
  const getConfettiColors = () => {
    const colors = [
      primaryColor,
      '#FF6B6B', // Rojo
      '#4ECDC4', // Turquesa
      '#FFD166', // Amarillo
      '#06D6A0', // Verde
      '#118AB2', // Azul
      '#EF476F', // Rosa
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Renderizar elemento de efecto
  const renderEffectElement = (particle: Particle) => {
    const style: React.CSSProperties = {
      position: 'absolute',
      left: `${particle.x}px`,
      top: `${particle.y}px`,
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      opacity: particle.opacity,
      transform: `rotate(${particle.rotation}deg)`,
      pointerEvents: 'none',
      transition: 'none',
    };

    if (effectType === 'confetti') {
      style.backgroundColor = getConfettiColors();
      style.borderRadius = '2px';
      return <div style={style} />;
    }

    if (typeof effectElement === 'string') {
      if (effectElement.includes('<svg')) {
        // SVG como string
        return (
          <div
            style={style}
            dangerouslySetInnerHTML={{ __html: effectElement }}
          />
        );
      } else {
        // URL de imagen
        return (
          <div style={style}>
            <Image
              src={effectElement}
              alt=""
              width={particle.size}
              height={particle.size}
              style={{ width: '100%', height: '100%' }}
              unoptimized={effectElement.endsWith('.gif')}
            />
          </div>
        );
      }
    }

    // Elemento React
    return (
      <div style={style}>
        {effectElement}
      </div>
    );
  };

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none overflow-hidden z-50 ${className}`}
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      {particles.map(particle => (
        <React.Fragment key={particle.id}>
          {renderEffectElement(particle)}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FestiveEffect;