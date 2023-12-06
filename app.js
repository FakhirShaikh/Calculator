var result=document.getElementById("result")

function setdata(text){
    result.value +=text
}

function calcualte(){
    result.value= eval(result.value)
}
function clearall(){
    result.value= ""
}

function square(){
    result.value= eval(result.value*result.value)
}
function squareroot(){
    result.value= Math.sqrt(result.value)
}