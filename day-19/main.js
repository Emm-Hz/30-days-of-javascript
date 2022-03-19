function levelOne() {
  // Create a closure which has one inner function
  function outerFunction() {
    let count = 0;
    function innerFunction() {
      count++;
      return count;
    }

    return innerFunction;
  }
  const innerFunc = outerFunction();

  console.log(innerFunc());
}

// Create a closure which has three inner functions
function levelTwo() {
  function outerFunction() {
    let count = 0;
    function plusOne() {
      count++;
      return count;
    }
    function minusOne() {
      count--;
      return count;
    }
    function multiTwo() {
      count = count * 2;
      return count;
    }

    return {
      plusOne: plusOne(),
      minusOne: minusOne(),
      multiTwo: multiTwo(),
    };
  }
  const innerFuncs = outerFunction();

  console.log(innerFuncs.plusOne);
  console.log(innerFuncs.minusOne);
  console.log(innerFuncs.multiTwo);
}
