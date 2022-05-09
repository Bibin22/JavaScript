class Human{
    constructor(){
        this.gender = "Male"
    }
    printGender(){
        console.log(this.gender)
    }
}

class Person extends Human{
    constructor(){
        super()
        this.name="Bibin"
    }
    printName(){
        console.log(this.name)
    }
}

let person_class = new Person()
person_class.printGender()
person_class.printName()
