let cadena=prompt("Introduzca una cadena:")
        function cadenaMitad (cadena) {
            let mitad=0;
            for (acumulador=0; acumulador<cadena.length; acumulador++) {
            mitad=cadena.lenght/acumulador
            }
            return "La priemra mitad de la cadena es "+mitad
        }
        function caracter (cadena) {
            for (acumulador=0; acumulador<cadena.length; acumulador++) {
                if (cadena.charAt[acumulador]=="a") {
                    
                }
            }
            return "El último caracter es: "+cadena.charAt(0);

        }
        function inversa (cadena) {
            return "La cadena al revés es: "+cadena.substring(cadena.length,0)
        }
        function caracterGuion (cadena) {
            let cadenaguion="";
            cadenaguion=cadena.replace(/\s+/g, "-");
            return "La cadena introducida con guiones sería "+cadenaguion;
        }
        function vocales(cadena) {
            let numVocales=0;
            numVocales=cadena.match(/[aeiou]/gi).length
            return "El numero total de vocales son: " +numVocales;
        }
        function imprimirDatos() {
            let mita="", carac="", inver="", guion="", vocal="";
            mita=cadenaMitad(cadena);
            carac=caracter(cadena);
            inver=inversa (cadena);
            guion=caracterGuion(cadena);
            vocal=vocales(cadena);
            return mita+ +carac+ +inver+ +guion+ +vocal;
        }
        let r=imprimirDatos();
        document.write(r)