var RetiredForagerBee = function() {
  ForagerBee.call(this);

  // Override inherited properties
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.gamble = RetiredForagerBee.prototype.forage;

// Override inherited forage function
RetiredForagerBee.prototype.forage = function () {
  return 'I am too old, let me play cards instead';
};
