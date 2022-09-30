//functions bolum sonu egzersizi

let zikirDOM = document.querySelector("#zikir")
let zikirCheck = 0;
let butonAllah = document.querySelector("#arttir")
let butonSifirla = document.querySelector("#sifirla")

zikirDOM.innerHTML = zikirCheck

butonAllah.addEventListener("click", clickEvent)
butonSifirla.addEventListener("click",clickEvent)

function clickEvent (){
    console.log(this.id)
    if(this.id == "arttir"){
        
        zikirDOM.innerHTML = ++ zikirCheck;
    }else{
        zikirCheck = 0;
        zikirDOM.innerHTML = zikirCheck;
    }
}

