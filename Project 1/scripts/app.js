import { Coffees } from "./model/Coffees.js";
import { View } from "./view/View.js";
import { Controller } from "./controller/Controller.js";
import { coffeeData } from "./model/coffeeData.js";
import { choicesData } from "./model/choicesData.js";

window.onload = function () {
  let selectData = coffeeData.selects; //Getting the three types of coffee from an associative array

  let model = new Coffees();
  let view = new View(selectData, choicesData);
  let controller = new Controller(model, view);
};
