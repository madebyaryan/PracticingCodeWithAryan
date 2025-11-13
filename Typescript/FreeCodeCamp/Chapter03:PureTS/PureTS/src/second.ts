interface TakePhoto {
    cameramode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}

// Keyword "implements" allows you to implement an interface's protocol
class Instagram implements TakePhoto {
    constructor(
        public cameramode: string,
        public filter: string,
        public burst: number) { }
}

class YouTube implements TakePhoto, Story {
    constructor(
        public cameramode: string,
        public filter: string,
        public burst: number,
        public short: string) { }

    createStory(): void {
        console.log("Story was created")
    }
}
