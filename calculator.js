class Calculator {
   constructor() {
      this.result = 0;
   }

   add(num) {
      this.result += num;
      return this.result;
   }

   subtract(num) {
      this.result -= num;
      return this.result;
   }

   multiply(num) {
      this.result *= num;
      return this.result;
   }

   divide(num) {
      if (num === 0) throw new Error('Cannot divide by zero');
      this.result /= num;
      return this.result;
   }

   clear() {
      this.result = 0;
   }

   getResult() {
      return this.result;
   }

   calculate(expression) {
      // Remove extra spaces
      const cleaned = expression.replace(/\s+/g, '');
      // Check for invalid characters
      if (/[^0-9+\-*/().]/.test(cleaned)) {
         throw new Error('Invalid characters in expression');
      }
      // Try to evaluate
      try {
         // eslint-disable-next-line no-eval
         const value = eval(cleaned);
         if (typeof value !== 'number' || isNaN(value)) {
            throw new Error('Invalid calculation');
         }
         this.result = value;
         return this.result;
      } catch (e) {
         throw new Error('Invalid expression');
      }
   }
}

// Example usage and tests
const calc = new Calculator();
console.log(calc.add(5)); // 5
console.log(calc.subtract(2)); // 3
console.log(calc.multiply(4)); // 12
console.log(calc.divide(3)); // 4
calc.clear();
console.log(calc.getResult()); // 0
console.log(calc.calculate('10 +   2 *    (   6 - (4 + 1) / 2) + 7')); // Should print the result
// Uncomment below to test error
// console.log(calc.calculate('5 + abc')); // Should throw error


















class Calculator {
    constructor() {
        this.result = 0;
    }

    add(num) { this.result += num; }
    subtract(num) { this.result -= num; }
    multiply(num) { this.result *= num; }
    divide(num) {
        if (num === 0) throw new Error('Cannot divide by zero');
        this.result /= num;
    }
    clear() { this.result = 0; }
    getResult() { return this.result; }

    calculate(expression) {
        // Remove extra spaces
        const cleaned = expression.replace(/\s+/g, '');
        // Check for invalid characters
        if (/[^0-9+\-*/().]/.test(cleaned))
        throw new Error('Invalid characters in expression');
        this.result = eval(cleaned); // Use with caution
        return this.result;
    }
}

// Example usage;
const calc = new Calculator();
console.log(calc.calculate('10 + 2 * (6 - (4 + 1) / 2) + 7'));