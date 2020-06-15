//business Logic for places I've been
function PlacesIveBeenBook() {
  this.places = []
  this.currentId = 0
}

PlacesIveBeenBook.prototype.addPlace = function (place) {
  place.id = this.assignId();
  this.places.push(place);
}

// Business Logic for Place
function Places(landMark, date, notes) {
  this.landMark = landMark;
  this.date = date;
  this.notes = notes;
}

//User Interface logic
$(document).ready(function(){

});