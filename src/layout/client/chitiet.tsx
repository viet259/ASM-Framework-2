import React, { useEffect, useState } from 'react';
import ClientFooter from './footer';
import ClientHeader from './header';
import axios from 'axios';
import { IProduct } from '../../interface/product';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; // Import useCart

type Props = {};

const Clienchitiet = (props: Props) => {
  const [product, setProduct] = useState<IProduct | null>(null); // Chỉ cần một sản phẩm
  const { dispatch } = useCart(); // Lấy dispatch từ CartContext
  const params: any = useParams();
  const id = params.id;

  useEffect(() => {
    const getProductById = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/products/${id}`);
        setProduct(data); // Cập nhật state sản phẩm
      } catch (error) {
        console.log(error);
      }
    };
    getProductById();
  }, [id]);

  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = () => {
    if (product) {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: quantity,
          image: product.image,
        },
      });
      alert('Sản phẩm đã đc thêm vào giở hàng ');
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ClientHeader />
      <main className="container mx-auto py-8">
        <div className="bg-white p-8 rounded shadow">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2" key={product.id}>
              <img
                alt={product.name} // Cải thiện alt text với tên sản phẩm
                className="w-full"
                height={400}
                src={product.image}
                width={400}
              />
              <div className="flex space-x-4 mt-4">
                <img
                  alt="Small square cultivation pot"
                  className="w-1/4"
                  height={100}
                  src={product.image}
                  width={100}
                />
                <img
                  alt="Small square cultivation pot"
                  className="w-1/4"
                  height={100}
                  src={product.image}
                />
                <img
                  alt="Small square cultivation pot"
                  className="w-1/4"
                  height={100}
                  src={product.image}
                  width={100}
                />
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
              <h2 className="text-3xl font-bold">{product.name}</h2>
              <p className="text-gray-600 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text.
              </p>
              <div className="mt-4">
                <span className="text-2xl font-bold text-green-700">{product.price}Đ</span>
              </div>
              <div className="mt-4 flex items-center">
                <input
                  className="w-16 p-2 border rounded"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
                <button
                  className="bg-green-700 text-white py-2 px-4 rounded ml-4"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold">Description</h3>
            <p className="text-gray-600 mt-2">{product.deskiptions}</p>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold">About</h3>
            <p className="text-gray-600 mt-2">{product.about}</p>
          </div>
        </div>
      </main>
      <ClientFooter />
    </div>
  );
};

export default Clienchitiet;