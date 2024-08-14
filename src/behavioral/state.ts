class Oven {
    private state!: State;
    constructor(state: State) {
        this.transitionToState(state);
    };
    public transitionToState(state: State) {
        console.log(`Context: Transition to ${state.constructor.name}`);
        this.state = state;
        this.state.setState(this);
    }
    public makeWarmer() {
        this.state.makeWarmer()
    }
    public makeColder() {
        this.state.makeColder()
    }
    public bake() {
        this.state.bake()
    }
}
abstract class State {
    protected oven!: Oven;
    setState(state: Oven) {
        this.oven = state;
    };
    abstract makeWarmer(): void;
    abstract makeColder(): void;
    abstract bake(): void;
}
class ColdState extends State {
    makeWarmer() {
        this.oven.transitionToState(new ReadyToWorkState());
    }
    makeColder() {
        console.error('Oven is already cold');
    }
    bake() {
        console.error('Meal is raw. Oven is cold');
    }
}
class ReadyToWorkState extends State {
    makeWarmer() {
        this.oven.transitionToState(new OverHeatState());
    }
    makeColder() {
        this.oven.transitionToState(new ColdState());
    }
    bake() {
        console.log('Meal is ready');
    }
}
class OverHeatState extends State {
    makeWarmer() {
        console.error('Oven is overheated');
    }
    makeColder() {
        this.oven.transitionToState(new ReadyToWorkState());
    }
    bake() {
        console.error('Meal is spoiled. Oven is overheated');
    }
}
const oven = new Oven(new ColdState());
oven.bake();
oven.makeWarmer();
oven.bake();
oven.makeWarmer();
oven.bake();
oven.makeWarmer();
oven.makeColder();
oven.bake();
oven.makeColder();
oven.bake();
oven.makeColder();
