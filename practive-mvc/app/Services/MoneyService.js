import { ProxyState } from "../AppState.js"


class MoneyService {
   addMoney(){
       ProxyState.money ++
       console.log(ProxyState.money)
   }
}
export const moneyService = new MoneyService ()