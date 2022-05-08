let num = 1
function show(){
    console.log('hi', num)
    num++
    if (num <= 10299)
        show()
}

show()