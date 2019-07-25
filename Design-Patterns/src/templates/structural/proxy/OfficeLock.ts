import ILock from './Lock';

export default class OfficeLock implements ILock {
    public open(): void {
        console.log(`Unlocked`);
    };
    public close(): void {
        console.log(`Locked`);
    };
};
