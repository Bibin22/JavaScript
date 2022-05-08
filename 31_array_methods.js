let arr = [2,3,4,5,6,7]
console.log('array', arr)

arr.push(9)
arr.push(10)

console.log('push', arr)

arr.pop()

console.log('pop', arr)

arr.shift()

console.log('shift', arr, 'it removs the first element')

arr.unshift(1)

console.log('unshift', arr, 'it add 1 on first index')

arr.splice(5)

console.log('remving items from 5th position', arr)

arr.splice(2, 3)
console.log('it will remove 3 item from position 2', arr)

arr.splice(2,3, 10,11,12)
console.log('it will add 3 item from position 2', arr)
