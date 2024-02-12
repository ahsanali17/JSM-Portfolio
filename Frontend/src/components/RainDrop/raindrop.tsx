import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  color: green;
  z-index: 1;
`;

const RainAnimation: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const requestRef = useRef<number>();
    const lastDrawTimeRef = useRef<number>(0);

    // Control the speed of the animation. Lower value means faster animation.
    const [drawInterval] = useState<number>(100); // Time in milliseconds

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const columns = Math.floor(canvas.width / 20);
        const drops: number[] = Array.from({ length: columns }, () => 1);

        const drawMatrix = (timestamp: number) => {
            if (timestamp - lastDrawTimeRef.current > drawInterval) {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                ctx.fillStyle = '#0F0'; // Green color for the 'digital rain'
                ctx.font = '15pt monospace';

                // Create a string that includes both katakana characters and numbers
                const characters = 'アカサタナハマヤラワガザダバパ0123456789';
                for (let i = 0; i < drops.length; i++) {
                    // Generate a random character from the string
                    const text = characters.charAt(Math.floor(Math.random() * characters.length));
                    ctx.fillText(text, i * 20, drops[i] * 20);
                    if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                        drops[i] = 0;
                    }
                    drops[i]++;
                }
                lastDrawTimeRef.current = timestamp;
            }

            requestRef.current = requestAnimationFrame(drawMatrix);
        };

        // Start the animation
        requestRef.current = requestAnimationFrame(drawMatrix);

        // Cleanup function to cancel the animation frame when the component unmounts
        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [drawInterval]);

    return <Canvas ref={canvasRef} />;
};

export default RainAnimation;