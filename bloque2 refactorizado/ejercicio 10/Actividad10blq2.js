function cuatrimestre() {
    let fecha=new Date()
    let mes=fecha.getMonth()
    if (mes<=4) {
        rfehca=("La fecha introducida pertenece al segundo cuatrimestre del año")
    } else if (mes>4 && mes<=8) {
        rfehca=("La fecha introducida pertenece al segundo cuatrimestre del año")
    } else if (mes>8 && mes<=12) {
        rfehca=("La fecha introducida pertenece al segundo cuatrimestre del año")
            }
            return rfehca
        }
r=cuatrimestre();
document.write(r)