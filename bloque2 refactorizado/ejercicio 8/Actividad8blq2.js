
        a=parseInt(prompt("Inrtoduzca un número"))
        b=parseInt(prompt("Inrtoduzca otro número"))
        c=parseInt(prompt("Inrtoduzca otro número"))
        function mostrarMenor(a,b,c) {
            if (a<b && a<c) {
                document.write("El número menor es el primero: " +a);
            } else if (b<a && b<c) {
                document.write("El número menor es el segundo: " +b);
            } else if (c<a && c<b) {
                document.write("El número menor es el tercero: " +c);
            } else {
                document.write("Hay números iguales");
            }
        }
        mostrarMenor(a, b, c);
 