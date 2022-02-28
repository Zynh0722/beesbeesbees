var ForagerBee = function() {
  Bee.call(this);

  // Override inherited properties
  this.age = 10;
  this.job = 'find pollen';

  // New properties
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function (treasure) {
  this.treasureChest.push(treasure);
};
