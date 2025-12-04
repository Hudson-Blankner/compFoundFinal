// ==== TAG GAME ====

// local-only tag state
let tagInit = false;
let tagScores = {};
let tagTimer = 0;
let tagWinner = "";
let tagWinFrames = 0;
let tagItId = null;       
let tagCooldown = 0;  
let tagFreeze = 0;      

function tagGame() {
    background(220);

    // kill leftover slider from gameChoice so it doesn't show in Tag
    if (typeof slider !== "undefined") {
        slider.remove();
        slider = undefined;
    }

    // ==== ONE-TIME INIT WHEN ENTERING TAG ====
    if (!tagInit) {
        tagScores = {};
        tagTimer = 0;
        tagWinner = "";
        tagWinFrames = 0;
        tagItId = null;
        tagCooldown = 0;
        tagFreeze = 0;

        // make a score entry for each player
        for (let id in players) {
            tagScores[id] = 0;
        }

        // deterministic “random” IT: pick the first id alphabetically
        let ids = Object.keys(players);
        ids.sort();              // same order on all clients
        if (ids.length > 0) {
            tagItId = ids[ floor(random(ids.length)) ];
        }

        // spawn positions for THIS client only
        if (players[myId].color === "blue")  { x = 700; y = 250; }
        if (players[myId].color === "purple"){ x = 800; y = 250; }
        if (players[myId].color === "orange"){ x = 900; y = 250; }

        tagInit = true;
    }

    // ==== MOVEMENT (LOCAL ONLY) ====
    // base speed 5, IT speed 6, frozen speed 0
    let speed = 5;
    if (myId === tagItId) speed = 6;
    if (tagFreeze > 0)    speed = 0;

    if (keyIsDown(LEFT_ARROW))  x -= speed;
    if (keyIsDown(RIGHT_ARROW)) x += speed;
    if (keyIsDown(UP_ARROW))    y -= speed;
    if (keyIsDown(DOWN_ARROW))  y += speed;

    // update timers
    tagCooldown -= deltaTime;
    if (tagCooldown < 0) tagCooldown = 0;
    tagFreeze -= deltaTime;
    if (tagFreeze < 0) tagFreeze = 0;

    // ==== TAG LOGIC ====
    // This runs on EVERY client, but uses only positions in `players`,
    // so all clients agree on who is IT.
    if (tagItId != null && tagCooldown === 0) {
        let itPlayer = players[tagItId];
        if (!itPlayer) {
            // IT player disconnected – pick new IT 
            let ids = Object.keys(players);
            ids.sort();
            if (ids.length > 0) tagItId = ids[0];
        } else {
            let ix = itPlayer.x;
            let iy = itPlayer.y;

            for (let id in players) {
                if (id === tagItId) continue;

                let ox = players[id].x;
                let oy = players[id].y;

                // 40px bounding box overlap
                if (ix >= ox - 40 && ix <= ox + 40 &&
                    iy >= oy - 40 && iy <= oy + 40) {

                    // remember who USED TO BE IT
                    let oldIt = tagItId;
                    tagItId = id;     // new IT
                    tagCooldown = 500; // 0.3s before another tag can happen

                    if (myId === oldIt) {
                        // if YOU were the old IT, freeze yourself
                        tagFreeze = 500; // 0.5s freeze
                    }
                    break;
                }
            }
        }
    }

    // ==== SCORING (1 point per second) ====
    tagTimer += deltaTime;
    if (tagTimer >= 1000) {
        tagTimer = 0;
        for (let id in players) {
            if (id !== tagItId) {
                tagScores[id] += 1;
                if (tagScores[id] >= 67) {
                    // winner determined by color label
                    tagWinner = (players[id].color || "PLAYER").toUpperCase() + " WINS!";
                    tagWinFrames = 180; // show for ~3 seconds
                }
            }
        }
    }

    // ==== WIN SCREEN + RESET BACK TO TITLE ====
    if (tagWinFrames > 0) {
        tagWinFrames--;

        fill(0);
        textAlign(CENTER, CENTER);
        textSize(60);
        text(tagWinner, canvMid[0], canvMid[1]);

        if (tagWinFrames <= 0) {
            // hard reset Tag state and send everyone to title
            tagInit = false;
            stage = 0;
        }
        return; // don't draw rest of Tag UI when showing win message
    }

    // ==== SYNC POSITION WITH SERVER (NO WINGAME NEEDED) ====
    socket.emit("playerMove", { x, y, r, stage });

    // ==== UI ====
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(40);
    text("TAG GAME", canvMid[0], 50);

    // draw scores and IT indicator for each player
    for (let id in players) {
        let px = players[id].x;
        let py = players[id].y;

        // Score above head
        fill(0);
        textSize(18);
        textAlign(CENTER, CENTER);
        text(tagScores[id] || 0, px, py - 35);

        // Extra border to show IT: a larger red square behind main.js square
        if (id === tagItId) {
            push();
            translate(px, py);
            noFill();
            stroke("red");
            strokeWeight(4);
            // slightly larger than the normal 40x40 square that main.js draws
            square(-25, -25, 50);
            pop();

            // Also label IT above the player
            text("IT", px, py - 55);
        }
    }
}
