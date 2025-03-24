import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ClientHeader from '../layout/client/header';

const ShippingInfoPage = () => {
    const location = useLocation();
    const navgate = useNavigate();
    const selectedItems = location.state || [];

    const [shippingInfo, setShippingInfo] = useState({
        name: '',
        address: '',
        phone: '',
    });


    const calculateTotalPrice = () => {
        return selectedItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setShippingInfo((prev) => ({ ...prev, [name]: value }));
    };


    const handleConfirm = () => {

        console.log('Thông tin giao hàng:', shippingInfo);
        console.log('Danh sách sản phẩm đã chọn:', selectedItems);
        navgate('/success')
    };

    return (
        <div>
            <ClientHeader />
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Thông tin giao hàng</h1>


                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Thông tin giao hàng</h2>
                    <div className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Họ và tên"
                            value={shippingInfo.name}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Địa chỉ"
                            value={shippingInfo.address}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Số điện thoại"
                            value={shippingInfo.phone}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                </div>


                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Sản phẩm đã chọn</h2>
                    <div className="space-y-4">
                        {selectedItems.length > 0 ? (
                            selectedItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between border-b pb-4"
                                >
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded-md"
                                        />
                                        <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                                    </div>
                                    <p className="text-gray-800">
                                        {item.price.toFixed(2)}Đ x {item.quantity}
                                    </p>
                                    <p className="text-gray-800 font-semibold">
                                        {(item.price * item.quantity).toFixed(2)}Đ
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">Không có sản phẩm nào được chọn.</p>
                        )}
                    </div>
                </div>


                {selectedItems.length > 0 && (
                    <div className="mt-8 flex justify-between items-center">
                        <p className="text-xl font-semibold text-gray-800">
                            Tổng giá tiền: {calculateTotalPrice()}Đ
                        </p>
                        <button
                            onClick={handleConfirm}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                        >
                            Xác nhận
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShippingInfoPage;