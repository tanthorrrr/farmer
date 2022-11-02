import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import Button from '~/component/Button';
import ProductSilder from '~/component/ProductSilder/ProductSilder';

import { Story } from '~/component/Story/Story';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);
function Home() {
    const navigate = useNavigate();
    const handleMore = () => {
        navigate('/blog');
    };
    return (
        <div className={cx('Home')}>
            <div className={cx('inner')}>
                <div className={cx('slogun')}>
                    <h2>"Bạn đồng hành với nhà nông"</h2>
                    <h1>Phát triển tự nhiên, sống tự nhiên</h1>
                </div>
                <div id="banner" className={cx('banner')}></div>
            </div>
            <div id="intro">
                <div className={cx('about-us')}>
                    <h2 className={cx('intro-section')}>Giới Thiệu Về Trang Web</h2>
                    <div className={cx('section-cotainer')}>
                        Một dự án Web nhằm giúp nông dân đảm bảo lợi nhuận cao hơn thông qua giao tiếp trực tiếp giữa
                        nông dân với nhà cung cấp và nông dân với nông dân. Hỗ trợ canh tác cây trồng cho nông dân. dịch
                        vụ thúc đẩy giao tiếp kinh doanh và mang lại sự minh bạch cho hệ thống. trang web cho phép giao
                        tiếp giữa nông dân giỏi, nhà bán lẻ và nhà cung cấp. Nó cho phép nông dân để đăng nhập và giao
                        tiếp với đại lý tương ứng. Khi nhà cái đăng quảng cáo hoặc đề nghị, Nông dân tương ứng được
                        thông báo qua SMS, Nông dân cũng có thể khiếu nại và khiếu nại cho các đại lý hoặc cơ quan chức
                        năng tương ứng bằng cách sử dụng thông tin đăng nhập nông dân của họ trên một trang khiếu nại và
                        các cơ quan chức năng sẽ ghé thăm trang thường xuyên.
                    </div>
                </div>
                <div className={cx('about-us-1')}>
                    <h2 className={cx('intro-section-1')}>Hiện Trạng</h2>
                    <div className={cx('section-cotainer-1')}>
                        Hiện tại, tất cả chúng ta vẫn tiếp tục chiến đấu với Coronavirus. Nông dân gặp khó khăn khi vấn
                        đề việc hỗ trợ canh tác dường như rất khó đối với người dân, thậm chí có thể vứt bỏ việc canh
                        tác của họ Nếu dịch CORONA quay trở lại, có hai nguyên nhân dẫn đến tình trạng trên.
                    </div>
                </div>
            </div>

            <div id="story" className={cx('story-container')}>
                <h1 className={cx('header-product')}>Bài Viết Nổi Bật</h1>
                <div className={cx('product-list')}>
                    {/* <h3 className={cx('content-story')}>Các bài viết nổi bật</h3> */}
                    {Story.map((item, index) => (
                        <StoryItem
                            key={item.id}
                            image={item.img}
                            avatarUserPost={item.avatarUser}
                            title={item.title}
                            date={item.date}
                            author={item.userUpStory}
                        ></StoryItem>
                    ))}
                </div>
                <div className={cx('button-more')}>
                    <Button primary onClick={handleMore}>
                        Xem Tất Cả
                    </Button>
                </div>
            </div>

            <div id="product" className={cx('product-container')}>
                <h1 className={cx('product-content')}>Sản phẩm</h1>
                <ProductSilder />
            </div>
        </div>
    );
}
function StoryItem(props) {
    return (
        <div className={cx('content-story')}>
            <div className={cx('story-image')}>
                <img src={props.image} alt="" />
            </div>
            <div className={cx('story-footer')}>
                <img src={props.avatarUserPost} alt="" className={cx('avatar')} />
                <div className={cx('info')}>
                    <h3 className={cx('title')}>{props.title || 'this is example of title'}</h3>
                    <h4 className={cx('author')}>{props.author || 'this is example of title'}</h4>
                    <h4 className={cx('date')}>{props.date}</h4>
                </div>
            </div>
        </div>
    );
}
export default Home;
