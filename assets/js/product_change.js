document.addEventListener("DOMContentLoaded", function() {
    // Slider hiện tại của bạn
    let currentSliderIndex = 0;
    const sliderImages = document.querySelectorAll(".slider_img");
    const totalSliderImages = sliderImages.length;

    function changeSliderImage() {
        sliderImages[currentSliderIndex].classList.remove("active");
        currentSliderIndex = (currentSliderIndex + 1) % totalSliderImages;
        sliderImages[currentSliderIndex].classList.add("active");
    }

    setInterval(changeSliderImage, 5000); // Chuyển ảnh mỗi 5 giây
    
    // Xử lý header hiện/ẩn
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

    // Thêm mã xử lý chuyển đổi sản phẩm
    const productSets = document.querySelectorAll('.product-set');
    let currentProductSetIndex = 0;
    const totalProductSets = productSets.length;

    // Hiển thị bộ sản phẩm đầu tiên ngay khi trang tải
    if (productSets.length > 0) {
        productSets[0].classList.add('active');
    }

    function changeProductSet() {
        productSets[currentProductSetIndex].classList.remove('active');
        currentProductSetIndex = (currentProductSetIndex + 1) % totalProductSets;
        productSets[currentProductSetIndex].classList.add('active');
    }

    // Chuyển đổi sản phẩm mỗi 5 giây
    setInterval(changeProductSet, 5000);
});