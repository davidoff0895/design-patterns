interface SpanishLibrary {
    getInformation(): string;
}
class Adapter implements SpanishLibrary {
    private library: EspanolBiblioteca;
    constructor() {
        this.library = new EspanolBiblioteca();
    }
    public getInformation() {
        return this.library.darInformacion()
    }
}
class EspanolBiblioteca {
    public darInformacion () {
        return `Volvo alguna informacion`;
    }
}

const adapter = new Adapter();
adapter.getInformation();