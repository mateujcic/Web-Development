import { CoffeeFactory } from "../util/CoffeeFactory.js";
import { choicesData } from "../model/choicesData.js";

export class Controller {
  constructor(model, view) {
    this.coffees = model;
    this.view = view;

    this.getType;
    this.getRoast;
    this.getSpecial;

    /**
     * Going through every select and calling the updateForm function
     */
    this.view.selects.forEach((select) => {
      select.onchange = this.updateFrom.bind(this, select);
    });

    /**
     * Event listener for the drink type select.
     */
    this.view.drinkType.addEventListener("change", (event) => {
      this.getType = event.target.value; //Event value is saved

      this.view.setImage(this.getType); //A new image is set (depends on the drinkType value)

      // The other two selects are reset
      this.view.selectRoast.length = 1;
      this.view.selectSpecial.length = 1;

      this.setOptions(this.getType, this.view.selectRoast); //Calling function which sets the options for the next select (depends on the drinkType value)
    });

    /**
     * Event listener for the coffee roast select.
     */
    this.view.selectRoast.addEventListener("change", (event) => {
      this.getRoast = event.target.value; //Event value is saved

      this.view.setImage(this.getRoast); //A new image is set (depends on the getRoast value)
      // The other two selects are reset
      this.view.selectSpecial.length = 1;

      this.setOptions(this.getRoast, this.view.selectSpecial); //Calling function which sets the options for the next select (depends on the getRoast value)
    });

    /**
     * Event listener for the coffee special select.
     */
    this.view.selectSpecial.addEventListener("change", (event) => {
      this.getSpecial = event.target.value; //Event value is saved

      this.view.setImage(this.getSpecial); //A new image is set (depends on the getSpecial value)
    });

    /**
     * Event listener for the first submit button.
     */
    this.view.submit.addEventListener("click", () => {
      if (this.add(this.getType, this.getRoast, this.getSpecial)) {
        //Calling the add function
        this.resetOptions(); //Resetting the options if the object creation fails
      } else {
        this.displayOrder(); //If the object creations is successful, the modal where the user can input his data is opened
        $("#myModal").modal("toggle"); //Opening the bootstrap modal
        this.resetOptions(); //The options are reset
      }
    });

    /**
     *Event listener for the clear button
     */
    this.view.clear.addEventListener("click", () => {
      this.resetOptions(); //Calliing the resetOptions function
    });

    /**
     * Event listenr for the order button (in the modal)
     */
    this.view.orderModal.addEventListener("click", () => {
      //Validating the three inputs
      if (
        this.validateName(this.view.nameInput.value) &&
        this.validateName(this.view.lastNameInput.value) &&
        this.validatePhoneNumber(this.view.phoneNumber.value)
      ) {
        //If successful...
        this.view.alertModal.hidden = true; //Hide the error message
        this.view.form.submit; //SUbmit the form

        //Saving the input values to the web storage
        window.localStorage.setItem("name", this.view.nameInput.value);
        window.localStorage.setItem("lastName", this.view.lastNameInput.value);
        window.localStorage.setItem("phoneNumber", this.view.phoneNumber.value);

        $("#myModal").modal("hide"); //Hiding the current modal

        this.confirmation(); //Calling the confirmation function
        $("#modalFinal").modal("toggle"); //Opening the final bootstrap modal

        this.resetModalOptions(); //Calling a function which resets the modal values
      } else {
        this.view.alertModal.hidden = false; //Displaying the error messagge if validation failed
      }
    });

    /**
     * Eveent listener for the name input in the modal
     */
    this.view.nameInput.addEventListener("change", (event) => {
      if (this.validateName(event.target.value)) {
        //If succesfully validated...
        this.view.nameInput.classList.remove("is-invalid"); //Removing the is-invalid bootstrap class
        this.view.nameInput.classList.add("is-valid"); //Adding the is-valid bootstrap class
        this.view.nameFeedback.classList.add("valid-feedback");
      } else if (this.validateName(event.target.value) == false) {
        //If unsuccessfully validated...
        this.view.nameInput.classList.remove("is-valid"); //Removing the is-valid bootstrap class
        this.view.nameInput.classList.add("is-invalid"); //Adding the is-invalid bootstrap class
        this.view.nameFeedback.classList.add("invalid-feedback");

        //Disaplying erorr message
        this.view.nameFeedback.innerHTML = "First name cannot have numerals.";
      }
    });

    /**
     * Eveent listener for the last name input in the modal
     */
    this.view.lastNameInput.addEventListener("change", (event) => {
      if (this.validateName(event.target.value)) {
        //If succesfully validated...
        this.view.lastNameInput.classList.remove("is-invalid"); //Removing the is-invalid bootstrap class
        this.view.lastNameInput.classList.add("is-valid"); //Adding the is-valid bootstrap class
      } else if (this.validateName(event.target.value) == false) {
        //If unsuccessfully validated...
        this.view.lastNameInput.classList.remove("is-valid"); //Removing the is-valid bootstrap class
        this.view.lastNameInput.classList.add("is-invalid"); //Adding the is-invalid bootstrap class
        this.view.lastNameFeedback.classList.add("invalid-feedback");

        //Disaplying erorr message
        this.view.lastNameFeedback.innerHTML =
          "Last name cannot have numerals.";
      }
    });

    /**
     * Eveent listener for the last name input in the modal
     */
    this.view.phoneNumber.addEventListener("change", (event) => {
      if (this.validatePhoneNumber(event.target.value)) {
        //If succesfully validated...
        this.view.phoneNumber.classList.remove("is-invalid"); //Removing the is-invalid bootstrap class
        this.view.phoneNumber.classList.add("is-valid"); //Adding the is-valid bootstrap class
      } else if (this.validatePhoneNumber(event.target.value) == false) {
        //If unsuccessfully validated...
        this.view.phoneNumber.classList.remove("is-valid"); //Removing the is-valid bootstrap class
        this.view.phoneNumber.classList.add("is-invalid"); //Adding the is-invalid bootstrap class
        this.view.phoneNumberFeedback.classList.add("invalid-feedback");

        //Disaplying erorr message
        this.view.phoneNumberFeedback.innerHTML =
          "Phone number needs to consist of 10 numerals.";
      }
    });
  }
  // End of constructor

