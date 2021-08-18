const fetchApi = fetch("https://localhost:44359/api/candidatos/3")
    .then(response =>{
        return response.json();
    })
    .then(candidato => {
        document.querySelector("#app").innerHTML = candidato[3].legenda;
        console.log(candidato);
    })

    console.log(fetchApi)