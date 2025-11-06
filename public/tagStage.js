function tagGame(){
    background(220)
    let tagDoors = []
    titleTxt.length = 0
    titleTxt.push(new titleText(canvMid[0],canvMid[1],"black",0,100, "Tag Game!"))
    titleTxt[0].draw();

    if (keyIsDown(LEFT_ARROW)) x -= 5;
    if (keyIsDown(RIGHT_ARROW)) x += 5;
    if (keyIsDown(UP_ARROW)) y -= 5;
    if (keyIsDown(DOWN_ARROW)) y += 5; 
}