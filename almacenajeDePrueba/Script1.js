function sumatoriaBajoImporte(gananciaPorMes) {
    let sumatoria = 0;
    for (var i = 0; i < gananciaPorMes.length; i++) {
        if (1000 >= gananciaPorMes[i] && 0 < gananciaPorMes[i]) {
            sumatoria = sumatoria + gananciaPorMes[i];
        }
    }
    return sumatoria;
}
function asientosDisponibles(asientosDis, asiento) {
    for (var i = 0; i < asientosDis.length; i++) {
        if (asiento == asientosDis[i]) {
            return "Felicitaciones, el asiento número " + asiento + " está disponible";
        }
    }
    return "Lo sentimos, el asiento número " + asiento + " está ocupado, pero aún quedan " + asientosDis.length + " asientos disponibles";
}
function reporteDePasajeros(estacion) {
    let sumaEstaciones = 200;
    let arrayEstaciones = [];
    for (var i = 0; i <= estacion; i++) {
        if (i != 5 && i>0) {
            sumaEstaciones = sumaEstaciones + 20;
        } else if (i == 5) {
            sumaEstaciones = sumaEstaciones + 40;
        } else {
          
        }
        arrayEstaciones.push("En la estación " + i + " hay " + sumaEstaciones + " pasajeros arriba del tren");
    }
    return arrayEstaciones;
}
let funciones ={
    pasajeros: reporteDePasajeros,
    suma: sumatoriaBajoImporte
}

module.exports = funciones;