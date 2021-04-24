import { ISTDepartmentConsumer } from "./ISTDepartmentConsumer.js";
$(document).ajaxStart(function(){
  $.LoadingOverlay("show"); //Starting the loading overlay
});

/**
 * Getting about data
 */
ISTDepartmentConsumer.getData("/about").done(function (json) {
  //Appending the about data to the about section
  $("#about").append(`<div class="container">
          <div class="row">
            <div class="content text-justify">
              <h3 class="mb-3">${json.title}</h3>
              <p class="font-italic">
                ${json.description}
              </p>
              <p class="font-italic text-center"> <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                ${json.quote}
                <i class="bx bxs-quote-alt-left quote-icon-right"></i>
              </p>
              <h6 class="author text-center">${json.quoteAuthor}</h6>
              
            </div>
          </div>
        </div>`);
});
/**
 * Getting undergraduate data
 */
ISTDepartmentConsumer.getData("/degrees/undergraduate").done(function (json) {
  //Appending undergraduate data for each item
  $.each(json.undergraduate, function (index, item) {
    let $undergraduateDiv = ` <div id="${item.degreeName}" class="col-lg-4 col-md-6 d-flex align-items-stretch" >
      <div class="icon-box iconbox-blue">
        <h4><a>${item.title}</a></h4>
        <p class="mb-3">
        ${item.description}
      </p>
      <i class="bi bi-plus-circle"></i>
      <p class="fw-light">Click to find out more.</p>
      </div>
    </div>`;
    $("#undergraduateItems").append($undergraduateDiv); //Appending the HTML to the undergraduateItems div
    $("#" + item.degreeName).click(function () { //Triggering modal on click
      renderDegreeModal(item); //Calling the function for rendering the modal
      $("#exampleModal").modal("toggle"); //Toggling the modal
    });
  });
});
/**
 * Getting graduate data
 */
ISTDepartmentConsumer.getData("/degrees/graduate").done(function (json) {
  $.each(json.graduate, function (index, item) {
    let $graduateDiv = ` <div id="${item.degreeName}" class="col-lg-4 col-md-6 d-flex align-items-stretch w-100">
    <div class="icon-box iconbox-blue">
      <h4><a>${item.title}</a></h4>
      <p class="mb-3">
        ${item.description}
      </p>
      <i class="bi bi-plus-circle"></i>
      <p class="fw-light">Click to find out more.</p>
    </div>
  </div>`;
    if (index < 3) {
      $("#graduateItems").append($graduateDiv);
      $("#" + item.degreeName).click(function () {
        renderDegreeModal(item);
        $("#exampleModal").modal("toggle");
      });
    } else if (index == 3) {
      $graduateDiv = `<div class="section-title"> <h4 class="text-center">Our Graduate Advanced Certificates</h4> </div> <div id="${
        item.degreeName
      }" class=" align-items-stretch">
        <div class="icon-box iconbox-blue">
          <h4 class="mb-3"> ${returnItemsFromArray(
            item.availableCertificates,
            false
          )}  </h4>
        </div>
      </div>`;
      $("#graduateCertificates").append($graduateDiv);
    }
  });
});
/**
 * Getting undergraduate minors data
 */
ISTDepartmentConsumer.getData("/minors/UgMinors").done(function (json) {
  $.each(json.UgMinors, function (index, item) {
    let $minorDiv = `<div id="${item.name}" class="col-lg-4 col-md-6 d-flex align-items-stretch">
    <div class="info-box mb-4">
      <h5 class="m-5">
        ${item.title}
      </h5>
    </div>
  </div>`;
    $("#minorItems").append($minorDiv);
    $("#" + item.name).click(function () {
      renderMinorModal(item);
      $("#exampleModal2").modal("toggle");
    });
  });
});
/**
 * Getting introduction data
 */
ISTDepartmentConsumer.getData("/employment/introduction/").done(function (
  json
) {
  $("#statsSection").append(` <div class="section-title">
<h3 class="title-white display-6">
${json.introduction.title}
</h3>
</div>`);
});
/**
 * Getting introduction content data
 */
