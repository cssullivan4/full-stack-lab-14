# Lab 14: Chirp Express
## Due: Tuesday, June 20th, 09:00
##### Covalence
###### Full Stack: Summer 2017

## Info
* You will be creating Chirper, a web-based messaging system
* Chirper is used by millions of people
* Chirper allows people to send absurdly short, non-useful messages to no one in particular
* These messages are called chirps

## Getting started
* You will want to write the server code before you write the front-end code
* You will need to install nodemon and mocha globally:
```
npm install -g nodemon mocha
```
* You will also need to install Mocha dependencies:
```
npm install
```
* To start your server, from the root of your project, run the following command:
```
nodemon
```
* There is a Mocha tester included for you to run. It will check and make sure your server behaves as it should
    * It only covers the basics. Passing all the tests doesn't mean your server is correct.
* To run the Mocha tester, when your server is running (i.e. you ran `nodemon` as mentioned above), open a new tab in terminal and run:
```
npm test
```
* TO VIEW YOUR WEBPAGE: Go to http://localhost:3000 in your browser. DO NOT open index.html in Finder like we have been doing.

## Submission Instructions
* Simply make sure you commit to your repository and push before the lab is due

## Objectives
* The front-end and back-end of this lab will behave exactly as the previous lab, Chirper.
* Instead of using raw Node HTTP to build the server, you will be using Express
* Use the features of Express to implement the lab requirements from the previous lab. Specifically:
    * Statically serve all files located in the `client` directory
    * Use the Express body parser instead of manually collecting the incoming chirp on the POST request
    * Use Express route handlers to set up your API server
        * Take action depending on GET/POST
    * Only set content type and response codes when Express cannot infer or incorrectly infers

* Finish the front-end
    * Use JQuery's $.ajax function (in lecture on JSON & REST) to communicate with a server
    * If you'd like, you can use Bootstrap to style your project
    * Otherwise, style your project with your own CSS file