  /**
   * Using the factory object to create a coffee object
   * @param {String} getType => contains the type of coffee (gotten with the EventListener)
   * @param {String} getRoast => contains the coffee roast (gotten with the EventListener)
   * @param {String} getSpecial => contains the type of special (gotten with the EventListener)
   */
  add(getType, getRoast, getSpecial) {
    let coffeeType = getType;
    let coffeeIndex = this.coffees.count() + 1;
    let coffeeRoast = getRoast;
    let coffeeSpecial = getSpecial;

    try {
      if (coffeeType == null || coffeeRoast == null || coffeeSpecial == null) {
        this.view.displayError(null);
        this.resetOptions();
        return true;
      } else {
        let coffee = CoffeeFactory.create(
          coffeeIndex,
          coffeeType,
          coffeeRoast,
          coffeeSpecial
        );

        if (!coffee) {
          this.view.displayError(null);
          return true;
        }

        this.coffees.add(coffee);

        console.log(this.coffees);
        return false;
      }
    } catch (e) {
      alert(e);
      return true;
    }
  }

  /**
   * Function for resetting chosen select options. Works by setting the get values to null, setting the selects' lengths to 1 and setting the default image
   */
  resetOptions() {
    this.view.drinkType.selectedIndex = 0;

    this.getType = null;
    this.getRoast = null;
    this.getSpecial = null;

    this.view.selectRoast.length = 1;
    this.view.selectSpecial.length = 1;

    this.view.setImage("order1");
  }

  /**
   *
   * Function for resetting the modal inputs. Works by setting the values of the three inputs to empty string and removing the feedback bootstrap classes
   */
  resetModalOptions() {
    this.view.nameInput.value = "";
    this.view.nameInput.classList.remove("is-valid");

    this.view.lastNameInput.value = "";
    this.view.lastNameInput.classList.remove("is-valid");

    this.view.phoneNumber.value = "";
    this.view.phoneNumber.classList.remove("is-valid");
  }

  /**
   * Function for saving the chosen option to the web storage
   * @param {*} select => select holds the value of one of the three selects that are iterated through
   */
  updateFrom(select) {
    this.coffees[select.id] = select.value;
    if (select.id == "drinkType")
      window.localStorage.setItem("drinkType", select.value);
    else if (select.id == "roastType")
      window.localStorage.setItem("roastType", select.value);
    else if (select.id == "specialType") {
      window.localStorage.setItem("specialType", select.value);
    }
  }

  /**
   * Function for displaying data saved in the web storage
   */
  displayOrder() {
    let dt = localStorage.getItem("drinkType");
    let rt = localStorage.getItem("roastType");
    let st = localStorage.getItem("specialType");

    for (let index in choicesData.types) {
      if (index == dt) {
        this.view.getType.innerText = "";
        this.view.getType.insertAdjacentHTML(
          "beforeend",
          choicesData.types[index]
        );
      }
    }

    for (let index in choicesData[dt]) {
      if (index == rt) {
        this.view.getRoast.innerText = "";
        this.view.getRoast.insertAdjacentHTML(
          "beforeend",
          choicesData[dt][index]
        );
      }
    }

    for (let index in choicesData[rt]) {
      if (index == st) {
        this.view.getSpecial.innerText = "";
        this.view.getSpecial.insertAdjacentHTML(
          "beforeend",
          choicesData[rt][index]
        );
      }
    }

    this.view.productModel.src = this.view.image.src;
  }

  /**
   * Adding options for the other selects (depending on the previously chosen otion). This function is triggered by an event listener.
   * @param {String} event => event contains the value of the clicked option
   * @param {Object} type => type contains the value of the next select onto which the options need to be added
   */
  setOptions(event, type) {
    let find = event;

    for (let event in choicesData[find]) {
      if (type == this.view.selectRoast)
        this.view.selectRoast.options.add(
          new Option(choicesData[find][event], event)
        );
      else if (type == this.view.selectSpecial)
        this.view.selectSpecial.options.add(
          new Option(choicesData[find][event], event)
        );
    }
  }

  /**
   * Function for validating user's name
   * @param {String} value
   */

  validateName(value) {
    if (value.match(/[a-z]{1,10}/g)) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * Function for validatinf user's phone number
   * @param {String} value
   */
  validatePhoneNumber(value) {
    if (value.match(/^\d{10}$/)) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * Function for displaying the last modal (order confirmed)
   */
  confirmation() {
    this.view.nameConfirmation.value = window.localStorage.getItem("name");
    this.view.lastNameConfirmation.value = localStorage.getItem("lastName");
    this.view.phoneNumberConfirmation.value = localStorage.getItem(
      "phoneNumber"
    );
    this.view.confirmBody.insertAdjacentElement(
      "beforeend",
      this.view.buttonsOrders.cloneNode(true)
    );
  }
}
