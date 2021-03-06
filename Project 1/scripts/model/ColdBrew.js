import { Coffee } from "./Coffee.js";
import { choicesData } from "./choicesData.js";
/**
 * Cold Brew class extends the Coffee class
 */
export class ColdBrew extends Coffee {
  constructor(id, type, roast, special) {
    let coldBrewData = Coffee.dataSource.coldBrew; //Getting cold brew data from the associative array
    let roastData = {}; //Creating an array for storing the types of cold brew coffee

    for (let roastType in coldBrewData) {
      roastData[roastType] = choicesData[roastType]; //Getting data of nitro and classic cold brew and saving them into an array
      if (roast == roastType) {
        //Checking for roast type
        for (let roastItem in roastData[roastType]) {
          //Getting the special type depending on the roast
          if (special == roastItem) super(id, type, roastType, roastItem); //Constructing
        }
      }
    }
  }
}
