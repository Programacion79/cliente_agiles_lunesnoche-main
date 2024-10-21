
import {gastos} from "./simulador.js";
//console.log(gastos);

//COMO FILTRO UN ARREGLO

// Para filtrar, recorrer y mapear arreglos
// Los programadores de JS usan los ARRAY METOSDOS

// APLICAR UN FILTRO PARA OBTENER LOS GASTOS MAYORES A 8000

let filtro=gastos.filter(function(gasto){
    return gasto.valor>8000
})

let fila = document.getElementById("fila")
gastos.forEach(function(gasto){

    // 2.COMIENZO A CREAR ETIQUETAS
    // Segun mi necesidad

    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow","p-5")

    let decripcion=document.createElement("h3")
    decripcion.classList.add("text-center","fw-bold")
    // manipulando el contenido de texto de cualquier etiketa
    decripcion.textContent=gasto.descripcion

    let montoGasto=document.createElement("h2")
    montoGasto.classList.add("text-center","fw-bold","text-success")
    montoGasto.textContent="$"+gasto.valor

    let imagen=document.createElement("img")
    imagen.classList.add("img-fluid")

    if(gasto.categoria=="transporte"){
        imagen.src="../../assets/img/transporte.png"
    }else if(gasto.categoria=="alimentos"){
        imagen.src="../../assets/img/comida-rapida.png"
    }else if(gasto.categoria=="entretenimiento"){
        imagen.src="../../assets/img/mascaras-de-teatro.png"
    }

    //3.Ordenar por Jerarquias las etiquetas que acabo de crear
    tarjeta.appendChild(decripcion)
    tarjeta.appendChild(montoGasto)
    tarjeta.appendChild(imagen)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})
