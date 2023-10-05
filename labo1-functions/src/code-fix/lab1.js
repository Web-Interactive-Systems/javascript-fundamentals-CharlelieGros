// TODO: Fix the errors in the functions below!

const functions = {
  sum(a, b) {
    // Todo use typeof and throw
    if (typeof a !== 'number' || typeof b !== 'number')
      throw new Error('argument needs to be a number');
    return a + b;
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
  },

  doubleNumbersInArray: function doubleNumbersInArray(array) {
    // Todo: use Array/map
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    const double = function (el) {
      return el * 2;
    };
    return array.map(double);
  },

  checkForBadWords(input) {
    // Todo: use Array/forEach and throw
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    let grosMot = ['merde'];
    grosMot.forEach((el) => {
      if (input.includes(el)) throw new Error('Input includes a bad word.');
    });
    return 'No bad words';
  },

  nameOfWeekDay(index) {
    const jours = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    return jours[index];
  },

  sortNumbers(array) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    return array.sort((a, b) => a - b);
  },

  createCounterFunction(input) {
    return () => {
      input++;
      return input;
    };
  },

  createHelloMessage(name) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    return `Hello ${name}. Are you well?`;
  },

  callTheCallback(callback) {
    // Docs: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function pas ;cc ENZO <3
    return callback(1, 2);
  },

  combineArrays(array1, array2) {
    return array1.concat(array2);
  },

  promiseMeMoney() {
    const promise = new Promise((resolve, rejected) => {
      resolve('send message');
      rejected('error message');
    });
    return promise;
  },
};

module.exports = functions;
