import { makeAutoObservable } from "mobx";

class ToolState {
    tool = null
    constructor() {
        makeAutoObservable(this)
    }

    setToll(tool) {
        this.tool = tool
    }
};

export default new ToolState();