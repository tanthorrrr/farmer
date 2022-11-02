import Sidebar from '~/layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Footer from '../components/Footer/Footer';
import HeaderDashboard from '../components/HeaderDashboard';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderDashboard />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
                <div className={cx('sidebar-right')}>Hello</div>
            </div>
            <Footer />
        </div>
    );
}
DefaultLayout.prototype = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
