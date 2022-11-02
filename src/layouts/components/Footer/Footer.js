import classNames from 'classnames/bind';
import React from 'react';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
export default function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('footer-addr')}>
                <h1 className={cx('footer-logo')}>Trang web hổ trợ cho người dân</h1>
                <h2>Liên Hệ </h2>
                <address>
                    Gữi email cho chúng tôi
                    <p className={cx('footer-btn')}>Email</p>
                </address>
            </div>
            <ul className={cx('footer-nav')}>
                <li className={cx('nav-item')}>
                    <h2 className={cx('nav-title')}>Uy tín</h2>
                    <ul className={cx('nav-ul')}>
                        <li>
                            <p>Online</p>
                        </li>
                        <li>
                            <p>Print</p>
                        </li>
                        <li>
                            <p>Alternative Ads</p>
                        </li>
                    </ul>
                </li>
                <li className={cx('nav--item nav-item--extra')}>
                    <h2 className={cx('nav__title')}>Chất Lượng</h2>

                    <ul className={cx('nav__ul nav__ul--extr')}>
                        <li>
                            <p>Hardware Design</p>
                        </li>

                        <li>
                            <p>Software Design</p>
                        </li>

                        <li>
                            <p>Digital Signage</p>
                        </li>
                    </ul>
                </li>
                <li className={cx('nav-item')}>
                    <h2 className={cx('nav-title')}>Đảm bảo</h2>

                    <ul className={cx('nav-ul')}>
                        <li>
                            <p>Thực phẩm xanh</p>
                        </li>

                        <li>
                            <p>Thực phẩm sạch</p>
                        </li>

                        <li>
                            <p>Sitemap</p>
                        </li>
                    </ul>
                </li>
                <li className={cx('nav-item')}>
                    <h2 className={cx('nav-title')}>Bạn có phải một Người Làm Nông?</h2>

                    <ul className={cx('nav-ul')}>
                        <li>
                            <p>hãy bán các sản phẩm nông nghiệp của bạn online </p>
                        </li>

                        <li>
                            <p>Terms of Use</p>
                        </li>

                        <li>
                            <p>Sitemap</p>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className={cx('legal')}>
                <p>&copy; 2022 Something. All rights reserved.</p>

                <div className={cx('legal-links')}>
                    <span>
                        Made with <span className={cx('heart')}>♥</span> remotely from Anywhere
                    </span>
                </div>
            </div>
        </footer>
    );
}
