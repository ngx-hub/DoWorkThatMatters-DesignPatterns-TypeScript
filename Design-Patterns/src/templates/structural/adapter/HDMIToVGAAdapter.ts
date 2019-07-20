import { IDigitalInterface } from './DigitalInterface';
import { VGA } from './VGA';

export class HDMIToVGAAdapter implements IDigitalInterface {
    private vga: VGA = new VGA();

    handleDigitalSignal(): string {
        return this.vga.handleAnalogueSignal();
    }
}
