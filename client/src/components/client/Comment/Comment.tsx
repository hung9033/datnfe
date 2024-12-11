import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowLeft, Camera, Video, X } from 'lucide-react';
import React, { useState } from 'react';
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
interface ConfirmModalProps {
    isVisible: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    productId: string;
}

const Comment: React.FC<ConfirmModalProps> = ({ isVisible, onConfirm, onCancel, productId }) => {
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);

    const nav = useNavigate()
    const handleClick = (index: number) => {
        setRating(rating === index ? 0 : index); // Nếu sao đã chọn, bỏ chọn, nếu chưa chọn thì chọn
    };
    if (!isVisible) return null;

    const handleChange = (e) => {
        setComment(e.target.value);
        setRating(rating)

    }
    const handleSend = async () => {
        try {
            const response = await axios.post(`/api/comment/${productId}`, {
                comment: comment,
                rating: rating,
            });
            console.log(response.data);
            onCancel();
            setTimeout(() => {
                window.location.reload();
            }, 3000);

            if (response.data.message) {

                toast.success(response.data.message);
            } else {
                toast.error(response.data.error);
            }
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50 ">
            <div className={`bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out w-2/4 h-3/4 overflow-hidden ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                <section>

                    <div className='flex justify-start mb-2'>
                        <button onClick={onCancel} className='mr-2' >  <ArrowLeft /></button>
                        <div>Đánh giá sản phẩm</div>
                    </div>
                    <hr className=' mb-5' />
                    <div className="  ">
                        <div className="border border-gray-300 rounded-md p-4 mb-4">
                            <div className="flex justify-end items-center mb-2">
                            </div>
                            <hr className="mb-2" />
                            {/* <div className="">
                                <div className="flex">
                                    <img src="https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-the-thao-nam-SUM7006-DEN%20(10).JPG" alt="Product Image" className="w-20 h-20 object-cover mr-4" />
                                    <div className="flex-1">
                                        <p className="text-gray-800">dfffffffffffffffffffffff dffffffffffffffffffffffffffffdsfdsfsdfsdfdsfsdfwerewr</p>
                                        <div className="text-sm text-gray-500">Phân loại hàng: Dài 33cm</div>
                                        <div className="text-sm text-gray-500">x1</div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>


                    <div className='flex items-center gap-2 mb-2 text-[15px]'>
                        <div>Chất lượng sản phẩm</div>
                        <div>
                            {[1, 2, 3, 4, 5].map((index) => (
                                <FontAwesomeIcon
                                    key={index}
                                    icon={index <= rating ? faStarSolid : faStarRegular}
                                    onClick={() => handleClick(index)}
                                    className={index <= rating ? 'text-yellow-500' : 'text-gray-400'}
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        {/* <div className='flex gap-3 justify-center text-[15px]'>
                            <div className='border-2 border-red-300 w-60  h-32 flex flex-col justify-center items-center text-red-500'> <Camera strokeWidth='1' size={40} /> Thêm hình ảnh</div>

                            <div className='border-2 border-red-300 w-60 h-32 flex flex-col justify-center items-center text-red-500'>  <Video strokeWidth='1' size={40} />Thêm video</div>
                        </div> */}
                    </div>
                    <div className=' flex justify-center'>
                        <textarea
                            onChange={handleChange} value={comment}
                            className='outline-none border-2 focus:border-red-300 w-5/6 h-20 mt-5 rounded pl-6 pt-2 text-[15px]' placeholder='Viết đánh giá của bạn về sản phẩm...'></textarea>
                    </div>
                </section>

                <div className="mt-4 flex justify-end">
                    <button onClick={handleSend} className="px-4 py-2 bg-yellow-400 text-gray-700 rounded hover:bg-yellow-200 transition">Gửi đánh giá</button>
                </div>
            </div >
        </div >
    );
};

export default Comment;
