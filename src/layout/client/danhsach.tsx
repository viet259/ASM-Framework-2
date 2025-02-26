import React, { useEffect, useState } from 'react'
import ClientFooter from './footer'
import ClientHeader from './header'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { IProduct } from '../../interface/product'

type Props = {}

const ClientDanhSach = (props: Props) => {
  const [products,SetProduct]= useState<IProduct[]>([])
  useEffect(()=>{
      const get_Products = async()=>{
          try {
              const {data} = await axios.get(`http://localhost:3000/products`)
              SetProduct(data)
          } catch (error) {
              console.log(error);                
          }
      }
      get_Products()
    },[])
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
       <h2 className="text-2xl font-bold text-gray-800 mb-6">Danh sách sản phẩm</h2>
       <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
       {products.map((products,index)=>(
         <div className="bg-white rounded-lg shadow-lg p-4" key={products.id}>
        
                                   <p><img className="w-full h-48 object-cover rounded-t-lg"height={200}width={200}  src={products.image}/></p>
                                   <button className="text-lg font-bold mt-4"><Link to={`/chitiet/${products.id}`}>{products.name}</Link></button>
                                   <p className='text-green-600'>{products.price}Đ</p>
 
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

export default ClientDanhSach