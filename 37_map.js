let map = new Map()

map.set("Bibin",'Django')
map.set("Joji","Flutter")
map.set("Sruthy","REST")
console.log(map)
console.log(map.keys());
console.log(map.get("Bibin"))
for(let[k,v] of map){
    console.log(k, ":", v)
}

map.forEach((v, k)=>{
    console.log(k, ":", v)
})