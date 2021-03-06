import { Type } from "./Type.js";
import { Iced } from "../model/Iced.js";
import { Hot } from "../model/Hot.js";
import { ColdBrew } from "../model/ColdBrew.js";
/**
 * Coffee Factory class
 *  - used for creating three different objects
 */
export class CoffeeFactory {
  static create(index, type, roast, special) {
    let coffee;
    switch (type) {
      case Type.ICED:
        coffee = new Iced(index, type, roast, special);

        break;

      case Type.HOT:
        coffee = new Hot(index, type, roast, special);

        break;

      case Type.COLDBREW:
        coffee = new ColdBrew(index, type, roast, special);

        break;

      default:
        return;
    }
    return coffee;
  }
}
