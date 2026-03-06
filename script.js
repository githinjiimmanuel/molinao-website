function orderNow() {
    alert("Call or WhatsApp 0743169485 to place your order!");
}

function showMessage() {
    document.getElementById("message").innerHTML =
        "Thank you for contacting Molinao Kenya Coffee Shop! We will respond shortly.";
}

function orderNow() {
    window.open("https://wa.me/254743169485", "_blank");
}

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.onclick = () => {
nav.classList.toggle("active");
}
