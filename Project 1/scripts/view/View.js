export class View {
  constructor(selectData, choicesData) {
    this.selectsDiv = document.querySelector("#selectsDiv");

    this.submit = document.getElementById("submit");
    this.clear = document.getElementById("clear");

    this.image = document.querySelector("#product");
    this.productModel = document.querySelector("#productModel");

    this.alertList = document.querySelector("#alert");
    this.alertList.hidden = true;

    this.selectData = selectData;
    this.choicesData = choicesData;

    this.orderModal = document.querySelector("#orderModal");
    this.alertModal = document.querySelector("#alertModal");

    this.form = document.forms["form"];

    this.nameInput = document.querySelector("#name");
    this.lastNameInput = document.querySelector("#lastName");
    this.phoneNumber = document.querySelector("#phoneNumber");
    this.yourOrder = document.querySelector("#yourOrder");

    this.nameFeedback = document.querySelector("#nameFeedback");
    this.lastNameFeedback = document.querySelector("#lastNameFeedback");
    this.phoneNumberFeedback = document.querySelector("#phoneNumberFeedback");

    this.getType = document.querySelector("#drinkModal");
    this.getRoast = document.querySelector("#roastModal");
    this.getSpecial = document.querySelector("#specialModal");

    this.modalFinal = document.querySelector("#modalFinal");
    this.buttonsOrders = document.querySelector("#buttons-orders");
    this.confirmBody = document.querySelector("#confirmBody");

    this.nameConfirmation = document.querySelector("#nameConfirmation");
    this.lastNameConfirmation = document.querySelector("#lastNameConfirmation");
    this.phoneNumberConfirmation = document.querySelector(
      "#phoneNumberConfirmation"
    );
    /**
     *For loop which creates the three options (setting ID, class and the *required attribute)
     */

    for (let coffee in this.selectData) {
      let drinkType = document.createElement("select");
      drinkType.setAttribute("id", coffee);
      drinkType.setAttribute("class", "form-select mb-3 shadow-sm");
      drinkType.setAttribute("required", "");
      drinkType.options.add(
        new Option(this.selectData[coffee], this.selectData)
      );

      this.selectsDiv.appendChild(drinkType);
    }
    /**
     * For loop for adding the options to the first select
     */
    for (let choice in choicesData.types) {
      drinkType.options.add(new Option(choicesData.types[choice], choice));
    }

    this.drinkType = document.getElementById("drinkType");
    this.selectRoast = document.getElementById("roastType");
    this.selectSpecial = document.getElementById("specialType");

    this.selects = document.querySelectorAll("#selectsDiv > select");
    this.storage = document.querySelector("#storageDiv > input");

    /**
     * Map configuration
     * Used Leafjets and MapTiler Cloud to build a map which shows the adress of the coffee shop
     * MapTiler Cloud API key is 5cR2WmxKFbXEiGkwwKwK
     */
    let map = L.map("map").setView([45.8132198, 15.9721802], 15);
    let marker = L.marker([45.8132198, 15.9721802]).addTo(map);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoibXU4Njg3IiwiYSI6ImNrbGwydHJqZzA1MmQzMnFoZ3luN2s2em8ifQ.CW0xwbsHUeJSMw4s5kVj1w",
      }
    ).addTo(map);

    map.locate({ setView: true, maxZoom: 19 });

    /**
     * Function for displaying the user's location
     * @param Get location
     * Source: https://leafletjs.com/examples/mobile/
     */
    function onLocationFound(e) {
      let radius = e.accuracy; //Getting the radius

      //Adding the marker to the map
      L.marker(e.latlng)
        .addTo(map)
        .bindPopup("You are within " + radius + " meters from this point")
        .openPopup();
      marker.bindPopup("<b>Coffee Express</b><br>Ilica 10, Zagreb").openPopup();
    }

    map.on("locationfound", onLocationFound);
  }

  /**
   * Function for setting the image after an option is clicked
   * @param {String} coffeeName => coffeeName holds the name of a specific coffee combination
   */
  setImage(coffeeName) {
    let imagePath = "assets/images/products/";
    this.image.src = imagePath + coffeeName + ".png";
  }

  /**
   * Function for displaying error using alert
   * @param {Object} e
   */
  displayError(e) {
    let alertText = document.querySelector("#alertText");

    if (e instanceof ReferenceError) {
      this.alertList.hidden = false;

      alertText.innerHTM = "You need to pick one option from each select!";
      window.location.hash = "#alertText";
    } else {
      this.alertList.hidden = false;

      alertText.innerHTML =
        "Coffee doesn't exist. Make sure you picked an option from every select.";
      window.location.hash = "#alertText";
    }
  }
}
