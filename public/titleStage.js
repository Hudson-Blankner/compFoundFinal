function titleStage(){
    pDirection = 0;
    let canLeft = true;
    let canRight = true;
    let canUp = true;
    let canDown = true;
    let playersOnStart = 0
    background(75, 148, 46);
    for (let id in players) {
        if (id != myId) {
            if (players[myId].x >= players[id].x-40 && players[myId].x <= players[id].x-15 && 
                players[myId].y >= players[id].y-40 && players[myId].y <= players[id].y+40) {
                canRight = false;
            } else {
                canRight = true
            }
            if (players[myId].x <= players[id].x+40 && players[myId].x >= players[id].x+15 && 
                players[myId].y >= players[id].y-40 && players[myId].y <= players[id].y+40) {
                canLeft = false;
            } else {
                canLeft = true
            }
            if (players[myId].x >= players[id].x-40 && players[myId].x <= players[id].x+40 && 
                players[myId].y >= players[id].y+15 && players[myId].y <= players[id].y+40) {
                canUp = false;
            } else {
                canUp = true
            }
            if (players[myId].x >= players[id].x-40 && players[myId].x <= players[id].x+40 && 
                players[myId].y >= players[id].y-40 && players[myId].y <= players[id].y-15) {
                canDown = false;
            } else {
                canDown = true
            }
        }
    }
    if (canLeft) {
        if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) x -= 5, pDirection = 4;
    }
    if (canRight) {
        if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            x += 5;
            pDirection = 2
            //r += 5;
        }
    }
    if (canUp) {
        if (keyIsDown(UP_ARROW) || keyIsDown(87)) y -= 5, pDirection = 1;
    }
    if (canDown) {
        if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) y += 5, pDirection = 3; 
    }
    fill(0)
    text("Player Count: "+ playerCount, canvMid[0]-600, canvMid[1]-330);
    if(titleTxt.length === 0){
        titleTxt.push(new titleText(canvMid[0], canvMid[1],"black", 0,
            100, "Our Little Game"))
        titleTxt.push(new titleText(canvMid[0], titleTxt[0].y+75, "black", 0,
            25, "By Hudson, Lucky, and Port-Dawg"
        ))
    }
    push()
    textSize(15*sin(frameCount)+30)
    translate(canvMid[0]+480, canvMid[1]-10)
    angleMode(DEGREES)
    rotate(30)
    fill('yellow')
    text("Han shot first", 0, 0)
    pop()
    fill(15, 84, 8);
    rect(startBox.x, startBox.y+150, startBox.w, startBox.h, 10)
    fill(23, 176, 7);
    if (startButtonCount > 0) {
        rect(startBox.x+10, startBox.y+160, startButtonCount, startBox.h-20, 10)
        }
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
    if (playersOnStart >= playerCount) {
        startButtonCount += 2;
        }
        else {
        if (startButtonCount > 0) {
            startButtonCount -= 2;
        }
        }
    if (startButtonCount >= 180) {
        titleSet = true;
        stage = 1;
    }
}