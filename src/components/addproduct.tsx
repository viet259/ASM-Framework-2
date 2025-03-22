import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IProductForm } from '../interface/product'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ICategory } from '../interface/category'
import AdminFooter from '../layout/admin/footer'
import AdminHeader from '../layout/admin/header'
import AdminSidebar from '../layout/admin/sidebar'


type Props = {
    onAdd:(data:FormData)=>void
}

// type ICategory ={
//      id:number|string,
//      name:string
// }

const AddProduct = (props: Props) => {
    const {register,handleSubmit,formState:{errors}} = useForm<IProductForm>()


    const navigate = useNavigate()
    const onSubmit = async (product:IProductForm)=>{
        try {
            const {data} = await axios.post(`http://localhost:3000/products`,product)
            alert('Thêm mới thành công')
            navigate('/adminSP')
        } catch (error) {
            console.log(error);            
        }
    }
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
  <div>
    <AdminHeader/>
    <div className='flex'>
    <AdminSidebar/>
    <div className='content w-4/5'>
    <h1 className='font-bold text-[24px] text-center'>Thêm mới sản phẩm</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 mt-4 [&_select]:border [&_input]:border [&_input]:py-1 [&_input]:px-3'>
            <input {...register("name",{required:true,minLength:5})} type='text' placeholder='Tên sản phẩm'/>
            
            {(errors.name)&&<span className='text-red-600 text-[12px]'>Tên không được để trống và ít nhất 5 kí tự</span>}
            <input {...register("image")} type='text' placeholder='Ảnh sản phẩm'/>
            {/* <input {...register("price",{pattern:/^\d*$/,required:true,min:1000})} type='text' placeholder='Giá sản phẩm'/> */}
            <input {...register("price",{validate:(value:any)=>!isNaN(value),required:true})} type='text' placeholder='Giá sản phẩm'/>
            {(errors.price)&&<span className='text-red-600 text-[12px]'>Giá phải là số</span>}
         
            <input {...register("deskiptions",{required:true,minLength:5})} type='text' placeholder='Description'/>  
            <input {...register("about",{required:true,minLength:5})} type='text' placeholder='About'/>
            {(errors.category)&&<span className='text-red-600 text-[12px]'>danh mục không để trống</span>}
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
            <button className='bg-green-900 text-white py-1 px-4 rounded'>Thêm mới sản phẩm</button>
            </div>
        </form>
    </div>

    </div>
    <AdminFooter/>

</div>
   
  )
}

export default AddProduct