var ele;
var op1 = { id : "0", up : "123", down : "745", opera : "SUMA", resultado : "868"}
var op2 = { id : "1", up : "255", down : "523", opera : "SUMA", resultado : "778"}
var op3 = { id : "2", up : "911", down : "534", opera : "RESTA", resultado : "377"}
var op4 = { id : "3", up : "490", down : "192", opera : "RESTA", resultado : "298"}
var op5 = { id : "4", up : "711", down : "688", opera : "RESTA", resultado : "23"}
var op6 = { id : "5", up : "23", down : "4", opera : "MULTIPLICACIÓN", resultado : "92"}
var op7 = { id : "6", up : "12", down : "8", opera : "MULTIPLICACIÓN", resultado : "96"}
var op8 = { id : "7", up : "78", down : "3", opera : "MULTIPLICACIÓN", resultado : "234"}
var op9 = { id : "8", up : "30", down : "5", opera : "MULTIPLICACIÓN", resultado : "150"}
var op10 = { id : "9", up : "77", down : "2", opera : "MULTIPLICACIÓN", resultado : "154"}






var operaciones = [op1, op2, op3, op4, op5, op6, op7, op8, op9, op10]

function iniciar() {
    mostrarOperaciones()
}


function mostrarOperaciones() {

    operaciones.map(function(operacion) {
        ele = document.getElementById(operacion.id)

        var opera = document.createElement("p")
        opera.className = "d-flex justify-content-center align-items-center"
        opera.innerHTML = operacion.opera
        ele.appendChild(opera)

        var arriba = document.createElement("p")
        arriba.className = "d-flex justify-content-center align-items-center"
        arriba.innerHTML = operacion.up
        ele.appendChild(arriba)

        var abajo = document.createElement("p")
        abajo.className = "d-flex justify-content-center align-items-center"
        abajo.innerHTML = operacion.down
        ele.appendChild(abajo)

        
        var resultado = document.createElement("input")
        resultado.name = "resultado"
        resultado.className = "d-flex justify-content-center align-items-center form-control"
        ele.appendChild(resultado)
        
    })
    

}


function validateResultado() {
    var resultado = []
    operaciones.map(function(operacion) {
        var resul = operacion.resultado
        resultado.push(resul)
        
    })
    var arrInput = []
    var input = document.getElementsByName("resultado")
    for (let i = 0; i < 10 ; i++) {
        var a = input[i]
        arrInput.push(a)        
    }
    console.log(arrInput)
    console.log(resultado)
    for(let i = 0; i < 10; i++) {
        if (arrInput[i].value === resultado[i]) {
            document.getElementById("success").style = "display: flex"
            document.getElementById("fail").style = "display: none"
        } else {
            document.getElementById("fail").style = "display: flex"
        }
    }

}
function aleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo + 1 - minimo) + minimo);
}
window.onload = iniciar