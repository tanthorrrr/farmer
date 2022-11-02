import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from '../ProductCard/ProductCard';

import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '~/firebase';

export default function ProductSilder() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const articleRef = collection(db, 'Story-Product');
        const q = query(articleRef, orderBy('CreateAt', 'desc'));
        onSnapshot(q, (snapshot) => {
            const articles = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setArticles(articles);
        });
    }, []);
    return (
        <div className="container py-4 px-4 justify-content-center  ">
            <Swiper
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                pagination={{ el: './swiper-panigation', clickable: true }}
                modules={[Navigation]}
                className="mySwiper"
                slidesPerView={4}
                spaceBetween={20}
            >
                {articles.map((item) => (
                    <SwiperSlide key={item.id} style={{ height: '500px' }}>
                        <ProductCard data={{ imgSrc: item.imageUrl, title: item.title, price: item.description }} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
