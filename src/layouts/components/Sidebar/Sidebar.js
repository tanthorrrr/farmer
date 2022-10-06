import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu/index';
import config from '~/config';
import * as userSevice from '~/services/userSevice';
import { useState, useEffect } from 'react';
import {
    LiveIcon,
    UserGroupIcon,
    HomeIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from '~/component/Icons';
import SuggestedAccounts from '../SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    const [suggestedUser, setSuggestedUser] = useState([]);
    useEffect(() => {
        userSevice
            .getSuggested({ page: 1, perPage: 5 })
            .then((data) => {
                setSuggestedUser(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccounts lable="Suggested Accounts" data={suggestedUser} />
            <SuggestedAccounts lable="Following Accounts" />
        </aside>
    );
}

export default Sidebar;
