// import Actions module

import { Actions } from "./Actions.js";

/*
Create a test method called as test1()
- Invoke visitUrl(), login() and validateTitle() synchronously in this method (use then() and catch() methods)
- Validate the output is as below

    OUTPUT:
    URL visited successfully
    Logged in successfully
    Title validated successfully
*/

// Individual catch blocks for each async method executed
function test1() {
  Actions.visitUrl('https://www.techglobalschool.com')
    .then((data) => {
      console.log(data);
      Actions.login('TechGlobal', 'Test1234')
        .then((data)=> {
          console.log(data);
          Actions.validateTitle('Batch11')
            .then((data) => {
              console.log(data);
            })
            .catch((err) => {
              console.log(err);
            })
        })
        .catch((err) => {
          console.log(err);
        })
    })
    .catch((err) => {
      console.log(err);
    });
}

test1();

// One catch block to handle all the async methods and possible failures may come up

function test2() {
    Actions.visitUrl('https://www.techglobalschoo.com')
    .then((data) => {
        console.log(data);
        return Actions.login('TechGlobal', 'Test1234');
    })
    .then(() => {
        console.log(data);
        return Actions.validateTitle('Batch11');
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(data);
    })
}

test2();