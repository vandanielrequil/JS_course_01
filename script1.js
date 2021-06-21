

var chess = document.getElementsByName('chess')[0];
var cell = document.createElement('div');
cell.classList = 'chess__cell';
var alph = 'ABCDEFGHABCDEFGH';

/////////////// Creating array for cell coordinates [A 1 empty, A 2 empty ... H 7 empty H 8 empty ]

var chessArr = [];
for (n = 1; n <= 8; n++) {
    for (a = 0; a < 8; a++) {
        chessArr.push([alph[a], n, 'empty']);
    }
}

/////////////// Filling board with cells and legend marks

for (var i = 1, j = 0, aj = 0; i <= 100; i++) {
    var node = cell.cloneNode();
    node.setAttribute('id', 'cell' + i);
    if (i == 12) { nj = 1; }
    if (i == 1 || i == 10 || i == 91 || i == 100) { // Check if cell is neither legend or figure 
        node.classList.add('chess__cell_legend');

    }
    else if (i < 11 || i > 90) { // Check if cell is a legend mark row
        node.classList.add('chess__cell_legend');
        node.insertAdjacentText('afterbegin', alph[aj]); //paste legend alphabet mark
        aj++;
    }
    else if (i % 10 == 1 || i % 10 == 0) { // Check if cell is a legend mark column
        node.classList.add('chess__cell_legend');
        node.insertAdjacentText('afterbegin', Math.trunc((i - 1) / 10)); //paste legend number mark
    }
    else {  // give to cell her coordinate and color
        var cellCoord = chessArr[j][0] + chessArr[j][1];
        node.setAttribute('name', cellCoord);
        node.onclick = function () { alert(this.getAttribute('name')) };
        j++;
        if ((i % 2 == Math.trunc(i / 10) % 2) ||
            (i % 2 != 0 && Math.trunc(i / 10) % 2 != 0)) { //color black cells
            node.classList.add('chess__cell_black');
        }
        else {
            node.classList.add('chess__cell_white'); //color white cells
        }
    }

    chess.appendChild(node);
};

///////////////////// Chess figures

var figCol = {
    wKing: '&#9812;',
    wQueen: '&#9813;',
    wRook: '&#9814;',
    wBishop: '&#9815;',
    wKnight: '&#9816;',
    wPawn: '&#9817;',
    bKing: '&#9818;',
    bQueen: '&#9819;',
    bRook: '&#9820;',
    bBishop: '&#9821;',
    bKnight: '&#9822;',
    bPawn: '&#9823;'
};

for (j = 2; j < 8; j += 5) { //Fill board with Pawns 
    for (i = 0; i < 8; i++) {
        var cellCoo = alph[i] + j;
        var p = document.getElementsByName(cellCoo)[0];
        switch (j) {
            case 2: p.innerHTML = figCol.wPawn; break;
            case 7: p.innerHTML = figCol.bPawn;
        }
    }
}

for (j = 1; j < 9; j += 7) { //Fill board with other figures 
    for (i = 0; i < 8; i++) {
        var cellCoo = alph[i] + j;
        var p = document.getElementsByName(cellCoo)[0];
        switch (j) {
            case 1: switch (i) {
                case 0: p.innerHTML = figCol.wRook; break;
                case 1: p.innerHTML = figCol.wKnight; break;
                case 2: p.innerHTML = figCol.wBishop; break;
                case 3: p.innerHTML = figCol.wKing; break;
                case 4: p.innerHTML = figCol.wQueen; break;
                case 5: p.innerHTML = figCol.wBishop; break;
                case 6: p.innerHTML = figCol.wKnight; break;
                case 7: p.innerHTML = figCol.wRook;
            } break;
            case 8: switch (i) {
                case 0: p.innerHTML = figCol.bRook; break;
                case 1: p.innerHTML = figCol.bKnight; break;
                case 2: p.innerHTML = figCol.bBishop; break;
                case 3: p.innerHTML = figCol.bQueen; break;
                case 4: p.innerHTML = figCol.bKing; break;
                case 5: p.innerHTML = figCol.bBishop; break;
                case 6: p.innerHTML = figCol.bKnight; break;
                case 7: p.innerHTML = figCol.bRook;
            } break;
        }
    }
}