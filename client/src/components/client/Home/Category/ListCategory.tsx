import React from 'react'
import { useCategory } from '../../../../hook/useCategory'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const ListCategory = () => {
    const { subcates } = useCategory();
    const settings = {
        dots: true,
        infinite: subcates?.length > 1, // Kiểm tra subcates tồn tại
        speed: 500,
        slidesToShow: subcates?.length > 1 ? Math.min(subcates.length, 4) : 1, // Xử lý nếu subcates rỗng
        slidesToScroll: 1,
        autoplay: subcates?.length > 1,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: subcates?.length > 0 ? Math.min(subcates.length, 4) : 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: subcates?.length > 0 ? Math.min(subcates.length, 3) : 1,
                },
            },
        ],
    };



    return (
        <>
            <div className=" mb-14 md:mx-[100px] lg:mx-[150px] xl:mx-[350px] ">
                <Slider {...settings}>
                    {subcates.map((sub) => (
                        <div key={sub.id} className='flex lg:gap-4'>
                            <div className="relative w-28 h-28 md:w-40 md:h-40 lg:w-40 lg:h-40  rounded-full bg-slate-700 bg-[url('https://down-vn.img.susercontent.com/file/f9ce1f63f6b5f142bd98488f46b9c7cd.webp')] bg-cover bg-center">
                                <div className="absolute inset-0 bg-black opacity-50 rounded-full"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-white  font-semibold text-sm lg:text-lg">
                                    {sub.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>


            </div>
        </>
    )
}

export default ListCategory