ISTDepartmentConsumer.getData("/employment/introduction/content").done(
  function (json) {
    $.each(json.content, function (index, item) {
      if (index == 0) {
        let $introductionDiv = `
    <div class="section-title">
      <h4 class="title-white">${item.title}</h4>
    </div>
    <p class="title-white">
      ${item.description}
    </p>
    <div id="statisticsCards" class="row counters"></div>`;
        $("#statsSection").append($introductionDiv);
      } else if (index == 1) {
        let $introductionDiv = `
    <div class="section-title">
      <h4 class="title-white">${item.title}</h4>
    </div>
    <p class="title-white">
      ${item.description}
    </p>
    <div id="statisticsCards" class="row counters"></div>
    <div id="employers" class="row counters "><div class="section-title">
 <h4 class="title-white">EMPLOYERS</h4></div></div>
 <div id="careers" class="row counters "><div class="section-title">
        <h4 class="title-white">CAREERS</h4>
      </div></div>`;
        $("#statsSection").append($introductionDiv);
      }
    });
  }
);
/**
 * Getting emplyers' names data
 */
ISTDepartmentConsumer.getData("/employment/employers/employerNames").done(
  function (json) {
    $.each(json.employerNames, function (index, item) {
      let $employersDiv = `
    
  <div class="col-lg-2 col-3 text-center">
  <p class="author stats-items">${item}</p>
</div>   
  `;
      $("#employers").append($employersDiv);
    });
  }
);
/**
 * Getting statistics data
 */
ISTDepartmentConsumer.getData("/employment/degreeStatistics/statistics").done(
  function (json) {
    $.each(json.statistics, function (index, item) {
      let $cardsDiv = `
            <div class="col-lg-3 col-md-6 text-center d-flex align-items-stretch" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 300">
              <div
                class="w-100 uk-card uk-card-hover uk-card-body uk-light uk-card-secondary statistics mt-1"
              >
                <h4>${item.value}</h4>
                <p>${item.description}</p>
              </div>
            </div>
          
  `;
      $("#statisticsCards").append($cardsDiv);
    });
  }
);

/**
 * Getting careeer names data
 */
ISTDepartmentConsumer.getData("/employment/careers/careerNames").done(function (
  json
) {
  $.each(json.careerNames, function (index, item) {
    let $careersDiv = `
    
  <div class="col-lg-2 col-3 text-center">
  <p class="author stats-items">${item}</p>
</div>
          
  `;
    $("#careers").append($careersDiv);
  });
});

/**
 * Getting first table data
 */
ISTDepartmentConsumer.getData("/employment/coopTable/").done(function (json) {
  $.each(json.coopTable, function (index, item) {
    let $titleDiv;
    if (index == "title") {
      $titleDiv = `<div id="table1" class="col-lg-6 col-md-6 d-flex align-items-stretch ">
      <div class="uk-card uk-card-hover uk-card-body uk-light uk-card-secondary statistics mt-1 w-100">
        <h5 class="m-5 text-center">
          ${item}
        </h5>
      </div>
    </div>`;
      $("#tablesSection").append($titleDiv);
    } else {
      $("#table1").click(function () {
        console.log(index);
        renderCoModal(item);
        $("#exampleModal3").modal("toggle");
      });
    }
  });
});

/**
 * Getting second table data
 */
ISTDepartmentConsumer.getData("/employment/employmentTable/").done(function (
  json
) {
  $.each(json.employmentTable, function (index, item) {
    let $titleDiv;
    if (index == "title") {
      $titleDiv = `<div id="table2" class="col-lg-6 col-md-6 d-flex align-items-stretch">
      <div class="uk-card uk-card-hover uk-card-body uk-light uk-card-secondary statistics mt-1 w-100">
        <h5 class="m-5 text-center">
          ${item}
        </h5>
      </div>
    </div>`;
      $("#tablesSection").append($titleDiv);
    } else {
      console.log(index);
      $("#table2").click(function () {
        renderEtModal(item);
        $("#exampleModal3").modal("toggle");
      });
    }
  });
});

getFaculty();

/**
 * Function for getting faculty data
 */
