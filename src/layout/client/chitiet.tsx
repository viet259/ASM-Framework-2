import React, { useEffect, useState } from 'react'
import ClientFooter from './footer'
import ClientHeader from './header'
import axios from 'axios'
import { IProduct, IProductForm } from '../../interface/product'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

type Props = {}

const Clienchitiet = (props: Props) => {
  const [product, setProduct] = useState<IProduct | null>(null); // Chỉ cần một sản phẩm
  const { reset } = useForm<IProductForm>();

  const params: any = useParams();
  const id = params.id;

  useEffect(() => {
    const getProductById = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/products/${id}`);
        setProduct(data);  // Cập nhật state sản phẩm
        reset(data); // Reset form với dữ liệu sản phẩm
      } catch (error) {
        console.log(error);
      }
    };
    getProductById();
  }, [id, reset]); // Thêm id vào dependency để cập nhật khi id thay đổi

  if (!product) {
    return <div>Loading...</div>;  // Trả về loading nếu chưa có dữ liệu
  }

  return (
    <div>
            <ClientHeader />
      <main className="container mx-auto py-8">
        <div className="bg-white p-8 rounded shadow">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2" key={product.id}>
              <img
                alt={product.name}  // Cải thiện alt text với tên sản phẩm
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
          <h2 className="text-3xl font-bold">
            {product.name}
          </h2>
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
              defaultValue={1}
            />
            <button className="bg-green-700 text-white py-2 px-4 rounded ml-4">
              Add to cart
            </button>
          </div>
        </div>

      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold">Description</h3>
        <p className="text-gray-600 mt-2">
        {product.deskiptions}
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold">About</h3>
        <p className="text-gray-600 mt-2">
         {product.about}
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold">Reviews</h3>
        <div className="flex items-center mt-4">
          <img
            alt="Square cultivation pot"
            className="w-16 h-16"
            height={100}
            src={product.image}
          />
          <div className="ml-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold">5.0</span>
              <div className="ml-2 flex">
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
              </div>
            </div>
            <p className="text-gray-600">(300)</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <div className="w-1/2 bg-gray-200 h-2 rounded">
              <div
                className="bg-green-700 h-2 rounded"
                style={{ width: "100%" }}
              ></div>
            </div>
            <span className="ml-4">5</span>
          </div>
          <div className="flex items-center mt-2">
            <div className="w-1/2 bg-gray-200 h-2 rounded">
              <div
                className="bg-green-700 h-2 rounded"
                style={{ width: "80%" }}
              ></div>
            </div>
            <span className="ml-4">4</span>
          </div>
          <div className="flex items-center mt-2">
            <div className="w-1/2 bg-gray-200 h-2 rounded">
              <div
                className="bg-green-700 h-2 rounded"
                style={{ width: "60%" }}
              ></div>
            </div>
            <span className="ml-4">3</span>
          </div>
          <div className="flex items-center mt-2">
            <div className="w-1/2 bg-gray-200 h-2 rounded">
              <div
                className="bg-green-700 h-2 rounded"
                style={{ width: "40%" }}
              ></div>
            </div>
            <span className="ml-4">2</span>
          </div>
          <div className="flex items-center mt-2">
            <div className="w-1/2 bg-gray-200 h-2 rounded">
              <div
                className="bg-green-700 h-2 rounded"
                style={{ width: "20%" }}
              ></div>
            </div>
            <span className="ml-4">1</span>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold">User Reviews</h3>
        <div className="mt-4">
          <div className="flex items-start">
            <img
              alt="User avatar"
              className="w-12 h-12 rounded-full"
              height={50}
              src="https://storage.googleapis.com/a1aa/image/iSJXrG9XxX-W0QjDFVSaCLHi_-E_n-xvlrAc-J0kzC4.jpg"
              width={50}
            />
            <div className="ml-4">
              <div className="flex items-center">
                <span className="font-bold">Anna Smith</span>
                <div className="ml-2 flex">
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                </div>
              </div>
              <p className="text-gray-600 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="flex items-start mt-4">
            <img
              alt="User avatar"
              className="w-12 h-12 rounded-full"
              height={50}
              src="https://storage.googleapis.com/a1aa/image/iSJXrG9XxX-W0QjDFVSaCLHi_-E_n-xvlrAc-J0kzC4.jpg"
              width={50}
            />
            <div className="ml-4">
              <div className="flex items-center">
                <span className="font-bold">John Doe</span>
                <div className="ml-2 flex">
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                </div>
              </div>
              <p className="text-gray-600 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <ClientFooter/>
  </div>
  
  )
}

export default Clienchitiet