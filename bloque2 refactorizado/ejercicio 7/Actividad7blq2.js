
let num=0, acum=0, numnegativo=0, numpositivo=0, mul15=0, numpares=0;
function valores() {
    while (acum<10) {
        num=parseInt(prompt("Introduzca un valor numérico: "));
        acum++;
        if (num<0) {
            numnegativo++;
        } else if (num>0) {
            numpositivo++;
        }
        if (num % 15==0) {
            mul15++;
        }
        if (num % 2==0) {
            numpares+=num;
        }
    }
    document.write("Cantidad de valores negativos: "+numnegativo+"<br>");
    document.write("Cantidad de valores positivos: "+numpositivo+"<br>");
    document.write("Cantidad de múltiplos de 15: "+mul15+"<br>");
    document.write("Valor acumulado de los números pares: "+numpares+"<br>");
}
valores();
