let laptop = {
    cpu:'i7',
    ram:16,
    brand:'hp',
    greetings:function(){
        console.log(this.cpu)
    }
}

laptop.greetings()