let boardSize = 8;
let tileSize;
let chessboard;

function setup() {
    createCanvas(600, 600);

    tileSize = width / boardSize;

    chessboard = new Chessboard();
    chessboard.setupPieces();
}

function draw() {
    background(255);
    chessboard.drawBoard();
    chessboard.drawPieces();
}

class Chessboard {
    constructor() {
        this.pieces = [];
        
    }
    
    drawBoard() {
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

    setupPieces() {
        for (let i = 0; i < 16; i++) {
            this.pieces.push(createVector(floor(random(boardSize)), floor(random(boardSize))));
        }
        
    }
    drawPieces() {
       
        fill("green");
        for (let i = 0; i < 8; i++) {
          const piece = this.pieces[i]; 
          ellipse(piece.x * tileSize + tileSize / 2, piece.y * tileSize + tileSize / 2, tileSize / 2);
        }
    
        
        fill("orange");
        for (let i = 8; i < 16; i++) {
          const piece = this.pieces[i]; 
          ellipse(piece.x * tileSize + tileSize / 2, piece.y * tileSize + tileSize / 2, tileSize / 2);
        }
      }
   
}
