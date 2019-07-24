import Service from './Service';

export default class ManikureService implements Service {
    service: Service;

    constructor(service: Service) {
        this.service = service;
    };

    getCost(): number {
        return this.service.getCost() + 350;
    };
    getDescription(): string {
        return `${this.service.getDescription()} Manikure`;
    };
};
