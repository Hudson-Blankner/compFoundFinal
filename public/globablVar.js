//                  ==== Global variables ====
let canvW = 1400
let canvH = 700
const canvMid = [canvW/2, canvH/2]
//                  ==== Global variables ====
//                  ==== Wipe Function ====
// this will be used to save memory by wipping lists between stages. Ideally it will be called ONCE-
// at the start of each stage
function wipe(){
    titleTxt.length = 0
}
//                  ==== Wipe Function ====

//                  ==== Calling in Sounds and images ====

//                  ==== Stage variables ====
let titleSetup = true;
let startButtonCount = 0;
let stageCnt = 0;
const startBoxW = 200; const startBoxH = 100;
const startBox = {x: canvMid[0] -(startBoxW/2), y: canvMid[1], w: 200, h:100}
const platGameBox = {x: 10, y: 10, w: 337.5, h:220}
const shipGameBox = {x: 357.5, y: 10, w: 337.5, h:220}
const gunGameBox = {x: 705, y: 10, w: 337.5, h:220}
const mazeGameBox = {x: 1052.5, y: 10, w: 337.5, h:220}
const spaceGameBox = {x: 1052.5, y: 240, w: 337.5, h:220}
const plinkGameBox = {x: 1052.5, y: 470, w: 337.5, h:220}
const tronGameBox = {x: 10, y: 240, w: 337.5, h:220}
const fishingGameBox = {x: 10, y: 470, w: 337.5, h:220}
const duckHuntGameBox = {x: 357.5, y: 470, w: 337.5, h:220}
const game10GameBox = {x: 705, y: 470, w: 337.5, h:220}
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


