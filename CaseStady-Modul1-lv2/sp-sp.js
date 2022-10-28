class cart{
    name;
    price
    constructor(name,price){
        this.name = name;
        this.price = price ;
    }
}
let data = []
function mua1(){
    data.push(new cart("a1",200))
    show()
}
function mua2(){
    data.push(new cart("a2",300))
    show()
}
function mua3(){
    data.push(new cart("a3",400))
    show()
}
function mua4(){
    data.push(new cart("a4",500))
    show()
}
function mua5(){
    data.push(new cart("a5",600))
    show()
}
function mua6(){
    data.push(new cart("a6",700))
    show()
}
function mua7(){
    data.push(new cart("a7",800))
    show()
}
function mua8(){
    data.push(new cart("a8",900))
    show()
}
function mua9(){
    data.push(new cart("a9",900))
    show()
}
function mua10(){
    data.push(new cart("a10",900))
    show()
}
function show (){
    document.getElementById("numberDot").innerHTML = data.length ;
}


