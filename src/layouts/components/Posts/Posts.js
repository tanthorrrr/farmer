import styles from './Posts.module.scss';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faEllipsis, faHeart, faHeartBroken, faShare } from '@fortawesome/free-solid-svg-icons';

import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

import { db } from '~/firebase';

const cx = classNames.bind(styles);
function Posts() {
    const [postBlog, setPostBlog] = useState([]);
    useEffect(() => {
        const PostRef = collection(db, 'Post-Blog');
        const q = query(PostRef, orderBy('CreateAt', 'desc'));
        onSnapshot(q, (snapshot) => {
            const postBlog = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPostBlog(postBlog);
        });
    }, []);

    return (
        <div className={cx('Posts')}>
            {postBlog.length === 0 ? (
                <p>no post poundl1</p>
            ) : (
                postBlog.map((items) => (
                    <div key={items.id} className={cx('Post')}>
                        <div className={cx('detail')}>
                            <span>Avata chổ này </span>
                            <span>
                                <b>{items.Name} </b>
                            </span>
                            <span className={cx('actions')}>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </span>
                        </div>
                        <span> {items.Introduction}</span>

                        <img className={cx('img-post')} src={items.Image} alt="" />
                        <div className={cx('postReacts')}>
                            {items.Like ? <FontAwesomeIcon icon={faHeart} /> : <FontAwesomeIcon icon={faHeartBroken} />}
                            <FontAwesomeIcon icon={faComment} />
                            <FontAwesomeIcon icon={faShare} />
                        </div>
                        <span>
                            {items.Like} likes {items.Like} comment
                        </span>
                        <span>{items.CreateAt.toDate().toDateString()}</span>
                    </div>
                ))
            )}
        </div>
    );
}

export default Posts;
