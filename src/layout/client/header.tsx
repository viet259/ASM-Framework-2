import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ICategory } from '../../interface/category'
import register from '../../components/register'
import { IProductForm } from '../../interface/product'
import { useForm } from 'react-hook-form'

const ClientHeader = () => {
    const {register,handleSubmit,formState:{errors}} = useForm<IProductForm>()
  const [categorys,setCategory] = useState<ICategory[]>([])
  useEffect(()=>{
      const getCategoryById = async () => {
          try {
            const { data } = await axios.get(`http://localhost:3000/category`);
            setCategory(data); 
          } catch (error:any) {
            alert(error.response.data??error.message)
          }
         } 
         getCategoryById();
  })
   
  return (
    <div>{/* Header */}
    <header className="bg-green-700 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-4">
          <input
            className="px-4 py-2 rounded-md w-96 text-black"
            placeholder="Suchen Sie nach Produkten, Marken und mehr"
            type="text"
          />
          <button className="bg-white text-green-700 px-4 py-2 rounded-md">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white">En</button>
          <button className="text-white">
            <i className="fas fa-user"> <Link to={'/dangnhap'}>Account</Link></i>
            
          </button>
          <button className="text-white">
            <i className="fas fa-shopping-cart"></i>
            Cart
          </button>
        </div>
      </div>
      <nav className="bg-green-600">
        <div className="container mx-auto flex justify-between items-center py-2 px-6">
          <div className="flex space-x-4">
            <div className="group relative">
              <button className="text-white">
              <Link to={'/Client'}>Home</Link>
              </button>
            </div>
            <div className="group relative">
              <button className="text-white">
                <Link to={'/Danhsach'}>Sản phẩm</Link>
              </button>
              
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2 w-48">
    <ul>
    <li  className="w-full text-black-6000 border rounded p-2 border-[#B5B5B5] focus:outline-[#00C5CD] focus:shadow-md" {...register("category")}>
          
            {
              categorys.map((item) => (
                <option key={item.id} value={item.nameCategory} className="text-black">{item.nameCategory}</option>
              ))
            }
          
          </li>
    </ul>
  </div>
            </div>
            <div className="group relative">
              <button className="text-white">Giới thiệu</button>
            </div>
            <div className="group relative">
              <button className="text-white">Liên hệ</button>
            </div>
          </div>
        </div>
      </nav>
    </header></div>
  )
}

export default ClientHeader