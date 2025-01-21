
       function palabra(palabraEscogida) {
        let pal=0;
        switch (palabraEscogida) {
            case "casa":
                pal="house"
                break;
            case "gato":
                pal="cat"
                break;
            case "mesa":
                pal="table"
                break;
            case "perro":
                pal="dog"
                break;
            default:
                document=0
        }
        return pal
       }
        palabras=(prompt("Introduzca una de estas palabras para su traducción: mesa, gato, perro, casa"))
        let r=palabra(palabras);
        if (r==0) {
            document.write("La palabra introducida no vale")
        } else {
            document.write("La palabra introducia en inglés es: " +r)
        }
   