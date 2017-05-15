class Fish {
            
    constructor() {
        
        // fish
        let f = document.createElement("fish");
        document.body.appendChild(f);

        let fishx:number = Math.random() * window.innerWidth;
        let fishy:number = Math.random() * window.innerHeight;

        // we gebruiken hier left top omdat translate al in de animatie wordt gebruikt                
        f.style.left = fishx + "px";
        f.style.top = fishy + "px";

        // de kleur moet random worden
        f.style.webkitFilter = "hue-rotate(45deg)";
        f.style.filter = "hue-rotate(45deg)";
    }
 
}