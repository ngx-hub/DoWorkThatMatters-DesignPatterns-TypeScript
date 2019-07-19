class MacBook {
    name: string;
    constructor(name) {
        this.name = name;
    }

    bootLaptop() {
        return `${this.name} is booting ...`;
    }
}

class MacBookInch12 extends MacBook {
    constructor() {
        super(`MacBook 12 inches`);
    }
}

class MacBookInch13 extends MacBook {
    constructor() {
        super(`MacBook 13 inches`);
    }
}

class MacBookInch15 extends MacBook {
    constructor() {
        super(`MacBook 15 inches`);
    }
}

export class MacBookFactory {
    static get MacBookInch12() {
        return 0;
    }
    static get MacBookInch13() {
        return 1;
    }
    static get MacBookInch15() {
        return 2;
    }

    getMacBook(label) {
        switch (label) {
            case MacBookFactory.MacBookInch12:
                return new MacBookInch12();
            case MacBookFactory.MacBookInch13:
                return new MacBookInch13();
            case MacBookFactory.MacBookInch15:
                return new MacBookInch15();
            default:
                throw new Error(`Model is not recognized`);
        }
    }
}