function getFaculty() {
  $("#peopleSection").empty();
  ISTDepartmentConsumer.getData("/people/faculty/").done(function (json) {
    $.each(json.faculty, function (index, item) {
      let $peopleDiv = `<div id="${item.username}" class="col-lg-3 col-md-6 d-flex align-items-stretch uk-animation-toggle">
      <div class="uk-card uk-card-hover uk-card-body mb-4 text-center facultyCard w-100 read-more shadow">
        <h5 class="uk-card-title">
        <span></span>
          ${item.name}
        </h5>
        <h6>${item.title}</h6>
      </div>
    </div>`;
      $("#peopleSection").append($peopleDiv);
      $("#" + item.username).click(function () {
        renderPeopleModal(item);
        $("#exampleModal4").modal("toggle");
      });
    });
  });
}

/**
 * Function for getting staff data
 */
function getStaff() {
  $("#peopleSection").empty();
  ISTDepartmentConsumer.getData("/people/staff/").done(function (json) {
    $.each(json.staff, function (index, item) {
      let $peopleDiv = `<div id="${item.username}" class="col-lg-3 col-md-6 d-flex align-items-stretch">
      <div class="uk-card uk-card-hover uk-card-body mb-4 text-center facultyCard w-100 read-more shadow">
        <h5 class="uk-card-title">
        <span></span>
          ${item.name}
        </h5>
        <h6>${item.title}</h6>
      </div>
    </div>`;
      $("#peopleSection").append($peopleDiv);
      $("#" + item.username).click(function () {
        renderPeopleModal(item);
        $("#exampleModal4").modal("toggle");
      });
    });
  });
}

/**
 * Rendering the slider
 */
$(function () {
  $("#mySlider").productSlider();
});

/**
 * Getting interest area data
 */
ISTDepartmentConsumer.getData("/research/byInterestArea").done(function (json) {
  $.each(json.byInterestArea, function (index, item) {
    let $researchDiv = `<div id="${item.areaName}" class="col-lg-3 col-md-4 text-center d-flex align-items-between" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
      <div
        class="uk-card uk-card-hover uk-card-body uk-light uk-card-secondary research mt-1 w-100"
      >
        <h4>${item.areaName}</h4>
      </div>
    </div>`;
    $("#researchSection").append($researchDiv);
    $("#" + item.areaName).click(function () {
      renderResearchModal(item, true);
      $("#exampleModal5").modal("toggle");
    });
  });
});

/**
 * Function for research by faculty data
 */
ISTDepartmentConsumer.getData("/research/byFaculty").done(function (json) {
  $.each(json.byFaculty, function (index, item) {
    let $researchDiv = `<div id="${item.username}Faculty" class="col-lg-3 col-md-4 text-center d-flex align-items-between uk-animation-toggle">
      <div
        class="uk-card uk-card-hover uk-card-body uk-light uk-card-secondary research2 mt-1 w-100 uk-animation-fade"
      >
      <img src="https://ist.rit.edu/assets/img/people/${item.username}.jpg"> 
        <h4>${item.facultyName}</h4>
      </div>
    </div>`;
    $("#researchFacultySection").append($researchDiv);
    $("#" + item.username + "Faculty").click(function () {
      renderResearchModal(item, false);
      $("#exampleModal5").modal("toggle");
    });
  });
});

/**
 * Function for getting resources data
 */
ISTDepartmentConsumer.getData("/resources/").done(function (json) {
  $.each(json, function (index, item) {
    if (index == "title") {
      $("#resourcesTitle").append(`<h4>${item}</h4>`);
    }
    if (index == "subTitle")
      $("#resourcesTitle").append(`<p class="mb-3">${item}</p>`);

    if (index != "title" && index != "subTitle" && index != "forms") {
      let $resourcesDiv = `<div id="${index}" class="col-lg-4 col-md-4 text-center d-flex align-items-stretch">
    <div
      class="uk-card uk-card-hover uk-card-body uk-light uk-card-secondary resources mt-1 w-100"
    >
      <h4 class="text-capitalize">${item.title}</h4>
    </div>
  </div>`;
      $("#resourcesSection").append($resourcesDiv);
    }

    if (index == "forms") {
      let $resourcesDiv = `<div id="${index}" class="col-lg-4 col-md-4 text-center d-flex align-items-stretch">
    <div
      class="uk-card uk-card-hover uk-card-body uk-light uk-card-secondary resources mt-1 w-100"
    >
      <h4 class="text-capitalize">${index}</h4>
    </div>
  </div>`;
      $("#resourcesSection").append($resourcesDiv);
    }
    $("#" + index).click(function () {
      renderResourcesModal(item, index);

      $("#exampleModal6").modal("toggle");
    });
  });
});

