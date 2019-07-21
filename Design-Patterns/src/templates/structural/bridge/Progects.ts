import { WebPage } from './WebPage';
import { ThemeInterface } from './ThemeInterface';

export class Progects extends WebPage {
    theme: ThemeInterface;

    constructor(theme: ThemeInterface) {
        super(theme);
    }

    getContent() {
        return `Progects page with ${this.theme.getColor()}`;
    }
}
