import GreenTea from './GreenTea';

export default class TeaProducer {
    public availableTea: GreenTea[] = [];

    public make(preference): GreenTea {
        if (!this.availableTea[preference]) {
            this.availableTea[preference] = new GreenTea(preference);
        };
        return this.availableTea[preference];
    };
};
