// make JS promises easier

let p = new Promise((resolve, reject) => {
  let t = true;
  if(t){
    resolve({num: 1, message: "Inside promise..."}); // what we want promise to do when fulfilled/succeeds
  } else {
    reject("failed"); // what we want promise to do when it fails
  }
})

// instead of then() chaining
async function doWork(){
  try {
    const a = await p;
    console.log(a['num']);
    const b = a['num']*20;
    console.log(b);
  } catch (error) {
    console.log(error)
  }
}
doWork();
