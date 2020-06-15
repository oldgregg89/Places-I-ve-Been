//business Logic for places I've been
function PlacesIveBeenBook() {
  this.places = []
  this.currentId = 0
}

PlacesIveBeenBook.prototype.addPlace = function (place) {
  this.places.push(place);
}

PlacesIveBeenBook.prototype.assignId = function () {
  place.id = this.assignId();
  return this.ccurrentId
}

PlacesIveBeenBook.prototype.findplace = function(id) {
  for (let = 0; i < this.places.length; i++){
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
function Places(cityName, landMark, date, notes) {
  this.cityName = cityName;
  this.landMark = landMark;
  this.date = date;
  this.notes = notes;
}
Places.prototype.placeName = function() {
  return this.cityName;
}

//User Interface logic
let placesIveBeenBook = new PlacesIveBeenBook ();

$(document).ready(function() {
  $('form#new-place').submit(function(event) {
  event.preventDefault();
  const inputtedplace = $("input#new-place").val();
  const inputtedLandMark = $("input#new-landmark").val();
  const inputtedDate = $("input#new-date").val();
  const inputtedNotes = $("input#new-notes").val();
  let newPlace = new Places(inputtedLandMark. inputtedDate, inputtedNotes)
  placesIveBeenBook.addPlace(newPlace)
  console.log(placesIveBeenBook.places)
  });
});