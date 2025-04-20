document.addEventListener('DOMContentLoaded', function() {
    // Dữ liệu sản phẩm
    const products = [
        {
            id: 1,
            name: "Áo thun boxy nam",
            price: 200000,
            oldPrice: 400000,
            image: "../assets/img/item01.png",
            description: "Chất liệu: Cotton 100%\nMàu sắc: Đen, Trắng, Xám",
            sizes: ["S", "M", "L", "XL"]
        },
        {
            id: 2,
            name: "Áo thun basic nam",
            price: 150000,
            oldPrice: 300000,
            image: "../assets/img/item02.png",
            description: "Chất liệu: Cotton Compact\nMàu sắc: Xanh Navy, Trắng",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 3,
            name: "Áo thun oversize nam",
            price: 220000,
            oldPrice: 0,
            image: "../assets/img/item03.png",
            description: "Chất liệu: Cotton 95%, Spandex 5%\nMàu sắc: Đen, Kem",
            sizes: ["S", "M", "L"]
        },
        {
            id: 4,
            name: "Áo thun thể thao nam",
            price: 170000,
            oldPrice: 0,
            image: "../assets/img/item04.png",
            description: "Chất liệu: Thun lạnh thể thao\nMàu sắc: Xám, Đỏ",
            sizes: ["M", "L", "XL", "XXL"]
        },
        {
            id: 5,
            name: "Áo thun cổ tròn nam",
            price: 160000,
            oldPrice: 0,
            image: "../assets/img/item05.png",
            description: "Chất liệu: Cotton USA\nMàu sắc: Trắng, Đen, Xanh lá",
            sizes: ["S", "M", "L", "XL"]
        },
        {
            id: 6,
            name: "Áo thun tay lỡ nam",
            price: 210000,
            oldPrice: 420000,
            image: "../assets/img/item06.png",
            description: "Chất liệu: Cotton 2 chiều\nMàu sắc: Be, Xanh than",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 7,
            name: "Áo thun in hình nam",
            price: 250000,
            oldPrice: 0,
            image: "../assets/img/item7.png",
            description: "Chất liệu: Cotton Thái\nMàu sắc: Đen, Trắng, Hồng",
            sizes: ["S", "M", "L"]
        },
        {
            id: 8,
            name: "Áo thun dài tay nam",
            price: 230000,
            oldPrice: 0,
            image: "../assets/img/item8.png",
            description: "Chất liệu: Cotton lạnh\nMàu sắc: Ghi, Xanh rêu",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 9,
            name: "Áo thun slimfit nam",
            price: 240000,
            oldPrice: 0,
            image: "../assets/img/item9.png",
            description: "Chất liệu: Cotton Spandex\nMàu sắc: Đen, Trắng",
            sizes: ["S", "M", "L", "XL"]
        },
        {
            id: 10,
            name: "Áo thun local brand nam",
            price: 290000,
            oldPrice: 0,
            image: "../assets/img/item10.png",
            description: "Chất liệu: Cotton USA\nMàu sắc: Đen, Cam, Vàng",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 11,
            name: "Áo thun form rộng nam",
            price: 200000,
            oldPrice: 0,
            image: "../assets/img/item11.png",
            description: "Chất liệu: Cotton mềm mịn\nMàu sắc: Tím, Trắng, Xám",
            sizes: ["S", "M", "L", "XL"]
        },
        {
            id: 12,
            name: "Áo thun cổ tim nam",
            price: 190000,
            oldPrice: 0,
            image: "../assets/img/item12.png",
            description: "Chất liệu: Cotton 65/35\nMàu sắc: Xám tro, Xanh mint",
            sizes: ["M", "L"]
        },
        {
            id: 13,
            name: "Áo thun phản quang nam",
            price: 270000,
            oldPrice: 0,
            image: "../assets/img/item13.png",
            description: "Chất liệu: Cotton phản quang\nMàu sắc: Đen, Bạc",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 14,
            name: "Áo thun tie-dye nam",
            price: 260000,
            oldPrice: 0,
            image: "../assets/img/item14.png",
            description: "Chất liệu: Cotton nhuộm thủ công\nMàu sắc: Nhiều màu",
            sizes: ["S", "M", "L"]
        },
        {
            id: 15,
            name: "Áo thun retro nam",
            price: 225000,
            oldPrice: 0,
            image: "../assets/img/item15.png",
            description: "Chất liệu: Cotton vintage\nMàu sắc: Nâu, Xanh, Kem",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 16,
            name: "Áo thun oversize basic",
            price: 240000,
            oldPrice: 0,
            image: "../assets/img/item16.png",
            description: "Chất liệu: Cotton 100%\nMàu sắc: Đen, Trắng, Ghi",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 17,
            name: "Áo thun local brand form rộng",
            price: 270000,
            oldPrice: 0,
            image: "../assets/img/item17.png",
            description: "Chất liệu: Cotton USA\nMàu sắc: Đen, Tím, Vàng",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 18,
            name: "Áo thun unisex tay lỡ",
            price: 230000,
            oldPrice: 0,
            image: "../assets/img/item18.png",
            description: "Chất liệu: Cotton Compact\nMàu sắc: Nâu, Cam, Trắng",
            sizes: ["S", "M", "L"]
        },
        {
            id: 19,
            name: "Áo thun graphic streetwear",
            price: 260000,
            oldPrice: 0,
            image: "../assets/img/item19.png",
            description: "Chất liệu: Cotton Thái\nMàu sắc: Đen, Hồng, Xám",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 20,
            name: "Áo thun retro cổ tròn",
            price: 250000,
            oldPrice: 500000,
            image: "../assets/img/item20.png",
            description: "Chất liệu: Cotton vintage\nMàu sắc: Be, Đỏ, Xanh",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 21,
            name: "Áo sơ mi tay ngắn cổ tàu",
            price: 230000,
            oldPrice: 0,
            image: "../assets/img/item21.png",
            description: "Chất liệu: Linen\nMàu sắc: Trắng, Be, Xanh",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 22,
            name: "Áo sơ mi denim xanh đậm",
            price: 270000,
            oldPrice: 0,
            image: "../assets/img/item22.png",
            description: "Chất liệu: Denim\nMàu sắc: Xanh đậm",
            sizes: ["M", "L"]
        },
        {
            id: 23,
            name: "Áo sơ mi họa tiết hoa lá",
            price: 290000,
            oldPrice: 580000,
            image: "../assets/img/item23.png",
            description: "Chất liệu: Lụa tổng hợp\nMàu sắc: Nhiều màu",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 24,
            name: "Áo sơ mi trơn cổ điển",
            price: 220000,
            oldPrice: 440000,
            image: "../assets/img/item24.png",
            description: "Chất liệu: Cotton Nhật\nMàu sắc: Trắng, Đen",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 25,
            name: "Áo sơ mi tay lửng pastel",
            price: 260000,
            oldPrice: 0,
            image: "../assets/img/item25.png",
            description: "Chất liệu: Kate Ý\nMàu sắc: Hồng, Xanh pastel",
            sizes: ["S", "M", "L"]
        },
        {
            id: 26,
            name: "Áo sơ mi cổ vest lịch lãm",
            price: 280000,
            oldPrice: 0,
            image: "../assets/img/item26.png",
            description: "Chất liệu: Cotton Ý\nMàu sắc: Ghi, Xám, Đen",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 27,
            name: "Áo sơ mi ngắn tay trẻ trung",
            price: 210000,
            oldPrice: 0,
            image: "../assets/img/item27.png",
            description: "Chất liệu: Kate Hàn\nMàu sắc: Trắng, Vàng, Xanh",
            sizes: ["M", "L"]
        },
        {
            id: 28,
            name: "Áo sơ mi cổ trụ thời trang",
            price: 240000,
            oldPrice: 0,
            image: "../assets/img/item28.png",
            description: "Chất liệu: Linen thô\nMàu sắc: Be, Trắng, Xanh mint",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 29,
            name: "Áo sơ mi họa tiết tropical",
            price: 290000,
            oldPrice: 0,
            image: "../assets/img/item29.png",
            description: "Chất liệu: Lụa mềm\nMàu sắc: Nhiều màu",
            sizes: ["M", "L"]
        },
        {
            id: 30,
            name: "Áo sơ mi sọc dọc basic",
            price: 230000,
            oldPrice: 0,
            image: "../assets/img/item30.png",
            description: "Chất liệu: Cotton co giãn\nMàu sắc: Xanh trắng, Đen trắng",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 31,
            name: "Áo sơ mi dáng dài phong cách",
            price: 250000,
            oldPrice: 500000,
            image: "../assets/img/item31.png",
            description: "Chất liệu: Cotton Nhật\nMàu sắc: Trắng, Xám, Nâu",
            sizes: ["M", "L"]
        },
        {
            id: 32,
            name: "Áo sơ mi cổ lọ unisex",
            price: 270000,
            oldPrice: 540000,
            image: "../assets/img/item32.png",
            description: "Chất liệu: Denim cotton\nMàu sắc: Đen, Xanh đen",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 33,
            name: "Áo sơ mi caro pastel",
            price: 220000,
            oldPrice: 440000,
            image: "../assets/img/item33.png",
            description: "Chất liệu: Vải flannel mềm\nMàu sắc: Hồng, Xanh dương",
            sizes: ["S", "M", "L"]
        },
        {
            id: 34,
            name: "Áo sơ mi trắng cổ trụ dài tay",
            price: 260000,
            oldPrice: 520000,
            image: "../assets/img/item34.png",
            description: "Chất liệu: Cotton lạnh\nMàu sắc: Trắng",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 35,
            name: "Áo sơ mi kẻ sọc hiện đại",
            price: 245000,
            oldPrice: 490000,
            image: "../assets/img/item35.png",
            description: "Chất liệu: Cotton lụa\nMàu sắc: Đen trắng, Xanh trắng",
            sizes: ["M", "L"]
        },
        {
            id: 36,
            name: "Áo sơ mi linen cổ điển",
            price: 280000,
            oldPrice: 560000,
            image: "../assets/img/item36.png",
            description: "Chất liệu: Linen cao cấp\nMàu sắc: Be, Ghi",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 37,
            name: "Áo sơ mi form Hàn Quốc",
            price: 235000,
            oldPrice: 470000,
            image: "../assets/img/item37.png",
            description: "Chất liệu: Kate silk\nMàu sắc: Hồng nhạt, Xám khói",
            sizes: ["M", "L"]
        },
        {
            id: 38,
            name: "Áo sơ mi ngắn tay form rộng",
            price: 215000,
            oldPrice: 430000,
            image: "../assets/img/item38.png",
            description: "Chất liệu: Cotton đũi\nMàu sắc: Trắng, Xanh ngọc",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 39,
            name: "Áo sơ mi chấm bi phong cách",
            price: 250000,
            oldPrice: 500000,
            image: "../assets/img/item39.png",
            description: "Chất liệu: Lụa Nhật\nMàu sắc: Đen trắng",
            sizes: ["M", "L"]
        },
        {
            id: 40,
            name: "Áo sơ mi form slimfit công sở",
            price: 265000,
            oldPrice: 530000,
            image: "../assets/img/item40.png",
            description: "Chất liệu: Kate Mỹ\nMàu sắc: Trắng, Xanh navy",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 41,
            name: "Quần jeans slimfit xanh cổ điển",
            price: 320000,
            oldPrice: 0,
            image: "../assets/img/item1.png",
            description: "Chất liệu: Denim co giãn\nMàu sắc: Xanh denim",
            sizes: ["28", "29", "30", "31", "32"]
        },
        {
            id: 42,
            name: "Quần tây công sở dáng ôm",
            price: 350000,
            oldPrice: 0,
            image: "../assets/img/item42.png",
            description: "Chất liệu: Kate Ý\nMàu sắc: Đen, Xám",
            sizes: ["29", "30", "31", "32", "33"]
        },
        {
            id: 43,
            name: "Quần kaki ống suông basic",
            price: 300000,
            oldPrice: 0,
            image: "../assets/img/item43.png",
            description: "Chất liệu: Kaki co giãn\nMàu sắc: Be, Nâu, Đen",
            sizes: ["28", "30", "32", "34"]
        },
        {
            id: 44,
            name: "Quần jogger nỉ thể thao",
            price: 270000,
            oldPrice: 540000,
            image: "../assets/img/item44.png",
            description: "Chất liệu: Nỉ da cá\nMàu sắc: Xám, Đen",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 45,
            name: "Quần short kaki trẻ trung",
            price: 220000,
            oldPrice: 440000,
            image: "../assets/img/item45.png",
            description: "Chất liệu: Kaki mềm\nMàu sắc: Xanh rêu, Vàng",
            sizes: ["28", "30", "32"]
        },
        {
            id: 46,
            name: "Quần jeans rách gối cá tính",
            price: 330000,
            oldPrice: 0,
            image: "../assets/img/item46.png",
            description: "Chất liệu: Denim cao cấp\nMàu sắc: Xanh nhạt, Xám",
            sizes: ["29", "30", "31", "32"]
        },
        {
            id: 47,
            name: "Quần nỉ bo ống unisex",
            price: 250000,
            oldPrice: 0,
            image: "../assets/img/item47.png",
            description: "Chất liệu: Nỉ mềm\nMàu sắc: Đen, Ghi",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 48,
            name: "Quần tây ống đứng lịch lãm",
            price: 360000,
            oldPrice: 0,
            image: "../assets/img/item48.png",
            description: "Chất liệu: Vải tuyết mưa\nMàu sắc: Xám khói, Đen",
            sizes: ["30", "31", "32", "33"]
        },
        {
            id: 49,
            name: "Quần short thể thao nam",
            price: 190000,
            oldPrice: 0,
            image: "../assets/img/item49.png",
            description: "Chất liệu: Poly 4 chiều\nMàu sắc: Xám, Xanh navy",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 50,
            name: "Quần kaki baggy thời trang",
            price: 310000,
            oldPrice: 0,
            image: "../assets/img/item50.png",
            description: "Chất liệu: Kaki thô\nMàu sắc: Be, Xám, Đen",
            sizes: ["28", "30", "32", "34"]
        },
        {
            id: 51,
            name: "Quần ống loe style Hàn",
            price: 345000,
            oldPrice: 0,
            image: "../assets/img/item51.png",
            description: "Chất liệu: Vải nhung tăm\nMàu sắc: Nâu, Be",
            sizes: ["S", "M", "L"]
        },
        {
            id: 52,
            name: "Quần culottes dáng rộng",
            price: 280000,
            oldPrice: 0,
            image: "../assets/img/item52.png",
            description: "Chất liệu: Vải lanh\nMàu sắc: Trắng, Be, Đen",
            sizes: ["S", "M", "L", "XL"]
        },
        {
            id: 53,
            name: "Quần jeans trơn basic",
            price: 290000,
            oldPrice: 0,
            image: "../assets/img/item53.png",
            description: "Chất liệu: Jeans cotton\nMàu sắc: Xanh, Đen",
            sizes: ["28", "30", "32", "34"]
        },
        {
            id: 54,
            name: "Quần short linen mùa hè",
            price: 230000,
            oldPrice: 0,
            image: "../assets/img/item54.png",
            description: "Chất liệu: Linen\nMàu sắc: Trắng, Ghi nhạt",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 55,
            name: "Quần skinny co giãn",
            price: 310000,
            oldPrice: 0,
            image: "../assets/img/item55.png",
            description: "Chất liệu: Cotton co giãn\nMàu sắc: Đen, Nâu",
            sizes: ["28", "29", "30", "31", "32"]
        },
        {
            id: 56,
            name: "Quần jogger jean phong cách",
            price: 295000,
            oldPrice: 0,
            image: "../assets/img/item56.png",
            description: "Chất liệu: Denim co giãn\nMàu sắc: Xanh rêu, Xanh đen",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 57,
            name: "Quần short caro streetwear",
            price: 210000,
            oldPrice: 0,
            image: "../assets/img/item57.png",
            description: "Chất liệu: Cotton lưới\nMàu sắc: Đen trắng, Đỏ đen",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 58,
            name: "Quần âu ống côn cao cấp",
            price: 340000,
            oldPrice: 0,
            image: "../assets/img/item58.png",
            description: "Chất liệu: Kate cao cấp\nMàu sắc: Đen, Ghi",
            sizes: ["29", "30", "31", "32"]
        },
        {
            id: 59,
            name: "Quần legging nam ôm dáng",
            price: 230000,
            oldPrice: 0,
            image: "../assets/img/item59.png",
            description: "Chất liệu: Thun lạnh co giãn\nMàu sắc: Đen",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 60,
            name: "Quần jogger túi hộp nam",
            price: 300000,
            oldPrice: 0,
            image: "../assets/img/item60.png",
            description: "Chất liệu: Dù chống thấm\nMàu sắc: Đen, Xanh rêu",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 61,
            name: "Quần jean rách gối cá tính",
            price: 330000,
            oldPrice: 660000,
            image: "../assets/img/item61.png",
            description: "Chất liệu: Jeans co giãn\nMàu sắc: Xanh, Đen",
            sizes: ["28", "29", "30", "31", "32"]
        },
        {
            id: 62,
            name: "Quần tây form slim trẻ trung",
            price: 340000,
            oldPrice: 680000,
            image: "../assets/img/item62.png",
            description: "Chất liệu: Tuyết mưa\nMàu sắc: Đen, Ghi, Xanh đen",
            sizes: ["29", "30", "31", "32", "33"]
        },
        {
            id: 63,
            name: "Quần short thể thao nam",
            price: 200000,
            oldPrice: 400000,
            image: "../assets/img/item63.png",
            description: "Chất liệu: Thun lạnh\nMàu sắc: Đen, Trắng, Xám",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 64,
            name: "Quần ống rộng lưng cao nữ",
            price: 355000,
            oldPrice: 0,
            image: "../assets/img/item64.png",
            description: "Chất liệu: Linen\nMàu sắc: Be, Trắng, Nâu",
            sizes: ["S", "M", "L"]
        },
        {
            id: 65,
            name: "Quần jogger thun mềm mại",
            price: 290000,
            oldPrice: 0,
            image: "../assets/img/item65.png",
            description: "Chất liệu: Thun da cá\nMàu sắc: Xám, Đen, Xanh navy",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 66,
            name: "Quần legging tập gym nữ",
            price: 250000,
            oldPrice: 0,
            image: "../assets/img/item66.png",
            description: "Chất liệu: Thun co giãn 4 chiều\nMàu sắc: Đen, Tím, Xám",
            sizes: ["S", "M", "L"]
        },
        {
            id: 67,
            name: "Quần kaki túi hộp đa năng",
            price: 320000,
            oldPrice: 0,
            image: "../assets/img/item67.png",
            description: "Chất liệu: Kaki dày dặn\nMàu sắc: Rêu, Be, Đen",
            sizes: ["28", "29", "30", "31", "32"]
        },
        {
            id: 68,
            name: "Quần jeans wash loang",
            price: 345000,
            oldPrice: 0,
            image: "../assets/img/item68.png",
            description: "Chất liệu: Denim cotton\nMàu sắc: Xanh sáng, Xanh đen",
            sizes: ["29", "30", "31", "32", "33"]
        },
        {
            id: 69,
            name: "Quần âu Hàn Quốc lịch lãm",
            price: 360000,
            oldPrice: 0,
            image: "../assets/img/item69.png",
            description: "Chất liệu: Vải Hàn cao cấp\nMàu sắc: Ghi, Đen, Xanh than",
            sizes: ["29", "30", "31", "32", "34"]
        },
        {
            id: 70,
            name: "Quần short kaki cạp chun",
            price: 240000,
            oldPrice: 0,
            image: "../assets/img/item70.png",
            description: "Chất liệu: Kaki mềm\nMàu sắc: Be, Nâu, Xám",
            sizes: ["M", "L", "XL"]
        },
        {
            id: 71,
            name: "Giày sneaker trắng basic",
            price: 450000,
            oldPrice: 0,
            image: "../assets/img/item71.png",
            description: "Chất liệu: Da PU\nMàu sắc: Trắng",
            sizes: ["38", "39", "40", "41", "42"]
        },
        {
            id: 72,
            name: "Giày thể thao chạy bộ",
            price: 520000,
            oldPrice: 0,
            image: "../assets/img/item72.png",
            description: "Chất liệu: Lưới thoáng khí\nMàu sắc: Đen, Xám",
            sizes: ["39", "40", "41", "42", "43"]
        },
        {
            id: 73,
            name: "Giày lười nam da mềm",
            price: 490000,
            oldPrice: 0,
            image: "../assets/img/item73.png",
            description: "Chất liệu: Da tổng hợp\nMàu sắc: Đen, Nâu",
            sizes: ["40", "41", "42", "43"]
        },
        {
            id: 74,
            name: "Giày boot cổ cao cá tính",
            price: 610000,
            oldPrice: 1220000,
            image: "../assets/img/item74.png",
            description: "Chất liệu: Da PU\nMàu sắc: Đen, Nâu đất",
            sizes: ["41", "42", "43"]
        },
        {
            id: 75,
            name: "Giày sneaker Hàn Quốc",
            price: 580000,
            oldPrice: 1160000,
            image: "../assets/img/item75.png",
            description: "Chất liệu: Vải canvas\nMàu sắc: Trắng, Xám",
            sizes: ["38", "39", "40", "41"]
        },
        {
            id: 76,
            name: "Dép sandal nam ",
            price: 390000,
            oldPrice: 780000,
            image: "../assets/img/item76.png",
            description: "Chất liệu: Cao su dẻo\nMàu sắc: Đen, Xanh navy",
            sizes: ["39", "40", "41", "42"]
        },
        {
            id: 77,
            name: "Dép da công sở cổ điển",
            price: 670000,
            oldPrice: 1340000,
            image: "../assets/img/item77.png",
            description: "Chất liệu: Da bò thật\nMàu sắc: Đen, Nâu đậm",
            sizes: ["40", "41", "42"]
        },
        {
            id: 78,
            name: "Dép sneaker retro 90s",
            price: 560000,
            oldPrice: 1120000,
            image: "../assets/img/item78.png",
            description: "Chất liệu: Vải dù + da PU\nMàu sắc: Đen trắng, Xám đỏ",
            sizes: ["39", "40", "41", "42", "43"]
        },
        {
            id: 79,
            name: "Dép slip-on thời trang",
            price: 420000,
            oldPrice: 840000,
            image: "../assets/img/item79.png",
            description: "Chất liệu: Vải bố cao cấp\nMàu sắc: Ghi, Đen",
            sizes: ["38", "39", "40", "41"]
        },
        {
            id: 80,
            name: "Dép thể thao năng động",
            price: 500000,
            oldPrice: 1000000,
            image: "../assets/img/item80.png",
            description: "Chất liệu: Vải lưới + đế EVA\nMàu sắc: Đen, Trắng, Xanh",
            sizes: ["39", "40", "41", "42"]
        },
        {
            id: 81,
            name: "Ví da bò gập đôi",
            price: 300000,
            oldPrice: 600000,
            image: "../assets/img/item81.png",
            description: "Chất liệu: Da bò thật\nMàu sắc: Đen, Nâu",
            sizes: []
        },
        {
            id: 82,
            name: "Ví mini nữ thời trang",
            price: 200000,
            oldPrice: 400000,
            image: "../assets/img/item82.png",
            description: "Chất liệu: Da tổng hợp\nMàu sắc: Hồng, Kem, Xanh",
            sizes: []
        },
        {
            id: 83,
            name: "Ví dài cầm tay nam",
            price: 350000,
            oldPrice: 700000,
            image: "../assets/img/item83.png",
            description: "Chất liệu: Da PU cao cấp\nMàu sắc: Nâu, Đen",
            sizes: []
        },
        {
            id: 84,
            name: "Ví da vân cá sấu",
            price: 400000,
            oldPrice: 800000,
            image: "../assets/img/item84.png",
            description: "Chất liệu: Da bò vân\nMàu sắc: Đen, Nâu đậm",
            sizes: []
        },
        {
            id: 85,
            name: "Ví gập ba tiện lợi",
            price: 250000,
            oldPrice: 500000,
            image: "../assets/img/item85.png",
            description: "Chất liệu: Da tổng hợp\nMàu sắc: Xám, Đen",
            sizes: []
        },
        {
            id: 86,
            name: "Thắt lưng da bò khóa kim",
            price: 240000,
            oldPrice: 480000,
            image: "../assets/img/item86.png",
            description: "Chất liệu: Da bò\nMàu sắc: Đen, Nâu",
            sizes: []
        },
        {
            id: 87,
            name: "Thắt lưng tự động cao cấp",
            price: 260000,
            oldPrice: 520000,
            image: "../assets/img/item87.png",
            description: "Chất liệu: Da thật + Khóa hợp kim\nMàu sắc: Đen, Nâu",
            sizes: []
        },
        {
            id: 88,
            name: "Thắt lưng da vân cá sấu",
            price: 300000,
            oldPrice: 0,
            image: "../assets/img/item88.png",
            description: "Chất liệu: Da bò vân nổi\nMàu sắc: Đen, Nâu đỏ",
            sizes: []
        },
        {
            id: 89,
            name: "Thắt lưng thời trang trẻ trung",
            price: 200000,
            oldPrice: 0,
            image: "../assets/img/item89.png",
            description: "Chất liệu: PU mềm mại\nMàu sắc: Nâu sáng, Đen",
            sizes: []
        },
        {
            id: 90,
            name: "Thắt lưng da trơn bản nhỏ",
            price: 225000,
            oldPrice: 0,
            image: "../assets/img/item90.png",
            description: "Chất liệu: Da bò mịn\nMàu sắc: Đen, Xám",
            sizes: []
        },
        {
            id: 91,
            name: "Nón lưỡi trai basic",
            price: 100000,
            oldPrice: 200000,
            image: "../assets/img/item91.png",
            description: "Chất liệu: Cotton thoáng khí\nMàu sắc: Đen, Trắng",
            sizes: ["Free Size"]
        },
        {
            id: 92,
            name: "Nón bucket vải dù",
            price: 125000,
            oldPrice: 250000,
            image: "../assets/img/item92.png",
            description: "Chất liệu: Vải dù chống nắng\nMàu sắc: Be, Xanh rêu",
            sizes: ["Free Size"]
        },
        {
            id: 93,
            name: "Nón snapback phong cách",
            price: 150000,
            oldPrice: 300000,
            image: "../assets/img/item93.png",
            description: "Chất liệu: Jean + vải kaki\nMàu sắc: Đen, Đỏ",
            sizes: ["Free Size"]
        },
        {
            id: 94,
            name: "Nón beret vải nỉ",
            price: 175000,
            oldPrice: 350000,
            image: "../assets/img/item94.png",
            description: "Chất liệu: Vải nỉ ấm\nMàu sắc: Nâu, Xám",
            sizes: ["Free Size"]
        },
        {
            id: 95,
            name: "Nón kết thể thao",
            price: 140000,
            oldPrice: 280000,
            image: "../assets/img/item95.png",
            description: "Chất liệu: Vải dù nhẹ\nMàu sắc: Đen, Xanh navy",
            sizes: ["Free Size"]
        },
        {
            id: 96,
            name: "Vớ cổ ngắn cotton",
            price: 50000,
            oldPrice: 100000,
            image: "../assets/img/item96.png",
            description: "Chất liệu: Cotton êm\nMàu sắc: Trắng, Xám",
            sizes: ["Free Size"]
        },
        {
            id: 97,
            name: "Vớ thể thao cổ trung",
            price: 60000,
            oldPrice: 120000,
            image: "../assets/img/item97.png",
            description: "Chất liệu: Thun co giãn\nMàu sắc: Đen, Trắng",
            sizes: ["Free Size"]
        },
        {
            id: 98,
            name: "Vớ không cổ chống trượt",
            price: 45000,
            oldPrice: 90000,
            image: "../assets/img/item98.png",
            description: "Chất liệu: Cotton pha\nMàu sắc: Đen, Be",
            sizes: ["Free Size"]
        },
        {
            id: 99,
            name: "Vớ nam cổ cao giữ ấm",
            price: 75000,
            oldPrice: 150000,
            image: "../assets/img/item99.png",
            description: "Chất liệu: Len cotton pha\nMàu sắc: Ghi, Đen",
            sizes: ["Free Size"]
        },
        {
            id: 100,
            name: "Vớ lười thoáng khí",
            price: 55000,
            oldPrice: 110000,
            image: "../assets/img/item100.png",
            description: "Chất liệu: Vải mesh thoáng\nMàu sắc: Trắng, Đen, Xám",
            sizes: ["Free Size"]
        }
    ];

    // Giỏ hàng
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // DOM Elements
    const productModal = document.querySelector('.product-modal');
    const modalOverlay = document.querySelector('.modal__overlay');
    const modalClose = document.querySelector('.product-detail__close');
    
    // Các element trong modal
    const productDetailImg = document.getElementById('product-modal-image');
    const productDetailName = document.getElementById('product-modal-name');
    const productDetailPriceOld = document.querySelector('.product-detail__price-old');
    const productDetailPriceCurrent = document.querySelector('.product-detail__price-current');
    const productDetailSaleOff = document.querySelector('.product-detail__sale-off');
    const productDetailDesc = document.getElementById('product-modal-desc');
    const sizeOptionsContainer = document.getElementById('product-size-options');
    const btnAddToCart = document.querySelector('.btn-add-to-cart');
    const btnBuyNow = document.querySelector('.btn-buy-now');
    const quantityInput = document.getElementById('product-quantity');
    const minusBtn = document.querySelector('.quantity-control__btn.minus');
    const plusBtn = document.querySelector('.quantity-control__btn.plus');

    // Hiển thị modal sản phẩm
    // function showProductModal(productId) {
    //     const product = products.find(p => p.id === productId);
    //     if (product) {
    //         // Cập nhật hình ảnh
    //         productDetailImg.src = product.image;
    //         productDetailImg.alt = product.name;
            
    //         // Cập nhật thông tin sản phẩm
    //         productDetailName.textContent = product.name;
    //         productDetailPriceOld.textContent = `${product.oldPrice.toLocaleString()}đ`;
    //         productDetailPriceCurrent.textContent = `${product.price.toLocaleString()}đ`;
            
    //         // Tính % giảm giá
    //         const discountPercent = Math.round((1 - product.price / product.oldPrice) * 100);
    //         productDetailSaleOff.textContent = `-${discountPercent}%`;
            
    //         // Cập nhật mô tả
    //         productDetailDesc.innerHTML = product.description.split('\n').map(line => `<p>${line}</p>`).join('');
            
    //         // Cập nhật size options
    //         updateSizeOptions(product.sizes);
            
    //         // Lưu productId vào các nút
    //         btnAddToCart.dataset.productId = productId;
    //         btnBuyNow.dataset.productId = productId;
            
    //         // Reset số lượng
    //         quantityInput.value = 1;
            
    //         // Hiển thị modal
    //         productModal.classList.add('active');
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         console.error('Không tìm thấy sản phẩm với ID:', productId);
    //     }
    // }
    function showProductModal(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            // Cập nhật hình ảnh
            productDetailImg.src = product.image;
            productDetailImg.alt = product.name;
            
            // Cập nhật thông tin sản phẩm
            productDetailName.textContent = product.name;
            productDetailPriceCurrent.textContent = `${product.price.toLocaleString()}đ`;
            
            // Xử lý hiển thị giá cũ và % giảm giá
            if (product.oldPrice > 0) {
                // Hiển thị giá cũ và khuyến mãi
                productDetailPriceOld.style.display = 'inline-block';
                productDetailPriceOld.textContent = `${product.oldPrice.toLocaleString()}đ`;
                
                // Tính % giảm giá
                const discountPercent = Math.round((1 - product.price / product.oldPrice) * 100);
                productDetailSaleOff.style.display = 'inline-block';
                productDetailSaleOff.textContent = `-${discountPercent}%`;
                
                // Reset style cho giá hiện tại
                productDetailPriceCurrent.style.marginLeft = '';
                productDetailPriceCurrent.style.marginRight = '10px';
            } else {
                // Ẩn giá cũ và khuyến mãi
                productDetailPriceOld.style.display = 'none';
                productDetailSaleOff.style.display = 'none';
                
                // Điều chỉnh style cho giá hiện tại
                productDetailPriceCurrent.style.marginLeft = '0';
                productDetailPriceCurrent.style.marginRight = '0';
            }
            
            // Cập nhật mô tả
            productDetailDesc.innerHTML = product.description.split('\n').map(line => `<p>${line}</p>`).join('');
            
            // Cập nhật size options
            updateSizeOptions(product.sizes);
            
            // Lưu productId vào các nút
            btnAddToCart.dataset.productId = productId;
            btnBuyNow.dataset.productId = productId;
            
            // Reset số lượng
            quantityInput.value = 1;
            
            // Hiển thị modal
            productModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            console.error('Không tìm thấy sản phẩm với ID:', productId);
        }
    }

    // Cập nhật size options
    function updateSizeOptions(availableSizes) {
        sizeOptionsContainer.innerHTML = '';
        
        availableSizes.forEach(size => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'size-option' + (size === 'M' ? ' active' : '');
            button.dataset.size = size;
            button.textContent = size;
            button.addEventListener('click', selectSize);
            sizeOptionsContainer.appendChild(button);
        });
    }

    // Chọn size
    function selectSize() {
        document.querySelectorAll('.size-option').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
    }

    // Đóng modal
    function closeProductModal() {
        productModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Thêm vào giỏ hàng
    function addToCart(e) {
        e.preventDefault();
        
        const productId = parseInt(this.dataset.productId);
        const quantity = parseInt(quantityInput.value) || 1;
        const size = document.querySelector('.size-option.active')?.dataset.size || 'M';
        
        const product = products.find(p => p.id === productId);
        if (!product) return;

        let existingItem = cart.find(item => item.id === productId && item.size === size);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                size: size,
                quantity: quantity
            });
        }
        
        // Lưu vào localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        alert(`Đã thêm ${quantity} ${product.name} (Size: ${size}) vào giỏ hàng`);
        closeProductModal();
        updateCartCount();
    }

    // Mua ngay
    function buyNow(e) {
        e.preventDefault();
        
        const productId = parseInt(this.dataset.productId);
        const quantity = parseInt(quantityInput.value) || 1;
        const size = document.querySelector('.size-option.active')?.dataset.size || 'M';
        
        const product = products.find(p => p.id === productId);
        if (!product) return;

        // Thêm vào giỏ hàng trước khi chuyển đến trang thanh toán
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size: size,
            quantity: quantity
        });
        
        localStorage.setItem('cart', JSON.stringify(cart));
        
        alert(`Đã thêm ${quantity} ${product.name} (Size: ${size}) vào giỏ hàng và chuyển đến trang thanh toán`);
        closeProductModal();
        updateCartCount();
        
        // window.location.href = '/checkout'; // Bỏ comment nếu muốn chuyển trang thật
    }

    // Cập nhật số lượng trên icon giỏ hàng
    function updateCartCount() {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        const cartBadge = document.querySelector('.cart-badge') || document.createElement('span');
        
        cartBadge.className = 'cart-badge';
        cartBadge.textContent = totalItems > 0 ? totalItems : '';
        
        const cartIcon = document.querySelector('.header_right-icon-cart');
        if (cartIcon && !cartIcon.contains(cartBadge)) {
            cartIcon.appendChild(cartBadge);
        }
    }

    // Sự kiện số lượng
    minusBtn.addEventListener('click', () => {
        let value = parseInt(quantityInput.value);
        if (value > 1) quantityInput.value = value - 1;
    });
    
    plusBtn.addEventListener('click', () => {
        let value = parseInt(quantityInput.value);
        quantityInput.value = value + 1;
    });

    // Sự kiện thêm vào giỏ hàng
    btnAddToCart.addEventListener('click', addToCart);
    btnBuyNow.addEventListener('click', buyNow);

    // Sự kiện đóng modal
    modalOverlay.addEventListener('click', closeProductModal);
    modalClose.addEventListener('click', closeProductModal);

    // Ngăn modal đóng khi click vào nội dung
    document.querySelector('.modal__body').addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Thêm sự kiện cho các sản phẩm - ĐÃ SỬA LẠI PHẦN NÀY
    document.querySelectorAll('[data-product]').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = parseInt(this.dataset.product);
            if (!isNaN(productId)) {    
                showProductModal(productId);
            }
        });
    });

    // Khởi tạo giỏ hàng
    updateCartCount();
});

//hàm cho chuyển đổi giá cao thấp 
document.addEventListener("DOMContentLoaded", function () {
    const selectElement = document.getElementById("priceFilter");

    if (selectElement) {
        // Đặt lại option đã chọn dựa theo URL hiện tại
        const currentPage = window.location.pathname.split("/").pop(); // lấy tên file HTML
        for (let i = 0; i < selectElement.options.length; i++) {
            if (selectElement.options[i].value === currentPage) {
                selectElement.selectedIndex = i;
                break;
            }
        }

        // Gắn sự kiện thay đổi
        selectElement.addEventListener("change", function () {
            const url = this.value;
            if (url) {
                window.location.href = url;
            }
        });
    }
});

