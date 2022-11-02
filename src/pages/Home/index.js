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
                        A Web project that aims to help farmers secure higher profits through direct communication
                        between farmers to suppliers and farmers to farmers. Support for farming crops for farmers.This
                        service promotes business communication and brings transparency to the system.This innovative
                        website enables communication between good farmers, retailers, and suppliers. It allows farmers
                        to log in and communicate with the respective agent. When the dealer publishes an advertisement
                        or offer, the respective Farmer is notified via SMS,Farmers can also make complaints and appeals
                        to the respective agents or authorities using their farmer login information on a separate
                        complaints page and the authorities will visit the page regularly.
                    </div>
                </div>
                <div className={cx('about-us-1')}>
                    <h2 className={cx('intro-section-1')}>Giới Thiệu</h2>
                    <div className={cx('section-cotainer-1')}>
                        Currently, we all continue to fight the Coronavirus. Farmers had a difficult the problem of
                        supporting farming seems to be very difficult for people, maybe even throwing away their farming
                        if the CORONA epidemic returns.There are two reasons leading to the above situation.
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
