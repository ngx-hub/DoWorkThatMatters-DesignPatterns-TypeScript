export class PC {
    private motherboard: string;
    private cpu: string;
    private ssd: string;

    public getMotherboard(): string {
        return this.motherboard;
    }
    public setMotherboard(mb: string) {
        this.motherboard = mb;
    }

    public getCpu(): string {
        return this.cpu;
    }
    public setCpu(cpu: string) {
        this.cpu = cpu;
    }

    public getSsd(): string {
        return this.ssd;
    }
    public setSsd(ssd: string) {
        this.ssd = ssd;
    }

    public toString(): string {
        return `Motherboard: ${this.motherboard}, CPU: ${this.cpu}, SSD: ${this.ssd}`;
    }
}
