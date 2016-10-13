function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  return `${this.owner} loves ${this.name}.`
}

const cat = new Cat("BoB", "bobby");

cat.cuteStatement();

Cat.prototype.cuteStatement = function() {
  return `Everyone loves ${this.name}!`
}

Cat.prototype.meow = function() {
  console.log("meow");
}

cat.meow = function() {
  console.log("WOOOOOF!")
}
