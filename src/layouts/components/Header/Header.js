import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';

import {
    // faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
    faComment,
    faBell,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'tippy.js/dist/tippy.css';
import { Link, useNavigate } from 'react-router-dom';
import config from '~/config';

import Button from '~/component/Button';
// import images from '~/assets/images';
import styles from './Header.module.scss';
import Menu from '~/component/Popper/Menu';
// import { UploadIcon, MessageIcon, InboxIcon } from '~/component/Icons';
import Image from '~/component/Image';

import { useState } from 'react';

// import Upload from '~/pages/Upload';
// import { UploadIcon } from '~/component/Icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Ngôn Ngữ',
        children: {
            title: 'language 123',
            data: [
                {
                    type: 'english',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'vietnamese',
                    code: 'vi',
                    title: 'Việt Nam',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Hổ trợ',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard ',
    },
];
const MENU_USER_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Hồ Sơ',
        to: '/@thorrr',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Bán Sản Phẩm',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Cài Đặt',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/login',
        separate: true,
    },
];

function Header() {
    const [curtentUser, setCurtentUser] = useState(true);
    const navigate = useNavigate();
    const [wrapper, setWrapper] = useState(false);
    // handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //  handle change language
                break;
            default:
        }
    };
    const handleLogin = () => {
        navigate('/login');
    };
    const changBackground = () => {
        if (window.scrollY >= 200) {
            setWrapper(true);
        } else {
            setWrapper(false);
        }
    };
    window.addEventListener('scroll', changBackground);
    return (
        <header className={wrapper ? cx(['wrapper', 'active']) : cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    {' '}
                    <img alt="LOGO" />
                </Link>
                <div className={cx('navigation')}>
                    <div className={cx('primary-links')}>
                        <a
                            href="#intro"
                            className={wrapper ? cx(['link-container', 'link-container-active']) : cx('link-container')}
                        >
                            <p className={cx('heading-caps')}>Giới Thiệu</p>
                        </a>
                        <a
                            href="#story"
                            className={wrapper ? cx(['link-container', 'link-container-active']) : cx('link-container')}
                        >
                            <p className={cx('heading-caps')}>Bài Viết</p>
                        </a>
                        <a
                            href="#product"
                            className={wrapper ? cx(['link-container', 'link-container-active']) : cx('link-container')}
                        >
                            <p className={cx('heading-caps')}>Sản Phẩm</p>
                        </a>
                        <a
                            href="#3"
                            className={wrapper ? cx(['link-container', 'link-container-active']) : cx('link-container')}
                        >
                            <p className={cx('heading-caps')}>Phản Hồi</p>
                        </a>
                        {/* <a
                            href="#4"
                            className={wrapper ? cx(['link-container', 'link-container-active']) : cx('link-container')}
                        >
                            <p className={cx('heading-caps')}>
                                Tìm Kiếm
                                <FontAwesomeIcon className={cx('icon-search')} icon={faSearch} />
                            </p>
                        </a> */}
                    </div>
                </div>
                <div className={cx('actions')}>
                    {curtentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Tin Nhắn" placement="bottom">
                                <button
                                    className={wrapper ? cx(['action-btn-active', 'action-btn']) : cx('action-btn')}
                                >
                                    {/* <UploadIcon /> */}
                                    <FontAwesomeIcon icon={faComment} />
                                </button>
                            </Tippy>
                            {/* <Tippy delay={[0, 200]} content="Messenger" placement="bottom">
                                <button className={cx('action-btn')}>{ <MessageIcon /> }</button>
                            </Tippy> */}
                            <Tippy delay={[0, 200]} content="Thông Báo" placement="bottom">
                                <button
                                    className={wrapper ? cx(['action-btn-active', 'action-btn']) : cx('action-btn')}
                                >
                                    {/* <InboxIcon /> */}
                                    <FontAwesomeIcon icon={faBell} />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button onClick={handleLogin} primary>
                                Đăng Nhập
                            </Button>
                        </>
                    )}
                    <Menu items={curtentUser ? MENU_USER_ITEMS : MENU_ITEMS} onChange={handleMenuChange}>
                        {curtentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
                                alt={'vo tan tho'}
                            />
                        ) : (
                            <button className={cx('more-btn')}></button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
