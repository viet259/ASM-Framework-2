import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
    const { state, dispatch } = useCart();

    const handleRemoveFromCart = (id: string) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>
            {state.items.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
                <div className="space-y-6">
                    {state.items.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between bg-white shadow-md rounded-lg p-4"
                        >
                            <div className="flex items-center space-x-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover rounded-md"
                                />
                                <div>
                                    <p className="text-lg font-semibold">{item.name}</p>
                                    <p className="text-gray-600">
                                        {item.price}Đ x {item.quantity}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleRemoveFromCart(item.id)}
                                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
            {state.items.length > 0 && (
                <div className="mt-8 flex justify-end">
                    <button
                        onClick={() => dispatch({ type: 'CLEAR_CART' })}
                        className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-6 rounded-md"
                    >
                        Clear Cart
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartPage;