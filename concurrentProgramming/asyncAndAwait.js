const car1 = new Promise((resolve, reject) => {
  const reached = true;
  if (reached) setTimeout(resolve, 3000, "Krish reached the destination");
  else reject("Krish not reached");
});

async function report() {
  try {
    console.log("start");
    res = await car1;
    console.log(res);
    console.log("end");
  } catch (error) {
    console.log(error);
  }
}

report();
