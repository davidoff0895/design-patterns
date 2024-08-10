interface IBook {
    author: string;
    name: string;
    year: number;
}
abstract class BookIterator {
    protected position: number = 0;
    constructor(protected collection: BookCollection) {}

    public isValid(): boolean {
        return this.position < this.collection.getCount();
    }
}
class AuthorIterator extends BookIterator {
    public nextItem(): IBook['author'] {
        const item = this.collection.getItems()[this.position].author;
        this.position++;
        return item;
    }
}
class NameIterator extends BookIterator {
    public nextItem(): IBook['name'] {
        const item = this.collection.getItems()[this.position].name;
        this.position++;
        return item;
    }
}
class YearIterator extends BookIterator {
    public nextItem(): IBook['year'] {
        const item = this.collection.getItems()[this.position].year;
        this.position++;
        return item;
    }
}
class BookCollection {
    private items: IBook[] = [
        {
            author: 'John Tolkien',
            name: 'The Lord of the Rings',
            year: 1954,
        },
        {
            author: 'Joanne Rowling',
            name: 'Harry Potter',
            year: 1997,
        },
        {
            author: 'George Martin',
            name: 'A song of ice and fire',
            year: 1991,
        },
    ]

    public getItems(): IBook[] {
        return this.items;
    }
    public getCount(): number {
        return this.items.length;
    }
}
const authorIterator = new AuthorIterator(new BookCollection());
const nameIterator = new NameIterator(new BookCollection());
const yearIterator = new YearIterator(new BookCollection());
[authorIterator, nameIterator, yearIterator].forEach((iterator) => {
    console.log(`---${iterator.constructor.name}---`);
    while (iterator.isValid()) console.log(iterator.nextItem());
})