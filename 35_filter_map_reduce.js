let nums = [42,56,77,99,100,22]
// Filter
let f = nums.filter(n=>n%2==0)
console.log(f)

f.forEach(n=>{console.log(n)})

// MAP
m = nums.map(n=>n*2)

console.log(nums,m)


// Reduce

r = nums.reduce((a,b)=>a+b)
console.log(r)

// FILTER MAP REDUCE

let result = nums.filter(n=> n%2==0).map(n=> n*2).reduce((a,b)=> a+b)
console.log(result)
