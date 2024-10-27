// DrawingApp.js
import React, { useEffect, useRef, useState } from 'react';
import './DrawingApp.css'; // Importing CSS for styling

const DrawingApp = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [prevMouseX, setPrevMouseX] = useState(0);
  const [prevMouseY, setPrevMouseY] = useState(0);
  const [snapshot, setSnapshot] = useState(null);
  const [selectedTool, setSelectedTool] = useState('brush');
  const [brushWidth, setBrushWidth] = useState(5);
  const [selectedColor, setSelectedColor] = useState('#000');
  const fillColorRef = useRef(null);
  
  // Get the canvas context
  const ctx = useRef(null);

  const setCanvasBackground = (canvas) => {
    ctx.current.fillStyle = "#fff";
    ctx.current.fillRect(0, 0, canvas.width, canvas.height);
    ctx.current.fillStyle = selectedColor; // Reset fillStyle to selected color
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    ctx.current = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    setCanvasBackground(canvas);
  }, []);

  const drawRect = (e) => {
    if (!fillColorRef.current.checked) {
      return ctx.current.strokeRect(e.nativeEvent.offsetX, e.nativeEvent.offsetY, prevMouseX - e.nativeEvent.offsetX, prevMouseY - e.nativeEvent.offsetY);
    }
    ctx.current.fillRect(e.nativeEvent.offsetX, e.nativeEvent.offsetY, prevMouseX - e.nativeEvent.offsetX, prevMouseY - e.nativeEvent.offsetY);
  };

  const drawCircle = (e) => {
    ctx.current.beginPath();
    let radius = Math.sqrt(Math.pow((prevMouseX - e.nativeEvent.offsetX), 2) + Math.pow((prevMouseY - e.nativeEvent.offsetY), 2));
    ctx.current.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);
    fillColorRef.current.checked ? ctx.current.fill() : ctx.current.stroke();
  };

  const drawTriangle = (e) => {
    ctx.current.beginPath();
    ctx.current.moveTo(prevMouseX, prevMouseY);
    ctx.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.current.lineTo(prevMouseX * 2 - e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.current.closePath();
    fillColorRef.current.checked ? ctx.current.fill() : ctx.current.stroke();
  };

  const startDraw = (e) => {
    setIsDrawing(true);
    setPrevMouseX(e.nativeEvent.offsetX);
    setPrevMouseY(e.nativeEvent.offsetY);
    ctx.current.beginPath();
    ctx.current.lineWidth = brushWidth;
    ctx.current.strokeStyle = selectedColor;
    ctx.current.fillStyle = selectedColor;
    setSnapshot(ctx.current.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height));
  };

  const drawing = (e) => {
    if (!isDrawing) return;
    ctx.current.putImageData(snapshot, 0, 0);
    ctx.current.strokeStyle = selectedTool === 'eraser' ? '#fff' : selectedColor;
    ctx.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.current.stroke();
    
    if (selectedTool === 'rectangle') {
      drawRect(e);
    } else if (selectedTool === 'circle') {
      drawCircle(e);
    } else if (selectedTool === 'triangle') {
      drawTriangle(e);
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleToolChange = (tool) => {
    setSelectedTool(tool);
  };

  const handleBrushSizeChange = (e) => {
    setBrushWidth(e.target.value);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const clearCanvas = () => {
    ctx.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setCanvasBackground(canvasRef.current);
  };

  const saveImage = () => {
    const link = document.createElement("a");
    link.download = `${Date.now()}.jpg`;
    link.href = canvasRef.current.toDataURL();
    link.click();
  };

  return (
    <div className="container">
      <section className="tools-board">
        <div className="row">
          <label className="title">Shapes</label>
          <ul className="options">
            <li className={`option tool ${selectedTool === 'rectangle' ? 'active' : ''}`} onClick={() => handleToolChange('rectangle')}>
              <img src="images/rectangle.jpg" alt="Rectangle" />
              <span>Rectangle</span>
            </li>
            <li className={`option tool ${selectedTool === 'circle' ? 'active' : ''}`} onClick={() => handleToolChange('circle')}>
              <img src="images/circle.jpg" alt="Circle" />
              <span>Circle</span>
            </li>
            <li className={`option tool ${selectedTool === 'triangle' ? 'active' : ''}`} onClick={() => handleToolChange('triangle')}>
              <img src="images/triangle.jpg" alt="Triangle" />
              <span>Triangle</span>
            </li>
            <li className="option">
              <input type="checkbox" id="fill-color" ref={fillColorRef} />
              <label htmlFor="fill-color">Fill color</label>
            </li>
          </ul>
        </div>
        <div className="row">
          <label className="title">Options</label>
          <ul className="options">
            <li className={`option tool ${selectedTool === 'brush' ? 'active' : ''}`} onClick={() => handleToolChange('brush')}>
              <img src="images/brush.jpg" alt="Brush" />
              <span>Brush</span>
            </li>
            <li className={`option tool ${selectedTool === 'eraser' ? 'active' : ''}`} onClick={() => handleToolChange('eraser')}>
              <img src="images/eraser.jpg" alt="Eraser" />
              <span>Eraser</span>
            </li>
            <li className="option">
              <input type="range" id="size-slider" min="1" max="30" value={brushWidth} onChange={handleBrushSizeChange} />
            </li>
          </ul>
        </div>
        <div className="row colors">
          <label className="title">Colors</label>
          <ul className="options">
            {['#000', '#ff0000', '#00ff00', '#0000ff', '#ffff00'].map((color, index) => (
              <li
                key={index}
                className={`option ${selectedColor === color ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorChange(color)}
              ></li>
            ))}
            <li className="option">
              <input type="color" id="color-picker" value={selectedColor} onChange={(e) => handleColorChange(e.target.value)} />
            </li>
          </ul>
        </div>
        <div className="row buttons">
          <button className="clear-canvas" onClick={clearCanvas}>Clear Canvas</button>
          <button className="save-img" onClick={saveImage}>Save As Image</button>
        </div>
      </section>
      <section className="drawing-board">
        <canvas
          ref={canvasRef}
          onMouseDown={startDraw}
          onMouseMove={drawing}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        ></canvas>
      </section>
    </div>
  );
};

export default DrawingApp;
