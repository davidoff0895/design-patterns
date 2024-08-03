interface Order {
    getOrder(): any;
}

class BasicOrder implements Order {
    private order: any = {
        id: 1
    }
    getOrder() {
        return this.order;
    }
}
abstract class OrderDecorator implements Order {
    constructor (private order: Order) {}
    getOrder() {
        return this.order.getOrder();
    }
}
class OrderWithName extends OrderDecorator {
    getOrder() {
        return {
            ...super.getOrder(),
            name: 'order name'
        }
    }
}
class OrderWithDescription extends OrderDecorator {
    getOrder() {
        return {
            ...super.getOrder(),
            description: 'order description'
        }
    }
}
const orderWithNameAndDescription = new OrderWithDescription(new OrderWithName(new BasicOrder()));
console.log(orderWithNameAndDescription.getOrder())