import React from 'react';
import styles from './Blog.module.scss';
import classNames from 'classnames/bind';
import PostShare from '~/layouts/components/PostShare/PostShare';
import Posts from '~/layouts/components/Posts/Posts';
// import Post from '~/layouts/components/Post/Post';

const cx = classNames.bind(styles);
function Blog() {
    return (
        <div className={cx('Blog')}>
            <PostShare />
            <Posts />
        </div>
    );
}

export default Blog;
