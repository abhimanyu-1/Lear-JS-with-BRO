
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors")
let result = document.getElementById("result");
let select = document.getElementById("select");
const arr = ['rock','paper','scissors']
let cvalue = document.getElementById("cvalue");
let yvalue = document.getElementById("yvalue");
let c = 0;
let y = 0;


rock.onclick = function rock(){

    rand = Math.floor(Math.random()*3)
    let choose = arr[rand]
    
    if (choose =='scissors'){
        result.innerHTML = `You Won`
        result.style.color="green";
        select.innerHTML = `<img src="imgs/scissors.png">`
        y += 1
        yvalue.textContent = y
    }
    else if(choose =='paper'){
        result.textContent = "You Loss"
        result.style.color="red";
        select.innerHTML = `<img src="imgs/paper.png">`
        c += 1
        cvalue.textContent = c
    }
    else{
        result.textContent = "Tie"
        result.style.color="rgb(117, 90, 0)";
        select.innerHTML = `<img src="imgs/rock.png">`
    }
}

paper.onclick = function rock(){

    rand = Math.floor(Math.random()*3)
    let choose = arr[rand]
    
    if (choose =='scissors'){
        result.textContent = "You Loss"
        result.style.color="red";
        select.innerHTML = `<img src="imgs/scissors.png">`
        c += 1
        cvalue.textContent = c
    }
    else if(choose =='paper'){
        result.textContent = "Tie"
        result.style.color="rgb(117, 90, 0)";
        select.innerHTML = `<img src="imgs/paper.png">`
    }
    else{
        result.textContent = "You Won"
        result.style.color="green";
        select.innerHTML = `<img src="imgs/rock.png">`
        y += 1
        yvalue.textContent = y
    }
}

scissors.onclick = function rock(){

    rand = Math.floor(Math.random()*3)
    let choose = arr[rand]
    
    if (choose =='scissors'){
        result.textContent = "Tie"
        result.style.color="rgb(117, 90, 0)";
        select.innerHTML = `<img src="imgs/scissors.png">`
    }
    else if(choose =='paper'){
        result.textContent = "You Won"
        result.style.color="green";
        select.innerHTML = `<img src="imgs/paper.png">`
        y += 1
        yvalue.textContent = y
    }
    else{
        result.textContent = "You Loss"
        result.style.color="red";
        select.innerHTML = `<img src="imgs/rock.png">`
        c += 1
        cvalue.textContent = c
    }
}
