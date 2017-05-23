var assert = {
  isTrue: function(assertionToCheck, assertion) {
    if(!assertionToCheck) {
      throw new Error('Failed: ' + assertionToCheck + ' is not truthy: ' + assertion);
    } else {
      console.log('Passed');
    }
  },

  isFalse: function(assertionToCheck) {
    if(!!assertionToCheck) {
      throw new Error('Failed: ' + assertionToCheck + ' is not falsy');
    } else {
      console.log('Passed');
    }
  },

  isObject: function(assertionToCheck) {
    if(Object.prototype.toString.call(assertionToCheck) !== '[object Object]' ) {
      throw new Error('Failed: ' + assertionToCheck + ' is not truthy');
    } else {
      console.log('Passed');
    }
  }
};
