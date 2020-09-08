function SampleCore() {
  function foo() {
    return "bar";
  }

  return {
    foo,
  };
}

module.exports = SampleCore;
