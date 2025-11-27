function platformer(){
    let canLeft = true;
    let canRight = true;
    let canUp = true;
    let canDown = true;
    let playersOnStart = 0;
    let jumping = false;
    let canJump = true;
    background(220)
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
            if ((players[myId].x >= players[id].x-40 && players[myId].x <= players[id].x+40 && 
                players[myId].y >= players[id].y-40 && players[myId].y <= players[id].y-15)) {
                canDown = false;
            } else {
                canDown = true
            }
        } else {
            if (players[myId].y >= 600){
                canDown = false;
            }
        }
    }
    if (canLeft) {
        if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
            x -= 5;
        }
    }
    if (canRight) {
        if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            x += 5;
        }
    }
    if (canDown) {
        y -= playerDrop;
        playerDrop -= 0.5;
    } else {
        playerDrop = 0;
    }
    if (canUp){
        if ((keyIsDown(UP_ARROW) || keyIsDown(87)) && players[myId].y >= 600) {
            y -= 2;
            playerDrop = 10;
        }
    }
    if (players[myId].y >= 602){
        y = 600;
    }
}