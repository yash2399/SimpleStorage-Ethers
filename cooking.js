// learn how asynchronous functions work
// if you want popcorn and put salt on it you have to wait (sync)
// if you want to pour drinks you can irrespective of status of popcorn (async)
// async functions return a promise - complete, pending or rejected
// async function have keyword await to check promise

function cookPopcorn() {
  //somecode
  return Promise(/* some code */);
}

async function setMovieNight() {
  await cookPopcorn();
  await pourDrinks();
  // this line will not be executed untill both functions are completed
  startMovie();
}
