let technologies = [];
let technology = {};

fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    technologies.push(...data.technology);
    technology = technologies[0];
  });

function select(elem, tech) {
  technology = technologies[tech - 1];

  var siblings = (n) => [...n.parentElement.children].filter((c) => c != n);

  var brothers_n_sisters = siblings(elem);
  elem.classList.add("active-techlink");
  brothers_n_sisters.forEach((e) => e.classList.remove("active-techlink"));

  this.content();
}

function content() {
  let portrait = document.getElementById("portrait");
  let landscape = document.getElementById("landscape");
  let name = document.querySelector(".tech-name");
  let desc = document.querySelector(".tech-desc");

  portrait.src = technology.images.portrait;
  landscape.src = technology.images.landscape;
  name.innerHTML = technology.name;
  desc.innerHTML = technology.description;
}
