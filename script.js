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
        this.whitePieces = [];
        this.blackPieces = [];
    }

    setupPieces() {
        for (let i = 0; i < 8; i++) {
            this.whitePieces.push(createVector(floor(random(boardSize)), floor(random(boardSize))));
            this.blackPieces.push(createVector(floor(random(boardSize)), floor(random(boardSize))));
        }
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

    drawPieces() {
        fill("gray");
        this.whitePieces.forEach(piece => {
            ellipse(piece.x * tileSize + tileSize / 2, piece.y * tileSize + tileSize / 2, tileSize / 2);
        });

        fill("yellow");
        this.blackPieces.forEach(piece => {
            ellipse(piece.x * tileSize + tileSize / 2, piece.y * tileSize + tileSize / 2, tileSize / 2);
        });
    }
}