/**
 * Event listener for the news buttons
 */
document.querySelector(".newsButton").addEventListener("click", function () {
  ISTDepartmentConsumer.getData("/news/older/").done(function (json) {
    $.each(json.older, function (index, item) {
      let $researchDiv = `<h5 class="modal-title" id="newsTitle">${item.title}</h5>
    <p id="newsDate">${item.date}</p>
    <p id="newsDescription">${item.description}</p>`;
      $("#newsContent").append($researchDiv);
    });
  });
  $("#exampleModal7").modal("toggle");
});

document.querySelector("#newsButton1").addEventListener("click", function () {
  ISTDepartmentConsumer.getData("/news/older/").done(function (json) {
    $.each(json.older, function (index, item) {
      let $researchDiv = `<h5 class="modal-title" id="newsTitle">${item.title}</h5>
    <p id="newsDate">${item.date}</p>
    <p id="newsDescription">${item.description}</p>`;
      $("#newsContent").append($researchDiv);
    });
  });
  $("#exampleModal7").modal("toggle");
});

/**
 * Getting footer data
 */
ISTDepartmentConsumer.getData("/footer/").done(function (json) {
  $.each(json.quickLinks, function (index, item) {
    $("#quickLinks").append(
      `<li><i class="bx bx-chevron-right"></i> <a href="${item.href}">${item.title}</a></li>
          `
    );
  });
  $.each(json, function (index, item) {
    if (index == "social") {
      $("#social").append(
        `<h4>${item.title}</h4>
        <ul>
        <li>
       ${item.tweet + " " + item.by}
      </li>
      <li>
       ${item.twitter}
      </li>
      <li>
       ${item.facebook}
      </li>
      </ul>
          `
      );
    }
  });
  
  $.each(json, function (index, item) {
    if (index == "copyright") {
      $("#copyright").append(
        `<h4>${item.title}</h4>
        ${item.html}
          `
      );
    }
    
  });
});

$(document).ajaxStop(function(){
  $.LoadingOverlay("hide");
});

/**
 * Rendering map
 */
let map = $("#map").attr({
  src: "http://ist.rit.edu/api/map/",
  frameborder: "0",
  id: "map",
  height: "700",
  width: "100%",
});
$("#map").append(map); //Appending the map to the map div

/**
 * Appending modals to the main section so they can be toggled
 */
window.onload = function () {
  $("#main")
    .append(`<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="itemTitle"></h5>
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <h5 class="font-weight-bold text-center" >Concentrations</h5>
              <div id="concentrations"></div>
              <p><small>To learn more about this degree, visit our website</small> <a id="degreeLink" href=""></a></p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog"  aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="minorTitle"></h3>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p id="minorDescription"></p>
            <h4 class="text-center">Courses</h4>
            <div id="minorCourses">
              <div id="minorCourseTitle" class="text-center">
            </div>
            </div>
            <p><small id="minorNote"></small></p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="modal bd-example-modal-lg fade" id="exampleModal3" tabindex="-1" role="dialog"  aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="tableTitle"></h3>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div id="tablesDiv" class="container row mr-auto ml-auto">
        </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="peopleName"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-lg-6">
          <img id="peopleImg" src="https://ist.rit.edu/assets/img/people/gpavks.jpg">
          </div>
          <div class="col-lg-6">
          <p id="office"></p>
          <p><a id="website"></a></p>
          <p id="phone"></p>
          <p><a id="email"></a></p>
          <p><a id="twitter"></a></p>
          <p><a id="facebook"></a></p>
          </div>
        </div>
        <h3 id="aboutPeople"></h3>
        <h3 id="educationPeople"></h3>
        <h3 id="highlightsPeople"></h3>
      </div>
      
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="researchName"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <ul id="researchContent"></ul>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="resourceName"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <ul id="resourceContent"></ul>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModal7" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">News</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div id="newsContent" class="modal-body">
        
        </div>
      </div>
    </div>
  </div>
`);
};

/**
 * Methods used for rendering modals, rendering different types of cards, rednering tables...
 */

/**
 * Function which is used by the getData methods for returning items from an array, so they are printed without commmas
 * @param {array} array - Items saved in an array
 * @param {*} type
 * @returns 
 */
