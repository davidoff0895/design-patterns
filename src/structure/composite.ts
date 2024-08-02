abstract class CoreElement {
    protected i: number = 0;
    public increment () {}
    public decrement () {}
}
class LeafElement extends CoreElement {
    public increment () {
        this.i++;
    }
    public decrement () {
        this.i--;
    }
}
class NodeElement extends CoreElement {
    constructor(protected childElements: CoreElement[]) {
        super();
    }
    public increment () {
        this.i++;
        this.childElements.forEach((childElement) => childElement.increment())
    }
    public decrement () {
        this.i--;
        this.childElements.forEach((childElement) => childElement.decrement())
    }
}

const tree = new NodeElement([
    new LeafElement(), new NodeElement([
        new LeafElement(), new NodeElement([
            new LeafElement(), new LeafElement()
        ])
    ])
])
tree.increment();
tree.increment();
tree.increment();
tree.decrement();
console.log(tree);