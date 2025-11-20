import React, { useEffect, useRef } from 'react';

function CRTEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let scanlineOffset = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Scanlines
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      for (let i = scanlineOffset; i < canvas.height; i += 4) {
        ctx.fillRect(0, i, canvas.width, 2);
      }

      // Flicker effect
      if (Math.random() > 0.97) {
        ctx.fillStyle = 'rgba(0, 255, 0, 0.03)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      scanlineOffset = (scanlineOffset + 1) % 4;
      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="crt-effect" />;
}

export default CRTEffect;
