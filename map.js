console.log('test')


//10 13 limit
const map = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
    [0,'B','N','M','W',3,0,0,'B','N','N','N','N','M',],
    [0,'W',3,'E','W',1,'E',0,'W',1,1,1,1,'E',],
    [0,'W',1,'E','W',1,'M','N','B',1,'V','C',1,'E',],
    [0,'W',1,'E','W',1,1,1,1,1,0,'W',1,'E',],
    [0,'B',1,'M','B',1,'F','S','C',1,'E','W',1,'E',],
    ['W',1,1,1,1,1,'E',0,'W',1,'E','W',1,'E',],
    ['W',1,'V','S','C',1,'E',0,0,1,0,'W',9,'E',],
    ['W',3,'E',0,'W',1,'E',0,0,'N',0,'C','S','V',],
    ['C','S','V',0,'W',0,'E',0,0,0,0,0,0,0,], ]


let playerLocID = 8

map[9][5] = playerLocID

console.log(map)

const moveUp = (y, x) => {
    map[y][x] = 1
    map[y-1][x] = playerLocID
}

moveUp(9,5)

console.log(map)