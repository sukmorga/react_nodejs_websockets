import { observer } from 'mobx-react-lite'
import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';
import '../styles/canvas.scss'
import Brush from '../tools/Brush';

const Canvas = observer(() => {
    const canvasRef = useRef();

    useEffect(() => {
        canvasState.setCanvas(canvasRef.current)
        toolState.setToll(new Brush(canvasRef.current))
    }, [])

    return (
        <div className='canvas'>
            <canvas ref={canvasRef} width={800} height={600}></canvas>
        </div >
    )
});

export default Canvas