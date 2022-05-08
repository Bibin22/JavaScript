let dictObject = {
    name:'bibin',
    tech:'django',
    laptop:{
        cpu:'i7',
        ram:4,
        brand:'asus'
    }
}

for(let key in dictObject){
    console.log(key, dictObject[key])
}

for(let key in dictObject.laptop){
    console.log(key, dictObject.laptop[key])
}