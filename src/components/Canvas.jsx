import { observer } from 'mobx-react-lite';
import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';
import '../styles/canvas.scss';
import Brush from '../tools/Brush';

const Canvas = observer(() => {
    const canvasRef = useRef();

    useEffect(() => {
        canvasState.setCanvas(canvasRef.current)
        toolState.setToll(new Brush(canvasRef.current))
    }, [])

    const mouseDownHandler = () => {
        canvasState.pushToUndo(canvasRef.current.toDataURL())
    }

    return (
        <div className='canvas'>
            <canvas onMouseDown={() => mouseDownHandler()} ref={canvasRef} width={800} height={600}></canvas>
        </div >
    )
});

export default Canvas