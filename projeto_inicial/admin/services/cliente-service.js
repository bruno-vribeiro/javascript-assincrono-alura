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

export const serviceClientes = {
    listaClientes
}

