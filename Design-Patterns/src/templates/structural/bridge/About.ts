import { WebPage } from './WebPage';
import { ThemeInterface } from './ThemeInterface';

export class About extends WebPage {
    theme: ThemeInterface;

    constructor(theme: ThemeInterface) {
        super(theme);
    }

    getContent() {
        return `About page with ${this.theme.getColor()}`;
    }
}
