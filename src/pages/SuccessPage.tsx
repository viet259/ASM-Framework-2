import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 text-center">
                <h1 className="text-3xl font-bold text-green-500 mb-4">Mua hàng thành công!</h1>
                <p className="text-gray-700 mb-6">Cảm ơn bạn đã mua hàng. Chúng tôi sẽ liên hệ với bạn sớm nhất.</p>
                <button
                    onClick={() => navigate('/Client')}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                >
                    Quay về trang chủ
                </button>
            </div>
        </div>

    );
};

export default SuccessPage;