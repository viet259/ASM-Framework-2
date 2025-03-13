import axios from 'axios'
import { useRoutes } from 'react-router-dom'
import OrderAdd from './components/orderadd'
import OrderList from './components/orderlist'
import AddProduct from './components/addproduct'
import Home from './components/home'
import EditProduct from './components/editproduct'
import Register from './components/register'
import Login from './components/login'
import AdminLayout from './layout/admin'
import Dashboard from './layout/admin/dashboard'
import ClientHome from './layout/client/home'
import Clienchitiet from './layout/client/chitiet'
import ClientDanhSach from './layout/client/danhsach'
import { Children } from 'react'
import ClientLayout from './layout/client'
import AdminSanPham from './layout/admin/sanpham'
import AdminDanhmuc from './layout/admin/danhmuc'
import AddCategory from './components/addcategory'
import EditCategory from './components/editcategory'
import DangKy from './layout/client/dangki'
import DangNhap from './layout/client/dangnhap'
import Search from './components/search'
import ClienchitietDm from './layout/client/chitietdanhmuc'
function App() {
    // Khai báo routes
    const routes = useRoutes([
      
      {path:'/order-add',element:<OrderAdd/>},
      {path:'/order-list',element:<OrderList/>},      
      {path:'/register',element:<Register/>},
      {path:'/login',element:<Login/>},
      {path:'/',element:<Home/>},
      {path:'/search',element:<Search/>},
      {path:'/chitietDm/:id',element:<ClienchitietDm/>},
      {path:'/product-edit/:id',element:<EditProduct/>},
      {path:'/dashboard',element:<AdminLayout/>,children:[
        {path:'/dashboard',element:<Dashboard/>},
        // {path:'/product-edit/:id',element:<EditProduct/>}
      ]},


      {path:'/category-edit/:id',element:<EditCategory/>},
      {path:'/category-add',element:<AddCategory onAdd={function (data: FormData): void {
        throw new Error('Function not implemented.')
      } }/>},
      {path:'/adminSP',element:<AdminSanPham/>},
      {path:'product-add',element:<AddProduct onAdd={function (data: FormData): void {
        throw new Error('Function not implemented.')
      } }/>},
      {path:'/adminDM',element:<AdminDanhmuc/>},
      


      {path:'/Client',element:<ClientLayout/>},
      {path:'/home',element:<ClientHome/>}, 
        {path:'/Danhsach',element:<ClientDanhSach/>},
        {path:'/chitiet/:id',element:<Clienchitiet/>},

        {path:'/dangky',element:<DangKy/>},
        {path:'/dangnhap',element:<DangNhap/>},
     
    ])
    return routes
}

export default App
