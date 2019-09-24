function mapClone(fn, fn2, arr){
  return function(){
    return fn(fn2, arr)
  }
}
