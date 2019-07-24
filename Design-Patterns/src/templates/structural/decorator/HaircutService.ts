import Service from './Service';

export default class HaircutService implements Service {
    service: Service;

    constructor(service: Service) {
        this.service = service;
    };

    getCost(): number {
        return this.service.getCost() + 200;
    };
    getDescription(): string {
        return `${this.service.getDescription()} Haircut`;
    };
};
