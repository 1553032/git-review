const chalk = require('chalk');

function Dog(name){
    this.name = name;
    this.stomach = [];
}

Dog.prototype.eat = function(cat){
    this.stomach.push(cat);
}

Dog.prototype.introduce = function(){
    console.log("Hi, I'm a Dog. My name is", chalk.blue("Brian"));
}

module.exports = Dog;