import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import FactoryOfFactories from '@templates/creational/abstract_factory/FactoryOfFactories';
import { ChromeOsBookFactory } from '@templates/creational/abstract_factory/ChromeOsBookFactory';
import { Geek } from '@templates/creational/builder/Greek';
import { Manufacturer } from '@templates/creational/builder/Manufacturer';

const PATTERNS: any = [
	{
		title: `Creational`,
		patterns: [
			`Abstract Factory`,
			`Builder`
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
	public absractFabricResult: string;
	public builderResult: string;

	constructor() {
		this.patternsData = PATTERNS;
	}

	public ngOnInit(): void {
		this.runPatternAbsractFabric();
		this.runPatternBuilder();
	}
	  
	// AbsractFabric
	private runPatternAbsractFabric(): void {
		// Экземпляра класса ChromeOsBookFactory
		const ChromeOsFactory = <ChromeOsBookFactory> FactoryOfFactories.getOSFactory(FactoryOfFactories.CHROMEOSBOOK);

		// Экземпляра класса ChromeBookInch13
		const chromeBook13 = ChromeOsFactory.getChromeBook(ChromeOsBookFactory.ChromeBookInch13);

		this.absractFabricResult = chromeBook13.bootLaptop();
	}

	// Builder
	private runPatternBuilder(): void {
		const geek: Geek = new Geek();
		const pc: string = Manufacturer.manufacture(geek);

		this.builderResult = pc;
	}
}
