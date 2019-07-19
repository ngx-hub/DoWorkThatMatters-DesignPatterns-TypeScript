export interface IPCBuilder {
    assemblerPC(): string;
    setMotherboard(mb: string): void;
    setCpu(cpu: string): void;
    setSsd(ssd: string): void;
}
