let output=document.getElementById("inp")
function display(num){
    output.value+=num
}


let cl=document.getElementById("cl")
cl.onclick=function(){
    output.value=""
}


function delt(){
    output.value=output.value.slice(0,-1)
}
function calc(){
        output.value=eval(output.value)
}