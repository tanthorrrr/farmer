import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Images = forwardRef(({ alt, src, fallback: customFallback = images.noImage, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            alt={alt}
            ref={ref}
            src={fallback || src}
            {...props}
            onError={handleError}
        />
    );
});
Images.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
    fallback: PropTypes.string,
    className: PropTypes.string,
};

export default Images;
