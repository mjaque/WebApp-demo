'use strict'

class VistaPrincipal{
    #controlador = null
    #base = null
    #btnIrAClientes = null
    #btnIrAProductos = null
    
    constructor(controlador){
        this.#controlador = controlador
        this.#base = document.getElementsByTagName('nav')[0]
        this.#btnIrAClientes = document.getElementById('btnIrAClientes')
        this.#btnIrAProductos = document.getElementById('btnIrAProductos')
        
        this.capturarEventos()
    }
    
    capturarEventos(){
        this.#btnIrAClientes.onclick = this.irAClientes.bind(this)
    }
    
    irAClientes(){
        this.#controlador.irAClientes()
    }
}
