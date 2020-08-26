function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var forano = document.getElementById('txtano')
    var mens = document.getElementById('rest')
    var fem = document.getElementById('fem')
    var mas = document.getElementById('mas')
    if (forano.value.length==0 || forano.value > ano) {
        window.alert('Verifique los datos y intente de nuevo')
    }  else {
        var fsex = document.getElementsByName('radsex')
        var edad = ano - Number(forano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Hombre'
            if (edad >= 0 && edad < 10) {
                img.setAttribute('src', 'nino.png')
            } else if (edad < 21) {
                img.setAttribute('src', 'jovenh.png')

            }else if (edad < 50) {
                img.setAttribute('src', 'adultoh.png')
            }else {
                img.setAttribute('src', 'anciano.png')
            }
        }else if (fsex[1].checked) {
            genero='Mujer'
            if (edad >= 0 && edad < 10) {
                img.setAttribute('src', 'nina.png')
            } else if (edad < 21) {
                img.setAttribute('src', 'jovenm.png')
            }else if (edad < 50) {
                img.setAttribute('src', 'adultom.png')
            }else {
                img.setAttribute('src', 'anciana.png')               
            }
        }
        mens.style.textAlign = 'center'
        
        mens.innerHTML = `Usted es <strong>${genero}<Strong> con <strong>${edad}</strong> años`
        mens.appendChild(img)
    }
    
}
