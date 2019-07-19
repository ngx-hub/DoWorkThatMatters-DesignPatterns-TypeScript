![Do work that matters](https://yt3.ggpht.com/a/AGF-l7_jmGIiURBep4sky6CRcfXfA6RF3FMjzlhkqA=s288-mo-c-c0xffffffff-rj-k-no "Do work that matters")

## [Source: Шаблоны проектирования. Typescript](https://www.youtube.com/playlist?list=PLIFGfLqvZ-yFrZbynkxYMnlHUw_XwH90m)

* [1. Введение](#-#1.-Введение)
* [2. Абстрактная фабрика. Теория](#-#2.-Абстрактная-фабрика.-Теория)
* [3. Абстрактная фабрика. Практика](#-#2.-Абстрактная-фабрика.-Практика)

# 1. Введение

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
  - структурные:
  - поведенчиские:


# 2. Абстрактная фабрика. Теория

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


# 3. Абстрактная фабрика. Практика
### CODE: `/teplates/creational/abstract_factory`

Абстрактная фабрика - фабрика фабрик.