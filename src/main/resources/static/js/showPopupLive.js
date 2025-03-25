// Lấy các phần tử DOM
const createButton = document.getElementById('create-button');
const popupContainer = document.getElementById('popup-container');

// Lắng nghe sự kiện click vào nút "Tạo"
createButton.addEventListener("click",function () {
    const buttonRect = createButton.getBoundingClientRect();

    // Đặt vị trí của popup ngay dưới nút
    popupContainer.style.top = `${buttonRect.bottom + window.scrollY + 8}px`; // Cách nút 8px
    popupContainer.style.left = `${buttonRect.left + window.scrollX}px`;

    // Toggle hiển thị popup
    if (popupContainer.style.display === 'none' || popupContainer.style.display === '') {
        popupContainer.style.display = 'block'; // Hiển thị
    } else {
        popupContainer.style.display = 'none'; // Ẩn
    }

});

// Đóng popup khi nhấn ra ngoài (nếu cần)
document.addEventListener('click', function (event) {
    if (!popupContainer.contains(event.target) && !createButton.contains(event.target)) {
        popupContainer.style.display = 'none'; // Ẩn popup nếu nhấn ngoài
    }
});