let world = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
];

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.webkitImageSmoothingEnabled = false;
drawBackground();

let slime = {
  imageData : [
    [0, 1, 1, 1, 0, ],
    [1, 0, 1, 0, 1, ],
    [1, 1, 1, 1, 1, ],
    [1, 1, 1, 1, 1, ],
  ],
  position : [5, 5, ], // [x, y]  slime.position[0]   x
  oldPosition : [5, 5, ],
  collisionBox : {
    //  format: [x, y], so "x = left[2][0]"
    sides : {
      up : [
        [0, 0, ],
        [0, 1, ],
        [0, 2, ],
        [0, 3, ],
        [0, 4, ],
      ],
      down : [
        [3, 0, ],
        [3, 1, ],
        [3, 2, ],
        [3, 3, ],
        [3, 4, ],
      ],
      left : [
        [0, 0, ],
        [1, 0, ],
        [2, 0, ],
        [3, 0, ],
      ],
      right : [
        [0, 4, ],
        [1, 4, ],
        [2, 4, ],
        [3, 4, ],
      ],
    },
    isTouchingUp : () => {
      if (slime.position[0] == 0) {
        return true;
      } else {
        //so, the position is more that 0 that is the top of the screen so we need to take the position of the slime, add one, then check along the top to see if there is anything blocking it, if there is, return true, else return false.
        let rowToCheck = slime.position[0] - 1;
        //we now have the row we need, we now just need to itterate 5 times accorss checking the world arrays to see if there is a pixel
      let isOccupied = false;
        for (i = 0; i != 5; i++) {
          if (world[rowToCheck][slime.position[1] + i] == 1) {
              isOccupied = true;
            break;
          }
        }
        if (isOccupied) {
          return true
        } else {
          return false
        };
      }
    },
    isTouchingDown : () => {
      if (slime.position[0] == 36) {
        return true;
      } else {
        let rowToCheck = slime.position[0] + 4;
        let isOccupied = false;
        for (i = 0; i != 5; i++) {
          if (world[rowToCheck][slime.position[1] + i] == 1) {
              isOccupied = true;
            break;
          }
        }
        if (isOccupied) {
          return true;
        } else {
          return false;
        };
      }
    },
    moveUp : () => {
      if (!slime.collisionBox.isTouchingUp()) {
        slime.oldPosition[0] = slime.position[0];
      slime.oldPosition[1] = slime.position[1];
        slime.position[0]--;
        for (side in slime.collisionBox.sides) {
          slime.collisionBox.sides[side].forEach(entry => {
            entry[0]--;
          });
        }
      }
      
    },
    moveDown : () => {
      if (!slime.collisionBox.isTouchingDown()) {
        slime.oldPosition[0] = slime.position[0];
      slime.oldPosition[1] = slime.position[1];
        slime.position[0]++;
        for (side in slime.collisionBox.sides) {
          slime.collisionBox.sides[side].forEach(entry => {
            entry[0]++;
          });
        }
      }
    },
    moveLeft : () => {
      slime.oldPosition[0] = slime.position[0];
      slime.oldPosition[1] = slime.position[1];
      slime.position[1]--;
      for (side in slime.collisionBox.sides) {
        slime.collisionBox.sides[side].forEach(entry => {
          entry[1]--;
        });
      }
      slime.drawSlime();
    },
    moveRight : () => {
      console.log("testpoint")
      slime.oldPosition[0] = slime.position[0];
      slime.oldPosition[1] = slime.position[1];
      console.log(slime.oldPosition + 'old');
      console.log(slime.position + 'new')
      slime.position[1]++;
      for (side in slime.collisionBox.sides) {
        slime.collisionBox.sides[side].forEach(entry => {
          entry[1]++;
        });
      }
      slime.drawSlime();
    },
  },
  drawSlime : () => {
    //So I want to remove the old position of the slime every time I draw it so that requires knowing the old location of the slime, running the draw script on the old location with black, then run it again with the new location in white.
    let x = slime.oldPosition[0];
    let y = slime.oldPosition[1];
    ctx.fillStyle = "#000000"
    slime.imageData.forEach(line => {
      line.forEach(pixel => {
        if (pixel == 1) {
          ctx.fillRect(y, x, 1, 1);
        }
        y++;
      })
      y = slime.oldPosition[1];
      x++;
    });


   
//---------

    x = slime.position[0];
    y = slime.position[1];
    ctx.fillStyle = "#ffffff"
    slime.imageData.forEach(line => {
      line.forEach(pixel => {
        if (pixel == 1) {
          ctx.fillRect(y, x, 1, 1);
        }
        y++;
      })
      y = slime.position[1];
      x++;
    });
    drawBackground();
    //slime.oldPosition = slime.position;
  },
  physics : {
    isJumping : false,
    isFalling : false,
    doGravity : () => {
      if (!slime.physics.isJumping) {
        if (!slime.collisionBox.isTouchingDown()) {
          slime.physics.isFalling = true;
          slime.collisionBox.moveDown();
          slime.drawSlime();
          //slime.oldPosition = slime.position;
          //console.log("testpoint")
        } else {
          slime.physics.isFalling = false;
        }
        /*else {
          slime.physics.jump();
        }*/
      }
    },
    gravityInterval : null,
    startGravity : () => {
      slime.physics.gravityInterval = setInterval(slime.physics.doGravity, 20);
    },
    stopGravity : () => {
      if (slime.physics.gravityInterval != null) {
        clearInterval(slime.physics.gravityInterval);
      }
    },

    jumpInterval : null,
    jump : () => {
      if (!slime.collisionBox.isTouchingUp()) {
        if (!slime.physics.isJumping && !slime.physics.isFalling) {
          console.log("testpoint2")
          slime.physics.jumpCounter = 0;
          slime.physics.isJumping = true;
          slime.physics.jumpInterval = setInterval(slime.physics.doJump, 20);
        }
      }
    },
    jumpCounter : 0,
    doJump : () => {
      if (slime.physics.jumpCounter != 8) {
        //console.log(slime.physics.jumpCounter)
        slime.collisionBox.moveUp();
        slime.drawSlime();
        slime.physics.jumpCounter++;
      } else {
        clearInterval(slime.physics.jumpInterval);
        slime.physics.isJumping = false;
      }
    },
    moveLeftInterval : null,
    startMoveLeft : () => {
      slime.physics.moveLeftInterval = setInterval(slime.collisionBox.moveLeft, 20);
    },
    stopMoveLeft : () => {
      clearInterval(slime.physics.moveLeftInterval);
    },
    moveRightInterval : null,
    startMoveRight : () => {
      slime.physics.moveRightInterval = setInterval(slime.collisionBox.moveRight, 20);
    },
    stopMoveRight : () => {
      clearInterval(slime.physics.moveRightInterval);
    },
  },

};


document.onkeypress = (event) => {
  if (!event.repeat) {
  switch (event.key) {
    case "w":
        slime.physics.jump();
        console.log("Triggered Jump");
        break;
    case "a":
      slime.physics.startMoveLeft();
      console.log("Triggered Start Move Left")
      break;
    case "d":
      slime.physics.startMoveRight();
      console.log("Triggered Start Move Right")
  }
}
}
document.onkeyup = (event) => {
  switch (event.key) {
    case "a":
      slime.physics.stopMoveLeft();
    case "d":
      slime.physics.stopMoveRight();
      console.log("Triggered Stop Move Right")
  }
}

slime.physics.startGravity();









function drawBackground() {
  let x = 0;
  let y = 0;
  ctx.fillStyle = "#ffffff"
  world.forEach(line => {
    line.forEach(pixel => {
      if (pixel == 1) {
        ctx.fillRect(y, x, 1, 1);
        //console.log("drew pixel " + y + " " + x)
      }
      y++;
    })
    y = 0;
    x++;
  });
}