function firstNext(){
    var nome = document.getElementById("inome")
    let sobrenome = document.getElementById("isobre")
    let sexo = document.getElementById("isexo")
    let idade = document.getElementById("iage")

    if (nome.value == "" || sobrenome.value == "" || idade.value == "" || sexo.value == "of") {
        alert("Verifique se todos os campos foram respondidos")
    } else if (idade.value <= 1 || idade.value >= 100){
        alert("Idade inválida")
    } else {
        window.location.href = "pag002.html";
    }
}

function secondNext(){
    let pais = document.getElementById("ipais")
    let estado = document.getElementById("iest")
    let cidade = document.getElementById("icid")

    if (pais.value == "" || estado.value == "" || cidade.value == ""){
        alert("Verifique se todos os campos foram respondidos")
    } else {
        window.location.href = "pag003.html";
    }
}

function thirdNext(){
    let tel = document.getElementById("itel")
    let email = document.getElementById("iemail")
    if (tel.value == "" || email.value == "") {
        alert("Verifique se todos os campos foram respondidos")
    } else {
        window.location.href = "fim.html";
        var msgfim = document.getElementById("parabens")
        msgfim.innerHTML = `Parábens, ${nome.value}`
    }

}



function back1(){
    window.location.href = "index.html";
}

function back2(){
    window.location.href = "pag002.html"
}