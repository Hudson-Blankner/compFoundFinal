function platformer(){
    pDirection = 0;
    let canLeft = true;
    let canRight = true;
    let canUp = true;
    let canDown = true;
    let playersOnStart = 0;
    background(220);
    fill(0);
    rect(160, 250, 40, 400);
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
                jumping = false;
                canDown = false;
            } else {
                canDown = true
            }
        } else {
            if (players[myId].y >= 680 || (y >= 230 && y <= 240 && x <= 220 && x >= 140)){
                jumping = false;
                canDown = false;
            }
            if (players[myId].x >= 1380 || (players[myId].y >= 230 && players[myId].y <= 670 && players[myId].x >= 140 && players[myId].x <= 160)){
                canRight = false;
            }
            if (players[myId].x <= 20){
                canLeft = false;
            }
        }
    }
    if (canLeft) {
        if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
            pDirection = 4;
            if (keyIsDown(16)){
                sprinting = true;
                x -= 10
            } else {
                sprinting = false;
                x -= 5;
            }
        }
    } else {
        if (keyIsDown(LEFT_ARROW) || keyIsDown(65) && jumping) {
            if(playerDrop < 0) {
                playerDrop += 0.3
            }
            if ((keyIsDown(32) || keyIsDown(87) || keyIsDown(UP_ARROW)) && canJumpL){
                y -= 10.5;
                playerDrop = 10;
                jumping = true;
                canJumpL = false;
                canJumpR = true;
            }
        }
    }
    if (canRight) {
        if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            pDirection = 2;
            if (keyIsDown(16)){
                sprinting = true;
                x += 10
            } else {
                sprinting = false;
                x += 5;
            }
        }
    } else {
        if (keyIsDown(RIGHT_ARROW) || keyIsDown(68) && jumping) {
            if(playerDrop < 0) {
                playerDrop += 0.3
            }
            if ((keyIsDown(32) || keyIsDown(87) || keyIsDown(UP_ARROW)) && canJumpR){
                y -= 10.5;
                playerDrop = 10;
                jumping = true;
                canJumpR = false;
                canJumpL = true;
            }
        }
    }
    if (canDown) {
        y -= playerDrop;
        if (playerDrop <= 15 && playerDrop >= -15){
            playerDrop -= 0.5;
        }
    } else {
        if ((keyIsDown(UP_ARROW) || keyIsDown(87) || keyIsDown(32))) {
            y -= 10.5;
            playerDrop = 10;
            jumping = true
            canJumpR = true;
            canJumpL = true;
        }
        if (jumping === false){
            canJump = true;
            playerDrop = 0;
            canJumpR = false;
            canJumpL = false;
        }
    }
    if (canUp === false){
        playerDrop = 0;
    }
    if (players[myId].y >= 682){
        y = 680;
    }
}