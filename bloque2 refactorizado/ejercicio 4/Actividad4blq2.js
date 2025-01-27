
         let suma=0;
         function cal() {
            do {
               num=parseInt(prompt("Introduzca numeros para sumar, escriba 9999 para salir "))
                if (num !==9999) {
                suma=num+suma
                } 
            } while (num !==9999)
            if (suma<0) {
                return "El numero total es menor que cero; "+suma
            } else if (suma > 0) {
                return "El numero total es mayor que cero; "+suma
            } else if ( suma ==0) {
                return "El numero total es igual a cero;"  +suma
            }
         }
         let r=cal();
         document.write(r)
  