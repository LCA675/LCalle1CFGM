
        let acum, num1=0;
        num=parseInt(prompt("Introduzca un numero del 1 al 10 para mostrar sus multiplos: "))
            if (num>=1 && num<=10) {
                function tabla (num) {
                    for (acum=0; acum<12; acum++) { 
                        num1=num+num1
                        document.write(num1+" ")
                    }
                    return "Los multiplos del numero que ha introducido son: "+num1
                }
            }
            let r=tabla(num);
            document.write(r)
