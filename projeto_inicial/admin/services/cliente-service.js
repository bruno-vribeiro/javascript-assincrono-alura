const listaClientes = () =>{
//     const promise = new Promise((revolve,reject) => {
//     const http = new XMLHttpRequest();



//     http.open('GET','http://localhost:3000/profile');

//     http.onload = () => {
//         if(http.status>=400){
//             reject(JSON.parse(http.response))
//         }else{
//             revolve(JSON.parse(http.response))
//         }
        
//     }
//     http.send();
// })
// return promise

//API fetch
return fetch('http://localhost:3000/profile')
.then(resposta=>{
    return resposta.json();
})
}

const criaCliente = (nome,email)=>{
    return fetch('http://localhost:3000/profile',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            nome:nome,
            email:email
        })
    })
    .then(resposta=>{
        return resposta.body;
    })
}

const removeCliente = (id)=>{
    return fetch(`http://localhost:3000/profile/${id}`,
    {method:'DELETE'}
    )
}

const detalhaCliente = (id) =>{
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta=>{
    return resposta.json();
})
}

const atualizarCliente = (nome, email, id)=>{
    return fetch(`http://localhost:3000/profile/${id}`,{
        method:'PUT',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
            nome:nome,
            email:email
        })
    })
    .then(resposta=>{
        return resposta.json;
    })
}

export const serviceClientes = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizarCliente
}

