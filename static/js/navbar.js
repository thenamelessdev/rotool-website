const navbar = document.getElementById("navbar-thing");

fetch("../static/html/navbar.html")
    .then(response => response.text())
    .then(html => {
        navbar.innerHTML = html;
    });