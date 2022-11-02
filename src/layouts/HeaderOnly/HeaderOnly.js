import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Footer from '../components/Footer/Footer';
import styles from './HeaderOnly.module.scss';

const cx = classNames.bind(styles);
function HeaderOnly({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default HeaderOnly;
