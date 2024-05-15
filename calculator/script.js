
const dis = document.getElementById("display");

function appendtodisplay(input){
    dis.value += input;
}
function clearD()
{
    dis.value = "";
}
function calculate(){
    try{
    dis.value = eval(dis.value);
    }
    catch(error){
        dis.value = "Error";
    }
}
