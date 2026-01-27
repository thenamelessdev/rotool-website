const navbar = document.getElementById("navbar-thing");
const copyright = document.getElementById("copy");

fetch("../static/html/navbar.html")
    .then(response => response.text())
    .then(html => {
        navbar.innerHTML = html;
    });

copyright.innerHTML = `&copy; thenamelessdev ${new Date().getFullYear()}. Licensed under the MIT license`;
copyright.style.marginTop = "15px"