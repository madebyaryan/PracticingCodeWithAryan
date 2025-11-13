// Keyword "implements" allows you to implement an interface's protocol
class Instagram {
    cameramode;
    filter;
    burst;
    constructor(cameramode, filter, burst) {
        this.cameramode = cameramode;
        this.filter = filter;
        this.burst = burst;
    }
}
class YouTube {
    cameramode;
    filter;
    burst;
    short;
    constructor(cameramode, filter, burst, short) {
        this.cameramode = cameramode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log("Story was created");
    }
}
export {};
//# sourceMappingURL=second.js.map