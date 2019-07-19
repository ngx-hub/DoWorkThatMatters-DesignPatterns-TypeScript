class WindowsBook {
    name: string;
    constructor(name) {
        this.name = name;
    }

    bootLaptop() {
        return `${this.name} is booting ...`;
    }
}

class WindowsBookAsus extends WindowsBook {
    constructor() {
        super(`WindowsBook Asus`);
    }
}

class WindowsBookLenovo extends WindowsBook {
    constructor() {
        super(`WindowsBook Lenovo`);
    }
}

class WindowsBookSony extends WindowsBook {
    constructor() {
        super(`WindowsBook Sony`);
    }
}

export class WindowsOsBookFactory {
    static get WindowsBookAsus() {
        return 0;
    }
    static get WindowsBookLenovo() {
        return 1;
    }
    static get WindowsBookSony() {
        return 2;
    }

    getMacBook(label) {
        switch (label) {
            case WindowsOsBookFactory.WindowsBookAsus:
                return new WindowsBookAsus();
            case WindowsOsBookFactory.WindowsBookLenovo:
                return new WindowsBookLenovo();
            case WindowsOsBookFactory.WindowsBookSony:
                return new WindowsBookSony();
            default:
                throw new Error(`Model is not recognized`);
        }
    }
}

