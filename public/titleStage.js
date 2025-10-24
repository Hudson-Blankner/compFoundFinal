function titleStage(){
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
    rect(startBox.x, startBox.y+150, startBox.w, startBox.h, 1)
    if (titleTxt.length > 0) {
        textAlign(CENTER, CENTER)
        titleTxt[0].draw();
        titleTxt[1].draw();
    }
}