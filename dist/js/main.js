var Bubble = (function () {
    function Bubble() {
        var b = document.createElement("bubble");
        document.body.appendChild(b);
        var startx = Math.random() * window.innerWidth;
        b.style.left = startx + "px";
    }
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
        var f = document.createElement("fish");
        document.body.appendChild(f);
        var fishx = Math.random() * window.innerWidth;
        var fishy = Math.random() * window.innerHeight;
        f.style.left = fishx + "px";
        f.style.top = fishy + "px";
        var ranColDeg = Math.random() * 360;
        f.style.webkitFilter = "hue-rotate(" + ranColDeg + "deg)";
        f.style.filter = "hue-rotate(" + ranColDeg + "45deg)";
    }
    return Fish;
}());
var Game = (function () {
    function Game() {
        for (i = 0; i < 100; i++) {
            new Fish();
            new Bubble();
        }
    }
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map