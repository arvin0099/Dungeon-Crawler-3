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
    constructor(name, price, type, power, type, code) {
        super(name, price, type)
        this.power = power
        this.type = type
        this.code = code
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
        this.inventoryConsume = {}
        this.inventoryEquip = {}
        this.equipableItems = {
            headGear: null,
            weapon: null,
            armor: null,
        }
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
RedPotion = new Consumable('Red Potion', 10, 'HP', 20, 'redPot')
BluePotion =  new Consumable('Blue Potion', 15, 'MP', 5, 'bluePot')
Apple = new Consumable('Apple', 5, 'HP', 5, 'apple')
//End of Items

//Equipment Items : This is where equipments are placed
smallSword = new Equiptments('Small Sword', 10, 'Weapon', 5)

//End of Equipments

//Characters Classes
Knight = new Player('Test', 'Knight', 100, 30, 20, 5, 10 )
//End of Classes

Knight.equipableItems.weapon = smallSword

console.log(Knight.equipableItems.weapon)
//Enemy Type
Slime = new Enemy('Slime1', 'Mob', 5, 2, 1, 2, 3)
//End of Enemy

console.log(Knight)

const addToInventory = (unitName, itemName, itemPlace) => {
    console.log(unitName, itemName, itemPlace)
    unitName[itemPlace][itemName.code] = { ...itemName}
    console.log(unitName, itemName, itemPlace)
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
    console.log(attackerName.equipableItems.weapon.power)
    if (attackerName instanceof Player) {
        console.log('working')
        hpAfter = hpAfter - attackerName.equipableItems.weapon.power
    }
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
addToInventory(Knight, Apple, 'inventoryConsume')
console.log(Knight)


console.log(Knight.inventoryConsume['redPot'].value)
Apple.description()


