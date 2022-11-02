import classNames from 'classnames/bind';
import React, { useRef, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '~/pages/Contexts/AuthContext';
import styles from './Login.module.scss';
import Button from '~/component/Button';

const cx = classNames.bind(styles);
export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate('/');
        } catch {
            setError('đăng nhập không thành công');
        }
        setLoading(false);
    }

    return (
        <div className={cx('overlay')}>
            <form onSubmit={handleSubmit} className={cx('form-login')}>
                <div className={cx('con')}>
                    <header className={cx(['head-from', 'header-login'])}>
                        <h2>Đăng Nhập</h2>
                        <p>Đăng nhập phải cần tài khoản và mật khẩu</p>
                        <div>{error && <Alert variant="danger">{error}</Alert>}</div>
                    </header>
                    <div className={cx('field-set')}>
                        <input
                            className={cx('input-login')}
                            ref={emailRef}
                            type="email"
                            placeholder="Nhập số điện thoại hoặc gmail của bạn"
                        />
                        <br />
                        <div className={cx('password')}>
                            <input
                                className={cx('input-login')}
                                type="password"
                                ref={passwordRef}
                                placeholder="Nhập mật khẩu của bạn"
                            />
                            {/* <FontAwesomeIcon icon={faEye} /> */}
                        </div>
                        <br />
                        <Button primary disabled={loading}>
                            Đăng Nhập
                        </Button>
                    </div>
                    <div className={cx('other')}>
                        <br />
                        <br />
                        <Link className={cx('forgot-password')} to="/forgot-password">
                            Quên mật khẩu?
                        </Link>
                        <br />
                        <br />
                        <p>
                            Bạn chưa có tài khoản ?{' '}
                            <Link className={cx('signup-link')} to="/register">
                                Đăng Ký
                            </Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
}
