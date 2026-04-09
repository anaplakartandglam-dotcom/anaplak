'use client';

import { useEffect, useRef, useMemo, useCallback } from 'react';

type Sparkle = {
    x: number;
    y: number;
    size: number;
    life: number;
    opacity: number;
};

export default function SparkleCursor() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const sparkles = useRef<Sparkle[]>([]);
    const dotRef = useRef<HTMLDivElement | null>(null);
    const animationRef = useRef<number>(0);
    const lastTimeRef = useRef<number>(0);

    const drawSparkle = useCallback((
        ctx: CanvasRenderingContext2D,
        x: number,
        y: number,
        size: number,
        opacity: number
    ) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(Math.random() * Math.PI);
        
        const color = `rgba(255,255,255,${opacity * 0.5})`;
        
        ctx.strokeStyle = color;
        ctx.lineWidth = size < 2 ? 0.6 : 1;
        ctx.shadowColor = 'rgba(255,255,255,0.6)';
        ctx.shadowBlur = size * 2;
        
        ctx.beginPath();
        ctx.moveTo(-size, 0);
        ctx.lineTo(size, 0);
        ctx.moveTo(0, -size);
        ctx.lineTo(0, size);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(-size * 0.6, -size * 0.6);
        ctx.lineTo(size * 0.6, size * 0.6);
        ctx.moveTo(size * 0.6, -size * 0.6);
        ctx.lineTo(-size * 0.6, size * 0.6);
        ctx.stroke();
        
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size);
        gradient.addColorStop(0, `rgba(255,255,255,${opacity * 0.4})`);
        gradient.addColorStop(0.3, `rgba(255,255,255,${opacity * 0.2})`);
        gradient.addColorStop(1, `rgba(255,255,255,0)`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(-size, -size, size * 2, size * 2);
        
        ctx.restore();
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const dot = dotRef.current;

        if (!canvas || !dot) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        document.body.style.cursor = 'none';

        const moveDot = (e: MouseEvent) => {
            dot.style.left = e.clientX + 'px';
            dot.style.top = e.clientY + 'px';
        };

        const handleMouseMove = (e: MouseEvent) => {
            sparkles.current.push({
                x: e.clientX,
                y: e.clientY,
                size: Math.random() * 2 + 2.5,
                life: 60,
                opacity: 0.8,
            });

            if (Math.random() > 0.6) {
                const angle = Math.random() * Math.PI * 2;
                const radius = Math.random() * 20 + 10;
                
                sparkles.current.push({
                    x: e.clientX + Math.cos(angle) * radius,
                    y: e.clientY + Math.sin(angle) * radius,
                    size: Math.random() * 1 + 0.8,
                    life: 40 + Math.random() * 20,
                    opacity: 0.4 + Math.random() * 0.3,
                });
            }
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', moveDot);
        window.addEventListener('mousemove', handleMouseMove);

        const animate = (currentTime: number) => {
            if (!lastTimeRef.current) lastTimeRef.current = currentTime;
            
            const deltaTime = currentTime - lastTimeRef.current;
            
            if (deltaTime >= 16) {
                lastTimeRef.current = currentTime;
                
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                if (sparkles.current.length > 60) {
                    sparkles.current.splice(0, 20);
                }

                sparkles.current = sparkles.current.filter((s) => s.life > 0);

                sparkles.current.forEach((s) => {
                    s.life -= 1;
                    s.opacity -= 0.01 + Math.random() * 0.01;
                    s.y -= 0.2;
                    s.x += (Math.random() - 0.5) * 0.2;
                    
                    drawSparkle(ctx, s.x, s.y, s.size * 2, s.opacity);
                });
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            document.body.style.cursor = 'auto';
            window.removeEventListener('mousemove', moveDot);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', resize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [drawSparkle]);

    return (
        <>
            <canvas ref={canvasRef} className="sparkle-canvas" aria-hidden="true" />
            <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
        </>
    );
}