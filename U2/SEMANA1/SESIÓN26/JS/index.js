//RETO 4: RECORRIENDO ARREGLOS
var juegos = ["Minecraf", "FIFA",50,25,10]; //5 elementos = juegos,length

let i=0; //INICIALIZANDO
while( i <= (juegos.lengyth-1) ){
     console.log(juegos[i]);
     i=1+1;
}

let valor = 0;
do{
    console.log(valor);
    valor=valor+1;
} while(valor<=10);

let inicio=1;
do{
    console.log(inicio);
    inicio=inicio+2;

}while(inicio<=100)

let comienzo=10;
do{
    console.log(comienzo);
    comienzo=comienzo+4;
}while(comienzo <=50);



let dato;

//const patron = /hola/;¨  //patrones de palabras
const patron = /hola[0-9]mundo/;  //patrones de numero

do{
    dato = prompt(" INGRESA UN PALABRA: ");

  }while(!patron.test(dato))