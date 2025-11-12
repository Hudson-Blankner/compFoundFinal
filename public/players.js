class Player {
    constructor(id, color, x = 100, y = 100, r = 0, stage = 0){
        this.id = id;
        this.x = x;
        this.y = y;
        this.r = r;
        this.stage = stage
        this.color = color || "white";
    }
    move(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
    }
}