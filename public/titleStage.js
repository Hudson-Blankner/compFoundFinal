function titleStage(){
    let playersOnStart = 0
    background(220)
    if (keyIsDown(LEFT_ARROW)) x -= 5;
    if (keyIsDown(RIGHT_ARROW)) x += 5;
    if (keyIsDown(UP_ARROW)) y -= 5;
    if (keyIsDown(DOWN_ARROW)) y += 5; 
    
    if(titleTxt.length === 0){
        titleTxt.push(new titleText(canvMid[0], canvMid[1],"black", 0,
            100, "Our Little Game"))
        titleTxt.push(new titleText(canvMid[0], titleTxt[0].y+75, "black", 0,
            25, "By Hudson, Lucky, and Port-Dawg"
        ))
    }
    fill(210)
    rect(startBox.x, startBox.y+150, startBox.w, startBox.h, 10)
    if (titleTxt.length > 0) {
        textAlign(CENTER, CENTER)
        titleTxt[0].draw();
        titleTxt[1].draw();
    }
    for (let id in players) {
        if (players[id].x > startBox.x && players[id].x < startBox.x+startBox.w && 
            players[id].y > startBox.y+150 && players[id].y < startBox.y+150+startBox.h) {
                playersOnStart += 1;
            } 
            else {
                playersOnStart -= 1;
            }
    }
    if (playersOnStart >= 1) {
            stageCnt = 1;
        }
}