# RPAIntro

Hi! This is a commit.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

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



# Introduction

This project will serve as an introduction to the CBA practice at (Cedrus)[http://cedrus.digital]. As a member of the CBA team, you will be expected to be heavily involved with both automation (RPA) and machine learning (AI/ML). This project consists of several phases - for now, here is the first phase focused on manual automation.

## Phase I

The major technical concepts will cover:
* Feature-branch development with git
* Automated testing with Selenium
* Angular, Typescript
* Browser DOM, XPath, and CSS selectors
* Containers and VM's

Key software methodoloy concepts:
* Sprints and milestone tracking
* Kanban boards (feature development)
* Bug tracking / QA
* Sofware delivery and deployment
* Automatable and repeatable processes


### Getting started

* Create a source code repo using github, gitlab, or bitbucket
* Create a kanban board 
* Create a project wiki (for Release Notes)

The first task will be to automate any kind form. Login and/or reservation forms are simple (search forms are typically too simple b/c they only have 1 form element) to create. It should be part of this project or it could be live.

The next task will be to create a set of end-to-end tests for the form. It should use selenium-webdriver to demonstrate both pass and expected fail scenarios using a simple command like `npm run e2e`.

Use this file for the README.md in the project, placing whatever you think is important at the top of this file.
