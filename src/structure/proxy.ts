interface IServer {
    request(): string;
}
class ServerClass implements IServer {
    public request() {
        console.log('Server request');
        return 'response data';
    }
}
class ProxyClass implements IServer {
    private static server: ServerClass = new ServerClass();
    public request() {
        return ProxyClass.server.request();
    }
}
class CacheClass extends ProxyClass {
    private cacheMemory: string = '';

    request(): string {
        if (!this.cacheMemory) {
            this.cacheMemory = super.request()
        }
        return this.cacheMemory;
    }
}
const proxyWithCache = new CacheClass();
console.log(proxyWithCache.request());
console.log(proxyWithCache.request());