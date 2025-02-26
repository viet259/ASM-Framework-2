import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { IRegisterForm } from '../interface/user'

type Props = {}

const Register = (props: Props) => {
    const {register,handleSubmit,formState:{errors},watch} = useForm<IRegisterForm>()
    const navigate = useNavigate()
    const onSubmit = async (user:IRegisterForm)=>{
        try {
            const {data} = await axios.post(`http://localhost:3000/register`,user)
            alert('Đăng ký thành công')
            navigate('/login')
        } catch (error:any) {
            alert(error.response.data??error.message)
            console.log(error);            
        }
    }
  return (
    <div className='max-w-2xl mx-auto py-10'>
        <h1 className='font-bold text-[24px] text-center'>Đăng ký tài khoản</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 mt-4 [&_input]:border [&_input]:py-1 [&_input]:px-3'>
           <input type='text' placeholder='Họ tên' {...register("name",{required:true})}/>
           {(errors.name)&&<span className='text-red-600 text-[12px]'>Tên không được để trống</span>}
           <input type='text' placeholder='Email' {...register("email",{pattern:/^\S+\@+(\S+\.)+[a-zA-Z]{2,6}$/,required:true})}/>
           {(errors.email)&&<span className='text-red-600 text-[12px]'>Email không đúng định dạng</span>}
           <input type='text' placeholder='Số điện thoại' {
            ...register("phone",{
                pattern:/^(0+[0-9]{9}|\+84+[0-9]{9})$/
            })
           } />
            {(errors.phone)&&<span className='text-red-600 text-[12px]'>Số điện thoại không đúng định dạng</span>}
           <input type='text' {...register("password")} placeholder='Mật khẩu'/>
           <input type='text' {...register("repassword",{validate:(value:any)=>watch("password")==value})} placeholder='Nhập lại mật khẩu'/>
           {(errors.repassword)&&<span className='text-red-600 text-[12px]'>Mật khẩu không khớp</span>}
            <div className='flex justify-end'>
            <button className='bg-green-900 text-white py-1 px-4 rounded'>Đăng ký</button>
            </div>
        </form>
    </div>
  )
}

export default Register