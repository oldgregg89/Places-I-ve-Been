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
    if (this.places[i].id === id) {
      delete.this.places;
      return true;
    }
  };
  return false;
}

// Business Logic for Place
function Places(landMark, date, notes) {
  this.landMark = landMark;
  this.date = date;
  this.notes = notes;
}

//User Interface logic
$(document).ready(function() {
  $('form#new-place').submit(function(event)) {
event.preventDefault
  }
});