function returnItemsFromArray(array, type) {
  let returnItems = [];
  for (let i = 0; i < array.length; i++) {
    if (type == "p") returnItems.push(`<p>${array[i]}</p>`);
    else if (type == false) returnItems.push(array[i]);
    else if (type == "card")
      returnItems.push(
        `<div class="uk-card uk-card-body uk-card-default mb-4">${array[i]}</div>`
      );
  }
  if (type == "p") return returnItems.join("");
  else if (type == "card") return returnItems.join("");
  else if (type == false) return returnItems.join("<br></br>");
}

/**
 * Function for rendering a modal which diaplays degree data
 * @param {*} item 
 */
function renderDegreeModal(item) {
  document.getElementById("itemTitle").innerHTML = item.title;
  document.getElementById("concentrations").innerHTML = returnItemsFromArray(
    item.concentrations,
    "p"
  );
  document.getElementById(
    "degreeLink"
  ).href = `http://${item.degreeName}.rit.edu`;
  document.getElementById(
    "degreeLink"
  ).innerHTML = `http://${item.degreeName}.rit.edu`;
}

/**
 * Function for rendering a modal which displays minor data
 * @param {array} item - Items saved in an array
 */
function renderMinorModal(item) {
  document.getElementById("minorTitle").innerHTML = item.title;
  document.getElementById("minorDescription").innerHTML = item.description;
  document.getElementById("minorCourseTitle").innerHTML = returnItemsFromArray(
    item.courses,
    "card"
  );
  document.getElementById("minorNote").innerHTML = item.note;
}

/**
 * Function for rendering a modal which displays the first table
 * @param {array} item - Items saved in an array
 */
function renderCoModal(item) {

  $("#tablesDiv").empty();
  let $table = `
      <table id="firstTable" class="uk-table ml-2 mr-2">
    <thead>
        <tr>
            <th>DEGREE</th>
            <th>EMPLOYER</th>
            <th>LOCATION</th>
            <th>TERM</th>
        </tr>
    </thead>
    <tbody id="tableContent">
        
    </tbody>
</table>
  `;
  $("#tablesDiv").append($table);
  for (var i = 0; i < item.length; i++) {
    let $row = `<tr>
        <td>${item[i].degree}	</td>
        <td>${item[i].employer}</td>
        <td>${item[i].city}</td>
        <td>${item[i].term}</td>
    </tr>`;
    $("#tableContent").append($row);
  }

  document.getElementById("tableTitle").innerHTML =
    "Recent Student Coop Jobs (6/2013-9/2015)";
  $(document).ready(function () {
    $("#firstTable").DataTable();
  });
}

/**
 * Function for rendering a modal which displays the second table
 * @param {array} item - Items saved in an array
 */
function renderEtModal(item) {
  $("#tablesDiv").empty();
  let $table = `
      <table id="secondTable" class="uk-table ml-2 mr-2">
    <thead>
        <tr>
            <th>DEGREE</th>
            <th>EMPLOYER</th>
            <th>LOCATION</th>
            <th>TITLE</th>
            <th>DATE</th>
        </tr>
    </thead>
    <tbody id="tableContent">
        
    </tbody>
</table>
  `;
  $("#tablesDiv").append($table);
  for (var i = 0; i < item.length; i++) {
    let $row = `<tr>
    <td>${item[i].employer}</td>
        <td>${item[i].degree}	</td>
        <td>${item[i].city}</td>
        <td>${item[i].title}</td>
        <td>${item[i].startDate}</td>
    </tr>`;
    $("#tableContent").append($row);
  }

  document.getElementById("tableTitle").innerHTML =
    "Recent Student Coop Jobs (6/2013-9/2015)";
  $(document).ready(function () {
    $("#secondTable").DataTable();
  });
}

/**
 * Function for rendering a modal which displays people data
 * @param {array} item - Items saved in an array
 */
function renderPeopleModal(item) {
  document.getElementById("peopleName").innerHTML =
    item.name + ", " + item.title;
  document.getElementById("peopleImg").src = item.imagePath;
  document.getElementById("office").innerHTML = item.office;
  document.getElementById("website").innerHTML = item.website;
  document.getElementById("phone").innerHTML = item.phone;
  document.getElementById("email").innerHTML = item.email;
  document.getElementById("email").href = "mailto:" + item.email;
  document.getElementById("twitter").innerHTML = "Twitter";
  document.getElementById("facebook").innerHTML = "Facebook";
  document.getElementById("twitter").href =
    "https://twitter.com/" + item.twitter;
  document.getElementById("facebook").href =
    "https://web.facebook.com/" + item.facebook;
}

