document.getElementById("contact-btn").addEventListener("click", function () {
  window.location.href = "contact.html";
});

let topLogo = document.getElementById("topLogo");
setTimeout(function () {
  topLogo.style.display = "none";
}, 10000);
document.getElementById("callButton").addEventListener("click", function () {
  window.location.href = "tel:9900880012";
});
