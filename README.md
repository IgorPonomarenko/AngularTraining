# SuperShop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Implemented as part of hometask 2
на мой взгляд все пункты ДЗ 2 выполнены, за исключением своей дополнительной функциональности
 - приложение имеет несколько модулей включая shared
 - ProductListComponent отображает товары. ProductComponent - презентационный компонент. При добавлении товара в корзину, доступный остаток товара уменьшается. При отсутствии товара кнопка покупки становиться неактивной.
 - CartListComponent - отображает список товаров. СartItemComponent является презентационным. Существует возможность уменьшить количество купленных единиц товара или удалить товар из корзины.
 - Взаимодействие между презентационным компонентом и родительским списком реализовано с помощью @Input(), @Output().
 - Компонент ProductComponent реализует стратегию OnPush
 - Используются хуки ngOnInit и ngAfterViewInit (ProductListComponent и ProductComponent при использовании @ViewChild)
 - Стоит обработчие DOM ивентa "click", для обработки нажатию на кнопки
 - CartService предоставляет данные о количестве товаров и общей сумму покупок 
 - В качестве демо используется #variable (в ProductComponent при наведении курсором на название товара изменяет указатель на "pointer") и @ViewChildren (в ProductListComponent выводит список товаров в консоль)
 - При наведении курсором на товар в корзине срабатывает директива из shared модуля MouseHoverDirective. @HostBinding - изменяет фон на желтый, @HostListener меняет курсор на 'not-allowed'. 
 - ngClass используется в СartItemComponent устанавливая класс товара в 'alert-danger', если его цена превыщает 10 000.
 - для удобства, елементы модулей экспортируются с помощью index.ts
 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
