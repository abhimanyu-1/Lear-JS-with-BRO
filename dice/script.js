let btn = document.getElementById("btn").onclick = function(){

    const inp = document.getElementById("inp").value;
    const diceres = document.getElementById("diceresult");
    const diceimg = document.getElementById("diceimage");
    const value =[];
    const image =[];

    for (let i=0;i<inp;i++){
       const values = Math.floor(Math.random()*6)+1;
       value.push(values)

       image.push(`<img src="imgs/${values}.png">`);
    }

    diceres.textContent = `Dice :${value.join(' ,')}`;
    diceimg.innerHTML = image.join('')


}