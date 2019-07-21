![Do work that matters](https://yt3.ggpht.com/a/AGF-l7_jmGIiURBep4sky6CRcfXfA6RF3FMjzlhkqA=s288-mo-c-c0xffffffff-rj-k-no "Do work that matters")

## [Source: Шаблоны проектирования. Typescript](https://www.youtube.com/playlist?list=PLIFGfLqvZ-yFrZbynkxYMnlHUw_XwH90m)

* [Введение](#Введение)
* [Абстрактная фабрика](#Абстрактная-фабрика)
* [Строитель](#Строитель)
* [Прототип](#Прототип)
* [Одиночка](#Одиночка)
* [Адаптер](#Адаптер)
* [Мост](#Мост)
* [Компоновщик](#Компоновщик)
* [Декоратор](#Декоратор)

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
    - Одиночка
    - Адаптер
    - Мост
    - Компоновщик
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

Строитель (англ. Builder) - порождающий шаблон проектирования предоставляет способ создания составного объекта. Отделяет конструирование сложного объекта от его представления так, что в результате одного и того же процесса конструирования могут получаться разные представления.

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
  

# Одиночка
### CODE: `/teplates/creational/singleton`

Одиночка (англ. Singleton) - позволяет ограничивать создание класса единственным объектом. На данные момент шаблон "Одиночка" является антипаттерном.

Синглтон - порождающий шаблон проектирования, гарантирующий, что в однопроцессном приложении будет единственный экземпляр некоторого класса, и предостовляющий глобальную точку доступа к этому экземпляру.

У класса есть только один экземпляр, и он предоставляет к нему глобальную точку доступа. Существенно то, что можно пользоваться именно экземпляром класса, так как при этом во многих случаях становится доступной более широкая функциональность. Например, к описанным компонентам класса можно обращаться через интерфейс, если такая возможность педдерживается языком.

Глобальный "одинокий" объект - именно объект, а не набор процедур, не  привязанный ни к какому объекту - бывает нужен:
  - если используется сеществующая объектно-ориентированная библиотека.
  - если есть шансы, что один объект когда-нибудь превратится в несколько.
  - если интерфейс объекта (например, игрового мира) слишком сложен и не стоит засорять основное пространство имен большим колличеством функций.
  - если, в зависимости от как либо условий и настроек, создается один из нескольких объектов. Например, в зависимости от того, ведеться лог или нет, создается или настоящий объект, пишущий в файл, или "заглушка", ничего не делающая.

Такие объекты можно создавать и при инициализации программы. Это может приводить к следующим трудностям:
  - Если объект нужен уже при инициализации, он может быть затребован раньше, чем будет создан.
  - Бывает, что объект нужен не всегда. В таком случае его создание можно пропустить.

Плюсы:
  - контролируемый доступ к единственному экземпляру.

Минусы:
  - глобальные объекты могут быть вредны для объектного программирования, в некоторых случаях приводит к созданию не масштабируемого проекта.
  - усложняет написание модульных тестов и следование TDD.


# Адаптер
### CODE: `/teplates/structural/adapter`

Адаптер (англ. Adapter) - структурный шаблон проектирования, предназначенный для организации использования функций объекта, недоступного для модификации, через специально созданный интерфейс.

Задача:
  - Система поддерживает требуемые данные и поведение, но имеет неподходящий интерфейс.

Способ решения:
  - Адаптер предусматривает создание класса-оболочки с требуемым интерфейсом.


# Мост
### CODE: `/teplates/structural/bridge`

Мост (англ. Bridge) - структурный шаблон проектирования, используемый в проектировании програмного обеспечения чтобы разделять абстракцию и реализацию так, чтобы они могди изменяться независимо.

При частом изменении класса преимущества объектно-ориентированного подхода становятся очень полезными, позволяя делать изменения в программе, обладая минимальными сведениями о реализации программы. Шаблон является полезным там, где часто меняется не только сам класс, но и то, что он делает.


# Компоновщик
### CODE: `/teplates/structural/composite`

Компоновщик - (англ. Composite) - структурный шаблон проектирования, объединяющий объекты в древовидную структуру для представления иерархии от частного к уелому. Компоновщик позволяет клиентам обращаться к отдельным объектам и к группам объектов одинаково.

Цель:
  - Паттерн определяет иерархию классов, которые одновременно могут состоять из примитивных и сложных объектов, упрощая архитектуру клиента, делает процесс добавления новых видов объекта более простым.


# Декоратор
### CODE: `/teplates/structural/decorator`

Декоратор - (англ. Decorator) - структурный шаблон проектирования, предназначенный для динамического родключения дополнительного поведения к объекту. Шаблон Декторатор представляет гибкую альтернативу практике создания подклассов с целью расширения функциональности.

Создается абстрактный класс, предоставляющий как исходный, так и новые, добавляемые в класс функции. В классах-декораторах новые функции вызываются в требуемой последовательности - до или после вызова последующего объекта.

При желании остаёться возможность использовать исходный класс (без расширения функциональности), если на его объект сохранилась ссылка.