import { Coffee } from "./Coffee.js";
import { choicesData } from "./choicesData.js";
/**
 * Iced class extends the Coffee class
 */
export class Iced extends Coffee {
  constructor(id, type, roast, special) {
    let icedData = Coffee.dataSource.iced; //Getting iced data from the associative array
    let roastData = {}; //Creating an array for storing the types of iced coffee

    for (let roastType in icedData) {
      roastData[roastType] = choicesData[roastType]; //Getting data of light and medium roasts and saving them into an array
      if (roast == roastType) {
        //Checking for roast type
        for (let roastItem in roastData[roastType]) {
          //Getting the special type depending on the roast
          if (special == roastItem) super(id, type, roastType, roastItem); //
        }
      }
    }
  }
}
