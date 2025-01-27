
        function calcularPerimetro() {
            lado=parseInt(prompt("Introduzca un lado del cuadrado para calcular su perímetro: "))
            let perimetro=4*lado;
            return "El perímetro total es: " +perimetro;
            }
           let resultado=calcularPerimetro();
           document.write(resultado)
   