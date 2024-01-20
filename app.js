//Game Start
class Item {
    constructor(name, price, type) {
        this.name = name
        this.price = price
        this.type = type
    }
}
class Consumable extends Item {
    constructor(name, price, type, value, code) {
        super(name, price, type)
        this.value = value
        this.code = code
        this.place = 'iC'
        }
    description() {
        console.log(`${this.name} is an ${this.type} item that can replenish ${this.type} for the amout of ${this.value}`)
    }
}
class Equiptments extends Item {
    constructor(name, price, type, power, code, quantity) {
        super(name, price, type)
        this.power = power
        this.code = code
        this.quantity = quantity
        this.place = 'iE'
    }
}
class BaseChar {
    constructor(name, cClass, health, mana, str, mind, vit) {
        this.name = name
        this.cClass = cClass
        this.health = health
        this.mana = mana
        this.str = str
        this.mind = mind
        this.vit = vit

    }

    displayStats(code, name) {
        return `${name}: ${this[code]}`
    }

    levelUp() {
        console.log('Level Up')
    }

}
class Player extends BaseChar {
    constructor(name, cClass, health, mana, str, mind, vit) {
        super(name, cClass, health, mana, str, mind, vit)
        //inventory for consumable
        this.iC = []
        //inventroy for equipments
        this.iE = []
        this.skills = []
        this.equipableItems = {
            headGear: 'none',
            weapon: 'none',
            armor: 'none',
        }
        this.totalPower = null
    }

    displayEquipped () {
        const list = document.querySelector('#equipdList')
        list.innerHTML = ''

        const headItem = document.createElement('li')
        if (this.equipableItems.headGear instanceof Equiptments) {
            headItem.textContent = `Head Gear: ${this.equipableItems.headGear.name}`
            headItem.addEventListener('click', removeEquipment)
        } else {
            headItem.textContent = 'Head Gear: none'
        }
        list.appendChild(headItem)
    
        const weaponItem = document.createElement('li')
        if (this.equipableItems.weapon instanceof Equiptments) {
            weaponItem.textContent = `Weapon: ${this.equipableItems.weapon.name}`
            weaponItem.addEventListener('click', removeEquipment)
        } else {
            weaponItem.textContent = 'Weapon: none'
        }
        list.appendChild(weaponItem)
        
        const armorItem = document.createElement('li')
        if (this.equipableItems.armor instanceof Equiptments) {
            armorItem.textContent = `Armor: ${this.equipableItems.armor.name}`
            armorItem.addEventListener('click', removeEquipment)
        } else {
            armorItem.textContent = 'Armor: none'
        }
        list.appendChild(armorItem)
    }
}
class MagicSkills {
    constructor(name, damage, effect, code) {
        this.name = name
        this.damage = damage
        this.effect = effect
        this.code = code
    }
}
class Enemy extends BaseChar {
    constructor(name, cClass, health, mana, str, mind, vit, drop, dropRate) {
        super(name, cClass, health, mana, str, mind, vit)
        this.drop = drop
        this.dropRate = dropRate
    }
}

//Consumable Items : This is where items are placed(look for more ways to make this a lot better but for now this is good)
RedPotion = new Consumable('Red Potion', 10, 'health', 20, 'RedPotion')
BluePotion =  new Consumable('Blue Potion', 15, 'mana', 5, 'BluePotion')
Apple = new Consumable('Apple', 5, 'health', 5, 'Apple')
//End of Items

//Equipment Items : This is where equipments are placed
SmallSword = new Equiptments('Small Sword', 10, 'weapon', 5, 'SmallSword')
BigSword = new Equiptments('Big Sword', 50, 'weapon', 10, 'BigSword')
Helmet = new Equiptments('Helmet', 5, 'headGear', 3, 'Helmet')
ChestPlate = new Equiptments('Chest Plate', 5, 'armor', 10, 'ChestPlate')

//End of Equipments

//Characters Classes
Knight = new Player('Test', 'Knight', 1, 30, 20, 5, 10 )
Mage = new Player('Test', 'Mage', 80, 80, 5, 15, 2)
//End of Classes

//Enemy Type
Slime = new Enemy('Slime', 'mob', 20, 2, 25, 2, 12, Apple, 55)
Bat = new Enemy ('Bat', 'mob', 30, 2, 45, 0, 0, BluePotion, 20)
RedSlime = new Enemy('Red Slime', 'mob', 40, 10, 5, 2, 5, RedPotion, 80)
//End of Enemy

//Magic Skills
FireBall = new MagicSkills ('Fire Ball', 5, null, 'FireBall')
//End of Magic Skills

const addToInventory = (unitName, itemName) => {
    unitName[itemName.place].push(itemName.code)
}

const equipItem = (target, itemToEquip) => {
    //target is Knight and itemToEquip is 'SmallSword'
    //Equip Item
    itemToEquip = window[itemToEquip]
    if (target.equipableItems[itemToEquip.type] === 'none'){
        target.equipableItems[itemToEquip.type] = itemToEquip
        //Remove Item from inventory
        itemToEquip = target.iE.indexOf(itemToEquip.code)
        target.iE.splice(itemToEquip, 1)
        updateEquipsInvetoryToList()
        target.displayEquipped()
    }
}


