import React from 'react'
import { ILoginForm } from '../interface/user'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

type Props = {}

const Login = (props: Props) => {
    const {register,handleSubmit,formState:{errors},watch} = useForm<ILoginForm>()
    const navigate = useNavigate()
    const onSubmit = async (user:ILoginForm)=>{
        try {
            const {data} = await axios.post(`http://localhost:3000/login`,user)
            alert('Đăng nhập thành công')
            navigate('/Client')
        } catch (error:any) {
            alert(error.response.data??error.message)
            console.log(error);            
        }
    }
  return (
    <div className='max-w-2xl mx-auto py-10'>
        <h1 className='font-bold text-[24px] text-center'>Đăng nhập tài khoản</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 mt-4 [&_input]:border [&_input]:py-1 [&_input]:px-3'>
           <input type='text' placeholder='Email' {...register("email",{pattern:/^\S+\@+(\S+\.)+[a-zA-Z]{2,6}$/,required:true})}/>
           {(errors.email)&&<span className='text-red-600 text-[12px]'>Email không đúng định dạng</span>}
           <input type='text' {...register("password")} placeholder='Mật khẩu'/>
            <div className='flex justify-end'>
            <button className='bg-green-900 text-white py-1 px-4 rounded'>Đăng nhập</button>
            <button className='bg-green-900 text-white py-1 px-4 rounded'> <Link to={'/register'}>Đăng ký</Link></button>
            </div>
        </form>
    </div>
  )
}

export default Login