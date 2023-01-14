let crews = [];
let crew = {};
var slideIndex = 1;

fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    crews.push(...data.crew);
    crew = crews[0];
  });

carousel();

function carousel() {
  var i;
  slideIndex++;
  if (slideIndex > crews.length) {
    slideIndex = 1;
  }

  crew = crews[slideIndex - 1];

  var dots = document.getElementsByClassName("crew-nav-link");
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("nav-link-active");
  }

  dots[slideIndex - 1].classList.add("nav-link-active");

  setTimeout(carousel, 6000);
  this.content();
}

function select(elem, num) {
  crew = crews[num - 1];
  var siblings = (n) => [...n.parentElement.children].filter((c) => c != n);

  var bros_n_siss = siblings(elem);
  elem.classList.add("nav-link-active");
  bros_n_siss.forEach((e) => e.classList.remove("nav-link-active"));

  this.content();
}

function content() {
  let picture = document.getElementById("crew-member");
  let post = document.querySelector(".post");
  let name = document.querySelector(".crew-name");
  let desc = document.querySelector(".crew-desc");

  picture.src = crew.images.webp;
  post.innerHTML = crew.role;
  name.innerHTML = crew.name;
  desc.innerHTML = crew.bio;
}
