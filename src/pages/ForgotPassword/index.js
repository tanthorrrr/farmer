import classNames from 'classnames/bind';
import React, { useRef, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '~/pages/Contexts/AuthContext';
import styles from '../Login/Login.module.scss';
import Button from '~/component/Button';

const cx = classNames.bind(styles);
export default function Login() {
    const emailRef = useRef();

    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('kiểm tra hộp thư đến của bạn để được hướng dẫn thêm ');
        } catch {
            setError('lấy lại mật khẩu không thành công ');
        }
        setLoading(false);
    }

    return (
        <div className={cx('overlay')}>
            <form onSubmit={handleSubmit} className={cx('form-login')}>
                <div className={cx('con')}>
                    <header className={cx(['head-from', 'header-login'])}>
                        <h2>Lấy Lại Mật Khẩu</h2>
                        <p>Nhập tài khoản mà bạn đã đăng ký</p>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {message && <Alert variant="success">{message}</Alert>}
                    </header>
                    <div className={cx('field-set')}>
                        <input
                            className={cx('input-login')}
                            ref={emailRef}
                            type="email"
                            placeholder="Nhập số điện thoại hoặc gmail của bạn"
                        />
                        <br />

                        <br />
                        <Button primary disabled={loading}>
                            Xác Nhận
                        </Button>
                    </div>
                    <div className={cx('other')}>
                        <p>
                            Quay trở lại đăng nhập{' '}
                            <Link className={cx('signup-link')} to="/login">
                                Đăng Nhập
                            </Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
}
