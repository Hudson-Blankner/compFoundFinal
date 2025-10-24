//                  ==== Global variables ====
let canvW = 1400
let canvH = 700
const canvMid = [canvW/2, canvH/2]
let titleSetup = true;
//                  ==== Global variables ====
//                  ==== Stage variables ====
let stageCnt = 0
const startBoxW = 200; const startBoxH = 100;
const startBox = {x: canvMid[0] -(startBoxW/2), y: canvMid[1], w: 200, h:100}
let titleTxt = []
let playerOneStartX = startBox.x
let playerOneStartY = 100
let playerTwoStartX = startBox.x + (startBox.w/2)
let playerTwoStartY = 100
let playerThreeStartX = startBox.x + startBox.w
let playerThreeStartY = 100
class titleText {
    constructor(x,y,color,stroke,size,text = ""){
        this.x = x; 
        this.y = y; 
        this.color = color; 
        this.stroke = stroke; 
        this.size = size; 
        this.text = text;
    }
    draw (){
    push()
    fill(this.color); strokeWeight(this.stroke); textSize(this.size);
    text(this.text, this.x, this.y)
    pop()
    }
}
//                  ==== Stage variables ====


