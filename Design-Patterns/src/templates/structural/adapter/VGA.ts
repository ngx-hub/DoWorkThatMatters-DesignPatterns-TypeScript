import { IAnalogueInterface } from './AnalogueInterface';

export class VGA implements IAnalogueInterface {
    handleAnalogueSignal(): string {
        return `Interface: VGA:\nSignal analogue`;
    }    
}
