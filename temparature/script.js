/*let username;
document.getElementById("btn").onclick = function(){
    username = document.getElementById("text").value;
    document.getElementById("name").textContent=`hello ${username}`;}
    

let user ;
user = window.prompt("Enter the name")
document.getElementById("name").textContent = user;


const inc  = document.getElementById("incre");
const dec  = document.getElementById("decre");
const res  = document.getElementById("res");
let m = document.getElementById("main");
let count = 0;
inc.onclick = function(){
    count += 1;
    m.textContent = count;
}
dec.onclick = function(){
    count -= 1;
    m.textContent = count;
}
res.onclick = function(){
    count = 0;
    m.textContent = count;
}
*/

const cf = document.getElementById("cf");
const fc = document.getElementById("fc");
let result = document.getElementById("result");
let btn = document.getElementById("btn");

btn.onclick = function(){
    let temp = Number(document.getElementById("inp").value);
    if(cf.checked){
        temp = temp*9/5 + 32;
        result.textContent = temp.toFixed(1)+"°F"
        
    }
    else if(fc.checked){
        temp = 5/9 * (temp-32)
        result.textContent = temp.toFixed(1)+"°C"

    }
    else{
        result.textContent = "Please select a option"
    }
}
