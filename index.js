function receivesAFunction(callback) {
  callback()
}


function returnsANamedFunction() {
  return named = () => {console.log('Named was returned and called')}
}


function returnsAnAnonymousFunction() {
  return () => {console.log('Named was returned and called')}
}
