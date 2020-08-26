function verificar() {
    var nome = document.getElementById('txtnome') //nombre de la persona
    var nomef = nome.value //valor del campo
    var data = new Date() //fecha del computador
    var ano = data.getFullYear() //ano completo
    var idade = document.getElementById('datanac') //ano de nacimiento
    var res = document.getElementById('res') //resultado
    
    if (idade.value.length == 0 || idade > ano ) {
        window.alert('[ERRO] Verifique os dados')
    }else {
        var fsex = document.getElementsByName('sex')
        var total = ano - Number(idade.value) //resultado de edad
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex [0].checked) {
            genero = 'Homen'
            if (nomef == 'Owen' || nomef == 'owen' || nomef == 'Owen Williams' ) {
                img.setAttribute('src', 'owen.png')
            } else if(nomef == 'Bevan Williams'|| nomef == 'bevan' || nomef == 'Bevan') {
                img.setAttribute('src', 'bevan.png')
            }
            
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (nomef == 'Morwenna'|| nomef == 'morwenna' || nomef =='morwenna') {
                img.setAttribute('src', 'mo.png')
            }else if (nomef=='Bia' || nomef=='bia' || nomef=='Beatriz' || nomef=='beatriz' ) {
                img.setAttribute('src', 'bia.png')
            }else if (nomef=='Dayany'|| nomef =='dayany') {
                img.setAttribute('src', 'dayany.png')
            }else if (nomef == 'Alessandra' || nomef == 'Aless' || nomef == 'Princesa' || nomef == 'princesa')
                img.setAttribute('src', 'aless.png')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Bem vindo(a) <strong>${nomef}</strong> voce e ${genero} com ${total} anos`
        res.appendChild(img)
    }
     
}

function deletar() {
    var campo = document.getElementById('txtnome')
    campo.value = ''
    campo.style.color = "black"

}

