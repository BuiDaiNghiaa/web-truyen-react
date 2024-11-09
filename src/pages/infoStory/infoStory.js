import { IoMdHome } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
export const InfoStory = () => {
    return(
        <>
             {/* <!-- breadcrumb --> */}
    <div className="breadcrumb">
        <div className="container">
            <div className="breadcrumb-title">
                <span>
                    <IoMdHome className="IoMdHome" />
                    <a href="#">Truyện</a>
                    /
                    <a href="#">Tiên Hiệp Hay</a>
                </span>
            </div>
        </div>
    </div>
    {/* <!-- End breadcrumb --> */}

    {/* <!-- box-detail  --> */}
    <div className="box-detail">
        <div className="container">
            <div className="box-detail__wrap">
                <div className="box-detail__left">
                    <div className="box-detail__title">
                        {/* <!-- thông tin truyện --> */}
                        <div>THÔNG TIN TRUYỆN</div>
                    </div>
                    <div className="box-detail__content">
                        <div className="wrap">
                            <div className="image">
                                <img src="https://lh3.googleusercontent.com/pw/AP1GczMBH62s9NtrMtJKe664xP_I-PWEZGWsvqGKfstwQ5QVn0zWq_Wev940nqxeSYdgu0B9Qqm7ltbmuSSgk67TY96ERYnObZbBSvQ82cyePN5KXPeBW4E8gSmh7AVBGXMol0FT_oByiBbv0ZSRLwAVdKxw=w215-h322-s-no-gm?authuser=1"
                                    alt="Nhân gian tham niệm"/>
                            </div>
                            <div className="brief-desc">
                                <p><span><strong>Tác giả:</strong></span> Ngư Sương</p>
                                <p><span><strong>Thể loại:</strong></span> Đô Thị, Bách Hợp, Khác</p>
                                <p><span><strong>Nguồn:</strong></span>wattpad.com/user/minyool</p>
                                <p><span><strong>Trạng thái:</strong></span>Full</p>
                            </div>
                        </div>
                        <div className="box-detail__desc">
                            <div className="title-chapter">
                                <span>NHÂN GIAN THAM NIỆM</span>
                            </div>
                            <div className="box-detail__rate">
                                <div>
                                    <FaStar className="icon"/>
                                    <FaStar className="icon"/>
                                    <FaStar className="icon"/>
                                    <FaStar className="icon"/>
                                    <FaStar className="icon"/>
                                    <FaStar className="icon"/>
                                    <FaStar className="icon"/>
                                    <FaStar className="icon"/>
                                    <FaStar className="icon"/>
                                </div>
                                <div className="rate"> Đánh giá: <span><strong>9.0</strong>/10 từ <strong>3
                                            lượt</strong></span></div>
                            </div>
                            <div className="content">
                                <p>
                                    Tác phẩm: Nhân gian tham niệm 
                                </p>
                                <p>
                                    Độ dài: 111 chương + 16 phiên ngoại
                                </p> 
                                <p>
                                Thể loại truyện: Nguyên sang - bách hợp - hiện đại - tình yêu
                                </p>    
                                <p>Tag: Đô thị tình duyên, Yêu sâu sắc, Luyến ái hiệp ước, Tình yêu và hôn nhân</p>
                                <p>Nhân vật chính: Hứa Nhược Tinh, Tô Nghi </p>
                                <p>Nhân vật phụ: Lê Thần, Tô Ngộ Nhiễm, Bùi Y Nhiên, Trần Cẩm </p>
                                <p>Văn án</p>
                                <p>Tô Nghi trên đường đi làm thì gặp tai nạn xe cộ, mất trí nhớ, quên hai việc:</p>
                            </div>
                        </div>
                    </div>
                    <div className="box-detail__list-chapter">
                        <div className="title">
                            <div>DANH SÁCH CHƯƠNG</div>
                        </div>
                        <div className="main">

                            <ul className="left">
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 1: Bức Hôn</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 2: Ta nếu là không cưới đâu?</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 3: Mở long mạch!</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 4: Tiêu Vũ Tuệ</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 5: Nắm Tay</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 6: Tâm Ngứa</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 7: Ghen</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 8: Rất Tra</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 9: Hôn</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 10: Ngủ</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 11: Dán Mặt</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 12: Mặc Sức Tưởng Tượng</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 13: Dâu Tây</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 14: Vợ</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 15: Quan Tâm</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 16: Ôn Nhu</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 17: Tìm Người</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 18: Ồn Ào Náo Động</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 19: Có Thể Thắng</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 20: Biết</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 21: Có Rảnh</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 22: Muốn Hôn</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 23: Khi Dễ</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 24: Tô Son</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 25: Nhớ Đến Chị</Link>
                                </li>
                            </ul>
                            <ul className="right">
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 26: Tinh Linh</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 27: Điện Thoại</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 28: Để Ý</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 29: Chụt Chụt</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 30: Sofa</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 31: Viết Thư</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 32: Nhẹ Chút</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 33: Trong Mơ</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 34: Đã Có Vợ</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 35: Hoa Hồng</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 36: Không Hiểu Biết</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 37: Hôn Em Đi</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 38: Tê Dại</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 39: Ảnh Màn Hình</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 40: Lãnh Đạm</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 41: Chữa Trị</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 42: Sợ Hãi</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 43: Đắn Đo</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 44: Mẹ Hiểu</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 45: Bức Thư</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 46: Sâu</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 47: Bách Hợp</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 48: Bạn Gái</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 49: Lừa Cô</Link>
                                </li>
                                <li>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                    <Link to="/detail">Chương 50: Mềm Mại</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="box-detail__page">
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>{'>'}</li>
                            <li>Cuối {'>>'}</li>
                            <li>
                                <div>
                                    Chọn trang
                                    <i className="fa-solid fa-sort-up"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="box-detail__right">
                    {/* <!-- hộp phía bên phải --> */}
                    <div className="Same-author">
                        <div className="title-same-author">
                            {/* <!-- tiêu đề truyện cùng tác giả --> */}
                            <div>TRUYỆN CÙNG TÁC GIẢ</div>
                        </div>
                        <div className="main-same-author">
                            <div className="box-title1">
                            <Link><FaAngleRight />
                            <span>Khó Chơi-Ngư Sương</span></Link>
                            </div>
                            <div className="box-title2">
                            <Link><FaAngleRight />
                            <span>Ai Cũng Biết Cô Ấy Yêu tôi</span></Link>
                            </div>
                            <div className="box-title3">
                            <Link><FaAngleRight />
                            <span>Tia Sáng</span></Link>
                            </div>
                            <div className="box-title4">
                            <Link><FaAngleRight />
                            <span>Triều Tư Mộ Noãn</span></Link>
                            </div>
                            <div className="box-title5">
                              <Link><FaAngleRight />
                              <span>Âm Dương</span></Link>
                            </div>
                            <div className="box-title6">
                              <Link ><FaAngleRight />
                              <span>Hợp Cửu Bất Phân</span></Link>
                            </div>
                            <div className="box-title7">
                              <Link  ><FaAngleRight />
                              <span>Phân Cửu Tất Hợp</span></Link>
                            </div>
                        </div>
                    </div>
                    {/* <!-- box list hot --> */}
                    <div className="box-detail__hot">
                        <div className="box-detail__hot--title">
                            <h3>TRUYỆN ĐANG HOT</h3>
                            <div></div>
                        </div>
                        <div className="box-detail__date">
                            <div>
                                <span>NGÀY</span>
                            </div>
                            <div>
                                <span>THÁNG</span>
                            </div>
                            <div>
                                <span>ALL TIME</span>
                            </div>
                        </div>
                        <div className="box-detail__hot--list">
                            <div className="box-detail__hot--item">
                                <div className="box-detail__hot--red box-detail__hot--transparent">
                                    <span>1</span>
                                </div>
                                <div className="box-detail__hot--name">
                                    <a href="#" className="title">Thần Đạo Đan Tôn</a>
                                    <div className="box-detail__hot--category">
                                        <a href="#" className="desc">Tiên Hiệp,</a>
                                        <a href="#" className="desc">Huyền Huyễn</a>
                                    </div>
                                </div>
                            </div>
                            <div className="box-detail__hot--item">
                                <div className="box-detail__hot--green box-detail__hot--transparent">
                                    <span>2</span>
                                </div>
                                <div className="box-detail__hot--name">
                                    <a href="#" className="title">Linh Vũ Thiên Hạ</a>
                                    <div className="box-detail__hot--category">
                                        <a href="#" className="desc">Tiên Hiệp,</a>
                                        <a href="#" className="desc">Dị Giới,</a>
                                        <a href="#" className="desc">Huyền Huyễn</a>
                                    </div>
                                </div>
                            </div>
                            <div className="box-detail__hot--item">
                                <div className="box-detail__hot--blue box-detail__hot--transparent">
                                    <span>3</span>
                                </div>
                                <div className="box-detail__hot--name">
                                    <a href="#" className="title">Đấu Phá Thương Khung</a>
                                    <div className="box-detail__hot--category">
                                        <a href="#" className="desc">Tiên Hiệp,</a>
                                        <a href="#" className="desc">Dị Giới,</a>
                                        <a href="#" className="desc">Huyền Huyễn</a>
                                    </div>
                                </div>
                            </div>
                            <div className="box-detail__hot--item">
                                <div className="box-detail__hot--transparent">
                                    <span>4</span>
                                </div>
                                <div className="box-detail__hot--name">
                                    <a href="#" className="title">Thế Giới Hoàn Mỹ</a>
                                    <div className="box-detail__hot--category">
                                        <a href="#" className="desc">Tiên Hiệp,</a>
                                        <a href="#" className="desc">Dị Giới,</a>
                                        <a href="#" className="desc">Huyền Huyễn</a>
                                    </div>
                                </div>
                            </div>
                            <div className="box-detail__hot--item">
                                <div className="box-detail__hot--transparent">
                                    <span>5</span>
                                </div>
                                <div className="box-detail__hot--name">
                                    <a href="#" className="title">Mê Vợ Không Lối Về</a>
                                    <div className="box-detail__hot--category">
                                        <a href="#" className="desc">Ngôn Tình,</a>
                                        <a href="#" className="desc">Ngược,</a>
                                        <a href="#" className="desc">Sủng</a>
                                    </div>
                                </div>
                            </div>
                            <div className="box-detail__hot--item">
                                <div className="box-detail__hot--transparent">
                                    <span>6</span>
                                </div>
                                <div className="box-detail__hot--name">
                                    <a href="#" className="title">Phàm Nhân Tu Tiên</a>
                                    <div className="box-detail__hot--category">
                                        <a href="#" className="desc">Tiên Hiệp,</a>
                                        <a href="#" className="desc">Kiếm Hiệp</a>
                                    </div>
                                </div>
                            </div>
                            <div className="box-detail__hot--item">
                                <div className="box-detail__hot--transparent">
                                    <span>7</span>
                                </div>
                                <div className="box-detail__hot--name">
                                    <a href="#" className="title">Cô Vợ Ngọt Ngào Có Chút Bất Lương</a>
                                    <div className="box-detail__hot--category">
                                        <a href="#" className="desc">Ngôn Tình,</a>
                                        <a href="#" className="desc">Trọng Sinh,</a>
                                        <a href="#" className="desc">Sủng</a>
                                    </div>
                                </div>
                            </div>
                            <div className="box-detail__hot--item">
                                <div className="box-detail__hot--transparent">
                                    <span>8</span>
                                </div>
                                <div className="box-detail__hot--name">
                                    <a href="#" className="title">Đế Bá</a>
                                    <div className="box-detail__hot--category">
                                        <a href="#" className="desc"> Huyền Huyễn</a>
                                    </div>
                                </div>
                            </div>
                            <div className="box-detail__hot--item">
                                <div className="box-detail__hot--transparent">
                                    <span>9</span>
                                </div>
                                <div className="box-detail__hot--name">
                                    <a href="#" className="title">Tiên Nghịch</a>
                                    <div className="box-detail__hot--category">
                                        <a href="#" className="desc">Tiên Hiệp,</a>
                                        <a href="#" className="desc">Kiếm Hiệp</a>
                                    </div>
                                </div>
                            </div>
                            <div className="box-detail__hot--item">
                                <div className="box-detail__hot--transparent">
                                    <span>10</span>
                                </div>
                                <div className="box-detail__hot--name">
                                    <a href="#" className="title">Nhất Niệm Vĩnh Hằng</a>
                                    <div className="box-detail__hot--category">
                                        <a href="#" className="desc">Tiên Hiệp,</a>
                                        <a href="#" className="desc">Huyền Huyễn</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--End box list hot --> */}
                </div>
            </div>
            <div className="comment-chapter">
                 {/* box comment truyện */}
                <div className="title-comment">
                    <div>BÌNH LUẬN TRUYỆN</div>
                </div>
                <div className="comment">
                    <div>1 Bình Luận</div>
                    <div id="new-comment">Sắp xếp theo <button className="list-comment"><strong>Mới nhất <i
                                    className="fa-solid fa-list"></i></strong></button></div>
                </div>

                <div className="content-comment">
                    <div className="box1"></div>
                    <div><input type="text" className="content" placeholder="Bình luận..."/></div>
                </div>
                <div className="old-comment">
                    <div className="box2"></div>
                    <div className="content-old-comment">
                        <h5><a href="https://www.facebook.com/profile.php?id=61552212834929&ref=embed_comment">Truyện
                                Dịch Dịch Bab</a></h5>
                        <p>ghé ngay <br/>
                            <a href="viptruyenfull.net">viptruyenfull.net</a> <br/>
                            Chỉ 1000 đồng/ 1 ngày ={'>'} Đọc Miễn Phí Tất cả Kho truyện dịch VIP miễn Phí. <br/>
                            " Tiên Hiệp - Đô Thị - Điên Văn - Ngôn Tình .v.v.v"" <br/>
                            -{'>'} Trọn gói không cần mua Xu. <br/>
                            -{'>'} Đọc Miễn Phí tất cả Kho 1000+ bộ truyện dịch không giới hạn. <br/>
                            GIẢM THÊM 20% Khi đăng ký trực tiếp qua Zalo: 0964.271.787. <br/>
                            ={'>'} Admin Set VIP đọc trước, bạn đọc Ok mới thanh toán sau ! <br/>
                        </p>
                    </div>
                </div>
                <div className="reply">
                    <span><a href="#">Thích</a></span><span><a href="#">Phản hồi</a></span><span>3
                        ngày</span>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}