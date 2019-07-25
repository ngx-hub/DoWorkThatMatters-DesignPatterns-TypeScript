import TeaProducer from './TeaProducer';
import GreenTea from './GreenTea';

export default class TeaShop {
    public orders: GreenTea[] = [];
    public teaProducer: TeaProducer;

    constructor(teaProducer: TeaProducer) {
        this.teaProducer = teaProducer;
    };

    public takeOrder(teaType: string, table: number): void {
        this.orders[table] = this.teaProducer.make(teaType);
    };

    public serve(): void {
        this.orders.forEach((order: GreenTea) => {
            console.log(`Serving the order: ${order.name}`);
        });
    };
};
