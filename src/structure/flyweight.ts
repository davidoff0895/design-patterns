interface IUnit extends IFlyweightUnit {
    id: number;
    unitType: string;
    coordinates: {
        x: number,
        y: number,
    };
}
interface IFlyweightUnit {
    texture: string;
    sounds: string[];
}
class UnitFlyweight implements IFlyweightUnit {
    constructor (
        public texture: IUnit['texture'] = 'unit texture',
        public sounds: IUnit['sounds'] = ['sound1', 'sound2', 'sound3'],
    ) {}
}
class Unit {
    constructor (
        private flyweight: UnitFlyweight,
        private id: IUnit['id'],
        private unitType: IUnit['unitType'],
        private coordinates: IUnit['coordinates'],
    ) {}
    getUnit(): IUnit {
        return {
            id: this.id,
            unitType: this.unitType,
            coordinates: this.coordinates,
            ...this.flyweight as IFlyweightUnit,
        };
    };
}
class UnitsList {
    constructor(
        private unitFlyweight: UnitFlyweight,
        private coordinates: IUnit['coordinates'] = {x: 0, y: 0},
        private units: Unit[] = [],
    ) {}

    public createTank () {
        const id = this.units.length + 1;
        this.units.push(new Unit(this.unitFlyweight, id, 'TANK', this.coordinates));
    }
    public createInfantry () {
        const id = this.units.length + 1;
        this.units.push(new Unit(this.unitFlyweight, id, 'INFANTRY', this.coordinates));
    }
    public setCoordinates(x = 0, y = 0) {
        this.coordinates.x = x;
        this.coordinates.y = y;
    }
    public getUnits () {
        this.units.forEach((unit) => console.log(unit.getUnit()))
    }
}
const sharedData = new UnitFlyweight();
const army = new UnitsList(sharedData);
army.createTank();
army.createTank();
army.createInfantry();
army.getUnits();
console.log('Shared data updated');
sharedData.sounds.push('sound4');
sharedData.texture = 'updated texture';
army.getUnits();
console.log('Coordinates updated');
army.setCoordinates(5,5);
army.getUnits();