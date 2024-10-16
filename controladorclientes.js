'use strict'

class ControladorClientes{

    #controlador = null
    #modelo = null
    #vistaFormulario = null
    #vistaBuscador = null

    constructor(controlador, modelo){
        this.#controlador = controlador
        this.#modelo = modelo
        this.#vistaFormulario = new VistaFormularioClientes(this)
        this.#vistaBuscador = new VistaBuscadorClientes(this)
    }
    
    crearCliente(cliente){
        //Llamar al modelo para crear el cliente: this.#modelo.crearCliente(cliente)
    }
}

window.onload = () => { new ControladorPrincipal() }

