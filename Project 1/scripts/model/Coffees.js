import { choicesData } from "./choicesData.js";
/**
 * Coffees class
 *  - used for storing created objects into an array
 */
export class Coffees {
  static dataSource = choicesData;

  constructor() {
    this._coffees = [];
  }

  get coffees() {
    return this._coffees;
  }

  add(coffee) {
    this._coffees.push(coffee);
  }

  get(coffeeId) {
    for (let coffee of this.coffees) {
      if (coffee.id === coffeeId) {
        return coffee;
      }
    }
  }
  count() {
    return this.coffees.length;
  }
}
