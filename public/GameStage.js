function gameChoice(){
    background(220);
    //userStartAudio();
    if (keyIsDown(LEFT_ARROW)) x -= 5;
    if (keyIsDown(RIGHT_ARROW)) x += 5;
    if (keyIsDown(UP_ARROW)) y -= 5;
    if (keyIsDown(DOWN_ARROW)) y += 5; 
    
    fill(210);
    rect(platGameBox.x,platGameBox.y,platGameBox.w,platGameBox.h,10)
    rect(shipGameBox.x,shipGameBox.y,shipGameBox.w,shipGameBox.h,10)
    rect(gunGameBox.x,gunGameBox.y,gunGameBox.w,gunGameBox.h,10)
    rect(mazeGameBox.x,mazeGameBox.y,mazeGameBox.w,mazeGameBox.h,10)
    rect(spaceGameBox.x,spaceGameBox.y,spaceGameBox.w,spaceGameBox.h,10)
    rect(plinkGameBox.x,plinkGameBox.y,plinkGameBox.w,plinkGameBox.h,10)
    rect(game7GameBox.x,game7GameBox.y,game7GameBox.w,game7GameBox.h,10)
    rect(game8GameBox.x,game8GameBox.y,game8GameBox.w,game8GameBox.h,10)
    rect(game9GameBox.x,game9GameBox.y,game9GameBox.w,game9GameBox.h,10)
    rect(game10GameBox.x,game10GameBox.y,game10GameBox.w,game10GameBox.h,10)
}