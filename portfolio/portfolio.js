

//working with the DOM

//making to folder for the rest of the examples 























//class
//below is doing virtually the same thing as the prototype example just easier to read and better for other program back grounds to understand what you are doing 
//class Person {
  //constructor(firstName, lastName, dob) {
    //this.firstName = firstName;
    //this.lastName = lastName;
    //this.dob = new Date(dob);
  //}

  //getBirthYear() {
    //return this.dob.getFullYear
  //}

  //getFullName() {
    //return `${this.firstName} ${this.lastName}`;
  //}
//}

//instantiate object
//const person1 = new Person('John', 'Doe' , '4-3-1990');
//const person2 = new Person('Mary', 'Smith' , '3-6-1970');

//console.log(person2.getFullName());
//console.log(person1);



//ex7
// object oriented programing
//constructor functions e6 classes etc...
 
//function Person(firstName, lastName, dob) {
  //this.firstName = firstName;
  //this.lastName = lastName;
  //this.dob = new Date(dob);
//}

//prototype example

//Person.prototype.getBirthYear = function() {
  //return this.dob.getFullYear();
//}

//Person.prototype.getFullName = function(){
  //return `${this.firstName} ${this.lastName}`;
//}








//ex 6 functions 
//many ways to write fns inluding the below example, including using the "fat arrow => which can help clean up code to make the same fns shorter"


//function addNums (num1, num2) {
  //return num1 + num2;

//}

//console.log(addNums(5,5));





//ex 5
//evaluate a condition
//switch
// telling us our constant then saying if true do this, if false do this and the switch tells what to out put to console depending on the true or false, if 2nd const was changed completely to say it equals green the third switch would activate


//const x = 10;

//const color = x > 10 ? 'red' : 'blue';

//switch(color) {
  //case 'red':
//    console.log('color is red');
    //break;
  //  case 'blue':
//      console.log('color is blue');
    //  break;
  //    console.log( 'color is Not red or blue');
//      break;
//}




//ex4
//the symbol ? stands for then turnerairy operator this happens if it is true and this happens if false


//const x = 10;

//const color = x > 10? 'red' : 'blue';
//console.log(color);


//ex 3
//conditionals
// amount of equals signs makes it more specific 
// the syymbol || stands for "or" ex this "or" that must be true to run program 
// the symbol && means and so both const must be true to run program


//const x = 8;
//const y = 11;

//if(x > 7 && y >10){
  //console.log('x is more than 2 and y is more than 10');
//}

//const x = 4;
//const y = 11;

//if(x > 5 || y > 10){
  //console.log('x is more than 5 or y is more than 10')

//}








//EX1 program

//const person = {
  //  firstName: 'John',
    //lastName: 'Doe',
    //age: 30,
   // hobbies: [ 'music','movies','sports'],
    //address: {
      //  street:'50 main st',
        //city:'Boston',
        //state:'MA'
    //}
//}

//EX1 manipulations 

// makes MOVIES pop up in the console console.log(person.hobbies[1]);
//alert(person);
// makes a thing pop up
//can console log mutli things with comma's 
//console.log(person.firstName, person.lastName);
//console.log(person.address.city)


//ex2

//todos is the name of the array 
//const todos = [
   // {
  //      id: 1, 
    //    text: 'Take out trash',
      //  isCompleted: true 
  //  },
  //  {
  //      id: 2, 
    //    text: 'Meeting with boss',
      //  isCompleted: true 
   // },
  //  {
  //      id: 3, 
    //    text: 'Dentist appt',
      //  isCompleted: false
  //  }
//  ];

//forEach, map, filter
//todos.forEach(function(todo){
  //  console.log(todo.text);
//});

//map
//const todoText = todos.map(function(todo){
//return todo.text;
//});
//console.log(todoText);

//filter
// filtering out the un true items and making only true statements in the console
//add on .map with the return to make only the text of the true statements show up
// this is functional programing manipulates data how you want 

//const todoCompleted = todos.filter(function(todo){
//return todo.isCompleted === true;
//}).map(function(todo){
  //return todo.text;
//})
//console.log(todoCompleted);

//easier way to loop through main text. can change the .text to .id or what ever you want
//for(let todo of todos) {
  //  console.log(todo.text)
//}


// loops through the main text of the to do list in the console
//for(let i = 0; i < todos.length; i++) {
   // console.log(todos[i].text);
//}




//for loops 
//this
//for(let i = 0; i <=10; i++) {
    //console.log(`For Loop Number: ${i}`);
//}
//or
//for(let i = 0; i <= 10; i++ ){
    //console.log(i);

    //while loops

    //let i = 0;
    //while(i < 10){
      //  console.log(`While Loop Number: ${i}`);
      //  i++;
 //   }



//const todoJSON = JSON.stringify(todos);
//console.log(todoJSON);
//(to pull up meeting with boss in console)console.log(todos[1].text);
//json is a data format used in full stack and apis sending data to servers
//similar to object literals
