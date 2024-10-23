//1. hacer el rauter
//rauter: es el que me permite hacer el CRUD, POST, GET, DELETE, UPDATE --- http
const userRouter = require('express').Router()
const User = require('../models/usuarios')

//registrar la informacion que el usuario envia antravez de el formulario


//para llegar aca, me deben llamar desde el front
userRouter.post('/', (request, response)=>{
    const {nombre} = request.body

    //este console va a aparecer en la termanla de visual studio
    console.log(nombre)
    //console.log(request.body)

    if(!nombre){
        return response.status(400).json({error:'Todos los campos son obligatorios'})
    }else{
        //guardar en la bd
    }
})