class Player {
    constructor(id, color, x = 100, y = 100, stage = 0){
        this.id = id;
        this.x = x;
        this.y = y;
        this.stage = stage
        this.color = color || "white";
    }
    move(x, y){
        this.x = x;
        this.y = y;
    }
}