document.getElementById("facultyButton").addEventListener("click", function () {
  getFaculty();
});
document.getElementById("staffButton").addEventListener("click", function () {
  getStaff();
});

/**
 * Function for rendering a modal which displays two types of people data
 * @param {array} item - Items saved in an array 
 * @param {*} bool - determines which type of people data is needed
 */
function renderResearchModal(item, bool) {
  $("#researchContent").empty();
  if (bool == true) {
    document.getElementById("researchName").innerHTML =
      "Research By Domain Area: " + item.areaName;
    for (var i = 0; i < item.citations.length; i++) {
      $("#researchContent").append(`<li>${item.citations[i]}</li>`);
    }
  } else if (bool == false) {
    document.getElementById("researchName").innerHTML = item.facultyName;
    for (var i = 0; i < item.citations.length; i++) {
      $("#researchContent").append(`<li>${item.citations[i]}</li>`);
    }
  }
}

/**
 * Function for rendering a modal which displays two types of people resource
 * @param {array} item - Items saved in an array 
 * @param {*} bool - determines which type of people resource is needed
 */
function renderResourcesModal(item, bool) {
  $("#resourceContent").empty();
  if (item.title == undefined) {
    document.getElementById("resourceName").innerHTML = "Forms";

    let $studyDiv = `
      ${getForms(item.graduateForms)}
      
      <p><a href="${item.undergraduateForms.href}">${
      item.undergraduateForms[0].formName
    }</a></p>
      `;
    $("#resourceContent").append($studyDiv);
  } else {
    if (bool == "studyAbroad") {
      document.getElementById("resourceName").innerHTML = item.title;
      let $studyDiv = `<p>${item.description}</p>
      <h3>${item.places[0].nameOfPlace}</h3>
      <p>${item.places[0].description}</p>
      <h3>${item.places[1].nameOfPlace}</h3>
      <p>${item.places[1].description}</p>`;

      $("#resourceContent").append($studyDiv);
    }
    if (bool == "studentServices") {
      document.getElementById("resourceName").innerHTML = item.title;
      let $studyDiv = `
      <h3>${item.academicAdvisors.title}</h3>
      <p>${item.academicAdvisors.description}</p>
      <p><a href="${item.academicAdvisors.faq.contentHref}">${
        item.academicAdvisors.faq.title
      }</a></p>   
      <h3>${item.professonalAdvisors.title}</h3>
      ${getAdvisors(item.professonalAdvisors.advisorInformation)} 

      <h3>${item.facultyAdvisors.title}</h3>
      <p>${item.facultyAdvisors.description}</p>
      <h3>${item.istMinorAdvising.title}</h3>
      ${getMinorAdvisors(item.istMinorAdvising.minorAdvisorInformation)}
      `;

      $("#resourceContent").append($studyDiv);
    }

    if (bool == "tutorsAndLabInformation") {
      document.getElementById("resourceName").innerHTML = item.title;
      let $studyDiv = `
      <p>${item.description}</p>
      <a href="${item.tutoringLabHoursLink}">${item.tutoringLabHoursLink}</a>
      `;
      $("#resourceContent").append($studyDiv);
    }
    if (bool == "studentAmbassadors") {
      document.getElementById("resourceName").innerHTML = item.title;
      let $studyDiv = `
      <img src="${item.ambassadorsImageSource}">
      ${getSubSection(item.subSectionContent)}
      <a href="${item.applicationFormLink}">${item.applicationFormLink}</a>
      <p>${item.note}</p>
      `;
      $("#resourceContent").append($studyDiv);
    }

    if (bool == "coopEnrollment") {
      document.getElementById("resourceName").innerHTML = item.title;
      let $studyDiv = `
      ${getCoop(item.enrollmentInformationContent)}
      `;
      $("#resourceContent").append($studyDiv);
    }
  }

  function getAdvisors(item) {
    let returnItem = [];
    for (let i = 0; i < item.length; i++) {
      returnItem.push(`
        <p>${item[i].name}</p>
        <p>${item[i].department}</p>
        <p>${item[i].email}</p>
        <br><br>`);
    }
    return returnItem.join("");
  }

  function getMinorAdvisors(item) {
    let returnItem = [];
    for (let i = 0; i < item.length; i++) {
      returnItem.push(`
        <p>${item[i].title}</p>
        <p>${item[i].advisor}</p>
        <p>${item[i].email}</p>
        <br><br>`);
    }
    return returnItem.join("");
  }

  function getSubSection(item) {
    let returnItem = [];
    for (let i = 0; i < item.length; i++) {
      returnItem.push(`
        <p>${item[i].title}</p>
        <p>${item[i].description}</p>
        <br><br>`);
    }
    return returnItem.join("");
  }

  function getForms(item) {
    let returnItem = [];
    for (let i = 0; i < item.length; i++) {
      returnItem.push(
        `<p><a href="${item[i].href}">${item[i].formName}</a></p>`
      );
    }
    return returnItem.join("");
  }

  function getCoop(item) {
    console.log(item);
    let returnItem = [];
    for (let i = 0; i < item.length; i++) {
      returnItem.push(
        `<h4>${item[i].title}</h4><p>${item[i].description}"></p>`
      );
    }
    return returnItem.join("");
  }
}
/**
 * Event lister for the submit button in the form
 */
$("#submit").click((event) => {
  event.preventDefault();
  if (
    validateName($("#name").val()) &&
    validatePhoneNumber($("#phone1").val()) &&
    validatePhoneNumber($("#phone2").val()) &&
    validatePhoneNumberL($("#phone3").val()) &&
    validateEmail($("#email").val()) &&
    $("#message").val() != ""
  ) {
    console.log($("#name").val());
    console.log($("#phone1").val());
    console.log($("#phone2").val());
    console.log($("#phone3").val());
    console.log($("#email").val());
    console.log($("#message").val());

    localStorage.setItem('name', $("#name").val());
    localStorage.setItem('phone number', $("#phone1").val() + $("#phone2").val() + $("#phone3").val());
    localStorage.setItem('email', $("#email").val());
    localStorage.setItem('message', $("#message").val());

    $("#name").innerHTML = "";
    $("#email").innerHTML = "";
    $("#phone1").innerHTML = "";
    $("#phone2").innerHTML = "";
    $("#phone3").innerHTML = "";
    let result = $('#form').serialize();
    console.log(result);
    
    document.getElementById("submitSuccessful").innerHTML =
      "Form successfully submitted.";
  } else {
    document.getElementById("submitSuccessful").innerHTML =
      "Form unsuccessfully submitted.";
  }
});

/**
 * Function for the name input field in the form
 */
$("#name").change((event) => {
  if (validateName(event.target.value)) {
    //If succesfully validated...
    $("#name").removeClass("is-invalid"); //Removing the is-invalid bootstrap class
    $("#name").addClass("is-valid"); //Adding the is-valid bootstrap class
    $("#nameFeedback").addClass("valid-feedback");
    $("#nameFeedback").innerHTML = "";
  } else if (validateName(event.target.value) == false) {
    //If unsuccessfully validated...
    $("#name").removeClass("is-valid"); //Removing the is-valid bootstrap class
    $("#name").addClass("is-invalid"); //Adding the is-invalid bootstrap class
    $("#nameFeedback").addClass("invalid-feedback");

    //Disaplying erorr message
    $("#nameFeedback").innerHTML =
      "First name cannot have numerals.";
  }
});

/**
 * Function for the phone input field in the form
 */
 $("#phone1").change((event) => {
  if (validatePhoneNumber(event.target.value)) {
    //If succesfully validated...
    $("#phone1").removeClass("is-invalid"); //Removing the is-invalid bootstrap class
    $("#phone1").addClass("is-valid"); //Adding the is-valid bootstrap class
    $("#phoneFeedback").addClass("valid-feedback");
    $("#phoneFeedback").innerHTML = "";
  } else if (validatePhoneNumber(event.target.value) == false) {
    //If unsuccessfully validated...
    $("#phone1").removeClass("is-valid"); //Removing the is-valid bootstrap class
    $("#phone1").addClass("is-invalid"); //Adding the is-invalid bootstrap class
    $("#phoneFeedback").addClass("invalid-feedback");

    //Disaplying erorr message
    $("#phoneFeedback").innerHTML =
      "Wrong phone number input.";
  }
});

