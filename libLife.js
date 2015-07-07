var i, j;
var lifeLib = {}

lifeLib.grida = function(xMax, yMax) { //Draw a grid:
    for (y = 0; y <= yMax; y += cellSize) { //Horizontal lines;
        ctx.moveTo(0, y);
        ctx.lineTo(xMax, y);
    }
    for (x = 0; x <= xMax; x += cellSize) { //Vertical lines.
        ctx.moveTo(x, 0);
        ctx.lineTo(x, yMax);
    }
    ctx.stroke();
}

lifeLib.countLive = function(x, y) { //Count of living neighbors:
    var countL = 0;
    if (x && y && x < (cellX - 1) && y < (cellY - 1)) { //the cell is in the middle weeding (not on the edge);

        for (i = (x - 1); i <= (x + 1); i++) {
            for (j = (y - 1); j <= (y + 1); j++) {
                if (cell[i][j])

                    countL++;
            }
        }
        if (cell[x][y])
            countL--;
    }

    return countL; //Return number of living neighbors as result of function.
}
