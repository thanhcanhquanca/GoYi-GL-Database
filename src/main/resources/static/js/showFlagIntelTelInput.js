// Khởi tạo intl-tel-input
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    initialCountry: "vn", // Mặc định là Việt Nam, có thể thay đổi
    separateDialCode: true, // Hiển thị mã quốc gia riêng
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // Tải tiện ích định dạng số
});

// Hàm lấy số điện thoại đầy đủ
function getFullPhoneNumber() {
    return phoneInput.getNumber(); // Trả về số đầy đủ, ví dụ: +84912345678
}
