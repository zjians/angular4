# Action

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.5.

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

## 1.配置less
  新项目使用  ng new [appname] --style less
  已有的项目  修改 *.css 文件及引用处后缀名为 less并在 angular.json 文件中设置schematics为
  `"schematics": {
        "@schematics/angular:component": {
          "styleext": "less"
        }
    }`
## 2.分模块， 异步路由（模块的懒加载）
  angular中的异步路由是模块级别的。
## 3.共享模块
ng中一个组件只能属于一个模块，如果有一些公用的组件，虽然在app.module中全局注册可以，但是如果公用组件太多会导致app.module打包出来体积太大，所以我们可以使用共享组件。定义一个module，声明并抛出所有公用组件，然后当一个组件中想用共享组件的时候，直接在当前组件所属的module中import共享module就可以。
