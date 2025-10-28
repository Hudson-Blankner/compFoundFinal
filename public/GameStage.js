function gameChoice(){
    background(220);
    //userStartAudio();
    if (keyIsDown(LEFT_ARROW)) x -= 5;
    if (keyIsDown(RIGHT_ARROW)) x += 5;
    if (keyIsDown(UP_ARROW)) y -= 5;
    if (keyIsDown(DOWN_ARROW)) y += 5; 
    
    fill(210);
    // rect(platGameBox.x,platGameBox.y,platGameBox.w,platGameBox.h,10)
    // rect(shipGameBox.x,shipGameBox.y,shipGameBox.w,shipGameBox.h,10)
    // rect(gunGameBox.x,gunGameBox.y,gunGameBox.w,gunGameBox.h,10)
    // rect(mazeGameBox.x,mazeGameBox.y,mazeGameBox.w,mazeGameBox.h,10)
    // rect(spaceGameBox.x,spaceGameBox.y,spaceGameBox.w,spaceGameBox.h,10)
    // rect(plinkGameBox.x,plinkGameBox.y,plinkGameBox.w,plinkGameBox.h,10)
    // rect(tronGameBox.x,tronGameBox.y,tronGameBox.w,tronGameBox.h,10)
    // rect(tagGameBox.x,tagGameBox.y,tagGameBox.w,tagGameBox.h,10)
    // rect(huntGameBox.x,huntGameBox.y,huntGameBox.w,huntGameBox.h,10)
    // rect(tankGameBox.x,tankGameBox.y,tankGameBox.w,tankGameBox.h,10)
    function checkBox(box, charge, game, gamenum) {
        fill(210)
        rect(box.x,box.y,box.w,box.h,10)
        fill(255)
        rect(box.x+5,box.y+5,charge,box.h-10)
        for (let id in players) {
            let blueOn = 0
            let purpleOn = 0
            let orangeOn = 0
            if (players[id].x > box.x && players[id].x < box.x+box.w && 
                players[id].y > box.y && players[id].y < box.y+box.h) {
                if (players[id].color === "blue") {
                    blueOn = 1
                } else {blueOn = 0}
                if (players[id].color === "purple") {
                    purpleOn = 1
                } else {purpleOn = 0}
                if (players[id].color === "blue") {
                    orangeOn = 1
                } else {orangeOn = 0}
                game = blueOn + purpleOn + orangeOn;
            }
            else {
                if(game > 0) {
                    game -= 1;
                }
            }
        }
        
        if (game >= 1) {
            charge += 2;
        }
        else {
        if (charge > 0) {
            charge -= 2;
        }
        }
        if (charge >= 328) {
            titleSet = true;
            stageCnt = gamenum+1;
        }
        if (box === platGameBox) {
            playersOnPlat = game;
            playersOnPlatCharge = charge;
        }
    }
checkBox(platGameBox, playersOnPlatCharge, playersOnPlat, 1)
checkBox(shipGameBox, playersOnShipCharge, playersOnShip, 2)
checkBox(gunGameBox, playersOnGunCharge, playersOnGun, 3)
checkBox(mazeGameBox, playersOnMazeCharge, playersOnMaze, 4)
checkBox(spaceGameBox, playersOnSpaceCharge, playersOnSpace, 5)
checkBox(plinkGameBox, playersOnPlinkCharge, playersOnPlink, 6)
checkBox(tronGameBox, playersOnTronCharge, playersOnTron, 7)
checkBox(tagGameBox, playersOnTagCharge, playersOnTag, 8)
checkBox(huntGameBox, playersOnHuntCharge, playersOnHunt, 9)
checkBox(tankGameBox, playersOnTankCharge, playersOnTank, 10)
}