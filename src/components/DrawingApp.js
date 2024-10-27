import React, { useEffect, useRef, useState } from 'react';

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
      ctx.current.strokeRect(e.nativeEvent.offsetX, e.nativeEvent.offsetY, prevMouseX - e.nativeEvent.offsetX, prevMouseY - e.nativeEvent.offsetY);
    } else {
      ctx.current.fillRect(e.nativeEvent.offsetX, e.nativeEvent.offsetY, prevMouseX - e.nativeEvent.offsetX, prevMouseY - e.nativeEvent.offsetY);
    }
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

    if (selectedTool === 'brush' || selectedTool === 'eraser') {
      ctx.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctx.current.stroke();
    }

    // Draw shapes only once on mouse move
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
    <div className="appContainer" style={{ display: 'flex', fontFamily: 'Arial, sans-serif', height: '100vh' }}>
      <section className="toolPanel" style={{
        width: '300px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRight: '1px solid #ddd',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        <div className="shapeTools">
          <label className="sectionTitle" style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '10px' }}>Shapes</label>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li onClick={() => handleToolChange('rectangle')} style={{ cursor: 'pointer', marginBottom: '8px' }}>
              <img src="images/rectangle.jpg" alt="Rectangle" style={{ width: '24px', marginRight: '8px' }} />
              Rectangle
            </li>
            <li onClick={() => handleToolChange('circle')} style={{ cursor: 'pointer', marginBottom: '8px' }}>
              <img src="images/circle.jpg" alt="Circle" style={{ width: '24px', marginRight: '8px' }} />
              Circle
            </li>
            <li onClick={() => handleToolChange('triangle')} style={{ cursor: 'pointer', marginBottom: '8px' }}>
              <img src="images/triangle.jpg" alt="Triangle" style={{ width: '24px', marginRight: '8px' }} />
              Triangle
            </li>
            <li>
              <input type="checkbox" id="fill-color" ref={fillColorRef} style={{ marginRight: '8px' }} />
              <label htmlFor="fill-color">Fill color</label>
            </li>
          </ul>
        </div>

        <div className="drawingOptions">
          <label className="sectionTitle" style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '10px' }}>Options</label>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li onClick={() => handleToolChange('brush')} style={{ cursor: 'pointer', marginBottom: '8px' }}>
              <img src="images/brush.jpg" alt="Brush" style={{ width: '24px', marginRight: '8px' }} />
              Brush
            </li>
            <li onClick={() => handleToolChange('eraser')} style={{ cursor: 'pointer', marginBottom: '8px' }}>
              <img src="images/eraser.jpg" alt="Eraser" style={{ width: '24px', marginRight: '8px' }} />
              Eraser
            </li>
            <li>
              <input type="range" min="1" max="30" value={brushWidth} onChange={handleBrushSizeChange} style={{ width: '100%' }} />
            </li>
          </ul>
        </div>

        <div className="colorOptions">
          <label className="sectionTitle" style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '10px' }}>Colors</label>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '5px', padding: 0 }}>
            {['#000', '#ff0000', '#00ff00', '#0000ff', '#ffff00'].map((color, index) => (
              <li
                key={index}
                onClick={() => handleColorChange(color)}
                style={{
                  backgroundColor: color,
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                  borderRadius: '50%',
                  border: selectedColor === color ? '2px solid #333' : 'none'
                }}
              ></li>
            ))}
            <li>
              <input type="color" value={selectedColor} onChange={(e) => handleColorChange(e.target.value)} />
            </li>
          </ul>
        </div>

        <div className="canvasActions" style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button onClick={clearCanvas} style={{ flex: 1, padding: '10px', backgroundColor: '#ff4d4d', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Clear Canvas</button>
          <button onClick={saveImage} style={{ flex: 1, padding: '10px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Save As Image</button>
        </div>
      </section>

      <section className="canvasContainer" style={{ flex: 1, padding: '20px' }}>
        <canvas
          ref={canvasRef}
          onMouseDown={startDraw}
          onMouseMove={drawing}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{
            border: '1px solid #ccc',
            width: '100%',
            height: '500px', // Adjust height as needed
            backgroundColor: '#fff'
          }}
        ></canvas>
      </section>
    </div>
  );
};

export default DrawingApp;
