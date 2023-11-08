

function calcularvalores(){


let valor1= Number(document.getElementById("txtvalor1").value);
let valor2= Number(document.getElementById("txtvalor2").value);

let opperacao = document.getElementById("operacao").value;

 let resultado;

if(operacao=== "+"){
    valor1+valor2
}
else if(operacao=== "-"){
    valor1-valor2
}
else if( operacao==="*"){
    valor1*valor2
}
else if (operacao==="/"){
    valor1/valor2
}
caixaresultado.textcontent =resultado







}