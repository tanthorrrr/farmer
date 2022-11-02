import styles from './PostShare.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCirclePlay, faImage, faLocationDot, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/component/Button';
import { useRef, useState } from 'react';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import React from 'react';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storege } from '~/firebase';

const cx = classNames.bind(styles);
function PostShare() {
    const [image, setImage] = useState(null);
    const imageRef = useRef();
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    };
    const [formData, setFormData] = useState({
        Introduction: '',
        image: '',
        CreateAt: Timestamp.now().toDate(),
        Like: '333',
        Name: 'Tan Tho',
    });
    const [progress, setProgress] = useState(0);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };
    const handlePublic = () => {
        if (!formData.title && !formData.image) {
            alert('vui lòng nhập đầy đủ thông tin!');
            return;
        }
        const storageRef = ref(storege, `/images/${Date.now()}${formData.image.name}`);
        const upLoadImage = uploadBytesResumable(storageRef, formData.image);
        upLoadImage.on(
            'state_changed',
            (snapshot) => {
                const progressPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progressPercent);
            },
            (err) => {
                console.log(err);
            },
            () => {
                setFormData({
                    title: '',
                    image: '',
                });
                getDownloadURL(upLoadImage.snapshot.ref).then((url) => {
                    const articleRef = collection(db, 'Post-Blog');
                    addDoc(articleRef, {
                        title: formData.title,
                        imageUrl: url,
                        CreateAt: Timestamp.now().toDate(),
                    })
                        .then(() => {
                            alert('Đăng bài thành công', { type: 'success' });
                            setProgress(0);
                        })
                        .catch((err) => {
                            alert('Đăng bài không thành công', { type: 'error' });
                        });
                });
            },
        );
    };
    return (
        <>
            <div className={cx('post-share')}>
                <img src={images.noImage} alt="avatar" className={cx('avatar-post')} />
                <div>
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        placeholder="Nói lên những điều bạn muốn chia sẻ ..."
                    />
                    <div className={cx('postOption')}>
                        <div
                            className={cx('option')}
                            onChange={(e) => {
                                handleImageChange(e);
                            }}
                            onClick={() => imageRef.current.click()}
                        >
                            <FontAwesomeIcon icon={faImage} />
                            Hình Ảnh
                        </div>
                        <div className={cx('option')}>
                            <FontAwesomeIcon icon={faCirclePlay} />
                            Video
                        </div>
                        <div className={cx('option')}>
                            <FontAwesomeIcon icon={faLocationDot} />
                            Địa Điểm
                        </div>
                        <div className={cx('option')}>
                            <FontAwesomeIcon icon={faCalendar} />
                            Lịch Trình
                        </div>
                        <Button primary onClick={handlePublic}>
                            Chia sẻ
                        </Button>
                        <div style={{ display: 'none' }}>
                            <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
                        </div>
                    </div>
                    {image && (
                        <div className={cx('previewImage')}>
                            <FontAwesomeIcon
                                icon={faTimesCircle}
                                onClick={() => setImage(null)}
                                className={cx('deleteImage')}
                            />
                            <img src={image.image} alt="" className={cx('img-post')} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default PostShare;
