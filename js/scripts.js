//business Logic for places I've been
function PlacesIveBeenBook() {
  this.placesInBook = []
  this.currentId = 0
}

PlacesIveBeenBook.prototype.addPlace = function (place) {
  place.id = this.assignId();
  this.placesInBook.push(place);
  console.log(placesIveBeenBook)
}

PlacesIveBeenBook.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId
}

PlacesIveBeenBook.prototype.findPlace = function(id) {
  for (let = 0; i < this.places.length ; i++) {
    if (this.places[i].id == id) {
      return this.places[i];
    }
  };
  return false;
}

PlacesIveBeenBook.prototype.deletePlace = function(id) {
  for (let i=0; i< this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id === id) {
        delete this.places;
        return true;
      }
    }
  };
  return false;
}

// Business Logic for Place
function Places(cityName, landmark, date, notes) {
  this.cityName = cityName;
  this.landmark = landmark;
  this.date = date;
  this.notes = notes;
  console.log(cityName, landmark)
}
Places.prototype.placeName = function() {
  return this.cityName;
}

//User Interface logic
let placesIveBeenBook = new PlacesIveBeenBook ();

function displayPlacesDetail(placesIveBeenBookToDisplay) {
  let placesList = ($("ul#places"));
  let htmlForPlacesInfo = ""
  placesIveBeenBookToDisplay.places.forEach(function(place) {
    htmlForPlacesInfo += "<li id=" + places.id + ">" + places.cityName + "<li>"
  });
placesList.html(htmlForPlacesInfo)
}



$(document).ready(function() {
  $('form#new-place').submit(function(event) {
  event.preventDefault();
  const inputtedPlace = $("input#new-place").val();
  const inputtedLandmark = $("input#new-landmark").val();
  const inputtedDate = $("input#new-date").val();
  const inputtedNotes = $("input#new-notes").val();

  $("input#new-landmark").val('');
  $("input#new-date").val('');
  $("input#new-notes").val('');

  console.log(inputtedLandmark)
  let newPlace = new Places(inputtedPlace, inputtedLandmark, inputtedDate, inputtedNotes)
  placesIveBeenBook.addPlace(newPlace)
  displayPlacesDetail(placesIveBeenBook)
  console.log(placesIveBeenBook.placesInBook)
  });
});