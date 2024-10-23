const usuario = JSON.parse(localStorage.getItem('usuario'))
const formulario = document.querySelector('#form-todos')
const lista = document.querySelector('#todos-list')  
const inputF = document.querySelector('#form-input')
const cerrarBtn = document.querySelector('#cerrar-btn') 


if(!usuario){
    //no existe, no ha iniciado sesion
    window.location.href = '/'
}

//continuar en la casa
/*const obtenerLista = async ()=> {
    const respuesta = await fetch('http://localhost:3000/tareas',{method:'GET'});
    const list = await respuesta.json();
    const userList = list.filter(lista => lista.user === user.username);
    console.log(userList)
        userList.forEach(lista => {

        })
}*/ 

formulario.addEventListener('submit', async e=>{
    e.preventDefault()
    
    const respuesta = await fetch('http://localhost:3000/tareas',{
        method:'POST',
        headers: {
            'Content-Type':'application/json'
            //buscar cuales son los otros tipos de Content-Type
        },
        body:JSON.stringify({texto:inputF.value,nombre:usuario.nombre})
    })
    
    //const users = await respuesta.json()

    //const user = users.find(i=>i.nombre===loginInput.value)
})