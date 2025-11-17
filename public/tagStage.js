function tagGame(){
    background(220)

    let tagDoors = []
    let tagText = []
    titleTxt.length = 0
    tagText.push(new titleText(canvMid[0],canvMid[1],"black",0,40, "Tag Game!"))
    tagText[0].draw();
    
    
    if (keyIsDown(LEFT_ARROW)) x -= 5;
    if (keyIsDown(RIGHT_ARROW)) x += 5;
    if (keyIsDown(UP_ARROW)) y -= 5;
    if (keyIsDown(DOWN_ARROW)) y += 5; 
    if (gameIsOn) {
        for (let id in players){
            // if (players[id].color === "blue") {players[id].x = 700, players[id].y=350}
            // if (players[id].color === "purple") {players[id].x = 800, players[id].y=350}
            // if (players[id].color === "orange") {players[id].x = 900, players[id].y=350}
            // if (players[id].color === "blue") {x = 700, y=350}
            // if (players[id].color === "purple") {x = 800, y=350}
            // if (players[id].color === "orange") {x = 900, y=350}
            if (players[myId].color === "blue") {x = 700, y=250}
            if (players[myId].color === "purple") {x = 800, y=250}
            if (players[myId].color === "orange") {x = 900, y=250}
        }
    gameIsOn = false
    }
}