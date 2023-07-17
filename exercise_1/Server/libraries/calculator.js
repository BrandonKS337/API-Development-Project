class calculator {
  constructor() {
    this.id = Date.now();
  }
  #log = (value) => {
    //# makes this private
    console.log(`[Calculator:${this.id}]:${value}`);
  };
  add(num1, num2) {
    const value = num1 + num2;
    this.#log(value);
    return value;
    // }
    // test(first_name, last_name, age){

    // }
  }
  sub(num1, num2) {
    const value = num1 - num2;
    this.#log(value);
    return value;
  }
  div(num1, num2) {
    const value = num1 / num2;
    this.#log(value);
    return value;
  }
  prod(num1, num2) {
    const value = num1 * num2;
    this.#log(value);
    return value;
  }
}
module.exports = calculator; //module.exports allows us to use our file in a different file