/* NOT SURE IF THIS IS NEEDED PREP FOR NOW
const checkItem = (target, item) => {
    //temp
    target = Knight
    item = 'BigSword'
    //temp end
    // let itemType = window[item].type
    // console.log(itemType) 
    if (window[item] instanceof Consumable) {
        console.log(true)
    }
    else if (window[item] instanceof Equiptments) {
        console.log(true)
    }

}

checkItem()
*/

const useItem = (itemName, target, removeCount) => {
    //Heal Mana or Health
    itemName = window[itemName]
    let heal = target[itemName.type]
    target[itemName.type] = heal + itemName.value
    //Remove Item
    itemName = target.iC.indexOf(itemName.code)
    target.iC.splice(itemName, removeCount)
    updateItemsInvetoryToList()
    updateStatusPlayer()
}

//Damage Calculations
const attackFunc = (attackerName, defenderName) => {
    const list = document.getElementById('textList')
    const newItemList = document.createElement('li')
    let hp = defenderName.health
    let damage = null
    if (attackerName instanceof Player) {
        damage = totalPowerFunc(attackerName)
        damage = damage - defenderName.vit
        newItemList.textContent = `You attacked for ${damage}`
        list.appendChild(newItemList)
        hp = hp - damage
        defenderName.health = hp
        const newHealth = document.createElement('li')
        newHealth.textContent = `Enemy health is ${hp}`
        list.appendChild(newHealth)
        battleCalc(attackerName, defenderName)
        updateStatusPlayer()
    }
    else if (attackerName instanceof Enemy) {
        console.log('working')
        // let defenderDefence = defenderName.vit
        damage = damage - defenderName.vit
        list.appendChild(newItemList)
        if (damage <= 0) {
            hp = hp - 1
            defenderName.health = hp
            newItemList.textContent = `Enemy attacked for 1`
            const newHealth = document.createElement('li')
            newHealth.textContent = `Your health is ${defenderName.health}`
            list.appendChild(newHealth)
            battleCalc(defenderName, attackerName)
            updateStatusPlayer()
        }
    }
}

const chooseItem = (itemName) => {

}

const chooseMagic = () => {

}

const playerFightDec = (attack, item, run, player, enemy) => {
    //temp items
    attack = true
    item = false
    magic = false
    run = false
    //temp end
    if (attack === true) {
        return attackFunc(player, enemy)
    }
    else if (item === true) {
        chooseItem()
    }
    else if (magic === true) {
        chooseMagic(player, enemy)
    }
    
    else if (run === true) {

    }
}

const totalPowerFunc = (player) => {
    totalAPower = player.str
    if (player.equipableItems.weapon !== 'none') {
        totalAPower = player.str + player.equipableItems.weapon.power
    }
    return totalAPower
}

const enemyTurn = (player, enemy) => {
    attackFunc(enemy, player)
    // let hpAfterDamage = attackFunc(enemy, player)
    // battleCalc(player, enemy)
}

const rewardScreen = (player, enemy, list2, textBoxtext) => {
    let drop = null
    drop = Math.round(Math.random() * 100)
    if (drop <= enemy.dropRate) {
        drop = enemy.drop.code
        addToInventory(player, window[drop], window[drop].place)  
        textBoxtext.textContent = (`You defeated ${enemy.name} and got ${drop}`)
        list2.appendChild(textBoxtext)
        updateItemsInvetoryToList()
        updateStatusPlayer()
    }
    else {
        textBoxtext.textContent = (`You defeated ${enemy.name}`)
        list2.appendChild(textBoxtext)
        updateStatusPlayer()
    }
    const list = document.getElementById('battleList')
    list.innerHTML = ''
    fight = false
}
//starting function
const battleFunc = (player, enemy) => {
    const list = document.getElementById('textList')
    const textBoxtext = document.createElement('li')
    textBoxtext.textContent = `Encountered the monster ${enemy.name}`
    list.appendChild(textBoxtext)
    const list2 = document.getElementById('battleList')
    const attackC = document.createElement('li')
    attackC.addEventListener('click',() => onBattleListClick(player, enemy, textBoxtext))
    attackC.textContent = 'Attack'
    list2.appendChild(attackC)
    
}

const battleCalc = (player, enemy) => {
    const list3 = document.getElementById('textList')
    const textBoxtext1 = document.createElement('li')
    if (enemy.health <= 0) {
        rewardScreen(player, enemy, list3, textBoxtext1)
    }
    else if (player.health <= 0) {
        textBoxtext1.textContent = 'You Lose!!! :( GAME OVER!!!!'
        list3.appendChild(textBoxtext1)
        const list2 = document.getElementById('battleList')
        list2.innerHTML = ''
        fight = true
    }
    else {
        enemyTurn(player, enemy)
    }

}

// rewardScreen(Knight, Slime)
// enemyTurn(Knight, Slime)

//Battle Simulation
addToInventory(Knight, RedPotion, 'iC')
addToInventory(Knight, SmallSword, 'iE')
// equipItem(Knight, 'SmallSword')
addToInventory(Knight, Apple, 'iC')
addToInventory(Knight, Apple, 'iC')
addToInventory(Knight, BluePotion, 'iC')
console.log(Knight)
// useItem('Apple', Knight, 1)
console.log(Knight)
// useItem('BluePotion', Knight, 1)
console.log(Knight)

console.log(Knight.iC)
