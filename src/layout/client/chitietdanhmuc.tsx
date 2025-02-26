import React, { useEffect, useState } from 'react'
import ClientFooter from './footer'
import ClientHeader from './header'
import axios from 'axios'
import { IProduct, IProductForm } from '../../interface/product'
import { Link, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

type Props = {}

const ClienchitietDm = (props: Props) => {
    const [product, setProduct] = useState<IProduct | null>(null); // Chỉ cần một sản phẩm
    const [categoryProducts, setCategoryProducts] = useState<IProduct[]>([]); // Lưu danh sách sản phẩm theo category
    const { reset } = useForm<IProductForm>();
  
    const params: any = useParams();
    const id = params.id;
  
    // Lấy thông tin sản phẩm theo ID
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
    }, [id, reset]); 
  
    
    useEffect(() => {
      if (product ) {
        const getProductsByCategory = async () => {
          try {
            const { data } = await axios.get(`http://localhost:3000/products?category=${id}`);
            setCategoryProducts(data);
          } catch (error) {
            console.log(error);
          }
        }
        getProductsByCategory();
      }
    }, [product]); 
  
    if (!product) {
      return <div>Loading...</div>; 
    }

  return (
    <div>
    
    <main>
        <ClientHeader/>
        <div className="container mx-auto py-8 px-6">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Töpfe &amp; Behälter</h1>
      <div className="flex space-x-4">
        <button className="bg-green-200 text-green-800 px-4 py-2 rounded-md">
          Eckige Töpfe
        </button>
        <button className="bg-green-200 text-green-800 px-4 py-2 rounded-md">
          Runde Töpfe
        </button>
        <button className="bg-green-200 text-green-800 px-4 py-2 rounded-md">
          Untersetzer
        </button>
        <button className="bg-green-200 text-green-800 px-4 py-2 rounded-md">
          Pflanzsäcke
        </button>
      </div>
    </div>
    <div className="flex justify-between items-center mb-6">
      <div className="flex space-x-4">
        <label className="text-gray-700" htmlFor="sort">
          Sort By:
        </label>
        <select className="px-4 py-2 rounded-md border border-gray-300" id="sort">
          <option>Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
      <div className="flex space-x-4">
        <label className="text-gray-700" htmlFor="show">
          Show:
        </label>
        <select className="px-4 py-2 rounded-md border border-gray-300" id="show">
          <option>Default</option>
          <option>10</option>
          <option>20</option>
          <option>30</option>
        </select>
      </div>
    </div>

    <div className="flex">
    
 <section className="mt-12">
       <h2 className="text-2xl font-bold text-gray-800 mb-6">{product.nameCategory}</h2>
       <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
       {categoryProducts.map((prod) => (
         <div className="bg-white rounded-lg shadow-lg p-4" key={prod.id}>
        
                                   <p><img className="w-full h-48 object-cover rounded-t-lg"height={200}width={200}  src={prod.image}/></p>
                                   <button className="text-lg font-bold mt-4"><Link to={`/chitiet/${product.id}`}>{prod.name}</Link></button>
                                   <p className='text-green-600'>{prod.price}Đ</p>
 
         </div>
      
    ))}
          
       </div>
     </section>

 <aside className="w-1/4 pl-6">
        <div className="bg-white p-4 rounded-md shadow-md mb-6">
          <h2 className="text-lg font-bold mb-4">Kategorien</h2>
          <ul className="space-y-2">
            <li>
              <a className="text-green-700 hover:underline" href="#">
                Eckige Töpfe
              </a>
            </li>
            <li>
              <a className="text-green-700 hover:underline" href="#">
                Runde Töpfe
              </a>
            </li>
            <li>
              <a className="text-green-700 hover:underline" href="#">
                Untersetzer
              </a>
            </li>
            <li>
              <a className="text-green-700 hover:underline" href="#">
                Pflanzsäcke
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md mb-6">
          <img
            alt="Grow your own favourite plant"
            className="w-full h-60 object-cover mb-4"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/AD7nFKEAt_utKB_1h-EpHHiuxaBZnKizH8pjSS7YEMs.jpg"
            width={200}
          />
          <h2 className="text-lg font-bold">Grow your own favourite plant</h2>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md mb-6">
          <h2 className="text-lg font-bold mb-4">Filter By Price</h2>
          <ul className="space-y-2">
            <li>
              <a className="text-green-700 hover:underline" href="#">
                $0 to $5000
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-bold mb-4">Filter By Size</h2>
          <ul className="space-y-2">
            <li>
              <a className="text-green-700 hover:underline" href="#">
                2m by 50
              </a>
            </li>
          </ul>
        </div>
      </aside>
 </div>



    
    </div>
  </main>
  <ClientFooter/>
  </div>
  
  )
}

export default ClienchitietDm