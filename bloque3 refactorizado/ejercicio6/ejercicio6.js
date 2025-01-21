function precioPizza () {
    let pizza=document.getElementById("pizza");
    let cantidad=document.getElementById("cantidad"); 
    let resul=document.getElementById("resul");
       resul.value=pizza.value*cantidad.value+ "€"
}
