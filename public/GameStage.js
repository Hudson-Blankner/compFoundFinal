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
            if (players[id].x > box.x && players[id].x < box.x+box.h && 
                players[id].y > box.y && players[id].y < box.y+box.w) {
                game += 1;
            }
            else {
                game -= 1;
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
    }
checkBox(platGameBox, playersOnPlatCharge, playersOnPlat, 1)
// checkBox(shipGameBox, playersOnShipCharge, playersOnShip, 2)
// checkBox(gunGameBox, playersOnGunCharge, playersOnGun, 3)
// checkBox(mazeGameBox, playersOnMazeCharge, playersOnMaze, 4)
// checkBox(spaceGameBox, playersOnSpaceCharge, playersOnSpace, 5)
// checkBox(plinkGameBox, playersOnPlinkCharge, playersOnPlink, 6)
// checkBox(tronGameBox, playersOnTronCharge, playersOnTron, 7)
// checkBox(tagGameBox, playersOnTagCharge, playersOnTag, 8)
// checkBox(huntGameBox, playersOnHuntCharge, playersOnHunt, 9)
// checkBox(tankGameBox, playersOnTankCharge, playersOnTank, 10)
}