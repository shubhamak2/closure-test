const of = require('./of');

const promise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Hello');
    }, 1000)
  })  
}

// Example - 1
promise()
.then((data) => console.log('example-1 response', data))
.catch((error) => console.log('error'));

// Example - 2
const printAsync = (async () => {
  let data;
  try {
    data = await promise()
  } catch(e) {
    console.log('e', e);
  }
  console.log('printAsync', data);
})();

// Example - 3
// Simplified version
const printSimplifiedAsync = (async () => {
  const [error, response] = await of(promise);
  console.log('printSimplifiedAsync response', response)
  console.log('printSimplifiedAsync error', error)
})();



