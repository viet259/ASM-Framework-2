import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import ClientHeader from '../layout/client/header';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const { state, dispatch } = useCart();
    const navigate = useNavigate();
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleRemoveFromCart = (id: string) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    };

    const handleQuantityChange = (id: string, increment: boolean) => {
        const item = state.items.find((item) => item.id === id);
        if (item) {
            const newQuantity = increment ? item.quantity + 1 : item.quantity - 1;
            if (newQuantity > 0) {
                dispatch({
                    type: 'ADD_TO_CART',
                    payload: { ...item, quantity: newQuantity },
                });
            } else {
                dispatch({ type: 'REMOVE_FROM_CART', payload: id });
            }
        }
    };


    const calculateTotalPrice = () => {
        return state.items
            .filter((item) => selectedItems.includes(item.id)) // Lọc các sản phẩm được chọn
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2);
    };


    const handleCheckboxChange = (id: string, checked: boolean) => {
        if (checked) {
            setSelectedItems((prev) => [...prev, id]);
        } else {
            setSelectedItems((prev) => prev.filter((itemId) => itemId !== id)); // Loại bỏ sản phẩm khỏi danh sách được chọn
        }
    };

    return (
        <div>
            <ClientHeader />
            <div
                className="bg-cover bg-center h-48 flex items-center justify-center"
                style={{
                    backgroundImage: "url('https://thuysinh365.com/storage/large/cac-loai-cay-thuy-sinh-trong-khong-can-den-dat-nen.jpg')",
                }}
            >
                <h1 className="text-4xl font-bold text-white">Shopping Cart</h1>
            </div>
            <div className="container mx-auto py-8">
                {state.items.length === 0 ? (
                    <p className="text-center text-gray-500">Your cart is empty.</p>
                ) : (
                    <div className="space-y-6">
                        {state.items.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between bg-white shadow-md rounded-lg p-4"
                            >

                                <div className="w-1/12 text-center">
                                    <input
                                        type="checkbox"
                                        checked={selectedItems.includes(item.id)}
                                        onChange={(e) => handleCheckboxChange(item.id, e.target.checked)}
                                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                </div>


                                <div className="flex items-center space-x-4 w-1/3">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded-md"
                                    />
                                    <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                                </div>


                                <div className="w-1/4 text-center">
                                    <p className="text-gray-800">{item.price.toFixed(2)}Đ</p>
                                </div>


                                <div className="w-1/4 flex items-center justify-center space-x-2">
                                    <button
                                        onClick={() => handleQuantityChange(item.id, false)}
                                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-2 py-1 rounded"
                                    >
                                        -
                                    </button>
                                    <span className="px-3">{item.quantity}</span>
                                    <button
                                        onClick={() => handleQuantityChange(item.id, true)}
                                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-2 py-1 rounded"
                                    >
                                        +
                                    </button>
                                </div>


                                <div className="w-1/6 text-right">
                                    <button
                                        onClick={() => handleRemoveFromCart(item.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                                    >
                                        &times;
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}


                {state.items.length > 0 && (
                    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md py-4 px-8">
                        <div className="flex justify-between items-center">
                            <p className="text-xl font-semibold text-gray-800">
                                Tổng giá tiền các sản phẩm đã chọn: {calculateTotalPrice()}Đ
                            </p>
                            <div className="flex space-x-4">
                                <button
                                    onClick={() => dispatch({ type: 'CLEAR_CART' })}
                                    className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-6 rounded-md"
                                >
                                    Clear Cart
                                </button>
                                <button
                                    onClick={() =>
                                        navigate('/shipping-info', {
                                            state: state.items.filter((item) =>
                                                selectedItems.includes(item.id)
                                            ),
                                        })
                                    }
                                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md"
                                >
                                    Thanh toán
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;