/// <reference path="fish.ts"/>
/// <reference path="bubble.ts"/>

class Game {
    
    constructor() {
        new Fish();
        new Bubble();
    }
} 


// load
window.addEventListener("load", function() {
    new Game();
});