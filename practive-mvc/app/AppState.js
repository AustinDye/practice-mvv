import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

 /** @type {import('./Models/Snack').Snack[]} */
  snacks = [new Snack({
    name : 'Mr.Coke',
    price : 100,
    ammount: 1
  }),
  new Snack({
    name : 'Dr.Drink',
    price : 200,
    ammount: 1
  })]

  money = 0
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

