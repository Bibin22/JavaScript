let dictObject = {
    name:'bibin',
    tech:'django',
    laptop:{
        cpu:'i7',
        ram:4,
        brand:'asus'
    }
}

console.log(dictObject.name)
console.log(dictObject.laptop)
console.log(dictObject.laptop.brand.length)

console.log(dictObject.laptop.brand1111111?.length)
console.log(dictObject?.laptop)

delete dictObject.laptop
console.log(dictObject)

delete dictObject.name
console.log(dictObject)