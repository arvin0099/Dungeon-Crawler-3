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
    constructor(name, price, type, power, code) {
        super(name, price, type)
        this.power = power
        this.code = code
    }
}

const inventory = {}

//Consumable Items : This is where items are placed(look for more ways to make this a lot better but for now this is good)
RedPotion = new Consumable('Red Potion', 10, 'HP', 20, 'redPot')
BluePotion =  new Consumable('Blue Potion', 15, 'MP', 5, 'bluePot')
Apple = new Consumable('Apple', 5, 'HP', 5, 'apple')
//End of Items

//Equipment Items : This is where equipments are placed


//End of Equipments

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
        this.equipableItems = {}
    }
    inventoryEquip() {

    }
}

Knight = new Player('Test', 'Knight', 100, 30, 20, 5, 10 )

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



addToInventory(Knight, RedPotion, 'inventoryConsume')
addToInventory(Knight, Apple, 'inventoryConsume')
console.log(Knight)


// inventory[RedPotion.code] = RedPotion
console.log(inventory)

console.log(Knight.inventoryConsume['redPot'].value)
Apple.description()
// console.log(Knight.inventoryConsume['redPot'].description())
// console.log(Knight.inventoryConsume['apple'].description())


// const consumableItems = {
//     redPot: ['RedPot', 'Red Potion', 10, 'HP', 15],
//     bluePot: ['Blue Potion', 15, 'MP', 5]

// }

// const funcTest = (itemNameID) => {
//     consumable = new Consumable(itemNameID[1], itemNameID[2], itemNameID[3], itemNameID[4])
//     console.log(toString(consumable))
//     return itemNameID
// }

// funcTest(consumableItems.redPot)


smallSword = new Equiptments('Small Swrod', 10, 'Weapon', 5)

// console.log(funcTest(consumableItems.redPot))


// console.log(smallSword.price)