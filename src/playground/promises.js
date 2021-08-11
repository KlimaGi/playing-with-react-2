const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "Giedre",
      age: 31,
    });
    reject("Something went wrong!");
  }, 1500);
});

console.log("before");

promise
  .then((data) => {
    console.log("1", data);

    return "some data";
  })
  .then((str) => {
    console.log("does this run?", str);
  })
  .catch((error) => {
    console.log("error: ", error);
  });

console.log("after");
