import { MoneyController } from "./Controllers/MoneyController.js";
import { SnacksController } from "./Controllers/SnacksController.js";



class App {
  moneyController = new MoneyController();
  snacksController = new SnacksController();
}

window["app"] = new App();

//*always register your controllers!