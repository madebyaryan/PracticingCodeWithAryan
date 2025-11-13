// What are abstract classes and what is the difference between abstract classes and interfaces?
// Abstract classes are almost like blueprints - you cannot create direct objects from it.
// You can however have classes that inherit the abstract classes - these child classes CAN create objects from it.
// Abstract classes can contain implementation (like getReelTime()) and have a constructor, but you can only extend one.
// Interfaces are pure contracts without implementation, but you can implement multiple at once.
// Use abstract classes for shared logic in a hierarchy, interfaces for flexible contracts and "capabilities".
class TakePhoto {
    cameraMode;
    filter;
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some complex calculation
        return 8;
    }
}
class Instagram extends TakePhoto {
    cameraMode;
    filter;
    burst;
    constructor(cameraMode, filter, burst) {
        // With the keyword super you have to pass on all required values for this child class (this happens in all child classes).
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const social = new Instagram("abstract", "blue", 2);
social.getReelTime();
export {};
//# sourceMappingURL=abstractClass.js.map