class Observer {
    private subject?: Subject;
    public subscribe(subject: Subject): void {
        this.subject = subject;
        this.subject.addObserver(this);
        console.log(`observer ${this.constructor.name} subscribed on ${this.subject.constructor.name} events`);
    }
    public unsubscribe() {
        this.subject?.removeObserver(this);
        console.log(`observer ${this.constructor.name} unsubscribed on ${this.subject?.constructor.name} events`);
    }
    public handle(message: string): void {}
}
class Subject {
    protected observers: Observer[] = [];
    public addObserver(observer: Observer) {
        this.observers.push(observer);
    };
    public removeObserver(observer: Observer) {
        this.observers.splice(this.observers.indexOf(observer), 1);
    };
    public notifyObservers(message: string) {
        this.observers.forEach((observer) => observer.handle(message));
    };
}
class StormSubject extends Subject {
    private state: string = 'no storm';
    public changeState (state: string) {
        this.state = state;
        this.notifyObservers(this.state)
    }
}
class SchoolObserver extends Observer {
    public handle(message: string): void {
        console.log(`observer ${this.constructor.name} received new message: ${message}`);
    }
}
class AirportObserver extends Observer {
    public handle(message: string): void {
        console.log(`observer ${this.constructor.name} received new message: ${message}`);
    }
}
class TrafficServiceObserver extends Observer {
    public handle(message: string): void {
        console.log(`observer ${this.constructor.name} received new message: ${message}`);
    }
}

const stormSubject = new StormSubject();
const schoolObserver = new SchoolObserver();
const airportObserver = new AirportObserver();
const trafficServiceObserver = new TrafficServiceObserver();
schoolObserver.subscribe(stormSubject);
stormSubject.changeState('windy');
airportObserver.subscribe(stormSubject);
stormSubject.changeState('strong wind');
trafficServiceObserver.subscribe(stormSubject);
stormSubject.changeState('strong storm!!!');
schoolObserver.unsubscribe();
stormSubject.changeState('medium storm');
airportObserver.unsubscribe();
stormSubject.changeState('weak storm');