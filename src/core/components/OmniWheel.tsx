import React, { useEffect, useRef } from 'react';
import '../styles/OmniWheel.css';

interface Shape {
  className: string;
  imageSrc?: string; // Optional for the triangle shape
}

const shapes: Shape[] = [
  { className: 'circle' },
  { className: 'rounded-triangle', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/df09a729fba2fdb4492ab699b1646bee968e50b4293f77ca9d25447cf6ef30c6?apiKey=9026fb9ec02b45219ba7fb6c2d299238&' },
  { className: 'rounded-square' },
  // Repeat the pattern
];

export function OmniWheel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement[]>([]);

  let angle = 0;

  useEffect(() => {
    const animateShapes = () => {
      const radius = 250; // Adjust the radius as needed
      const centerX = containerRef.current!.clientWidth / 2;
      const centerY = containerRef.current!.clientHeight / 2;
      const angleIncrement = (2 * Math.PI) / shapesRef.current.length;

      shapesRef.current.forEach((shape, index) => {
        const currentAngle = angle + index * angleIncrement;
        const x = centerX + radius * Math.cos(currentAngle);
        const y = centerY + radius * Math.sin(currentAngle);

        shape.style.left = x - shape.clientWidth / 2 + 'px';
        shape.style.top = y - shape.clientHeight / 2 + 'px';
      });

      angle += 0.005; // Adjust the speed of rotation

      requestAnimationFrame(animateShapes);
    };

    animateShapes();
  }, []);

  return (
    <div className="container" ref={containerRef}>
      {shapes.map((shape, index) => (
        <div className={shape.className} key={index} ref={(el) => {
            if(el) {
                return (shapesRef.current[index] = el)
            }
        }}>
          {shape.imageSrc && <img src={shape.imageSrc} alt="Triangle" className="rounded-triangle-image" />}
        </div>
      ))}
    </div>
  );
};