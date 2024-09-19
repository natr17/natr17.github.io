$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform(150, 630, 130, 17); // short but wide platform located 150 pixels from the left of the screen and 130 pixels from the top of the screen
createPlatform(360, 560, 130, 17); // short but wide platform located 360 pixels from the left of the screen and 560 pixels from the top of the screen
createPlatform(570, 490, 130, 17); // short but wide platform located 570 pixels from the left of the screen and 490 pixels from the top of the screen
createPlatform(780, 410, 130, 17); // short but wide platform located 780 pixels from the left of the screen and 410 pixels from the top of the screen
createPlatform(100, 380, 320, 17); // short but wide platform located 100 pixels from the left of the screen and 380 pixels from the top of the screen
createPlatform(995, 550, 315, 200); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("database", 170, 320,); // creates a "database" collectible at the coordinates (100, 380), falling with a high gravity of 17, and bouncing with 50% bounce
    createCollectable("steve", 200, 500, 0.10,); // creates a "database" collectible at the coordinates (200, 500), falling with a high gravity of 0.10, and bouncing with 100% bounce
    createCollectable("grace", 1150, 300)
    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
createCannon("top",300, 1090)
createCannon("bottom", 500, 900)
createCannon("right", 350, 950)


    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
