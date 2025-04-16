const myPromise = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
          const success = false;
      
          if (success) {
            resolve("Task done!");
          } else {
            reject("Something went wrong");
          }
        }, 1000);
      }
);

  myPromise
.then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });