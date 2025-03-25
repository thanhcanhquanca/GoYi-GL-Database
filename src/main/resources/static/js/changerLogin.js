// Khi nhấn nút "Đăng nhập"
document.getElementById("btn_changerLogin").addEventListener("click", function () {
    // Hiển thị phần đăng nhập
    const loginPopup = document.getElementById("showPopupChangerLogin");
    const registerPopup = document.getElementById("showPopupChangerRegister");
    const box_box = document.getElementById("box-box");
    const box_content_box = document.getElementById("box-content-box");

    if (loginPopup && registerPopup) {
        loginPopup.style.display = "flex";  // Hiển thị phần đăng nhập
        registerPopup.style.display = "none"; // Ẩn phần đăng ký
        box_box.style.background = "rgb(208, 206, 226)";
        box_content_box.style.background = "rgb(177, 221, 240)";
        box_content_box.style.border = "1px solid #75b5d0";
        box_box.style.border = "1px solid #7372af";

    } else {
        console.error("Không tìm thấy ID của các phần tử!");
    }

    document.getElementById("btn_changerLogin").classList.add("active-reg-login-form");
    document.getElementById("btn_changerRegister").classList.remove("active-reg-login-form");
});




// Khi nhấn nút "Đăng ký"
document.getElementById("btn_changerRegister").addEventListener("click", function () {
    // Hiển thị phần đăng ký
    const loginPopup = document.getElementById("showPopupChangerLogin");
    const registerPopup = document.getElementById("showPopupChangerRegister");
    const box_box = document.getElementById("box-box");
    const box_content_box = document.getElementById("box-content-box");

    if (loginPopup && registerPopup) {
        loginPopup.style.display = "none"; // Ẩn phần đăng nhập
        registerPopup.style.display = "flex"; // Hiển thị phần đăng ký
        box_box.style.background = "rgb(177, 221, 240)";
        box_content_box.style.background = "rgb(208, 206, 226)";
        box_content_box.style.border = "1px solid #7372af";
        box_box.style.border = "1px solid #75b5d0";

    } else {
        console.error("Không tìm thấy ID của các phần tử!");
    }
    document.getElementById("btn_changerRegister").classList.add("active-reg-login-form");
    document.getElementById("btn_changerLogin").classList.remove("active-reg-login-form");

});