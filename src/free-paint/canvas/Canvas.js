import React, { useEffect, useRef, useState } from 'react';

import { useSelector } from 'react-redux';

import './Canvas.css';

const Canvas = () => {
  const { color, isErasing } = useSelector(state => state.freePaint);
  const [isDrawing, setIsDrawing] = useState(false)
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    canvas.style.width = '85%';
    canvas.style.height = '85%';

    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  }, []);

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.lineCap = 'round';
    context.lineWidth = 20;
    context.strokeStyle = color;
    contextRef.current = context;
  }, [color]);

  useEffect(() => {
    console.log('inside use effect');
    const context = canvasRef.current.getContext('2d');
    if (isErasing) {
      console.log('is erasing');
      context.globalCompositeOperation = 'destination-out';
      context.strokeStyle = 'rgba(255,255,255,1)';
    } else {
      console.log('is not erasing');
      context.globalCompositeOperation = 'source-over';
      context.strokeStyle = color;
    }
  }, [isErasing, color])
  
  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };
  
  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };
  
  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  return (
    <>
      <canvas
        className='Canvas'
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </>
  );
};

export default Canvas;