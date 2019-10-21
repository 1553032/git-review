const Cat = require('./Cat');
const Mouse = require('./Mouse');
const Dog = require('./Dog');

let dog = new Dog();
dog.introduce();

let tom = new Cat("Tom");
dog.eat(tom);
