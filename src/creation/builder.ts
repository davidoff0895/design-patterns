interface PizzaBuilder {
    addIngredients(): void,
    getPizza(): Pizza
}
class Pizza {
    public ingredients: string[] = [];
    showPizzaInfo () {
        return `Pizza with ${this.ingredients}`;
    }
}
class CustomPizza implements PizzaBuilder {
    private readonly pizza: Pizza;
    constructor() {
        this.pizza = new Pizza()
    }
    addIngredients() {
        this.pizza.ingredients = ['cheese', 'bacon', 'pineapple', 'mushrooms', 'seafood'];
    }
    getPizza() {
        return this.pizza;
    }
}
class PizzaConstructor {
    private pizzaBuilder: PizzaBuilder
    constructor(builder: PizzaBuilder) {
        this.pizzaBuilder = builder;
    }
    makePizza() {
        this.pizzaBuilder.addIngredients();
    }
    getPizza() {
        return this.pizzaBuilder.getPizza();
    }
}
const pizzaConstructor = new PizzaConstructor(new CustomPizza());
pizzaConstructor.makePizza();
const myPizza = pizzaConstructor.getPizza();
myPizza.showPizzaInfo();