'use strict'

class ControladorPrincipal{

    #vistaPrincipal = null
    #controladorClientes = null
    #modelo = null

    constructor(){
        console.log('Iniciando la aplicación.')
        this.#modelo = new Modelo()
        this.#vistaPrincipal = new VistaPrincipal(this)
        //...
        this.#controladorClientes = new ControladorClientes(this)
        //...
    }
    
    irAClientes(){
        console.log('Cambiando a la vista de clientes')
        //Poner ocultos (style.display = 'none') todas las vistas
        //Mostrar (style.display = 'block') del div de clientes.
    }
}

window.onload = () => { new ControladorPrincipal() }

