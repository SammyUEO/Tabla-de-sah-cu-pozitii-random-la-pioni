let boardSize = 8; 
let tileSize; 
let pieces = []; 

function setup() {
    createCanvas(400, 400); 
    tileSize = width / boardSize; 

   
}

function draw() {
    
    background(255); 
    drawBoard();
}

function drawBoard() {
    for (let y = 0; y < boardSize; y++) {
        for (let x = 0; x < boardSize; x++) {
            if ((x + y) % 2 === 0) {
                fill("white"); 
            } else {
                fill("black"); 
            }
            rect(x * tileSize, y * tileSize, tileSize, tileSize);
        }
    }
}


