let currentDestination = {};
let destinations = [];

fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    destinations.push(...data.destinations);
    currentDestination = destinations[0];
  });

function select(text) {
  console.log(text);
  destinations.map((destination) => {
    destination.name.toLowerCase() === text.innerHTML.toLowerCase()
      ? (currentDestination = destination)
      : "";
  });
  var siblings = (n) => [...n.parentElement.children].filter((c) => c != n);

  var brothers_n_sisters = siblings(text);
  text.classList.replace("inactive", "active");
  brothers_n_sisters.forEach((e) => e.classList.replace("active", "inactive"));

  this.content();
}

function content() {
  let picture = document.getElementById("picture");
  let name = document.querySelector(".dest-name");
  let desc = document.querySelector(".dest-desc");
  let distance = document.querySelector(".km");
  let time = document.querySelector(".days");

  console.log(currentDestination);

  picture.src = currentDestination.images.webp;
  name.innerHTML = currentDestination.name;
  desc.innerHTML = currentDestination.description;
  distance.innerHTML = currentDestination.distance;
  time.innerHTML = currentDestination.travel;
}
