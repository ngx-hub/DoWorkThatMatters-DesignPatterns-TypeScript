import { ChromeOsBookFactory } from './ChromeOsBookFactory';
import { MacBookFactory } from './MacbookFactory';
import { WindowsOsBookFactory } from './WindowsBookFactory';


/**
 * Фабрика фабрик.
 * Главный класс
 */
export default class FactoryOfFactories {
    // определение типов фабрик
    static get CHROMEOSBOOK() {
        return 0;
    }
    static get MACBOOK() {
        return 1;
    }
    static get WINDOWS() {
        return 2;
    }

    // Метод получения экземпляра класса конкретной фабрики в зависимости от типа
    static getOSFactory(label) {
        switch (label) {
            case FactoryOfFactories.CHROMEOSBOOK:
                return new ChromeOsBookFactory();
            case FactoryOfFactories.MACBOOK:
                return new MacBookFactory();
            case FactoryOfFactories.WINDOWS:
                return new WindowsOsBookFactory();
            default:
                throw new Error(`OS is not recognized`);
        }
    }
}
