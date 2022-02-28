var Bee = function() {
  Grub.call(this);

  // Override inherited properties
  this.age = 5;
  this.color = 'yellow';

  // New properties
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

