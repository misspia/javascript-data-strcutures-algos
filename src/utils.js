module.exports = {
  clone: (input) => {
    if(Array.isArray(input)) {
      return [...input];
    }
    if(typeof input === 'object') {
      return { ... input };
    }
    return input;
  },
}
