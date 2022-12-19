let resultado = 0;
function sumando(numero1, numero2){

    resultado = numero1 + numero2;
    return resultado;

}

console.log(sumando(4 , 5 ) );
console.log( sumando(8 , 12 ) );

var hoyEsUnDiaSoleado; //EJEMPLO DE CAMEL CASE

//HALLANDO EL AREA DE UN CIRCULO
let areacirculo;
let radio;
const pi=3.14;

radio=prompt("INGRESA UN RADIO");
areacirculo = pi*radio*radio;
console.log(areacirculo);
//let radio;
//const pi=3.14;

//console.log(resultadoArea);

//PASANDO CODEGO A FUNCIÓN
function areaCirculo( radio ){

    const pi=3.14; //cuando usamos const significa que nunca va a cambiar ese valor
    let resultadoArea;
    resultadoArea = pi*radio*radio;
    return resultadoArea;

}


let radioValor = prompt("INGRESA UN RADIO: ");
console.log(areaCirculo( radioValor ));

function notas( calificación ){

    if(calificación>=13 ){

        alert("USTED APROBÓ EL CURSO, FELICIDADES");
    }

    else if(calificación<13){
        alert("USTED JALÓ EL CURSO, DEBE ESFORZARSE M{AS PARA LA PROXIMA");
    }
}

let valorNota = prompt("INGRESA TU NOTA:");
notas( valorNota );

let areatriangulo;
let base;
const altura=6;

base=prompt("INGRESA UNA BASE");
areatriangulo = base*altura/2

console.log(areatriangulo);

function areatriangulo( base, altura ){

    const altura=6; 
    let resultadoArea;
    resultadoArea = base*altura/2;
    return resultadoArea;  }
