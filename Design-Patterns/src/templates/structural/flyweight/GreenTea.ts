export default class GreenTea {
    public name: string = `GreenTea`;

    constructor(teaType: string) {
        this.name = `${this.name}: ${teaType}`;
    };
};
