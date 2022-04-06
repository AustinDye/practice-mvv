import { ProxyState } from "../AppState.js"

function _drawSnacks(){
    let template = ''

    ProxyState.snacks.forEach(s => template+= s.Template)
    document.getElementById('snacks').innerHTML = template
}

export class SnacksController{
    constructor(){
        _drawSnacks()
        console.log('looooooooog')
    }
}