/**
 * Function for the phone input field in the form
 */
$("#phone2").change((event) => {
  if (validatePhoneNumber(event.target.value)) {
    //If succesfully validated...
    $("#phone2").removeClass("is-invalid"); //Removing the is-invalid bootstrap class
    $("#phone2").addClass("is-valid"); //Adding the is-valid bootstrap class
    $("#phoneFeedback").addClass("valid-feedback");
    $("#phoneFeedback").innerHTML = "";
  } else if (validatePhoneNumber(event.target.value) == false) {
    //If unsuccessfully validated...
    $("#phone2").removeClass("is-valid"); //Removing the is-valid bootstrap class
    $("#phone2").addClass("is-invalid"); //Adding the is-invalid bootstrap class
    $("#phoneFeedback").addClass("invalid-feedback");

    //Disaplying erorr message
    $("#phoneFeedback").innerHTML =
      "Wrong phone number input.";
  }
});

/**
 * Function for the phone input field in the form
 */
$("#phone3").change((event) => {
  if (validatePhoneNumberL(event.target.value)) {
    //If succesfully validated...
    $("#phone3").removeClass("is-invalid"); //Removing the is-invalid bootstrap class
    $("#phone3").addClass("is-valid"); //Adding the is-valid bootstrap class
    $("#phoneFeedback").addClass("valid-feedback");
    $("#phoneFeedback").innerHTML = "";
  } else if (validatePhoneNumberL(event.target.value) == false) {
    //If unsuccessfully validated...
    $("#phone3").removeClass("is-valid"); //Removing the is-valid bootstrap class
    $("#phone3").addClass("is-invalid"); //Adding the is-invalid bootstrap class
    $("#phoneFeedback").addClass("invalid-feedback");

    //Disaplying erorr message
    $("#phoneFeedback").innerHTML =
      "Wrong phone number input.";
  }
});

/**
 * Function for the email input field in the form
 */
$("#email").change((event) => {
  if (validateEmail(event.target.value)) {
    //If succesfully validated...
    $("#email").removeClass("is-invalid"); //Removing the is-invalid bootstrap class
    $("#email").addClass("is-valid"); //Adding the is-valid bootstrap class
    $("#emailFeedback").addClass("valid-feedback");
    $("#emailFeedback").innerHTML = "";
  } else if (validateEmail(event.target.value) == false) {
    //If unsuccessfully validated...
    $("#email").removeClass("is-valid"); //Removing the is-valid bootstrap class
    $("#email").addClass("is-invalid"); //Adding the is-invalid bootstrap class
    $("#emailFeedback").addClass("invalid-feedback");

    //Disaplying erorr message
    $("#emailFeedback").innerHTML = "Wrong email format.";
  }
});

/**
 * Function for the message input field in the form
 */
$("#message").change((event) => {
  if (event.target.value != "") {
    //If succesfully validated...
    $("#message").removeClass("is-invalid"); //Removing the is-invalid bootstrap class
    $("#message").addClass("is-valid"); //Adding the is-valid bootstrap class
    $("#messageFeedback").addClass("valid-feedback");
    $("#messageFeedback").innerHTML = "";
  } else if (event.target.value == "") {
    //If unsuccessfully validated...
    $("#message").removeClass("is-valid"); //Removing the is-valid bootstrap class
    $("#message").addClass("is-invalid"); //Adding the is-invalid bootstrap class
    $("#messageFeedback")
      .addClass("invalid-feedback");

    //Disaplying erorr message
    $("#messageFeedback").innerHTML =
      "This field cannot be empty.";
  }
});

/**
 * Functions for validating input fields
 */
function validateName(value) {
  if (value.match(/[a-z]{1,10}/g)) {
    return true;
  } else {
    return false;
  }
}

function validatePhoneNumber(value) {
  if (value.match(/^\d{3}$/)) {
    return true;
  } else {
    return false;
  }
}
function validatePhoneNumberL(value) {
  if (value.match(/^\d{4}$/)) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(value) {
  if (
    value.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    return true;
  } else {
    return false;
  }
}
