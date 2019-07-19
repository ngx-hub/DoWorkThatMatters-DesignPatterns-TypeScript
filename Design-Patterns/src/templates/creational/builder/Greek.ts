import { IPCBuilder } from './PCBuilder';
import { PC } from './PC';

export class Geek implements IPCBuilder {
    private pc = new PC();

    assemblerPC(): string {
        return this.pc.toString();
    }

    setMotherboard(mb: string): void {
        this.pc.setMotherboard(mb);
    }

    setCpu(cpu: string): void {
        this.pc.setCpu(cpu);
    }

    setSsd(ssd: string): void {
        this.pc.setSsd(ssd);
    }
}
