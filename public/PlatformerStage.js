function platformer(){
    pDirection = 0;
    let canLeft = true;
    let canRight = true;
    let canUp = true;
    let canDown = true;
    let respawn = false;
    let playersOnStart = 0;
    background(220);
    allDone = 0;
    for (let id in players) {
        allDone += 1;
        if (players[id].r === true){
            gameOver = true;
            r = true;
        }
    }
    if (gameOver){
        textSize(100);
        for (let id in players) {
            if (players[id].x <= 40 && players[id].y <= 40) {
                mazeWinner = players[id].color
            }
        }
    fill(mazeWinner);
    text(mazeWinner.toUpperCase() + " WINS!",700,350);
    if (allDone === playerCount){
        if (keyIsDown(32)){
            titleSetup = true;
            stage = 1;
            //r = false;
        }
    }
    } else {
    fill(0);
    rect(160, 150, 40, 500);
    rect(360, 40, 40, 460);
    rect(560, 150, 40, 500);
    rect(760, 40, 40, 460);
    rect(960, 150, 40, 500);
    rect(1160, 40, 40, 460);
    rect(160, 610, 1240, 40);
    rect(0, 40, 1200, 40);
    fill('yellow');
    square(0, 0, 40);

    for (let id in players) {
        if (id != myId) {
            // if (players[myId].x >= players[id].x-40 && players[myId].x <= players[id].x-15 && 
            //     players[myId].y >= players[id].y-40 && players[myId].y <= players[id].y+40) {
            //     canRight = false;
            // } else {
            //     canRight = true
            // }
            // if (players[myId].x <= players[id].x+40 && players[myId].x >= players[id].x+15 && 
            //     players[myId].y >= players[id].y-40 && players[myId].y <= players[id].y+40) {
            //     canLeft = false;
            // } else {
            //     canLeft = true
            // }
            // if (players[myId].x >= players[id].x-40 && players[myId].x <= players[id].x+40 && 
            //     players[myId].y >= players[id].y+15 && players[myId].y <= players[id].y+40) {
            //     canUp = false;
            // } else {
            //     canUp = true
            // }
            // if ((players[myId].x >= players[id].x-40 && players[myId].x <= players[id].x+40 && 
            //     players[myId].y >= players[id].y-40 && players[myId].y <= players[id].y-15)) {
            //     jumping = false;
            //     canDown = false;
            // } else {
            //     canDown = true
            // }
        } else {
            //down
            if (players[myId].y >= 680 || (y >= 130 && y <= 145 && x < 220 && x > 140) ||
            (players[myId].y >= 590 && players[myId].y <= 615 && players[myId].x >= 140 && players[myId].x <= 1400) ||
            (players[myId].y >= 20 && players[myId].y <= 35 && players[myId].x >= 0 && players[myId].x <= 1260) ||
            (y >= 130 && y <= 145 && x < 620 && x > 540) ||
            (y >= 130 && y <= 145 && x < 1020 && x > 940)){
                jumping = false;
                canDown = false;
                if ((y > 130 && y <= 145 && x < 220 && x > 140)){
                    y = 130
                }
                if (y >= 130 && y <= 145 && x < 620 && x > 540){
                    y = 130
                }
                if (y >= 130 && y <= 145 && x < 1020 && x > 1040){
                    y = 130
                }
                if (players[myId].y > 590 && players[myId].y < 615 && players[myId].x >= 140 && players[myId].x <= 1400){
                    y = 590
                }
                if (players[myId].y > 20 && players[myId].y < 0 && players[myId].x >= 0 && players[myId].x <= 1260){
                    y = 20
                }

            }
            //right
            if (players[myId].x >= 1380 || 
            (players[myId].y >= 130 && players[myId].y < 660 && players[myId].x >= 140 && players[myId].x <= 160) ||
            (players[myId].y > 40 && players[myId].y <= 520 && players[myId].x >= 340 && players[myId].x <= 360) ||
            (players[myId].y > 40 && players[myId].y <= 520 && players[myId].x >= 740 && players[myId].x <= 760) ||
            (players[myId].y > 40 && players[myId].y <= 520 && players[myId].x >= 1140 && players[myId].x <= 1160) ||
            (players[myId].y >= 130 && players[myId].y < 660 && players[myId].x >= 540 && players[myId].x <= 560) ||
            (players[myId].y >= 130 && players[myId].y < 660 && players[myId].x >= 940 && players[myId].x <= 960)){
                canRight = false;
            }
            //left
            if (players[myId].x <= 20 ||
                (players[myId].y >= 130 && players[myId].y < 660 && players[myId].x >= 200 && players[myId].x <= 220) ||
                (players[myId].y >= 130 && players[myId].y < 660 && players[myId].x >= 600 && players[myId].x <= 620) ||
                (players[myId].y >= 130 && players[myId].y < 660 && players[myId].x >= 1000 && players[myId].x <= 1020) ||
                (players[myId].y > 40 && players[myId].y <= 520 && players[myId].x >= 400 && players[myId].x <= 420) ||
                (players[myId].y > 40 && players[myId].y <= 520 && players[myId].x >= 800 && players[myId].x <= 820) ||
                (players[myId].y > 20 && players[myId].y <= 520 && players[myId].x >= 1200 && players[myId].x <= 1220)
            ){
                canLeft = false;
            }
            //up
            if (players[myId].y <= 20 ||
                (players[myId].y >= 670 && players[myId].y <= 680 && players[myId].x >= 140 && players[myId].x <= 1400) ||
                (players[myId].y >= 80 && players[myId].y <= 100 && players[myId].x >= 0 && players[myId].x <= 1240) ||
                (y >= 500 && y <= 520 && x < 420 && x > 340) ||
                (y >= 500 && y <= 520 && x < 620 && x > 540) ||
                (y >= 500 && y <= 520 && x < 1220 && x > 1140)
            ){
                canUp = false;
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
                playerDrop += 0.4
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
        playerDrop = -1
    }
    if (players[myId].y >= 682){
        y = 680;
    }
    if (x <= 25 && y <= 25){
        r = true;
        gameOver = true;
        score += 1;
    }
}
}