# Angular9oidc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

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


## Steps 

## Install project
ng new angular9oidc

## Add login component and module
ng generate module login
ng generate component login
LoginModule export LoginComponent
AppModule import LoginModule
App Component Html replace with selector app-login

## Add login component variable
message: String;  
add reference {{message}}  

## Add auth service
ng generate service auth  
LoginModule import AuthService   
LoginModule add provider AuthService   
LoginComponent import AuthService   
LoginComponent add constructor AuthService  
LoginComponent invoke AuthService  
AuthService add method getMessage  

