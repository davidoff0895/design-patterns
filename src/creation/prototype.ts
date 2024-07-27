interface VehiclePrototype {
    clone(): VehiclePrototype,
    customize(plateNumber: number, color: string): void,
    getInfo(): string,
}
class Vehicle implements VehiclePrototype {
    private plateNumber: number = 0;
    private color: string = 'white';

    clone(): VehiclePrototype {
        return Object.create(this);
    }
    customize(plateNumber: number, color: string) {
        this.plateNumber = plateNumber;
        this.color = color;
    }
    getInfo (): string {
        return `Vehicle with plateNumber ${this.plateNumber} and color ${this.color}`;
    }
}

class VehicleGenerator {
    private carPrototype: {[key: string]: VehiclePrototype} = {};

    registerVehicle (type: string, vehiclePrototype: VehiclePrototype ): void {
        this.carPrototype[type] = vehiclePrototype;
    }
    createVehicle (type: string): VehiclePrototype {
        const prototype = this.carPrototype[type];
        return prototype.clone();
    }
}

const vehicleGenerator = new VehicleGenerator();
vehicleGenerator.registerVehicle('passenger', new Vehicle());
vehicleGenerator.registerVehicle('truck', new Vehicle());
vehicleGenerator.registerVehicle('minivan', new Vehicle());
const passengerVehicle = vehicleGenerator.createVehicle('passenger');
passengerVehicle.customize(1, 'red');
const truck = vehicleGenerator.createVehicle('truck');
truck.customize(2, 'black');
const minivan = vehicleGenerator.createVehicle('minivan');
minivan.customize(3, 'yellow');
[passengerVehicle, truck, minivan].forEach((vehicle) => console.log(vehicle.getInfo()))