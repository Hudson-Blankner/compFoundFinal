function tagGame(){
    background(220)
    tagStageSetupCount = 1
    if (tagStageSetupCount = 1) {
        for (let id in players){
            if (players[id].color = "blue") {x = 250}
            if (players[id].color = "purple") {x = 350}
            if (players[id].color = "orange") {x = 450}
        }
    tagStageSetupCount = 0
    }
    let tagDoors = []
    let tagText = []
    titleTxt.length = 0
    tagText.push(new titleText(canvMid[0],canvMid[1],"black",0,40, "Tag Game!"))
    tagText[0].draw();
    
    
    if (keyIsDown(LEFT_ARROW)) x -= 5;
    if (keyIsDown(RIGHT_ARROW)) x += 5;
    if (keyIsDown(UP_ARROW)) y -= 5;
    if (keyIsDown(DOWN_ARROW)) y += 5; 
    
}