function Cat(name){
    this.name = name;
    this.stomache = [];
}

Cat.prototype.eat = function(mouse){
    this.stomache.push(mouse);
}

module.exports = Cat;