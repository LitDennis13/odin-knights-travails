function returnShortestPath(listOfPaths) {
    let shortestPath = 0;
    let firstRun = true;
    for (const path of listOfPaths) {
        if (firstRun) {
            firstRun = false;
            shortestPath = path;
            continue;
        }
        else if (path.length < shortestPath.length) {
            shortestPath = path;
            continue
        }
    }
    return shortestPath;
}



function checkIfArrayIn(arr1,arr2) {
    for (const arr of arr1) {
        if (arr[0] === arr2[0] && arr[1] === arr2[1]) {
            return true;
        }
    }
    return false;
}

function checkArrayEquality(arr1,arr2) {
    return (arr1[0] === arr2[0] && arr1[1] === arr2[1])
}

function arrLocation(arr,item) {
    
    let i = 0;
    for (const part of arr) {
        if (checkArrayEquality(part.currentSquare,item)) {
            return i;
        }
        i++;
    }
    return false;
}

function removeFromArray(originalArray,itemsToRemove) {
    
    let returnArray = [];
    for (let i = 0; i < originalArray.length; i++) {
        
        for (let j = 0; j < itemsToRemove.length; j++) {
            if (checkArrayEquality(originalArray[i],itemsToRemove[j])) {
                continue;
            }
            else {
                returnArray.push(originalArray[i]);
                break;
            }
        }
    }
    return checkArrayEquality(returnArray,[]) ? originalArray : returnArray;
}

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
    if (sq[0]+2 <= 7 && sq[1]-1 >= 0) {
        arrayOfLocations.push([sq[0]+2,sq[1]-1]);
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
    let paths = [];
    function findPaths(start, end,alreadyChecked=[]) {
        let localAlreadyCheckedList = alreadyChecked.slice();

        if (checkIfArrayIn(localAlreadyCheckedList,start)) {
            return;
        }
    
        localAlreadyCheckedList.push(start);
        let locationsFromStart = removeFromArray(getPossibleKnightLocations(start),localAlreadyCheckedList);
        
        if (checkArrayEquality(localAlreadyCheckedList[localAlreadyCheckedList.length-1],end)) {
            paths.push(localAlreadyCheckedList);
        }
        if (localAlreadyCheckedList.length > 10) {
            return;
        }  
        for (const location of locationsFromStart) {
            findPaths(location,end,localAlreadyCheckedList);
        }
    }
    findPaths(start,end);
    let shortestPath = returnShortestPath(paths);
    for (const sq of shortestPath) {
        console.log(sq);
    }
}
console.log("----------------------------------------------------------------");
knightMoves([3,5],[6,5]);
console.log("----------------------------------------------------------------");
knightMoves([3,3],[3,4]);
console.log("----------------------------------------------------------------");
knightMoves([0,0],[3,3]);
console.log("----------------------------------------------------------------");










