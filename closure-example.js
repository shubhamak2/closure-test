const innerFunction = () => {
  var password = "abc123";

  return () => {
    return password;
  }
}

// Example-1
console.log(innerFunction());

// Example-2
console.log(innerFunction()());