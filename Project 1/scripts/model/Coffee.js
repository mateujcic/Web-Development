import { choicesData } from "./choicesData.js";
/*
 * Coffee class
 */

export class Coffee {
  static dataSource = choicesData;

  constructor(id, type, roast, special) {
    this._id = id;
    this._type = type;
    this._roast = roast;
    this._special = special;
  }

  get id() {
    return this._id;
  }

  get type() {
    return this._type;
  }

  get roast() {
    return this._roast;
  }

  get special() {
    return this._special;
  }

  set id(newId) {
    this._id = newId;
  }

  set type(newType) {
    this.type = newType;
  }

  set name(newName) {
    this._name = newName;
  }

  set special(newSpecial) {
    this._special = newSpecial;
  }
}
