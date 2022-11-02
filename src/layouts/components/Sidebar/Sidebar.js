import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu/index';
import config from '~/config';
// import * as userSevice from '~/services/userSevice';
// import { useState, useEffect } from 'react';
import {
    // LiveIcon,
    // UserGroupIcon,
    HomeIcon,
    HomeActiveIcon,
} from '~/component/Icons';
// import SuggestedAccounts from '../SuggestedAccounts';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
    // const [suggestedUser, setSuggestedUser] = useState([]);
    // useEffect(() => {
    //     userSevice
    //         .getSuggested({ page: 1, perPage: 5 })
    //         .then((data) => {
    //             setSuggestedUser(data);
    //         })
    //         .catch((error) => console.log(error));
    // }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="Bài Viết"
                    to={config.routes.upBlog}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Sản Phẩm"
                    to={config.routes.upProduct}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Phản Hồi"
                    to={config.routes.feedback}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
            </Menu>
            {/* <SuggestedAccounts lable="Suggested Accounts" data={suggestedUser} />
            <SuggestedAccounts lable="Following Accounts" /> */}
        </aside>
    );
}

export default Sidebar;
