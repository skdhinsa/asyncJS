const userLeft = false;
const userWatchingMeme = false;

// function watchCallback(callback, errorCallback){
//   if(userLeft){
//     errorCallback({
//       name: 'User Left',
//       message: 'sad'
//     });
//   } else if (userWatchingMeme) {
//     errorCallback({
//       name: 'User watching meme',
//       message: 'Meme'
//     });
//   } else {
//     callback({name:"user not left", message:"this is an object"});
//   }
// }


// watchCallback((message) => {console.log(message)}, (error) => {
//   console.log(error)
// });

// we can use promises instead of calling the callback inside a callback
// avoid callback hell
function watchCallbackPromise() {
  return new Promise((resolve, reject) => {
    if(userLeft){
      reject({
        name: 'User Left',
        message: 'sad'
      });
    } else if (userWatchingMeme) {
      reject({
        name: 'User watching meme',
        message: 'Meme'
      });
    } else {
      resolve({name:"user not left", message:"this is an object"});
    }
  });
}

watchCallbackPromise().then((message) =>{
  console.log(message); // do this when promise fulfilled
}).catch((error) => {
  console.log(error); // do this when promise fails
});
