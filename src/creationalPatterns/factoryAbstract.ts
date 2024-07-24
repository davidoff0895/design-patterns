interface ICafe {
    makeLunch(): string[],
    makeDrink(): string
}

class Cafe {
    private readonly AMERICAN_KITCHEN = 'america';
    private readonly JAPAN_KITCHEN = 'japan';
    private readonly UKRAINIAN_KITCHEN = 'ukraine';
    private kitchen: AmericanKitchen | JapaneseKitchen | UkrainianKitchen;

    constructor (kitchenCountry: string) {
        switch (kitchenCountry) {
            case this.AMERICAN_KITCHEN:
                this.kitchen = new AmericanKitchen();
                break;
            case this.JAPAN_KITCHEN:
                this.kitchen = new JapaneseKitchen();
                break;
            case this.UKRAINIAN_KITCHEN:
                this.kitchen = new UkrainianKitchen();
                break;
            default:
                throw new Error(`Sorry, we don't have ${kitchenCountry} kitchen`);
        }
    }
    makeLunch () {
        return this.kitchen.makeLunch();
    }
    makeDrink () {
        return this.kitchen.makeDrink();
    }
}

class AmericanKitchen implements ICafe {
    makeLunch () {
        return ['burger', 'salad', 'coffee'];
    }
    makeDrink () {
        return 'coffee';
    }
}
class JapaneseKitchen implements ICafe {
    makeLunch () {
        return ['soup', 'sushi', 'tea'];
    }
    makeDrink () {
        return 'tea';
    }
}
class UkrainianKitchen implements ICafe {
    makeLunch () {
        return ['soup', 'salad', 'smashed potato with meat', 'juice'];
    }
    makeDrink () {
        return 'juice';
    }
}

const order1 = new Cafe('america');
// ["burger", "salad", "coffee"]
order1.makeLunch();
const order2 = new Cafe('japan');
//['soup', 'sushi', 'tea']
order2.makeLunch();
const order3 = new Cafe('ukraine');
// 'juice'
order3.makeDrink();