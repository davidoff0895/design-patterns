interface IPurpose {
    getPurpose(): string;
}
interface ISite {
    type: string,
    purpose: string,
}
class B2B implements IPurpose {
    getPurpose() {
        return 'business';
    }
}
class B2C implements IPurpose {
    getPurpose() {
        return 'customer';
    }
}

abstract class Site {
    protected siteProperties: SiteProperty = {
        type: '',
        purpose: '',
    };
    protected constructor(protected purpose: IPurpose) {
        this.siteProperties.purpose = this.purpose.getPurpose();
    }
    public getSite(): SiteProperty {
        return this.siteProperties;
    }
}
class Blog extends ISite {
    constructor(purpose: IPurpose) {
        super(purpose);
        this.siteProperties.type = 'BLOG';
    }
}
class Shop extends ISite {
    constructor(purpose: IPurpose) {
        super(purpose);
        this.siteProperties.type = 'SHOP';
    }
}

const businessPurpose = new B2B();
const customerPurpose = new B2C();
const businessBlog = new Blog(businessPurpose);
const customerBlog = new Blog(customerPurpose);
console.log(businessBlog.getSite(), customerBlog.getSite());
const businessShop = new Shop(businessPurpose);
const customerShop = new Shop(customerPurpose);
console.log(businessShop.getSite(), customerShop.getSite());
