const baseBoolean = {
  setThen: function(then) { return { ...this, then }; },
  setOtherwise: function(otherwise) { return { ...this, otherwise }; },
};
const objectOrientedTrue = {
  ...baseBoolean,
  evaluate: function() { return this.then; },
};
const objectOrientedFalse = {
  ...baseBoolean,
  evaluate: function() { return this.otherwise; },
};
const objectOrientedNumber = {
  value: 0,
  isaMultipleCache: [objectOrientedFalse],
  setValue: function(n) { return { ...this, value: n, isaMultipleCache: [objectOrientedTrue, ...Array(n).fill(objectOrientedFalse)] }; },
  isaMultipleOf: function(dividend) { return this.isaMultipleCache[dividend.value % this.value]; }
};
const objectOrientedFizzBuzz = {
  for: function(n) {
    const number = objectOrientedNumber.setValue(n);
    return this.three
               .isaMultipleOf(number)
               .setThen(
                 this.five
                     .isaMultipleOf(number)
                     .setThen("FizzBuzz")
                     .setOtherwise("Fizz")
                     .evaluate()
               )
               .setOtherwise(
                 this.five
                     .isaMultipleOf(number)
                     .setThen("Buzz")
                     .setOtherwise(number.value)
                     .evaluate()
               )
               .evaluate();
  },
  three: objectOrientedNumber.setValue(3),
  five: objectOrientedNumber.setValue(5),
};

const input = Array.from(Array(100), (_,i) => i+1);

const objectOrientedOutput = document.getElementById("object-oriented");

// objectOrientedOutput.innerText = input.map((n) => objectOrientedFizzBuzz.for(n));

module.exports = input.map((n) => objectOrientedFizzBuzz.for(n));