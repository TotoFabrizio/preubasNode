/*let fs = require("fs");
let moment = require("moment");
let cosas = require("./almacenajeDePrueba/Script1");
console.log("Hola mundo");
console.log("MAMA mia");
console.log(cosas.pasajeros(5));
console.log(cosas.suma([100,-50,1000]));
let datos = fs.readFileSync(__dirname + "/hola.txt","utf-8");
console.log(datos);
console.log(moment().format("MMM DD YYYY"));
let string = "Hola mundo";
console.log(string.replace("mundo", 5));
function Auto(marca,modelo){
  this.marca = marca;
  this.modelo = modelo;
};
let auto1 = new Auto("Ford","Falcon");
console.log(auto1);
let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
      notas: [10,5,9,9.5],
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    }
  ]
let array = [[15,12,25],[0,5,15]];
console.log(array[0][0]);
console.log(estudiantes[0].nombre);
estudiantes[0].nombre = "Pedro";
console.log(estudiantes[0].nombre);
console.log(estudiantes[1]["nombre"]);
console.log(estudiantes[0].notas[0]);
let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(horas){
        this.energia = this.energia - horas*5;
        this.experiencia = this.experiencia + horas * 2;
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
function noParesDeContarImparesHasta(numero){
  let contados = 0;
  for(i = 0; i<=numero; i++){
    if(i%2 == 1){
      contados++;
    }
  }
  return contados;
}
console.log(noParesDeContarImparesHasta(5));
function agregarHttp(url) {
  return "http://" + url;
}
function largoString(url){
  return url.length;
}
function procesar(array,callBack){
  let arrayTerminado = [];
 for (let i = 0; i < array.length; i++) {
   arrayTerminado.push(callBack(array[i]));
 }
 return arrayTerminado;
}
console.log(procesar(["www.google.com","www.yahoo.com"],agregarHttp));
let estudiantes = [
  {nombre: 'John', promedio: 8.5, aprobado: true},
  {nombre: 'Jane', promedio: 7, aprobado: true},
  {nombre: 'June', promedio: 3, aprobado: false},
];
let aprobados = estudiantes.filter(function(objeto){
  return objeto.aprobado == true;
});
let desaprobados = estudiantes.filter(function(objeto){
  return objeto.aprobado == false;
});
console.log(desaprobados);*/
let filtro = (num) => num >=18;
let edades = [18,32,15,12,3];
function filtrar(array,funcion){
  let filtrado = [];
  for (let i = 0; i < array.length; i++) {
    if(funcion(array[i]) == true){
      filtrado.push(array[i]);
    }
  }
  return filtrado;
}
console.log(filtrar(edades,filtro));