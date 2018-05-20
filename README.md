# SuperShop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Implemented as part of task 1
 - (Subtask 4) Create `ProductComponent` component with properties and `enum`
 - (Subtask 5) Add `Buy` button and onBuy event handler. Added functionality to add product into Cart
 - (Subtask 6) Create `Product Service`, `Product list component` and Product `model` inherited from interface
 - (Subtask 7) Create `Cart component`, which shows the list of procucts in cart OR Message that cart is empty

## Opened Questions:
I've marked them with TODO tag
1) When I click Buy button I send current product details to Cart service. But due to some reason I can not access product object fields e.g. product.name. At the same time I can see full Product details with all necessary fields when I print it to the log.
2) I can not use get method on the model. Compiler says it's not a function
  
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
