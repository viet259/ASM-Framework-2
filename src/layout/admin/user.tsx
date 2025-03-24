import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IProduct } from '../../interface/product'
import ClientHeader from '../client/header'
import ClientFooter from '../client/footer'
import AdminSidebar from './sidebar'
import AdminHeader from './header'
import AdminFooter from './footer'
import { IUser } from '../../interface/user'

type Props = {}

const AdminUser = (props: Props) => {
    const [users,SetUser]= useState<IUser[]>([])
    useEffect(()=>{
        const get_Products = async()=>{
            try {
                const {data} = await axios.get(`http://localhost:3000/users`)
                SetUser(data)
            } catch (error) {
                console.log(error);                
            }
        }
        get_Products()
    },[])
    const deluser = async (id:number|string)=>{
        try {
            if (confirm("Bạn chắc chứ?")){
                await axios.delete(`http://localhost:3000/users/${id}`)
                alert('Xóa thành công')
                const newusers = users.filter(user=>user.id!=id)
                SetUser(newusers)
            }
        } catch (error) {
            console.log(error);            
        }
    }
  return ( 
    <div>
<main className='bg-[#f6f9ff]'>
        <AdminHeader/>
        <div className='flex'>
        <AdminSidebar/>
        <div className='content w-4/5'>
        <h1 className='font-bold text-[24px] text-center mt-4'>Danh sách người dùng</h1>
        
        <table className='border w-full [&_td]:border [&_th]:border mt-6'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên người dùng</th>
                    <th>Email</th>
                    <th>Hành động</th>
                    
                  
                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>(
                    <tr key={user.id}>
                        <td>{index+1}</td>
            
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                     
                        <td>
                          
                            <button onClick={()=>deluser(user.id)} className='bg-red-700 text-white px-4 py-1 rounded'>Xóa</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
         </div>
        </div>

        <AdminFooter/>
    </main>
    </div>
  )
}

export default AdminUser      