var cliente= document.getElementById("buscarCliente");
var analista= document.getElementById("buscarAnalista");
var btnCliente = document.getElementById("btnCliente");
var btnAnalista = document.getElementById("btnAnalista");



function openAnalista(){
        cliente.style.display = "none";
        analista.style.display = "block";    
        btnAnalista.style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
        btnCliente.style.boxShadow = "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)";
        analista.style.transition="5s";
}
function openCliente(){
    cliente.style.display = "block";
    analista.style.display = "none";
    btnCliente.style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
    btnAnalista.style.boxShadow = "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)";
}