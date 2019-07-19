import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import FactoryOfFactories from '@templates/creational/abstract_factory/FactoryOfFactories';
import { ChromeOsBookFactory } from '@templates/creational/abstract_factory/ChromeOsBookFactory';

const PATTERNS: any = [
  {
    title: `Creational`,
    patterns: [
      `Abstract Factory`
    ]
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation : ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public patternsData: any[] = [];
  public result: string;

  constructor() {
    this.patternsData = PATTERNS;
  }

  public ngOnInit(): void {
    // Экземпляра класса ChromeOsBookFactory
    const ChromeOsFactory = <ChromeOsBookFactory> FactoryOfFactories.getOSFactory(FactoryOfFactories.CHROMEOSBOOK);

    // Экземпляра класса ChromeBookInch13
    const chromeBook13 = ChromeOsFactory.getChromeBook(ChromeOsBookFactory.ChromeBookInch13);

    this.result = chromeBook13.bootLaptop();
  }
}
