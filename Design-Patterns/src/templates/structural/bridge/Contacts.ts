import { WebPage } from './WebPage';
import { ThemeInterface } from './ThemeInterface';

export class Contacts extends WebPage {
    theme: ThemeInterface;

    constructor(theme: ThemeInterface) {
        super(theme);
    }

    getContent() {
        return `Contacts page with ${this.theme.getColor()}`;
    }
}
