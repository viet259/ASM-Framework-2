import React, { useEffect, useState } from 'react'
import { IProduct } from '../interface/product'
import axios from 'axios'
import { Link } from 'react-router-dom'

type Props = {}

const Home = (props: Props) => {
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
    const delProduct = async (id:number|string)=>{
        try {
            if (confirm("Bạn chắc chứ?")){
                await axios.delete(`http://localhost:3000/products/${id}`)
                alert('Xóa thành công')
                const newproducts = products.filter(product=>product.id!=id)
                SetProduct(newproducts)
            }
        } catch (error) {
            console.log(error);            
        }
    }
  return (
    <div className='max-w-2xl mx-auto'>
        <h1 className='font-bold text-[24px] text-center mt-4'>Danh sách sản phẩm</h1>
        <table className='border w-full [&_td]:border [&_th]:border mt-6'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Ảnh sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá tiền</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product,index)=>(
                    <tr key={product.id}>
                        <td>{index+1}</td>
                        <td><img width={90} src={product.image}/></td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>
                            <Link className='bg-green-700 text-white px-4 py-1 rounded' to={`/product-edit/${product.id}`}>Sửa</Link>
                            <button onClick={()=>delProduct(product.id)} className='bg-red-700 text-white px-4 py-1 rounded'>Xóa</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Home