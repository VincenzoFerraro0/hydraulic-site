// src/pages/NotFoundPong.jsx
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [gameStarted, setGameStarted] = useState(false);
    const playerScoreRef = useRef(0);
    const aiScoreRef = useRef(0);

    useEffect(() => {
        if (!gameStarted) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Reset scores when game starts
        playerScoreRef.current = 0;
        aiScoreRef.current = 0;

        const resizeCanvas = () => {
            const container = containerRef.current;
            canvas.width = container.offsetWidth;
            canvas.height = (container.offsetWidth * 2) / 3; // 3:2 ratio
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const paddleWidth = 10;
        const paddleHeight = 80;
        const ballRadius = 8;

        let playerY = canvas.height / 2 - paddleHeight / 2;
        let aiY = canvas.height / 2 - paddleHeight / 2;
        let ballX = canvas.width / 2;
        let ballY = canvas.height / 2;
        let ballSpeedX = 5;
        let ballSpeedY = 3;

        const drawRect = (x, y, w, h, color) => {
            ctx.fillStyle = color;
            ctx.fillRect(x, y, w, h);
        };

        const drawCircle = (x, y, r, color) => {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
        };

        const drawText = (text, x, y, size = 32, color = '#212D5F') => {
            ctx.fillStyle = color;
            ctx.font = `${size}px sans-serif`;
            ctx.fillText(text, x, y);
        };

        const drawNet = () => {
            for (let i = 0; i <= canvas.height; i += 15) {
                drawRect(canvas.width / 2 - 1, i, 2, 10, '#E5E7EB');
            }
        };

        const resetBall = (scorer) => {
            // Update scores using refs
            if (scorer === 'player') playerScoreRef.current += 1;
            if (scorer === 'ai') aiScoreRef.current += 1;
            
            // Reset ball position and speed
            ballX = canvas.width / 2;
            ballY = canvas.height / 2;
            ballSpeedX = 5 * (Math.random() > 0.5 ? 1 : -1);
            ballSpeedY = 3 * (Math.random() > 0.5 ? 1 : -1);
        };

        const draw = () => {
            drawRect(0, 0, canvas.width, canvas.height, '#F9FAFB');
            drawNet();
            // Use current ref values for scores
            drawText(playerScoreRef.current.toString(), canvas.width / 4, 40);
            drawText(aiScoreRef.current.toString(), (3 * canvas.width) / 4, 40);
            drawRect(10, playerY, paddleWidth, paddleHeight, '#212D5F');
            drawRect(canvas.width - 20, aiY, paddleWidth, paddleHeight, '#F97316');
            drawCircle(ballX, ballY, ballRadius, '#212D5F');
        };

        const update = () => {
            ballX += ballSpeedX;
            ballY += ballSpeedY;

            // AI Movement
            const aiCenter = aiY + paddleHeight / 2;
            const offset = (ballY - aiCenter) * 0.1;
            aiY += offset;

            // Keep AI within canvas bounds
            aiY = Math.max(0, Math.min(canvas.height - paddleHeight, aiY));

            // Collisions with top/bottom
            if (ballY + ballRadius > canvas.height || ballY - ballRadius < 0) {
                ballSpeedY = -ballSpeedY;
            }

            // Paddle collision
            const playerCollision =
                ballX - ballRadius < 20 &&
                ballY > playerY &&
                ballY < playerY + paddleHeight;

            const aiCollision =
                ballX + ballRadius > canvas.width - 20 &&
                ballY > aiY &&
                ballY < aiY + paddleHeight;

            if (playerCollision || aiCollision) {
                ballSpeedX = -ballSpeedX;
                // Add slight angle variation
                const hitPos = (ballY - (playerCollision ? playerY : aiY)) / paddleHeight;
                const angle = hitPos * Math.PI/4;
                ballSpeedY = 5 * Math.sin(angle);
                
                // Maintain consistent speed
                const speed = Math.sqrt(ballSpeedX**2 + ballSpeedY**2);
                ballSpeedX = (ballSpeedX / speed) * 5;
                ballSpeedY = (ballSpeedY / speed) * 5;
            }

            // Score and reset
            if (ballX < 0) resetBall('ai');
            if (ballX > canvas.width) resetBall('player');
        };

        const gameLoop = () => {
            draw();
            update();
            requestAnimationFrame(gameLoop);
        };

        gameLoop();

        // Controls
        const movePlayer = (y) => {
            const rect = canvas.getBoundingClientRect();
            const newY = y - rect.top - paddleHeight / 2;
            playerY = Math.max(0, Math.min(canvas.height - paddleHeight, newY));
        };

        canvas.addEventListener('mousemove', (e) => movePlayer(e.clientY));
        canvas.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                movePlayer(e.touches[0].clientY);
                e.preventDefault();
            }
        }, { passive: false });

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [gameStarted]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <div className="text-center mb-6">
                <h1 className="text-5xl md:text-7xl font-extrabold text-[#646f9b] mb-4">
                    404 - Pagina Non Trovata
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-xl mx-auto">
                    Oh no! Hai perso la rotta. Nel frattempo, gioca una partita a Pong!
                </p>
                {!gameStarted && (
                    <button
                        onClick={() => setGameStarted(true)}
                        className="bg-orange-500 text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow-md hover:bg-orange-600 transition"
                    >
                        Inizia a giocare
                    </button>
                )}
            </div>

            <div
                ref={containerRef}
                className="bg-white w-full max-w-3xl aspect-[3/2] border border-gray-300 rounded-xl overflow-hidden shadow-lg"
            >
                <canvas ref={canvasRef} className="w-full h-full" />
            </div>

            <Link
                to="/"
                className="mt-6 text-orange-500 hover:underline text-lg font-medium"
            >
                Torna alla Home
            </Link>
        </div>
    );
}