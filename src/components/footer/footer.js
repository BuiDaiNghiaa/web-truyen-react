import footer from '../../assets/images/footer.png';
export const Footer = () => {
   return(
    <>
        <div className="footer">
            <div className="container">
                <div className="footer__contact">
                    Liên hệ: 
                    <a href="#">contact@truyenfull.io</a>
                </div>
                <div className="footer__content">
                    <span><b>Truyện Full</b>- Đọc truyện online, đọc truyện chữ, truyện hay. Website luôn cập nhật những bộ truyện mới thuộc các thể loại đặc sắc như truyện tiên hiệp, truyện kiếm hiệp, hay truyện ngôn tình một cách nhanh nhất. Hỗ trợ mọi thiết bị như di động và máy tính bảng.</span>
                    <div className="footer__img">
                        <img src={footer} alt="abc"/>
                    </div>
                    <br/>
                    Website hoạt động dưới Giấy phép truy cập mở Creative Commons Attribution 4.0 International License
                </div>
            </div>
        </div>
    </>
   )
}