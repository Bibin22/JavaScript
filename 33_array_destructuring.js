let nums = [1,2,3,4]

let [a,b,c,d] = nums
console.log(`a=${a}, b=${b}, c=${c}, d=${d}`)

let[p,q,,s]=nums
console.log('s=',s)

// let x = 5
// let y = 6

// [x,y] = [y,x]

// console.log(x,y)


let words = 'My name is Bibin Joy Kottisserikudiyil'
let myself = words.split(' ')
console.log(myself)

let [a1,b1,c1,...d1] = myself
console.log(a1,b1,c1,d1)
console.log(d1)