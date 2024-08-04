enum requestTypes {
    FIREFIGHTER_REQUEST = 'FIREFIGHTER_REQUEST',
    POLICE_REQUEST = 'POLICE_REQUEST',
    MEDICAL_REQUEST = 'MEDICAL_REQUEST',
}

interface IHandler {
    setHandler(handler: IHandler): IHandler;
    process(requestType: string): void;
}
class EmergencyService implements IHandler {
    private nextHandler?: IHandler;
    public setHandler(handler: IHandler) {
        this.nextHandler = handler;
        return this;
    }

    public process(requestType: string) {
        if (this.nextHandler) {
            return this.nextHandler?.process(requestType);
        }
        console.error(`Service can not handle request ${requestType}`);
    };
}
class FirefighterService extends EmergencyService {
    process(requestType: string) {
        if (requestType === requestTypes.FIREFIGHTER_REQUEST) {
            console.log('Success FirefighterService request');
        } else {
            console.error('Failed FirefighterService request');
            super.process(requestType);
        }
    };
}
class PoliceService extends EmergencyService {
    process(requestType: string) {
        if (requestType === requestTypes.POLICE_REQUEST) {
            console.log('Success PoliceService request');
        } else {
            console.error('Failed PoliceService request');
            super.process(requestType);
        }
    };
}
class MedicalService extends EmergencyService {
    process(requestType: string) {
        if (requestType === requestTypes.MEDICAL_REQUEST) {
            console.log('Success MedicalService request');
        } else {
            console.error('Failed MedicalService request');
            super.process(requestType);
        }
    };
}
const emergencyServicesStack = new FirefighterService().setHandler(new PoliceService().setHandler(new MedicalService()));
emergencyServicesStack.process(requestTypes.MEDICAL_REQUEST);