console.log('test')


//10 13 limit
const map = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
    [0,'B','N','M','W',3,0,0,'B','N','N','N','N','M',],
    [0,'W',4,'E','W',1,'E',0,'W',1,1,1,1,'E',],
    [0,'W',1,'E','W',1,'M','N','B',1,'V','C',1,'E',],
    [0,'W',1,'E','W',1,1,1,1,1,0,'W',1,'E',],
    [0,'B',1,'M','B',1,'F','S','C',1,'E','W',1,'E',],
    ['W',1,1,1,1,1,'E',0,'W',1,'E','W',1,'E',],
    ['W',1,'V','S','C',1,'E',0,0,1,0,'W',9,'E',],
    ['W',2,'E',0,'W',1,'E',0,0,'N',0,'C','S','V',],
    ['C','S','V',0,'W',1,'E',0,0,0,0,0,0,0,], ]

let playerLocID = 8
let pLX = 5
let pLY = 9

console.log(pLX)


map[pLY][pLX] = playerLocID


console.log(map)
const move = (y, x, dir) => {
    switch(dir) {
        case 'up':
            if (checkBlock(y,x,dir) === true){
                map[y][x] = 1
                pLY -= 1
                map[pLY][pLX] = playerLocID
                console.log(true)
            }
            break
        case 'down':
            map[y][x] = 1
            map[y+1][x] = playerLocID
            console.log(true)
            break
        case 'right':
            map[y][x] = 1
            map[y][x+1] = playerLocID
            console.log(true)
            break
        case 'left':
            map[y][x] = 1
            map[y][x-1] = playerLocID
            console.log(true)
            break
    }
}

const checkBlock = (newY, newX, direction) => {
    let check = map[newY][newX]
    console.log(check)
    check = 'e'
    if (check === 0 || check === 'N' || check === 'E' || check === 'S' || check ===  'W' || check === 'C' || check === 'V' || check === 'B' || check ===  'M') {
        console.log('blocked dont move')
    }
    else if (check === 1) {
        console.log('path go moves')
        move(newY, newX, direction)
    }
    else if (check === 2) {
        addToInventory(Knight, SmallSword, 'iE')
    }
    else if (check === 3) {
        console.log('you get an helmet')
    }
    else if (check === 4) {
        console.log('you get an armor')
    }
    else {
        console.log('error')
    }

}

const moveSprite = () => {

}

const radnomEncounter = () => {

}

const randomEncC = () => {
    let randRate = Math.floor(0 + (Math.random() * (100 - 0)))
    if (randRate >= 40) {
        radnomEncounter()
    }
    return randRate
}

// checkBlock(8,5)
// move(9,5,'up')

document.addEventListener('keydown', function(event) {
    if (event.key === 'w' || event.key === 'W') {
       console.log('up')
    }
    else if (event.key === 's' || event.key === 'S') {
       console.log('down')
    }
    else if (event.key === 'D' || event.key === 'd') {
       console.log('right')
    }
    else if (event.key === 'a' || event.key === 'a') {
       console.log('left')
    }
    else if (event.key === ' ') {
        
    }
})

// console.log(testIndex)


console.log(map)



function printMap() {
    console.clear();
    map.forEach(row => console.log(row.join(' ')));
}

// setInterval(printMap, 1000)



//random enemy stats generator
const createEnemyShip = (name) => {
    name = name
    hull = minMaxRan(3,7)
    firePower = minMaxRan(2,5)
    shipAccuracy = minMaxRan(60,81)
    const enemyShip = new ship (name, hull, firePower, shipAccuracy)
    enemies[name] = enemyShip
}

//creating random numbers
const minMaxRan = (min, max) => {
    return Math.floor(min + (Math.random() * (max - min)))
}
