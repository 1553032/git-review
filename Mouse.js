function Mouse(name){
    this.name = name;
};

Mouse.prototype.getEaten = function () {
    this.dead = true;
}

module.exports = Mouse;