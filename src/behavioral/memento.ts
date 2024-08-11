interface IDocumentGUI {
    saveDocument(text: string): Memento;
    restore(state: Memento): Memento;
}
interface IDocumentHistory {
    [key: number]: Memento;
}
class Memento {
    public version: number;
    public text: string;
    constructor(state: Memento) {
        this.version = state.version;
        this.text = state.text;
    }
}
class CareTaker {
    private documentHistory: IDocumentHistory = {};
    private documentGUI: DocumentGUI = new DocumentGUI();

    public createDocumentVersion (text: string) {
        const document = this.documentGUI.saveDocument(text);
        this.documentHistory[document.version] = document;
    }
    public restoreDocumentVersion (version: number): Memento {
        return this.documentGUI.restore(this.documentHistory[version]);
    }
    public getDocuments (): Memento[] {
        return Object.values(this.documentHistory);
    }
    public getDocument (): Memento {
        return this.documentGUI.getDocument();
    }
}
class DocumentGUI implements IDocumentGUI {
    private state: Memento = {
        version: 0,
        text: '',
    };
    public saveDocument(text: string): Memento {
        this.state.version++;
        this.state.text = text;
        return new Memento(this.state);
    }
    public restore(state: Memento): Memento {
        this.state = state;
        return this.state;
    }
    public getDocument(): Memento {
        return this.state;
    }
}

const careTaker = new CareTaker();
careTaker.createDocumentVersion('text 1');
careTaker.createDocumentVersion('text 2');
careTaker.createDocumentVersion('text 3');
console.log(careTaker.getDocument());
const versionsList = careTaker.getDocuments();
careTaker.restoreDocumentVersion(versionsList[0].version);
console.log(careTaker.getDocuments());
console.log(careTaker.getDocument());
