![Do work that matters](https://yt3.ggpht.com/a/AGF-l7_jmGIiURBep4sky6CRcfXfA6RF3FMjzlhkqA=s288-mo-c-c0xffffffff-rj-k-no "Do work that matters")

## [Source: Шаблоны проектирования. Typescript](https://www.youtube.com/playlist?list=PLIFGfLqvZ-yFrZbynkxYMnlHUw_XwH90m)

* [Введение](#-#Введение)
* [Абстрактная фабрика](#-Абстрактная-фабрика)
* [Строитель](#-Строитель)
* [Прототип](#-Прототип)

# Введение

> Проектирование программного обеспечения - процесс создания проекта программного обеспечения (ПО).
> Целью проектирования является определение внутренних свойств системы и детализации её внешних (видимых) свойств
> на основе выданных заказчиком требований к ПО (исходные условия задачи). Эти требования подвергаются анализу.
> 
> Проектирование ПО включает следующие основные виды деятельности:
>   - выбор метода и стратегии решения;
>   - выбор представления внутренних данных;
>   - разработка основного алгоритма;
>   - документирование ПО;
>   - тестирование и подбор тестов;
>   - выбор представления выходных данных;

Шаблоны проектирования программного обеспечения.

Шаблоны проектирования используются для решения переодически возникающих проблем, точнее это руководство для решения конкретных проблем.

### Типы шаблонов проектирования:
  - порождающие:
    - Абстрактная фабрика
    - Строитель
    - Прототип
  - структурные:
  - поведенчиские:


# Абстрактная фабрика
### CODE: `/teplates/creational/abstract_factory`

Абстрактная фабрика - фабрика фабрик.

Абстрактная фабрика (англ. Abtract Factory) - предоставляет интерфейс для создания взаимосвязанных или взаимозависимых объектов, не специфицируя их конкретных классов. Шаблон реализуется созданием абстрактного класса Factory, который представляет собой интерфейс для создания компонентов системы (например, для оконного интерфейса он может создавать окна и кнопки). Затем пишутся классы, реализующие этот интерфейс.

Плюсы:
  - изолирует конкретные классы.
  - упрощает замену семейств продуктов.
  - гарантирует сочетаемость продуктов.

Минусы:
  - сложно добавить поддержку нового вида продуктов.

Применение
  - Система не должна зависеть от того, как создаются, компонуются и предостваляются входящие в неё объекты.
  - Входящие в семейство взаимосвязанные объекты должны использоваться вместе и вам необходимо обеспечить выполнение этого ограничения.
  - Система должна конфигурироваться одним из семейств составляющих её объектов.
  - Требуется продеставить библиотеку объектов, раскрывая только их интерфейсы, но не реализацию.


# Строитель
### CODE: `/teplates/creational/builder`

Строитель - порождающий шаблон проектирования предоставляет способ создания составного объекта. Отделяет конструирование сложного объекта от его представления так, что в результате одного и того же процесса конструирования могут получаться разные представления.

Плюсы:
  - позволяет изменять врутренее представление продукта.
  - изолирует код, реализующий конструирование и представление.
  - дает более тонкий контроль над процессом конструирования.


# Прототип
### CODE: `/teplates/creational/prototype`

Задаёт виды создаваемых объектов с помощью экземпляра-прототипа и создаёт новые объекты путём копирования этого прототипа. Он позволяет уйти от реализации и позволяет следовать принципу "программирование через интерфейсы". В качестве возвращающего типа указывается интерфейс/абстрактный класс на першине иерархии, а классы-наследники могут подставить туда наследника, реализующего этот тип.

Проще говоря, это паттерн создания объекта через клонирование другого объекта вместо создания через конструктор.

Паттерн используется чтобы:
  - избежать дополнительных усилий по созданию объекта стандарным путем (имется в виду тспользование конструктора, так как в этом случае так же будут вызваны конструкторы всей иерархии предков объекта), когда это не позволительно дорого для приложения.
  - избежать наследования создателя объекта (object creator) в клиентском приложении, так как это делает паттерн abstrac factory. Используйте этот шаблон проектирования, когда системе безразлично как именно в ней создаются, компонуются и предсавляются продукты.
  - инстанцируемые классы определяются во время выполнения, например с помощью динамической загрузки.
  - избежать построения иерархий классов и фабрик, параллельных иерархии классов продуктов.
  - экземпляры класса могут находиться в одном из нескольких раздичных состояний. Может оказаться удобнее установить соответсвующее число прототипов и клонировать их, а не инстанцировать каждый раз класс вручную в подходящем состоянии.