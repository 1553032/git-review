const Mouse = require('./Mouse');

function Cat(name){
    this.name = name;
    this.stomache = [];
}

Cat.prototype.eat = function(mouse){
    if(mouse instanceof Mouse){
        this.stomache.push(mouse);
    } else {
        throw new Error("Can't eat Dog");
    }
}

module.exports = Cat;