function pedirValores(num) {
    for (acumulador=0; acumulador<num.length; acumulador++) {
        num[acumulador]=parseInt(prompt("Introduza 8 números"))
    }
    return num;
}
function sumaValores (num) {
    let numeroTotal=0;
    for (acumulador=0; acumulador<num.length; acumulador++) {
        numeroTotal=num[acumulador]+numeroTotal;
    }
    return "La suma de todos los valores introducidos son: "+numeroTotal
}
function mayor36 (num) {
    let numtotal=0;
    for (acumulador=0; acumulador<num.length; acumulador++) {
        if (num[acumulador]>=36) {
            numtotal=num[acumulador]+numtotal
        }
    }
    return "La suma de los números mayores de 36 es "+numtotal
}
function mayor50(num) {
    let contador50=0;
    for (acumulador=0; acumulador<num.length; acumulador++) {
    if (num[acumulador]>=50) {
        contador50++;
    }
    }
    return "La cantidad de números mayores a 50 son "+contador50
}
function imprimirValores() {
    num=pedirValores(num);
    suma=sumaValores(num);
    mayor=mayor36(num);
    mayores=mayor50(num);
    return "Los números introducidos son "+num+ "<br>" +suma+ "<br>" +mayor+ "<br>" +mayores

}
let num=new Array(8);
let r=imprimirValores();
document.write(r)