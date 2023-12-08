class Calculator {
    constructor() {
        this.result = 0;
    }

    addNumber(num) {
        this.result += num;
    }

    subNumber(num) {
        this.result -= num;
    }

    multiplyNumber(num) {
        this.result *= num;
    }

    divideNumber(num) {
        this.result /= num;
    }

    clearResult() {
        this.result = 0;
    }

    getResult() {
        return this.result;
    }

    calculate(expression) {
        try {
            this.result = eval(expression);
        } catch (error) {
            throw new Error('Invalid expression');
        }
    }
}

