import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import FactoryOfFactories from '@templates/creational/abstract_factory/FactoryOfFactories';
import { ChromeOsBookFactory } from '@templates/creational/abstract_factory/ChromeOsBookFactory';
import { Geek } from '@templates/creational/builder/Greek';
import { Manufacturer } from '@templates/creational/builder/Manufacturer';
import { Sheep } from '@templates/creational/prototype/Sheep';
import { Singleton } from '@templates/creational/singleton/Singleton';
import { HDMIToVGAAdapter } from '@templates/structural/adapter/HDMIToVGAAdapter';
import { About } from '@templates/structural/bridge/About';
import { LightTheme } from '@templates/structural/bridge/LightTheme';
import { Contacts } from '@templates/structural/bridge/Contacts';
import { DarkTheme } from '@templates/structural/bridge/DarkTheme';
import { Company } from '@templates/structural/composite/Company';
import { Designer } from '@templates/structural/composite/Designer';
import { Developer } from '@templates/structural/composite/Developer';
import SimpleService from '@templates/structural/decorator/SimpleService';
import ManikureService from '@templates/structural/decorator/ManikureService';
import HaircutService from '@templates/structural/decorator/HaircutService';
import Computer from '@templates/structural/facade/Computer';
import ComputerFacade from '@templates/structural/facade/ComputerFacade';
import TeaProducer from '@templates/structural/flyweight/TeaProducer';
import TeaShop from '@templates/structural/flyweight/TeaShop';
import Security from '@templates/structural/proxy/Security';
import OfficeLock from '@templates/structural/proxy/OfficeLock';

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
			`Adapter`,
			`Bridge`,
			`Composite`,
			`Decorator`,
			`Facade`,
			`Flyweight`,
			`Proxy`
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
	public bridgeResult: string;
	public compositeResult: string;
	public decoreatorResult: string;

	constructor() {
		this.patternsData = PATTERNS;
	}

	public ngOnInit(): void {
		this.runPatternAbsractFabric();
		this.runPatternBuilder();
		this.runPatternPrototype();
		this.runPatternSingleton();
		this.runPatternAdapter();
		this.runPatternBridge();
		this.runPatternComposite();
		this.runPatternDecorator();
		this.runPatternFacade();
		this.runPatternFlyweight();
		this.runPatternProxy();
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

	// Bridge
	private runPatternBridge(): void {
		const about: About = new About(new LightTheme());
		const contacts: Contacts = new Contacts(new DarkTheme());

		this.bridgeResult = `${about.getContent()}\n${contacts.getContent()}`;
	}

	// Composite
	private runPatternComposite(): void {
		const company: Company = new Company();
		company.addEmployee(new Designer(`Bob`, 3000));
		company.addEmployee(new Developer(`Jhon`, 3000));
		company.addEmployee(new Designer(`Alex`));
		company.addEmployee(new Developer(`Tom`));

		this.compositeResult = company.getNetSalaty();
	}

	// Composite
	private runPatternDecorator(): void {
		const simpleService: SimpleService = new SimpleService();
		const manikureService: ManikureService = new ManikureService(simpleService);
		const haircutService: HaircutService = new HaircutService(simpleService);

		const s1: string = `${simpleService.getDescription()} ${simpleService.getCost()}`;
		const s2: string = `${manikureService.getDescription()} ${manikureService.getCost()}`;
		const s3: string = `${haircutService.getDescription()} ${haircutService.getCost()}`;

		this.decoreatorResult = `${s1}\n${s2}\n${s3}`;
	}


	// Facade
	private runPatternFacade(): void {
		const computerFacade: ComputerFacade = new ComputerFacade(new Computer());
		computerFacade.turnOn();
		computerFacade.turnOff();
	}


	// Flyweight
	private runPatternFlyweight(): void {
		const teaProducer: TeaProducer = new TeaProducer();
		const teaShop: TeaShop = new TeaShop(teaProducer);

		teaShop.takeOrder(`with sugar`, 1);
		teaShop.takeOrder(`without sugar`, 2);
		teaShop.takeOrder(`with milk`, 3);
		teaShop.takeOrder(`double`, 7);

		teaShop.serve();
	}

	// Proxy
	private runPatternProxy(): void {
		const door: Security = new Security(new OfficeLock());
		door.open(`test`);

		door.open(`secretpassword`);
		door.close();
	}
}
