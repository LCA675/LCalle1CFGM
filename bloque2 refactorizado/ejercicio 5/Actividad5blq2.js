
        let persT=0, Mtotal=0, Ftotal=0, va16=0, sexo="", doc=0, edad=0;
        function censo() {
            do { 
            doc=(prompt("Introduzca su numero de documento"))
            sexo=prompt("Introduzca su sexo")
            edad=parseInt(prompt("Introduzca su edad"))
                if (doc!==9999) {
            if (sexo=="M") {
                Mtotal++;
            } else if (sexo=="F") {
                Ftotal++;
            }
            if (edad>16 && edad<65 && sexo=="M") {
                persT++;
            }
        }
        } while (doc !==9999)
        return "Las personas hombres entre 16 y 65 años son un total de:" +persT+ "<br> La cantidad de mujeres en total son: "+Ftotal+ "<br> La cantidad de hombres en total es" +Mtotal
        }
        let r=censo();
        document.write(r)
