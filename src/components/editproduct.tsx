import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { IProductForm } from '../interface/product'
import { ICategory } from '../interface/category'
import AdminFooter from '../layout/admin/footer'
import AdminHeader from '../layout/admin/header'
import AdminSidebar from '../layout/admin/sidebar'

type Props = {}

const EditProduct = (props: Props) => {
    const {register,handleSubmit,reset} = useForm<IProductForm>()
    // Lấy id sản phẩm
    const params:any = useParams()
    const id = params.id
    useEffect(()=>{
        const get_product_by_id = async()=>{
            try {                
                const {data} = await axios.get(`http://localhost:3000/products/${id}`)
                reset(data)
            } catch (error) {
                console.log(error);
                
            }
        }
        get_product_by_id()
    },[])

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
    const navigate = useNavigate()
    const onSubmit = async (product:IProductForm)=>{
        try {
            const {data} = await axios.put(`http://localhost:3000/products/${id}`,product)
            alert('Cập nhật thành công')
            navigate('/adminSP')
        } catch (error) {
            console.log(error);            
        }
    }
  return (
    <div>
    <AdminHeader/>
    <div className='flex'>
    <AdminSidebar/>
    <div className='content w-4/5'>
   
    <h1 className='font-bold text-[24px] text-center'>Cập nhật sản phẩm</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 mt-4 [&_select]:border [&_input]:border [&_input]:py-1 [&_input]:px-3'>
            <input {...register("name")} type='text' placeholder='Tên sản phẩm'/>
            <input {...register("image")} type='text' placeholder='Ảnh sản phẩm'/>
            <input {...register("price")} type='number' placeholder='Giá sản phẩm'/>
            <input {...register("deskiptions")} type='text' placeholder='Mô tả ngắn'/>
            <input {...register("about")} type='text  ' placeholder='Mô tả dài'/>
            <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label font-serif text-[16px]">
            Danh mục sản phẩm <span className="text-red-500">(*)</span>
          </label>
          <select className="w-full text-black-6000 border rounded p-2 border-[#B5B5B5] focus:outline-[#00C5CD] focus:shadow-md" {...register("category")}>
            <option value={''} className="text-black"></option>
            {
              categorys.map((item) => (
                <option key={item.id} value={Number(item.id)} className="text-black">{item.nameCategory}</option>
              ))
            }
          </select>
          </div>
            
            <div className='flex justify-end'>
            <button className='bg-green-900 text-white py-1 px-4 rounded'>Cập nhật sản phẩm</button>
            </div>
        </form>
    </div>

    </div>
    <AdminFooter/>

</div>
    
    
  )
}

export default EditProduct