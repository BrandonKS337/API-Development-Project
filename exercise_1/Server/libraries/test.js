class testlib {
    constructor() {
        this.id = this.#randomNum()    //*20 sets cap at 20
    }
    #randomNum = (value) => {
        const random = Math.floor(Math.random()*40)
        return random
    }
    #log = (value) => {
        console.log(`[test:${this.id}]:${value}`);
    };
    expo(num1, num2) {
        const value = num1 ** num2
        this.#log(value)
        return value
    }
}

module.exports = testlib