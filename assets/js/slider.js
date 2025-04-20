// Thêm đoạn mã này vào file slider.js hoặc tạo một file js mới
document.addEventListener("DOMContentLoaded", function () {
    // Phần JavaScript slider hiện tại của bạn
    let currentIndex = 0;
    const images = document.querySelectorAll(".slider_img");
    const totalImages = images.length;

    function changeImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].classList.add("active");
    }

    setInterval(changeImage, 8000); // Chuyển ảnh mỗi 3 giây

    // Thêm code xử lý header
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Nếu đang cuộn xuống
        if (scrollTop > lastScrollTop) {
            // Hiển thị header khi cuộn xuống
            header.classList.remove('hidden');
        } 
        // Nếu đang cuộn lên và không ở đầu trang
        else if (scrollTop < lastScrollTop && scrollTop > 50) {
            // Ẩn header khi cuộn lên
            header.classList.add('hidden');
        }
        
        // Nếu cuộn đến đầu trang, hiện header
        if (scrollTop <= 10) {
            header.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop;
    });
});