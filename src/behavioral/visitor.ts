interface IFunctionality {
    accept(visitor: IVisitor): void
}
class FunctionalityA implements IFunctionality {
    accept(visitor: IVisitor) {
        visitor.visitA(this)
    }
    public exclusiveMethodOfFunctionalityA(): string {
        return 'A';
    }
}
class FunctionalityB implements IFunctionality {
    accept(visitor: IVisitor) {
        visitor.visitB(this)
    }
    public exclusiveMethodOfFunctionalityB(): string {
        return 'B';
    }
}
interface IVisitor {
    visitA(functionality: FunctionalityA): void;
    visitB(functionality: FunctionalityB): void;
}
class VisitorA implements IVisitor {
    visitA(functionality: FunctionalityA) {
        console.log(`${functionality.exclusiveMethodOfFunctionalityA()} + VisitorA`);
    }
    visitB(functionality: FunctionalityB) {
        console.log(`${functionality.exclusiveMethodOfFunctionalityB()} + VisitorA`);
    }
}
class VisitorB implements IVisitor {
    visitA(functionality: FunctionalityA) {
        console.log(`${functionality.exclusiveMethodOfFunctionalityA()} + VisitorB`);
    }
    visitB(functionality: FunctionalityB) {
        console.log(`${functionality.exclusiveMethodOfFunctionalityB()} + VisitorB`);
    }
}
const functionalityA = new FunctionalityA();
const functionalityB = new FunctionalityB();
const visitorA = new VisitorA();
const visitorB = new VisitorB();
functionalityA.accept(visitorA);
functionalityA.accept(visitorB);
functionalityB.accept(visitorA);
functionalityB.accept(visitorB);