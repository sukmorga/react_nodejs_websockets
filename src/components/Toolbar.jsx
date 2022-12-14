import React from 'react';
import '../styles/toolbar.scss';
import toolState from '../store/toolState';
import Brush from '../tools/Brush';
import canvasState from '../store/canvasState';
import Rect from '../tools/Rect';
import Eraser from '../tools/Eraser';
import Circle from '../tools/Circle';
import Line from '../tools/Line';

const Toolbar = () => {

    const changeColor = e => {
        toolState.setFillColor(e.target.value);
        toolState.setStrokeColor(e.target.value);
    }


    return (
        <div className='toolbar'>
            <button className='toolbar__btn brush' onClick={() => toolState.setTool(new Brush(canvasState.canvas))}></button>
            <button className='toolbar__btn rect' onClick={() => toolState.setToll(new Rect(canvasState.canvas))}></button>
            <button className='toolbar__btn circle' onClick={() => toolState.setToll(new Circle(canvasState.canvas))}></button>
            <button className='toolbar__btn eraser' onClick={() => toolState.setToll(new Eraser(canvasState.canvas))}></button>
            <button className='toolbar__btn line' onClick={() => toolState.setToll(new Line(canvasState.canvas))}></button>
            <input onChange={e => changeColor(e)} style={{ marginLeft: 10 }} type='color' />
            <button className='toolbar__btn undo' onClick={() => canvasState.undo()}></button>
            <button className='toolbar__btn redo' onClick={() => canvasState.redo()}></button>
            <button className='toolbar__btn save'></button>
        </div>
    )
}

export default Toolbar