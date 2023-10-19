function male(){
    
    var resp = document.getElementById('resposta')
    var h = document.getElementById('ho')
    var sec = document.querySelector('section#calc')
    var alt = document.querySelector('input#alt')
    var resu = document.getElementById('resultado')
    if(alt.value > 0){
        aguenta = alt.value * 6.969 
        utero = alt.value * 4.969
        largura = alt.value * 1.866
        let novoitem = `<div id=resultado>
            <p id= oie> Com um útero ${utero.toFixed(2)} cm de comprimento e ${largura.toFixed(2)} cm de largura vc aguenta até uma rola de ${aguenta.toFixed(2)} cm </p>
        </div>`

        resp.innerHTML = novoitem
    
    
    
    }
    
}

