const delete_inputSearch = document.getElementById('delete-search-input');
document.addEventListener('DOMContentLoaded', function () {
    const delete_inputSearch = document.getElementById('delete-search-input');
    const search_input = document.getElementById('search_input');

    // Theo dõi sự kiện nhập liệu
    search_input.addEventListener('input', function () {
        if (search_input.value.trim() !== "") {
            // Nếu có chữ, hiển thị nút
            delete_inputSearch.style.display = 'block';
        } else {
            // Nếu không có chữ, ẩn nút
            delete_inputSearch.style.display = 'none';
        }
    });

    // Xử lý sự kiện khi nhấn vào nút "Xóa"
    delete_inputSearch.addEventListener('click', function () {
        search_input.value = ''; // Xóa nội dung trong ô nhập
        delete_inputSearch.style.display = 'none'; // Ẩn nút
        search_input.focus(); // Đưa con trỏ về ô nhập
    });
});