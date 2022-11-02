import Sidebar from '~/layouts/components/Sidebar';
import styles from './HeaderAndSidebar.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import HeaderDashboard from '../components/HeaderDashboard';

const cx = classNames.bind(styles);
function HeaderAndSidebar({ children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderDashboard />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
                <div className={cx('sidebar-right')}></div>
            </div>
        </div>
    );
}
HeaderAndSidebar.prototype = {
    children: PropTypes.node.isRequired,
};
export default HeaderAndSidebar;
