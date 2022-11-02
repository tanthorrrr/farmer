import { addDoc, collection, Timestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storege } from '~/firebase';

export default function AddArticles() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        CreateAt: Timestamp.now().toDate(),
    });
    const [progress, setProgress] = useState(0);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };
    const handlePublic = () => {
        if (!formData.title || !formData.description || !formData.image) {
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
                    description: '',
                    image: '',
                });
                getDownloadURL(upLoadImage.snapshot.ref).then((url) => {
                    const articleRef = collection(db, 'Stoty-Product');
                    addDoc(articleRef, {
                        title: formData.title,
                        description: formData.description,
                        imageUrl: url,
                        CreateAt: Timestamp.now().toDate(),
                    })
                        .then(() => {
                            alert('Sản phẩm được thêm thành công', { type: 'success' });
                            setProgress(0);
                        })
                        .catch((err) => {
                            alert('Sản phẩm thêm thất bại', { type: 'error' });
                        });
                });
            },
        );
    };
    return (
        <div className="border p-3 mt-3 bg-light" style={{ position: 'fixed' }}>
            <h2>Thêm Sản Phẩm</h2>
            <label htmlFor="">Title</label>
            <input
                type="text"
                name="title"
                className="form-control"
                value={formData.title}
                onChange={(e) => {
                    handleChange(e);
                }}
            />
            {/* description */}
            <label htmlFor="">description</label>
            <textarea
                name="description"
                className="form-control"
                value={formData.description}
                onChange={(e) => {
                    handleChange(e);
                }}
            ></textarea>
            {/* image */}
            <label htmlFor="">Image</label>
            <input
                type="file"
                name="image"
                accept="image/*"
                className="form-control"
                onChange={(e) => {
                    handleImageChange(e);
                }}
            />

            {progress === 0 ? null : (
                <div className="progress">
                    <div className="progress-bar progress-bar-striped mt-2" style={{ width: `${progress}%` }}>
                        {`uploading image ${progress}%`}
                    </div>
                </div>
            )}
            <button className="btn-primary mt-2 form-control" onClick={handlePublic}>
                public
            </button>
        </div>
    );
}
