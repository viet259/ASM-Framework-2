import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IOder from '../../interface/orders';
import AdminHeader from './header';
import AdminSidebar from './sidebar';
import AdminFooter from './footer';

const AdminDonHang = () => {
    const [oders, setOders] = useState<IOder[]>([]); // State lưu danh sách đơn hàng

    useEffect(() => {
        const getOrders = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/orders`); // Gọi API lấy danh sách đơn hàng
                setOders(data); // Lưu dữ liệu vào state
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu đơn hàng:', error);
            }
        };
        getOrders();
    }, []);

    const delCategory = async (id: number | string) => {
        try {
            if (confirm("Bạn chắc chắn muốn xóa đơn hàng này?")) {
                await axios.delete(`http://localhost:3000/orders/${id}`); // Gọi API xóa đơn hàng
                alert('Xóa đơn hàng thành công');
                const newOrders = oders.filter((order) => order.id !== id); // Cập nhật state sau khi xóa
                setOders(newOrders);
            }
        } catch (error) {
            console.error('Lỗi khi xóa đơn hàng:', error);
        }
    };

    return (
        <div>
            <main className='bg-[#f6f9ff]'>
                <AdminHeader />
                <div className='flex'>
                    <AdminSidebar />
                    <div className='content w-4/5'>
                        <h1 className='font-bold text-[24px] text-center mt-4'>Danh sách người dùng</h1>

                        <table className="border w-full [&_td]:border [&_th]:border mt-6">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên người mua</th>
                                    <th>Số điện thoại</th>
                                    <th>Địa chỉ</th>
                                    <th>Sản phẩm đã mua</th>
                                    <th>Tổng giá tiền</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {oders.map((order, index) => (
                                    <tr key={order.id}>
                                        <td>{index + 1}</td>
                                        <td>{order.name}</td>
                                        <td>{order.phone}</td>
                                        <td>{order.address}</td>
                                        <td>
                                            <ul>
                                                {order.items.map((item, idx) => (
                                                    <li key={idx} className="flex items-center space-x-2">
                                                        <img src={item.image} alt={item.name} width={50} className="rounded" />
                                                        <span>{item.name}</span>
                                                        <span>x{item.quantity}</span>
                                                        <span>{item.price.toFixed(2)}Đ</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </td>
                                        <td>{Number(order.total).toFixed(2)}Đ</td>
                                        <td>
                                            <button
                                                onClick={() => delCategory(order.id)}
                                                className="bg-red-700 text-white px-4 py-1 rounded"
                                            >
                                                Xóa
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <AdminFooter />
            </main>
        </div>




    );
};

< AdminFooter />

export default AdminDonHang;