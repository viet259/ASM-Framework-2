import React from 'react'
import { ICategoryForm } from '../interface/category'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

type Props = {
    onAdd:(data:FormData)=>void
}

const AddCategory = (props: Props) => {
    const {register,handleSubmit,formState:{errors}} = useForm<ICategoryForm>()




    const navigate = useNavigate()
    const onSubmit = async (category:ICategoryForm)=>{
        try {
            const {data} = await axios.post(`http://localhost:3000/category`,category)
            alert('Thêm mới thành công')
            navigate('/adminDM')
        } catch (error) {
            console.log(error);            
        }
    }
  return (
    <div className='max-w-2xl mx-auto py-10'>
    <h1 className='font-bold text-[24px] text-center'>Thêm mới Danh mục</h1>
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 mt-4 [&_input]:border [&_input]:py-1 [&_input]:px-3'>
        <input {...register("nameCategory",{required:true,minLength:5})} type='text' placeholder='Tên danh mục'/>
       
        {(errors.nameCategory)&&<span className='text-red-600 text-[12px]'>Tên không được để trống và ít nhất 5 kí tự</span>}
        <input {...register("image")} type='text' placeholder='Ảnh danh mục'/>
        
        
        <div className='flex justify-end'> 
        <button className='bg-green-900 text-white py-1 px-4 rounded'>Thêm mới danh mục</button>
        </div>
    </form>
</div>
  )
}

export default AddCategory