'use strict'

class VistaBuscadorClientes{}

class VistaFormularioClientes{
    #controlador = null
    #base = null
    #inputNombre = null
    #inputEdad = null
    #btnAceptar = null
    #btnCancelar = null
    
    constructor(controlador){
        this.#controlador = controlador
        this.#base = document.getElementById('divFormularioClientes')
        //this.#inputNombre = document.getElementById('inputNombreCliente')
        this.#inputNombre = this.#base.getElementsByTagName('input')[0]
        this.#inputEdad = this.#base.getElementsByTagName('input')[1]
        
        this.capturarEventos()
    }
    
    capturarEventos(){
        //...
    }
    
    aceptar(){
        const cliente = {
            nombre: this.#inputNombre.value,
            edad: this.#inputEdad.value
        }
        this.#controlador.crearCliente(cliente)
    }
}
