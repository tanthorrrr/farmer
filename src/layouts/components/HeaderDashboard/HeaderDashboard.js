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
import styles from './HeaderDashboard.module.scss';
import Menu from '~/component/Popper/Menu';
// import { UploadIcon, MessageIcon, InboxIcon } from '~/component/Icons';
import Image from '~/component/Image';

// import Upload from '~/pages/Upload';
// import { UploadIcon } from '~/component/Icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
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
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard and ',
    },
];
const MENU_USER_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@thorrr',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function HeaderDashboard() {
    const curtentUser = true;
    const navigate = useNavigate();

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

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    {' '}
                    <img alt="LOGO" />
                </Link>

                <div className={cx('actions')}>
                    {curtentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Tin Nhắn" placement="bottom">
                                <button className={cx('action-btn')}>
                                    {/* <UploadIcon /> */}
                                    <FontAwesomeIcon icon={faComment} />
                                </button>
                            </Tippy>
                            {/* <Tippy delay={[0, 200]} content="Messenger" placement="bottom">
                                <button className={cx('action-btn')}>{ <MessageIcon /> }</button>
                            </Tippy> */}
                            <Tippy delay={[0, 200]} content="Thông Báo" placement="bottom">
                                <button className={cx('action-btn')}>
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

export default HeaderDashboard;
