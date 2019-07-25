import ILock from './Lock';

export default class Security {
    lock: ILock;

    constructor(lock: ILock) {
        this.lock = lock;
    };

    public autorize(password: string): boolean {
        return password === `secretpassword`;
    };

    public open(password: string): void {
        if (this.autorize((password))) {
            this.lock.open();
        } else {
            console.log(`Password is incorrect`);
        };
    };

    public close(): void {
        this.lock.close();
    };
};
