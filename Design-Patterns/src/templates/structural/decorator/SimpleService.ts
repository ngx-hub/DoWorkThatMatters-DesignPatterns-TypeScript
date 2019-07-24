import Service from './Service';

export default class SimpleService implements Service {
    getCost(): number {
        return 50;
    };
    getDescription(): string {
        return `Simple service: `;
    };
};
