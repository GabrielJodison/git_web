function fazPost(url, body){
    // console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "aplication/json")
    request.send(JSON.stringify(body))

    request.onload = function(){
        console.log(this.responseText)
    }

    return request.responseText
}

function cadastrarUsuario(){
    event.preventDefault()
    let url = "https://localhost:44359/api/candidatos"
    let nome = document.getElementById("nomeCandidato").value
    let sobrenome = document.getElementById("sobrenomeCandidato").value
    let vice = document.getElementById("viceCandidato").value
    let legenda = document.getElementById("legenda").value


    console.log(nome)
    console.log(sobrenome)
    console.log(vice)
    console.log(legenda)

    body ={
        "nome": nome,
        "sobrenome": sobrenome,
        "vice": vice,
        "legenda": legenda
    }
   

    fazPost(url, body)
}