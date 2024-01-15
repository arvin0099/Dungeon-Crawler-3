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

    displayStats() {
        console.log(`${this.name}'s Stats:`)
    }

}
class Player extends BaseChar {
    constructor(name, cClass, health, mana, str, mind, vit) {
        super(name, cClass, health, mana, str, mind, vit)
        this.inventoryConsume = []
        this.inventoryEquip = []
        this.equipableItems = {
            headGear: null,
            weapon: null,
            armor: null,
        }
        this.totalPower = null
    }
    inventoryEquip() {

    }
}
class MagicSkills {
    constructor(name, damage, effect) {
        this.name = name
        this.damage = damage
        this.effect = effect

    }
}
class Enemy extends BaseChar {
    constructor(name, cClass, health, mana, str, mind, vit) {
        super(name, cClass, health, mana, str, mind, vit)
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

//End of Equipments

//Characters Classes
Knight = new Player('Test', 'Knight', 100, 30, 20, 5, 10 )
Mage = new Player('Test', 'Mage', 80, 80, 5, 15, 2)
//End of Classes

// Knight.equipableItems.weapon = SmallSword

console.log(Knight.equipableItems.weapon)
//Enemy Type
Slime = new Enemy('Slime1', 'Mob', 20, 2, 1, 2, 3)
//End of Enemy

console.log(Knight)

const addToInventory = (unitName, itemName, itemPlace) => {
    unitName[itemPlace].push(itemName.code)
}

const equipItem = (target, itemToEquip) => {
    //target is Knight and itemToEquip is 'SmallSword'
    //Equip Item
    itemToEquip = window[itemToEquip]
    target.equipableItems[itemToEquip.type] = itemToEquip
    //Remove Item from inventory
    itemToEquip = target.inventoryEquip.indexOf(itemToEquip.code)
    target.inventoryEquip.splice(itemToEquip, 1)
}



const useItem = (itemName, target, removeCount) => {
    //Heal Mana or Health
    itemName = window[itemName]
    let heal = target[itemName.type]
    heal = heal + itemName.value
    //Remove Item
    itemName = target.inventoryConsume.indexOf(itemName.code)
    target.inventoryConsume.splice(itemName, removeCount)
    console.log(target.inventoryConsume)

}

// const itemPlace = (placeItem) => {
//     if (placeItem === inventoryConsume) {
        
//     }
// }


//Damage Calculations
const attackFunc = (attackerName, defenderName, ) => {
    //temp items
    attackerName = Knight
    defenderName = Slime
    //temp end
    let hpAfter = null
    hpAfter = attackerName.str - defenderName.vit
    hpAfter = hpAfter - defenderName.health
    console.log(attackerName)
    // console.log(attackerName.equipableItems.weapon.power)
    if (attackerName instanceof Player) {
        console.log('working')
        hpAfter = hpAfter - attackerName.str
    }
    console.log(Slime.health)
    console.log(hpAfter)
    return hpAfter
}


/*work on this later
const itemChooseBattle = () => {

}*/

const playerFightDec = (attack, item, run, player, enemy) => {
    //temp items
    attack = true
    item = false
    magic = false
    run = false
    //temp end
    if (attack === true) {
        return attackFunc(player)
    }
    /*work on this later
    else if (item === true) {
    
    }*/
    else if (magic === true) {

    }
    
    else if (run === true) {

    }
}

const totalPowerFunc = (player) => {
    //t
    player = Knight //Strenth of Knight is 20
    //t e 
    totalAPower = player.str
    if (player.equipableItems.weapon !== null) {
        console.log(true)
        totalAPower = player.str + player.equipableItems.weapon.power
    }
    console.log(totalAPower)
    return totalAPower
}



//starting function
const battleFunc = (player, enemy) => {
    console.log("Battle Starts!")
    //temp items
    player = Knight
    enemy = Slime
    //temp end

    hpAfter = playerFightDec(null, null, null, player, enemy)
    console.log(hpAfter)
}

// attackFunc()
battleFunc()



addToInventory(Knight, RedPotion, 'inventoryConsume')
addToInventory(Knight, SmallSword, 'inventoryEquip')
addToInventory(Knight, Apple, 'inventoryConsume')
addToInventory(Knight, Apple, 'inventoryConsume')
console.log(Knight)
totalPowerFunc()
useItem('Apple', Knight, 1)
equipItem(Knight, 'SmallSword')

console.log(Knight.inventoryConsume)
Apple.description()

const testArray = Object.values(Knight.inventoryEquip)
console.log(testArray)