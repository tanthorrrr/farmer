import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

import { db } from '~/firebase';
import DeleteArticle from './DeleteArticles';

export default function Artilcles() {
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
        <div>
            {articles.length === 0 ? (
                <p>no post poundl</p>
            ) : (
                articles.map((items) => (
                    <div key={items.id} className="border mt-3 p-3 bg-light">
                        <div className="row">
                            <div className="col-7">
                                <img
                                    src={items.imageUrl}
                                    style={{ height: 200, width: 300, objectFit: 'cover' }}
                                    alt="title"
                                />
                            </div>
                            <div className="col-5 ps-3 ">
                                <h2>{items.title}</h2>
                                <p>{items.CreateAt.toDate().toDateString()}</p>
                                <h4 style={{ color: 'red', width: '150px', height: '30px' }}>
                                    Giá chỉ {items.description} đ
                                </h4>

                                <DeleteArticle id={items.id} imageUrl={items.imageUrl} />
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
