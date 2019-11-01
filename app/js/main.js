var loginModal = document.getElementById("login-modal");
var button = document.getElementById("open-modal-login");
var iconClose = document.getElementById("close-login-modal");

var contentSignUp = document.getElementById("content-sign-up");
var contentLogin = document.getElementById("content-login");
var buttonSignUp = document.getElementById("link-sign-up");
var buttonLogIn = document.getElementById("link-log-in");



button.onclick = function() {
    loginModal.style.display = "block";
};

iconClose.onclick = function() {
    loginModal.style.display = "none";
};

buttonSignUp.onclick = function() {
    contentSignUp.style.display = "block";
    buttonSignUp.className = "active-route";
    buttonLogIn.className = "in-active-route";
    contentLogin.style.display = "none";
};

buttonLogIn.onclick = function() {
    contentSignUp.style.display = "none";
    buttonLogIn.className = "active-route";
    buttonSignUp.className = "in-active-route";
    contentLogin.style.display = "block";
};

window.onclick = function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
};