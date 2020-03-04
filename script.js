fetch('http://api.openweathermap.org/data/2.5/forecast?lat=-34.6230&lon=-58.4015&appid=e82888e26a307e41dd4e36764d317c4f')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
console.log("hi");

document.getElementById("var").innerHTML = "<p> hola </p>";