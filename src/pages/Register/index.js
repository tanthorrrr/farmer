import React, { useRef, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';
import styles from '../Login/Login.module.scss';
import Button from '~/component/Button';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Register() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('mật khẩu không giống nhau');
        }
        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            setError('tạo tài khoản thành công');
            navigate('/login');
        } catch {
            setError('tạo tài khoản không thành công');
        }
        setLoading(false);
    }

    return (
        <>
            <div className={cx('overlay')}>
                <form onSubmit={handleSubmit} className={cx('form-login')}>
                    <div className={cx('con')}>
                        <header className={cx(['head-from', 'header-login'])}>
                            <h2>Đăng Ký</h2>
                            <p>Bạn cần điền đầy đủ để đăng ký</p>
                            {error && <Alert variant="danger">{error}</Alert>}
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
                            <div className={cx('password')}>
                                <input
                                    className={cx('input-login')}
                                    type="password"
                                    ref={passwordConfirmRef}
                                    placeholder="Nhập mật khẩu của bạn"
                                />
                                {/* <FontAwesomeIcon icon={faEye} /> */}
                            </div>
                            <br />
                            <Button primary disabled={loading}>
                                Đăng Ký
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
                                bạn đã có tài khoản ?
                                <Link className={cx('signup-link')} to="/login">
                                    Đăng Nhập
                                </Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
