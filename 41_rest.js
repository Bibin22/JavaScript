const newFunction = (...args)=>(args)
newFunction(1,2,3)


const newFunctions = (...args)=>{
  return args.filter(el=> el%2 === 0)
}

console.log(newFunctions(1,2,3,4,5,6,7,8,9))