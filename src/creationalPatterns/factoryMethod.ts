class Oven {
    constructor() {}

    public returnMeal (mealName: string) {
        console.log(`Meal "${mealName}" is ready`);
    }

    public createMeal (mealName: string) {
        switch (mealName.toLowerCase()) {
            case 'pizza':
                return new Pizza();
            case 'baked chicken':
                return new BakedChicken();
            default:
                console.log('unknown meal: ' + mealName);
                return undefined;
        }
    }
}
class Pizza extends Oven {
    private mealName: string = 'Pizza';
    constructor() {
        super();
        this.returnMeal(this.mealName)
    }
}

class BakedChicken extends Oven {
    private mealName: string = 'Baked chicken';
    constructor() {
        super();
        this.returnMeal(this.mealName)
    }
}

new Oven().createMeal('pizza');
new Oven().createMeal('baked chicken');
