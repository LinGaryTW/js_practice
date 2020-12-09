const method_hi = function sayHi(params) {
  if(params === 'Hi'){
    return true
  }else {
    return false
  };
}

const employee = {
  makeChange: function(bill, price) {
    return bill - price;
  },
  hiTest: method_hi
};
module.exports = employee;