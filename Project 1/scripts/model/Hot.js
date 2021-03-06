import { Coffee } from "./Coffee.js";
import { choicesData } from "./choicesData.js";
/**
 * Hot class extends the Coffee class
 */
export class Hot extends Coffee {
  constructor(id, type, roast, special) {
    let hotData = Coffee.dataSource.hot; //Getting hot data from the associative array
    let roastData = {}; //Creating an array for storing the types of hot coffee

    for (let roastType in hotData) {
      roastData[roastType] = choicesData[roastType]; //Getting data of medium dark and dark roasts and saving them into an array
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
