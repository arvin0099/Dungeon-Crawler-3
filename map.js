const canvas = document.querySelector('.game-canvas')
const ctx = canvas.getContext('2d');

const tileW = 26
const tileH = 26

const gridR = 10
const gridC = 14

const map = [
    [0,0,0,0,'B','N','M',0,0,0,0,0,0,0,],
    [0,'B','N','M','W',3,'E',0,'B','N','N','N','N','M',],
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
map[pLY][pLX] = playerLocID



const updateAll = () => {
    drawMap()
    window.requestAnimationFrame(updateAll)
}

window.onload = () => {
    window.requestAnimationFrame(updateAll)
}

const drawMap = () => {
    for (let eachR = 0; eachR < gridR; eachR++) {
        for (let eachC = 0; eachC < gridC; eachC++) {
            let tile = map[eachR][eachC]
            if (tile === 1) {
                ctx.fillStyle = 'lightgray'
            } else if (tile === playerLocID) {
                ctx.fillStyle = 'red'
            } else {
                ctx.fillStyle = 'black'
            }
            ctx.fillRect(tileW * eachC, tileH * eachR, tileW, tileH)
        }
    }
}

drawMap()

const move = (dir) => {
    switch(dir) {
        case 'up':
            if (checkBlock(pLY - 1,pLX,dir) === true){
                map[pLY][pLX] = 1
                pLY -= 1
                map[pLY][pLX] = playerLocID
                console.log(true)
            }
            break
        case 'down':
            if (checkBlock(pLY + 1,pLX,dir) === true){
                map[pLY][pLX] = 1
                pLY += 1
                map[pLY][pLX] = playerLocID
                console.log(true)
            }
            break
        case 'right':
            if (checkBlock(pLY,pLX + 1,dir) === true){
                map[pLY][pLX] = 1
                pLX += 1
                map[pLY][pLX] = playerLocID
                console.log(true)
            }
            break
        case 'left':
            if (checkBlock(pLY,pLX - 1,dir) === true){
                map[pLY][pLX] = 1
                pLX -= 1
                map[pLY][pLX] = playerLocID
                console.log(true)
            }
            break
    }
}

const checkBlock = (newY, newX, direction) => {
    let check = map[newY][newX]
    console.log(check)
    if (check === 0 || check === 'N' || check === 'E' || check === 'S' || check ===  'W' || check === 'C' || check === 'V' || check === 'B' || check ===  'M') {
        console.log('blocked dont move')
    }
    else if (check === 1) {
        return true
    }
    else if (check === 2) {
        console.log(Knight)
        addToInventory(Knight, BigSword)
        updateEquipsInvetoryToList()
        console.log(Knight)
        return true
    }
    else if (check === 3) {
        console.log('you get an helmet')
        return true
    }
    else if (check === 4) {
        console.log('you get an armor')
        return true
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

document.addEventListener('keydown', function(event) {
    if (event.key === 'w' || event.key === 'W') {
       console.log('up')
       move('up')
       printMap()
    }
    else if (event.key === 's' || event.key === 'S') {
       console.log('down')
       move('down')
       printMap()
    }
    else if (event.key === 'D' || event.key === 'd') {
       console.log('right')
       move('right')
       printMap()
    }
    else if (event.key === 'a' || event.key === 'a') {
       console.log('left')
       move('left')
       printMap()
    }
    else if (event.key === ' ') {
        
    }
})

// console.log(testIndex)


console.log(map)


//Testing Debug
// function printMap() {
//     console.clear();
//     map.forEach(row => console.log(row.join(' ')));
// }

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

// const titleItemList = document.getElementById('titleItemList')
// const itemList = document.getElementById('itemList')

// titleItemList.addEventListener('click', () => {
//     if(itemList.style.display === 'none') {
//         itemList.style.display = ''
//     } else {
//         itemList.style.display = 'none'
//     }
//     }
// )

const updateItemsInvetoryToList = () => {
    const list = document.querySelector('#itemList')
    list.innerHTML = ''
    for(let i = 0; i < Knight.iC.length; i++) {
        const newItem = document.createElement('li')
        newItem.textContent = Knight.iC[i]
        newItem.addEventListener('click', onListItemClick)
        list.appendChild(newItem)
    }
}

const updateEquipsInvetoryToList = () => {
    const list = document.querySelector('#equipmentList')
    list.innerHTML = ''
    for(let i = 0; i <= Knight.iE.length; i++) {
        const newItem = document.createElement('li')
        newItem.addEventListener('click', onListEquipClick)
        newItem.textContent = Knight.iE[i]
        list.appendChild(newItem)
    }
}

const playerStatusArray = [['health', 'HP'],['mana', 'Mana'],['str', 'Strength'],['mind', 'Mind'],['vit', 'Vitality']]

const updateStatusPlayer = () => {
    const list = document.getElementById('statusList')
    list.innerHTML = ''
    for(let i = 0; i < playerStatusArray.length; i++) {
        const stat = document.createElement('li')
        stat.textContent = Knight.displayStats(playerStatusArray[i][0], playerStatusArray[i][1])
        list.appendChild(stat)
    }
}



Knight.displayEquipped()


// Knight.displayStats()
console.log(playerStatusArray.length)

console.log(Knight)



const onListItemClick = (event) => {
    console.log(event.target.textContent);
    let clicked = event.target.textContent
    useItem(clicked, Knight, 1)
    event.target.style.color = 'blue'; 
}
const onListEquipClick = (event) => {
    console.log(event.target.textContent);
    let clicked = event.target.textContent
    equipItem(Knight, clicked)
    event.target.style.color = 'blue'; 
}
const removeEquipment = (event) => {
    console.log(event.target.textContent)
    let clicked = event.target.textContent
    if (clicked.includes('Weapon:')) {
        let item1 = Knight.equipableItems.weapon.code
        item1 = window[item1]
        console.log(item1)
        addToInventory(Knight, item1)
        Knight.equipableItems.weapon = 'none'
        console.log(Knight.equipableItems)
        Knight.displayEquipped()
        updateEquipsInvetoryToList()
    }
   else if (clicked.includes('Head Gear:')) {
        let item1 = Knight.equipableItems.headGear.code
        item1 = window[item1]
        console.log(item1)
        addToInventory(Knight, item1)
        Knight.equipableItems.headGear = 'none'
        console.log(Knight.equipableItems)
        Knight.displayEquipped()
        updateEquipsInvetoryToList()
    }
    if (clicked.includes('Armor:')) {
        let item1 = Knight.equipableItems.armor.code
        item1 = window[item1]
        console.log(item1)
        addToInventory(Knight, item1)
        Knight.equipableItems.armor = 'none'
        console.log(Knight.equipableItems)
        Knight.displayEquipped()
        updateEquipsInvetoryToList()
    }


}


console.log(window['SmallSword'])
console.log(SmallSword.type)


addToInventory(Knight, Helmet)
addToInventory(Knight, ChestPlate)
updateEquipsInvetoryToList()
updateItemsInvetoryToList()
updateStatusPlayer()