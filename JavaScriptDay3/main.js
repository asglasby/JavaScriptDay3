var dogsArray = [];
var forebaseUrl = "http://ccamlessons.firebaseio.com/Dogs.json";

var DogConstructor = function (name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
}

var postAjax = function (dog) {
    var request = new XMLHttpRequest();
    request.open('POST', firebaseUrl, true);
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            console.log("success");
            dogsArray.push(dog);
        } else {
            console.error(this.response);
        }
    }
    request.send(JSON.stringify(dog));
}