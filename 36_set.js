let nums = new Set("Bookkeeper")
console.log(nums)

let num1 = new Set()
num1.add(1)
num1.add(1)
num1.add(2)
num1.add(3)
num1.add(4)
num1.add(5)
num1.add(1)
num1.add(1)
num1.add('bibin')
num1.add('django')

console.log(num1)
console.log(num1.has('bibin'))