import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import FactoryOfFactories from '@templates/creational/abstract_factory/FactoryOfFactories';
import { ChromeOsBookFactory } from '@templates/creational/abstract_factory/ChromeOsBookFactory';
import { Geek } from '@templates/creational/builder/Greek';
import { Manufacturer } from '@templates/creational/builder/Manufacturer';
import { Sheep } from '@templates/creational/prototype/Sheep';
import { Singleton } from '@templates/creational/singleton/Singleton';
import { HDMIToVGAAdapter } from '@templates/structural/adapter/HDMIToVGAAdapter';

const PATTERNS: any = [
	{
		title: `Creational`,
		patterns: [
			`Abstract Factory`,
			`Builder`,
			`Prototype`,
			`Singleton`
		]
	},
	{
		title: `Structural`,
		patterns: [
			`Adapter`
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
	public prototypeResult: string;
	public singletonResult: string;
	public adapterResult: string;

	constructor() {
		this.patternsData = PATTERNS;
	}

	public ngOnInit(): void {
		this.runPatternAbsractFabric();
		this.runPatternBuilder();
		this.runPatternPrototype();
		this.runPatternSingleton();
		this.runPatternAdapter();
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

	// Prototype
	private runPatternPrototype(): void {
		const sheep: Sheep = new Sheep(`Moly`, `white`);
		const cloneSheep: Sheep = <Sheep> sheep.clone();

		this.prototypeResult = `${cloneSheep.getName()}, ${cloneSheep.getColor()}`;
	}

	// Singleton
	private runPatternSingleton(): void {
		const singleton = Singleton.getInstance();
		const singleton2 = Singleton.getInstance();

		this.singletonResult = (singleton === singleton2).toString();
	}

	// Adapter
	private runPatternAdapter(): void {
		const adapter = new HDMIToVGAAdapter();

		this.adapterResult = adapter.handleDigitalSignal();
	}
}
