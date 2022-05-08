function Alien(name, tech){
    this.name = name
    this.tech = tech

    this.work = function(){
        console.log('Hello World');
    }
}

let alien1 = new Alien ('bibin', 'django')
let alien2 = new Alien('kiran','js')
console.log(alien1)
console.log(alien2)
alien1.tech = 'React'
console.log(alien1)

alien1.work();