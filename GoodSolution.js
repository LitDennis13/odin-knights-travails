function checkArrayEquality(arr1,arr2) {
    return (arr1[0] === arr2[0] && arr1[1] === arr2[1])
}
/*


*/
function getPossibleKnightLocations(sq) {
    let arrayOfLocations = [];
    if (sq[0]-1 >= 0 && sq[1]-2 >= 0) {
        arrayOfLocations.push([sq[0]-1,sq[1]-2]);
    }
    if (sq[0]-2 >= 0 && sq[1]-1 >= 0) {
        arrayOfLocations.push([sq[0]-2,sq[1]-1]);
    }
    if (sq[0]-2 >= 0 && sq[1]+1 <= 7) {
        arrayOfLocations.push([sq[0]-2,sq[1]+1]);
    }
    if (sq[0]-1 >= 0 && sq[1]+2 <= 7) {
        arrayOfLocations.push([sq[0]-1,sq[1]+2]);
    }
    if (sq[0]+1 <= 7 && sq[1]+2 <= 7) {
        arrayOfLocations.push([sq[0]+1,sq[1]+2]);
    }
    if (sq[0]+2 <= 7 && sq[1]+1 <= 7) {
        arrayOfLocations.push([sq[0]+2,sq[1]+1]);
    }
    if (sq[0]+2 <= 7 && sq[1]-1 >= 0) {
        arrayOfLocations.push([sq[0]+2,sq[1]-1]);
    }
    if (sq[0]+1 <= 7 && sq[1]-2 >= 0) {
        arrayOfLocations.push([sq[0]+1,sq[1]-2]);
    }
    return arrayOfLocations;
}

function knightMoves(start, end) {
    let queue = [[start]];
    let shortestPath = [];
    while (queue.length > 0) {
        let possibleMoves = getPossibleKnightLocations(queue[0][queue[0].length-1]);
        
        
        for (const move of possibleMoves) {
            if (checkArrayEquality(move,end)) {
                shortestPath = [...queue[0],move];
            }
            else {
                let newPath = [...queue[0],move];
                queue.push(newPath);
            }
        }
        queue.shift();
        if (!checkArrayEquality(shortestPath,[])) {
            let printString = "";
            for (const move of shortestPath) {
                if (move === shortestPath[shortestPath.length-1]) {
                    printString += `[${move}]`;
                }
                else {
                    printString += `[${move}]` + " -> ";
                }
            }
            console.log(printString+"\n");
            return;
        }        
    }
}




knightMoves([3,5],[6,5]);

knightMoves([3,3],[3,4]);

knightMoves([0,0],[7,7]);

knightMoves([0,0],[3,3]);

