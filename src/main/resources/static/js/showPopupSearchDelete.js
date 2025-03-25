const search_input = document.getElementById('search_input');
const popup_container_search = document.getElementById('popup-container-search');


search_input.addEventListener("click", function () {
    const buttonRectSearch = search_input.getBoundingClientRect();
    popup_container_search.style.top = `${buttonRectSearch.bottom + window.scrollY + 8}px`; // Cách nút 8px
    popup_container_search.style.left = `${buttonRectSearch.left + window.scrollX}px`;

    if (popup_container_search.style.display === 'none' || popup_container_search.style.display === '') {
        popup_container_search.style.display = 'block'; // Hiển thị
    } else {
        // popup_container_search.style.display = 'none'; // Ẩn
    }

});

document.addEventListener('click', function (event) {
    if (!popup_container_search.contains(event.target) && !search_input.contains(event.target)) {
        popup_container_search.style.display = 'none'; // Ẩn popup nếu nhấn ra ngoài
    }
});



