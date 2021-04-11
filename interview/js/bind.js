
function bind (context,...args){
  context = context ||window
  let fn = Symbol('fn')
  context[fn]=this;
  return function (..._args){
    args = args.concat(_args);
    

  }
}