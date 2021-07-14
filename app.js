// promise represents the eventual completion (or failure)
// of an asynchronous operation and its resulting value.
const p = new Promise((res) => {
  res(1);
})

async function asyncReturn() {
  console.log(typeof(p));
  return p;
}

function basicReturn() {
  return Promise.resolve(p); //returns a promise that is resolved with a given value.
  // if the value is a promise, a promise is returned
}


console.log(p === asyncReturn()); // false
console.log(p === basicReturn()); // true, since basicReturn() returns a promise


// make: create a promise to represent an async value
// when constructed promise starts off in pending state (so no body in promise)
// executor: callback function decides when to resolve or reject a promise

// use: consume a promise to use a future value (result of async op in out code)  
// promise.then() handles fulfillment
// it's waiting for the async value to be fulfilled