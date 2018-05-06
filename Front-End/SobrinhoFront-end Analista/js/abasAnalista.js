var atendimentos = document.getElementById("atendimentos");
var lucros = document.getElementById("lucro");
var btnAtendimentos = document.getElementById("btnAtendimentos");
var btnLucro = document.getElementById("btnLucro");



function openAnalista() {
    atendimentos.style.display = "none";
    lucros.style.display = "block";
    btnLucro.style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
    btnAtendimentos.style.boxShadow = "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)";
    lucros.style.transition = "5s";
}
function openCliente() {
    atendimentos.style.display = "block";
    lucros.style.display = "none";
    btnAtendimentos.style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
    btnLucro.style.boxShadow = "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)";
}
