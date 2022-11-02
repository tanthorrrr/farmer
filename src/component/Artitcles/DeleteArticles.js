import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { db, storege } from '~/firebase';
import { toast } from 'react-toastify';
import { deleteObject, ref } from 'firebase/storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function DeleteArticle({ id, imageUrl }) {
    const handleDelete = async () => {
        if (window.confirm('Bạn có chắn chắn xóa sản phẩm này?')) {
            try {
                await deleteDoc(doc(db, 'Story-Product', id));
                toast('Xóa sản phẩm thành công', { type: 'success' });
                const storageRef = ref(storege, imageUrl);
                await deleteObject(storageRef);
            } catch (error) {
                toast('Đã Xảy ra lỗi ! không thể xóa', { type: 'error' });
                console.log(error);
            }
        }
    };
    return (
        <div>
            <div onClick={handleDelete} style={{ cursor: 'pointer', height: '30px' }}>
                <FontAwesomeIcon icon={faTimes} />
            </div>
        </div>
    );
}
