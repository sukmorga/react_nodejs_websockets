import { makeAutoObservable } from "mobx";

class ToolState {
    tool = null
    constructor() {
        makeAutoObservable(this)
    };

    setToll(tool) {
        this.tool = tool
    };

    setFillColor(color) {
        this.tool.fillColor = color
    };

    setStrokeColor(color) {
        this.tool.strokeColor = color
    };

    setLineWidth(width) {
        this.tool.lineWidth = width
    };

};

export default new ToolState();