var HoneyMakerBee = function() {
  Bee.call(this);

  // Override inherited properties
  this.age = 10;
  this.job = 'make honey';

  // New properties
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot += 1;
};

HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot -= 1;
};
