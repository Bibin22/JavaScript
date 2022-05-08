let laptop1 = {
    cpu:'i7',
    ram:16,
    brand:'hp',
    compare:function(other){
        if(this.cpu > other.cpu)
            console.log(this);
        else
        console.log(other)

    }
}

let laptop2 = {
    cpu:'i9',
    ram:16,
    brand:'hp'
}

laptop1.compare(laptop2)
