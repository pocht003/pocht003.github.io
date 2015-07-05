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
                if (cell[x - 1][y - 1])
                    countL++;
                if (cell[x][y - 1])
                    countL++;
                if (cell[x + 1][y - 1])
                    countL++;
                if (cell[x - 1][y])
                    countL++;
                if (cell[x + 1][y])
                    countL++;
                if (cell[x - 1][y + 1])
                    countL++;
                if (cell[x][y + 1])
                    countL++;
                if (cell[x + 1][y + 1])
                    countL++;
            } else if (!x && y && y < (cellY - 1)) { //The cell is on the left border;
                if (cell[cellX - 1][y - 1])
                    countL++;
                if (cell[x][y - 1])
                    countL++;
                if (cell[x + 1][y - 1])
                    countL++;
                if (cell[cellX - 1][y])
                    countL++;
                if (cell[x + 1][y])
                    countL++;
                if (cell[cellX - 1][y + 1])
                    countL++;
                if (cell[x][y + 1])
                    countL++;
                if (cell[x + 1][y + 1])
                    countL++;
            } else if (x == (cellX - 1) && y && y < (cellY - 1)) { //The cell is on the right border;
                if (cell[x - 1][y - 1])
                    countL++;
                if (cell[x][y - 1])
                    countL++;
                if (cell[0][y - 1])
                    countL++;
                if (cell[x - 1][y])
                    countL++;
                if (cell[0][y])
                    countL++;
                if (cell[x - 1][y + 1])
                    countL++;
                if (cell[x][y + 1])
                    countL++;
                if (cell[0][y + 1])
                    countL++;
            } else if (x && x < (cellX - 1) && !y) { //The cell is on the top;
                if (cell[x - 1][cellY - 1])
                    countL++;
                if (cell[x][cellY - 1])
                    countL++;
                if (cell[x + 1][cellY - 1])
                    countL++;
                if (cell[x - 1][y])
                    countL++;
                if (cell[x + 1][y])
                    countL++;
                if (cell[x - 1][y + 1])
                    countL++;
                if (cell[x][y + 1])
                    countL++;
                if (cell[x + 1][y + 1])
                    countL++;
            } else if (x && x < (cellX - 1) && y == (cellY - 1)) { //The cell is in the bottom;
                if (cell[x - 1][y - 1])
                    countL++;
                if (cell[x][y - 1])
                    countL++;
                if (cell[x + 1][y - 1])
                    countL++;
                if (cell[x - 1][y])
                    countL++;
                if (cell[x + 1][y])
                    countL++;
                if (cell[x - 1][0])
                    countL++;
                if (cell[x][0])
                    countL++;
                if (cell[x + 1][0])
                    countL++;
            } else if (!x && !y) { //The cell is in the upper left corner;
                if (cell[cellX - 1][cellY - 1])
                    countL++;
                if (cell[x][cellY - 1])
                    countL++;
                if (cell[x + 1][cellY - 1])
                    countL++;
                if (cell[cellX - 1][y])
                    countL++;
                if (cell[x + 1][y])
                    countL++;
                if (cell[cellX - 1][y + 1])
                    countL++;
                if (cell[x][y + 1])
                    countL++;
                if (cell[x + 1][y + 1])
                    countL++;
            } else if (x == (cellX - 1) && !y) { //The cell is in the upper right corner;
                if (cell[x - 1][cellY - 1])
                    countL++;
                if (cell[x][cellY - 1])
                    countL++;
                if (cell[0][cellY - 1])
                    countL++;
                if (cell[x - 1][y])
                    countL++;
                if (cell[0][y])
                    countL++;
                if (cell[x - 1][y + 1])
                    countL++;
                if (cell[x][y + 1])
                    countL++;
                if (cell[0][y + 1])
                    countL++;
            } else if (x == (cellX - 1) && y == (cellY - 1)) { //The cell is in the lower right corner;
                if (cell[x - 1][y - 1])
                    countL++;
                if (cell[x][y - 1])
                    countL++;
                if (cell[0][y - 1])
                    countL++;
                if (cell[x - 1][y])
                    countL++;
                if (cell[0][y])
                    countL++;
                if (cell[x - 1][0])
                    countL++;
                if (cell[x][0])
                    countL++;
                if (cell[0][0])
                    countL++;
            } else if (!x && y == (cellY - 1)) { //The cell is in the left lower corner;
                if (cell[cellX - 1][y - 1])
                    countL++;
                if (cell[x][y - 1])
                    countL++;
                if (cell[x + 1][y - 1])
                    countL++;
                if (cell[cellX - 1][y])
                    countL++;
                if (cell[x + 1][y])
                    countL++;
                if (cell[cellX - 1][0])
                    countL++;
                if (cell[x][0])
                    countL++;
                if (cell[x + 1][0])
                    countL++;
            }
            return countL; //Return number of living neighbors as result of function.
        }
