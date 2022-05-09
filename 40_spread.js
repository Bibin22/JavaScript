const oldArray = [1,2,3,4]
const newArray = [...oldArray,5,6,7]

const oldObjects = {
    name:"Bibin"
}

const newObjects = {
    ...oldObjects,
    agge:'24'
}

console.log(newArray)
console.log(newObjects)