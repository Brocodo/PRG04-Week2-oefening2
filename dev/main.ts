/// <reference path="fish.ts"/>
/// <reference path="bubble.ts"/>

class Game {

    constructor() {
        for(i = 0; i < 100; i++){
            new Fish();
            new Bubble();
        }
    }
}


// load
window.addEventListener("load", function() {
    new Game();
});
