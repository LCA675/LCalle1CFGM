
        function suel() {
            let acumulador=0, sueldos=0, empleados=0, sueldomayor=0, sueldomedio=0, sueldototal=0;
            for (acumulador=0; acumulador<5; acumulador++) {
                sueldos=parseInt(prompt("Introduce su sueldo cinco veces"))
                    if (sueldos>300){
                        sueldomayor++;
                        sueldototal=sueldos+sueldototal;
                    } else {
                     if (100<sueldos<300) {
                        sueldomedio++;
                        sueldototal=sueldos+sueldototal;
                    }
                    }
                }
                return "Cobran más de 300€: "+sueldomayor+ " personas <br> Cobran entre 100 y 300€:"+sueldomedio+ " personas <br> Y le cuesta a la empresa un total de:" +sueldototal+ "€";
            } 
                let r=suel();
                document.write(r)
