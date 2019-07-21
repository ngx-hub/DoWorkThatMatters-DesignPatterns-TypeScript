import { ThemeInterface } from './ThemeInterface';

export class LightTheme implements ThemeInterface {
    getColor(): string {
        return `Light color schema`;
    }
}
