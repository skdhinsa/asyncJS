function firstAction(callback, message, anotherCallback) {
  console.log(message);
  setTimeout(callback,5000);
  anotherCallback();
}

function secondAction(message) {
  console.log(message);
}

function thirdAction() {
  console.log("Third action");
}

// callback must not have parenthesis -> so if args passed turn into anon function
setTimeout(() => firstAction(() => secondAction("Second action "),"First action",thirdAction), 3000);
