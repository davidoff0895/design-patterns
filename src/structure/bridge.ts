interface Purpose {
    getPurpose(): string;
}
interface SiteProperty {
    type: string,
    purpose: string,
}
class B2B implements Purpose {
    getPurpose() {
        return 'business';
    }
}
class B2C implements Purpose {
    getPurpose() {
        return 'customer';
    }
}

abstract class Site {
    protected siteProperties: SiteProperty = {
        type: '',
        purpose: '',
    };
    protected constructor(protected purpose: Purpose) {
        this.siteProperties.purpose = this.purpose.getPurpose();
    }
    public getSite(): SiteProperty {
        return this.siteProperties;
    }
}
class Blog extends Site {
    constructor(purpose: Purpose) {
        super(purpose);
        this.siteProperties.type = 'BLOG';
    }
}
class Shop extends Site {
    constructor(purpose: Purpose) {
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