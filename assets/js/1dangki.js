const formDANGKI = document.getElementById("formDANGKI");

const fullnameE = document.getElementById("fullname");
const emailE = document.getElementById("email");
const sdtE = document.getElementById("sdt");
const passwordE = document.getElementById("password");
const confirmPasswordE = document.getElementById("confirmPassword");
//E lien quan den loi
const NameErr = document.getElementById("NameErr");
const EmailErr = document.getElementById("EmailErr");
const SDTErr = document.getElementById("SDTErr");
const PSErr = document.getElementById("PSErr");
const CPSErr = document.getElementById("CPSErr");


//lay du lieu tu local
const userLocal = JSON.parse(localStorage.getItem("users")) || [];

function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}


formDANGKI.addEventListener("submit", function (e) {
    e.preventDefault(); //ngăn reload trang

    let isValid = true; //biến kiểm tra hợp lệ tổng thể

    // Kiểm tra fullname
    const nameRegex = /^[^\d]+$/; // không chứa số
    if (!fullnameE.value) {
        NameErr.style.display = "block";
        NameErr.innerHTML = "Vui lòng nhập họ tên.";
        isValid = false;
    } else if (!nameRegex.test(fullnameE.value)) {
        NameErr.style.display = "block";
        NameErr.innerHTML = "Họ tên không được chứa số.";
        isValid = false;
    } else {
        NameErr.style.display = "none";
    }

    // Kiểm tra email
    if (!emailE.value) {
        EmailErr.style.display = "block";
        EmailErr.innerHTML = "Vui lòng nhập email.";
        isValid = false;
    } else if (!validateEmail(emailE.value)) {
        EmailErr.style.display = "block";
        EmailErr.innerHTML = "Email không đúng định dạng.";
        isValid = false;
    } else {
        EmailErr.style.display = "none";
    }

    // Kiểm tra số điện thoại
    const sdtRegex = /^0\d{9,10}$/;
    if (!sdtE.value) {
        SDTErr.style.display = "block";
        SDTErr.innerHTML = "Vui lòng nhập số điện thoại.";
        isValid = false;
    } else if (!sdtRegex.test(sdtE.value)) {
        SDTErr.style.display = "block";
        SDTErr.innerHTML = "Số điện thoại không hợp lệ. Ví dụ: 0901234567";
        isValid = false;
    } else {
        SDTErr.style.display = "none";
    }

    // Kiểm tra password
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/;
    if (!passwordE.value) {
        PSErr.style.display = "block";
        PSErr.innerHTML = "Vui lòng nhập mật khẩu.";
        isValid = false;
    } else if (!passwordRegex.test(passwordE.value)) {
        PSErr.style.display = "block";
        PSErr.innerHTML = "Mật khẩu phải có ít nhất 1 số và 1 ký tự đặc biệt.";
        isValid = false;
    } else {
        PSErr.style.display = "none";
    }

    // Kiểm tra nhập lại password
    if (!confirmPasswordE.value) {
        CPSErr.style.display = "block";
        CPSErr.innerHTML = "Vui lòng nhập lại mật khẩu.";
        isValid = false;
    } else if (passwordE.value !== confirmPasswordE.value) {
        CPSErr.style.display = "block";
        CPSErr.innerHTML = "Mật khẩu không khớp.";
        isValid = false;
    } else {
        CPSErr.style.display = "none";
    }

    // Nếu mọi thứ hợp lệ thì lưu vào localStorage
    if (isValid) {
        const user = {
            userId: Math.ceil(Math.random() * 10000000),
            sdt: sdtE.value,
            userName: fullnameE.value,
            email: emailE.value,
            password: passwordE.value,
        };

        userLocal.push(user);
        localStorage.setItem("users", JSON.stringify(userLocal));

        // Chuyển hướng sang trang đăng nhập
        setTimeout(function () {
            window.location.href = "dangNhap.html";
        }, 1000);
    }
});
