const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors")
let result = document.getElementById("result");
let select = document.getElementById("select");
const arr = ['rock','paper','scissors']

rock.onclick = function rock(){

    rand = Math.floor(Math.random()*3)
    let choose = arr[rand]
    
    if (choose =='scissors'){
        result.innerHTML = `You Won`
        select.innerHTML = `<img src="imgs/scissors.png">`
    }
    else if(choose =='paper'){
        result.textContent = "You Loss"
        select.innerHTML = `<img src="imgs/paper.png">`
    }
    else{
        result.textContent = "Tie"
        select.innerHTML = `<img src="imgs/rock.png">`
    }
}

paper.onclick = function rock(){

    rand = Math.floor(Math.random()*3)
    let choose = arr[rand]
    
    if (choose =='scissors'){
        result.textContent = "You Loss"
        select.innerHTML = `<img src="imgs/scissors.png">`
    }
    else if(choose =='paper'){
        result.textContent = "Tie"
        select.innerHTML = `<img src="imgs/paper.png">`
    }
    else{
        result.textContent = "You Won"
        select.innerHTML = `<img src="imgs/rock.png">`
    }
}

scissors.onclick = function rock(){

    rand = Math.floor(Math.random()*3)
    let choose = arr[rand]
    
    if (choose =='scissors'){
        result.textContent = "Tie"
        select.innerHTML = `<img src="imgs/scissors.png">`
    }
    else if(choose =='paper'){
        result.textContent = "You Won"
        select.innerHTML = `<img src="imgs/paper.png">`
    }
    else{
        result.textContent = "You Loss"
        select.innerHTML = `<img src="imgs/rock.png">`
    }
}