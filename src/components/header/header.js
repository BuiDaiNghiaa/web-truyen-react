import logo from "../../assets/images/logo.png";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaBook, FaSortDown } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    useEffect(() => {
        const menus = [
            { button: document.querySelector(".par-menu1"), menu: document.querySelector(".sub-menu1") },
            { button: document.querySelector(".par-menu2"), menu: document.querySelector(".par-slide-menu") },
            { button: document.querySelector(".par-menu3"), menu: document.querySelector(".slide-menu3") },
        ];
        
        // Hàm đóng tất cả menu
        function closeAllMenus() {
            menus.forEach(({ menu }) => menu.classList.remove("active"));
        }
        
        // Lặp qua từng phần tử menu để thêm sự kiện
        menus.forEach(({ button, menu }) => {
            if (button && menu) {
                button.addEventListener("click", (event) => {
                    event.stopPropagation();
                    // Kiểm tra nếu menu đã mở
                    const isActive = menu.classList.contains("active");

                    if (isActive) {
                        // Nếu menu đã mở, đóng nó
                        menu.classList.remove("active");
                        console.log("active");
                    } else {
                        // Nếu không, đóng tất cả menu trước và mở menu hiện tại
                        closeAllMenus();
                        menu.classList.add("active");
                    }
                });
            }
        });
        
        // Đóng tất cả các menu khi click ra ngoài
        document.addEventListener("click", closeAllMenus);

        // Click icon-menu-dropdown 
        const iconMenuDropdown = document.querySelector(".menu-reponsive");
        if(iconMenuDropdown) {
            const ulDropdown = document.querySelector(".menu-drop");
            iconMenuDropdown.addEventListener("click", () => {
                ulDropdown.classList.toggle("block");
            })
        }


        // Select all menu items with a corresponding sub-menu
        const menuItems = document.querySelectorAll('.menu-edit');

        // Add a click event listener to each main menu item
        menuItems.forEach((menuItem, index) => {
            menuItem.addEventListener('click', () => {
                // Toggle the display of the corresponding sub-menu
                const subMenu = menuItem.nextElementSibling;
                if (subMenu && subMenu.classList.contains('sub-menu')) {
                    subMenu.classList.toggle('active');
                    menuItem.classList.toggle('active');
                }
            });
        });
        
    }, []);

    
      
    

    return(
        <>
          <header className="header">
            <div className="container">
                <div className="header_wrap">
                    <div className="header_logo">
                        <Link to="/"><img src={logo} alt="logo"/></Link>
                    </div>
                    <div className="header_menu">
                        <ul className="menu">
                            <li className="par-menu1 menu-edit"><TfiMenuAlt /><span>Danh sách<FaSortDown /></span>
                            <ul className="sub-menu1">
                                <li><Link to="/">Truyện mới cập nhật</Link></li>
                                <li><Link to="/">Truyện Hot</Link></li>
                                <li><Link to="/">Truyện Full</Link></li>
                                <li><Link to="/">Tiên Hiệp Hay</Link></li>
                                <li><Link to="/">Kiếm Hiệp Hay</Link></li>
                                <li><Link to="/">Truyện Teen Hay</Link></li>
                                <li><Link to="/">Ngôn Tình Hay</Link></li>
                                <li><Link to="/">Ngôn Tình Ngược</Link></li>
                                <li><Link to="/">Ngôn Tình Sủng</Link></li>
                                <li><Link to="/">Ngôn Tình Hài</Link></li>
                                <li><Link to="/">Đam Mỹ Hài</Link></li>
                                <li><Link to="/">Đam Mỹ Hay</Link></li>
                                <li><Link to="/">Đam Mỹ H Văn</Link></li>
                                <li><Link to="/">Đam Mỹ Sắc</Link></li>
                                <li><Link to="/">Truyện Hay</Link></li>
                            </ul>
                            </li>
                            <li className="par-menu2 menu-edit"><TfiMenuAlt /><span>Thể loại<FaSortDown /></span> 
                                <div className="par-slide-menu">
                                    <div className="slide-menu">
                                    <ul className="sub-menu2">
                                        <li><Link to="/">Tiên Hiệp</Link></li>
                                        <li><Link to="/">Kiếm Hiệp</Link></li>
                                        <li><Link to="/">Ngôn Tình</Link></li>
                                        <li><Link to="/">Đam Mỹ</Link></li>
                                        <li><Link to="/">Quan Trường</Link></li>
                                        <li><Link to="/">Võng Du</Link></li>
                                        <li><Link to="/">Khoa Huyễn</Link></li>
                                        <li><Link to="/">Hệ Thống</Link></li>
                                        <li><Link to="/">Huyền Huyễn</Link></li>
                                        <li><Link to="/">Dị Giới</Link></li>
                                        <li><Link to="/">Dị Năng</Link></li>
                                        <li><Link to="/">Quân Sự</Link></li>
                                        <li><Link to="/">Lịch Sử</Link></li>
                                        <li><Link to="/">Xuyên Không</Link></li>
                                    </ul>
                                    </div>
                                    <div className="slide-menu">
                                    <ul className="sub-menu2">
                                        <li><Link to="/">Xuyên Nhanh</Link></li>
                                        <li><Link to="/">Trọng Sinh</Link></li>
                                        <li><Link to="/">Trinh Thám</Link></li>
                                        <li><Link to="/">Thám Hiểm</Link></li>
                                        <li><Link to="/">Linh Dị</Link></li>
                                        <li><Link to="/">Sắc</Link></li>
                                        <li><Link to="/">Ngược</Link></li>
                                        <li><Link to="/">Sủng</Link></li>
                                        <li><Link to="/">Cung Đấu</Link></li>
                                        <li><Link to="/">Nữ Cường</Link></li>
                                        <li><Link to="/">Gia Đấu</Link></li>
                                        <li><Link to="/">Đông Phương</Link></li>
                                        <li><Link to="/">Đô Thị</Link></li>
                                        <li><Link to="/">Bách Hợp</Link></li>
                                    </ul>
                                    </div>
                                    <div className="slide-menu">
                                        <ul className="sub-menu2">
                                            <li><Link to="/">Hài Hước</Link></li>
                                            <li><Link to="/">Điền Văn</Link></li>
                                            <li><Link to="/">Cổ Đại</Link></li>
                                            <li><Link to="/">Mạt Thế</Link></li>
                                            <li><Link to="/">Truyện Teen</Link></li>
                                            <li><Link to="/">Phương Tây</Link></li>
                                            <li><Link to="/">Nữ Phụ</Link></li>
                                            <li><Link to="/">Light Novel</Link></li>
                                            <li><Link to="/">Việt Nam</Link></li>
                                            <li><Link to="/">Đoản Văn</Link></li>
                                            <li><Link to="/">Review sách</Link></li>
                                            <li><Link to="/">Khác</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="par-menu3 menu-edit"><TfiMenuAlt /><span>Phân loại theo chương<FaSortDown /></span>
                                <div className="slide-menu3">
                                    <ul className="sub-menu3">
                                        <li><Link to="/">Dưới 100 chương</Link></li>
                                        <li><Link to="/">100 - 500 chương</Link></li>
                                        <li><Link to="/">500 - 1000 chương</Link></li>
                                        <li><Link to="/">Trên 1000 chương</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="menu-edit"><FaBook />Truyện tranh</li>
                            <li className="menu-edit"><IoSettingsOutline /><span>Tùy chỉnh<FaSortDown /></span>
                            </li>
                        </ul>
                    </div>
                    <div className="header_input">
                        <input type="text" placeholder="Tìm kiếm..."/>
                        <IoMdSearch className="glass"/>
                    </div>
                    <div className="menu-reponsive">
                        <MdOutlineMenu />
                    </div>
                </div>
                <div className="header_menu">
                        <ul className="menu-drop menu none">
                            <li className="par-menu1 menu-edit mb-30"><TfiMenuAlt /><span>Danh sách<FaSortDown /></span>
                            </li>
                            <div className="sub-menu">
                                <ul className="list-drop">
                                    <li>Truyện mới cập nhật</li>
                                    <li>Truyện Hot</li>
                                    <li>Truyện Full</li>
                                    <li>Tiên Hiệp Hay</li>
                                    <li>Kiếm Hiệp Hay</li>
                                    <li>Truyện Teen Hay</li>
                                    <li>Ngôn Tình Hay</li>
                                    <li>Ngôn Tình Ngược</li>
                                    <li>Ngôn Tình Sủng</li>
                                    <li>Ngôn Tình Hài</li>
                                    <li>Đam Mỹ Hài</li>
                                    <li>Đam Mỹ Hay</li>
                                    <li>Đam Mỹ H Văn</li>
                                    <li>Đam Mỹ Sắc</li>
                                    <li>Truyện Hay</li>
                                </ul>
                            </div>
                            <li className="par-menu2 menu-edit mb-30"><TfiMenuAlt /><span>Thể loại<FaSortDown /></span> 
                            </li>
                            <div className="sub-menu">
                                <ul className="list-drop">
                                    <li>Tiên Hiệp</li>
                                    <li>Kiếm Hiệp</li>
                                    <li>Ngôn Tình</li>
                                    <li>Đam Mỹ</li>
                                    <li>Quan Trường</li>
                                    <li>Võng Du</li>
                                    <li>Khoa Huyễn</li>
                                    <li>Hệ Thống</li>
                                    <li>Huyền Huyễn</li>
                                    <li>Dị Giới</li>
                                    <li>Dị Năng</li>
                                    <li>Quân Sự</li>
                                    <li>Lịch Sử</li>
                                    <li>Xuyên Không</li>
                                    <li>Xuyên Nhanh</li>
                                    <li>Trọng Sinh</li>
                                    <li>Trinh Thám</li>
                                    <li>Thám Hiểm</li>
                                    <li>Linh Dị</li>
                                    <li>Sắc</li>
                                    <li>Ngược</li>
                                    <li>Sủng</li>
                                    <li>Cung Đấu</li>
                                    <li>Nữ Cường</li>
                                    <li>Gia Đấu</li>
                                    <li>Đông Phương</li>
                                    <li>Đô Thị</li>
                                    <li>Bách Hợp</li>
                                </ul>
                            </div>
                            <li className="par-menu3 menu-edit mb-30"><TfiMenuAlt /><span>Phân loại theo chương<FaSortDown /></span>
                            </li>
                            <div className="sub-menu">
                                <ul className="list-drop">
                                    <li>Dưới 100 chương</li>
                                    <li>100 - 500 chương</li>
                                    <li>500 - 1000 chương</li>
                                    <li>Trên 1000 chương</li>
                                </ul>
                            </div>
                            <li className="menu-edit mb-30"><FaBook />Truyện tranh</li>
                            <li className="menu-edit mb-30"><IoSettingsOutline /><span>Tùy chỉnh<FaSortDown /></span>
                            </li>
                        </ul>
                </div>
            </div>
        </header>
        </>
    )
}

