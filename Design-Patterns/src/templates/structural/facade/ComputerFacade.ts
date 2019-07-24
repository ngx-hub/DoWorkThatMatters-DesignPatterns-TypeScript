import Computer from './Computer';

export default class ComputerFacade {
    computer: Computer;

    constructor(pc: Computer) {
        this.computer = pc;
    };

    turnOn() {
        console.group(`ComputerFacade.turnOn:`);
        this.computer.checkPower();
        this.computer.makeSound();
        this.computer.showLoadingScreen();
        this.computer.readyState();
        console.groupEnd();
    };
    turnOff() {
        console.group(`ComputerFacade.turnOff:`);
        this.computer.endProcesses();
        this.computer.makeSound();
        this.computer.powerOff();
        console.groupEnd();
    };
};
