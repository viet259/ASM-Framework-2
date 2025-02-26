import React from 'react'
import Danhmuc from './danhmuc'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <div className='w-1/5 h-screen bg-white'>
      <>
  {/* Sidebar */}
  <div className="w-64 bg-white h-screen shadow-md">
    <div className="p-6">
      <h1 className="text-lg font-bold">Nguyễn Hoàng Việt</h1>
    </div>
    <nav className="mt-6">
    <i className="fas fa-tachometer-alt mr-3 mr-3 flex items-center p-4 text-gray-700 hover:bg-gray-200">   <Link to={'/dashboard'}>Dashboard</Link></i>
       
    <i className="fas fa-table mr-3 flex items-center p-4 text-gray-700 hover:bg-gray-200">   <Link to={'/adminDM'}>Danh mục</Link></i>
       
      
      
   
      <i className="fas fa-table mr-3 flex items-center p-4 text-gray-700 hover:bg-gray-200">   <Link to={'/adminSP'}>Sản phẩm</Link></i>
       
      
     
    </nav>
  </div>
</>

    </div>
  )
}

export default AdminSidebar