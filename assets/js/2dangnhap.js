const formDANGNHAP = document.getElementById("formDANGNHAP");
const emailE = document.getElementById("email");
const passwordE = document.getElementById("password");
const passErr = document.getElementById("passErr");

formDANGNHAP.addEventListener("submit", function (e) {
    e.preventDefault();

    //du lieu vao

    //lay du lieu tu local\
    const userLocal = JSON.parse(localStorage.getItem("users")) || [];

    //tim xem co ton tai tren local k
    const findUser = userLocal.find(user =>
        user.email === emailE.value &&
        user.password === passwordE.value
    );
    if (!findUser) {
        passErr.style.display = "block";

    } else {
        window.location.href = "trangchu.html";
    }
});