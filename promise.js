let p = new Promise((resolve, reject) => {
  let t = true;
  if(t){
    resolve({num: 1, message: "Inside promise..."}); // what we want promise to do when fulfilled/succeeds
  } else {
    reject("failed"); // what we want promise to do when it fails
  }
})

// p.then((a1) => {
//   return a1; // do this when it succeeds
// }).then((result) => {
//   console.log(result)
//   return result*3;
// }).then((res) => {
//   console.log(res);
//   return res*3;
// }).then((final) => {
//   console.log(final);
// }).catch((message) => {
//   console.log(message);
// })

// then gets sent the resolved parameters
p.then((resolveMessage) => {
  console.log(resolveMessage);
  return resolveMessage['num'];
}).then((returnedThenValue) => {
  console.log(returnedThenValue + " is returned")
  return returnedThenValue *20;
}).then((nextThenReturnedVal) => {
  console.log(nextThenReturnedVal + " is returned")
}).catch( (returnedError) => {
  console.log(returnedError);
})
