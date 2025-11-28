function platformer(){
    pDirection = 0;
    let canLeft = true;
    let canRight = true;
    let canUp = true;
    let canDown = true;
    let playersOnStart = 0;
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
                jumping = false;
                canDown = false;
            } else {
                canDown = true
            }
        } else {
            if (players[myId].y >= 600){
                jumping = false;
                canDown = false;
            }
            if (players[myId].x >= 1380){
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
    }
    if (canDown) {
        y -= playerDrop;
        playerDrop -= 0.5;
    } else {
        if ((keyIsDown(UP_ARROW) || keyIsDown(87) || keyIsDown(32))) {
            y -= 10.5;
            playerDrop = 10;
            jumping = true
            canDoubleJump = true;
        }
        if (jumping === false){
            playerDrop = 0;
            canDoubleJump = false
        }
    }
    if (canUp === false){
        playerDrop = 0;
    }
    if (players[myId].y >= 602){
        y = 600;
    }
    console.log(canDoubleJump)
}