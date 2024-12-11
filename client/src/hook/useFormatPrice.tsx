import { useCallback } from "react";

const useFormatPrice = () => {
    const formatPrice = useCallback((price: number) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0,
        }).format(price);
    }, []);

    return { formatPrice };
};

export default useFormatPrice;
