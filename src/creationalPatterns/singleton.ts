class Singleton {
    private static instance: any = {};
    private static currentInstanceId: number = 0;
    private static instanceAmountLimit: number = 10;
    private constructor () {
    }
    public static createInstance(): void {
        if (this.currentInstanceId >= this.instanceAmountLimit) {
            console.log(`Maximum limit ${this.instanceAmountLimit} exceeded`);
        }
        Singleton.instance[this.currentInstanceId] = new Singleton();
        this.currentInstanceId++;
        return this.instance;
    }
    public static getInstance() {
        return this.instance;
    }

}
Singleton.createInstance();
Singleton.createInstance();
Singleton.createInstance();
Singleton.createInstance();
Singleton.createInstance();
Singleton.createInstance();
Singleton.createInstance();
Singleton.createInstance();
Singleton.createInstance();
Singleton.createInstance();
Singleton.createInstance();
Singleton.createInstance();
Singleton.createInstance();
Singleton.getInstance();