class ConciergeService {
    protected mediator?: Mediator;
    constructor(protected mediator?: Mediator) {
        this.mediator = mediator;
    }
}
class CallService extends ConciergeService {
    public callTaxi (): void {
        console.log('call taxi');
        this.mediator.notify('taxi was called');
    };
    public callMaster (): void {
        console.log('call master');
        this.mediator.notify('master was called');
    };
    public deliveryFlowers (): void {
        console.log('call flowers delivery');
        this.mediator.notify('flowers delivery was called');
    };
}
class InformService extends ConciergeService {
    public notifyCustomer (message: string): void {
        console.log(`customer receive message ${message}`);
    };
}
interface Mediator {
    notify(message: string): void;
}

class ServiceMediator implements Mediator {
    private service: InformService = new InformService();
    public notify(message: string) {
        this.service.notifyCustomer(message);
    }
}

const callService = new CallService(new ServiceMediator());
callService.callTaxi();
callService.callMaster();
callService.deliveryFlowers();