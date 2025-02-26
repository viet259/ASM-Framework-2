import React, { useEffect, useState } from 'react'
import AdminFooter from './footer'
import AdminHeader from './header'
import AdminSidebar from './sidebar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ICategory } from '../../interface/category'

type Props = {}

const AdminDanhmuc = (props: Props) => {
    const [categorys,SetCategoty]= useState<ICategory[]>([])
    useEffect(()=>{
        const get_Category = async()=>{
            try {
                const {data} = await axios.get(`http://localhost:3000/category`)
                SetCategoty(data)
            } catch (error) {
                console.log(error);                
            }
        }
        get_Category()
    },[])
    const delCategory = async (id:number|string)=>{
        try {
            if (confirm("Bạn chắc chứ?")){
                await axios.delete(`http://localhost:3000/category/${id}`)
                alert('Xóa thành công')
                const newcategorys = categorys.filter(category=>category.id!=id)
                SetCategoty(newcategorys)
            }
        } catch (error) {
            console.log(error);            
        }}
  return (
    <div>
<main className='bg-[#f6f9ff]'>
        <AdminHeader/>
        <div className='flex'>
        <AdminSidebar/>
        <div className='content w-4/5'>
        <h1 className='font-bold text-[24px] text-center mt-4'>Danh sách Danh mục</h1>
        <Link className='bg-green-700 text-white px-4 py-1 rounded pd-1' to={`/category-add`}>Thêm</Link>
        <table className='border w-full [&_td]:border [&_th]:border mt-6'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Ảnh sản phẩm</th>
                    <th>Tên sản phẩm</th>
                  
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {categorys.map((category,index)=>(
                    <tr key={category.id}>
                        <td>{index+1}</td>
                        <td><img width={90} src={category.image}/></td>
                        <td>{category.nameCategory}</td>
                        
                        <td>
                            <Link className='bg-green-700 text-white px-4 py-1 rounded' to={`/category-edit/${category.id}`}>Sửa</Link>
                            <button onClick={()=>delCategory(category.id)} className='bg-red-700 text-white px-4 py-1 rounded'>Xóa</button>
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

export default AdminDanhmuc