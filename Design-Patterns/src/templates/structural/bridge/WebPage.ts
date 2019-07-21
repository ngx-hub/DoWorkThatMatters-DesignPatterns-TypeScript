import { WebPageInterface } from './WebPageInterface';
import { ThemeInterface } from './ThemeInterface';

export class WebPage implements WebPageInterface {
    theme: ThemeInterface;

    constructor(theme: ThemeInterface) {
        this.theme = theme;
    }

    getContent(content: string): string {
        return content;
    }
}
