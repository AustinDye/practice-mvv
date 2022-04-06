import { ProxyState } from "../AppState.js"
import { moneyService } from "../Services/MoneyService.js"

function _drawMoney(){
     document.getElementById("money").innerText = ProxyState.money.toString()
}


export class MoneyController {
    constructor (){
        ProxyState.on("money", _drawMoney)
        console.log('hello from the money controller!!')
    }

    addMoney(){
        moneyService.addMoney()
    }
}