import React, { useEffect, useState } from 'react'
import Clienchitiet from './chitiet'
import { Link, useNavigate } from 'react-router-dom'
import ClientHeader from './header'
import ClientFooter from './footer'
import { IProduct } from '../../interface/product'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { ICategory, ICategoryForm } from '../../interface/category'

type Props = {}

const ClientHome = (props: Props) => {

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
        get_Category()})
  return (
    <div><>
   <>

  {/* Main Content */}
  <main className="container mx-auto mt-8">
    {/* Hero Section */}
    <section className="bg-green-200 rounded-lg p-8 relative">
      <div className="flex items-center">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold text-green-900">
            Wir kümmern uns um Ihre schöner Garten und Haus
          </h1>
          <p className="mt-4 text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button className="mt-6 bg-white text-green-700 px-6 py-2 rounded-md border border-green-700">
            Lern mehr
          </button>
        </div>
        <div className="w-1/2 relative">
          <img
            alt="Person holding a plant in a pot"
            className="rounded-lg"
            height={400}
            src="https://storage.googleapis.com/a1aa/image/3YlyQ7m5cDffvzxleYMVxU9C51PKkQ6Mo8yxnLwtSuY.jpg"
            width={400}
          />
        </div>
      </div>
    </section>


    
    {/* Best Sellers Section */}
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Best Sellers</h2>
      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((products,index)=>(
        <div className="bg-white rounded-lg shadow-lg p-4" key={products.id}>
       
                                  <p><img className="w-full h-48 object-cover rounded-t-lg"height={200}width={200}  src={products.image}/></p>
                                  <button className="text-lg font-bold mt-4"><Link to={`/chitiet/${products.id}`}>{products.name}</Link></button>
                                  <p className='text-green-600'>{products.price}Đ</p>

        </div>
      ))}
       
         
      </div>
    </section>
    <br />
    <div className="container mx-auto p-4">
      {/* Top Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="relative">
          <img
            alt="Garten Spaten"
            className="w-full h-full object-cover"
            height={200}
            src="img/12.png"
            width={200}
          />
          <div className="absolute bottom-2 left-2 text-white text-lg font-bold">
            <a href="">garten spaten</a>
          </div>
        </div>
        <div className="relative">
          <img
            alt="Sende"
            className="w-full h-full object-cover"
            height={400}
            src="img/13.png"
            width={600}
          />
          <div className="absolute bottom-2 left-2 text-white text-lg font-bold">
            sende
          </div>
        </div>
        <div className="relative">
          <img
            alt="Pflanzer"
            className="w-full h-full object-cover"
            height={400}
            src="img/11.png"
            width={600}
          />
          <div className="absolute bottom-2 left-2 text-white text-lg font-bold">
            pflanzer
          </div>
        </div>
        <div className="relative">
          <img
            alt="Schlammkuchen"
            className="w-full h-full object-cover"
            height={200}
            src="img/5.png"
            width={200}
          />
          <div className="absolute bottom-2 left-2 text-white text-lg font-bold">
            schlammkuchen
          </div>
        </div>
      </div>
      {/* Categories Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categorys.map((categorys)=>(
        <div className="bg-white rounded-lg shadow-lg p-4" key={categorys.id}>
       
                                  <p><img className="w-full h-48 object-cover rounded-t-lg"height={200}width={200}  src={categorys.image}/></p>
                                  <button className="text-lg font-bold mt-4"><Link to={`/chitietDm/${categorys.id}`}>{categorys.nameCategory}</Link></button>
                                  

        </div>
      ))}
       
         
      </div>
      </div>
      {/* Newsletter Section */}
      <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Etwas abonnieren*</h2>
        <p className="mb-4">Unser Newsletter</p>
        <p className="mb-4">
          Get weekly updates about our latest products and special offers.
        </p>
        <form className="flex flex-col md:flex-row items-center">
          <input
            className="p-2 border border-gray-300 rounded-md w-full md:w-auto md:flex-1 mb-4 md:mb-0 md:mr-4"
            placeholder="your.email@example.com"
            type="email"
          />
          <button
            className="bg-green-600 text-white p-2 rounded-md"
            type="submit"
          >
            Abonnieren
          </button>
        </form>
      </div>
    </div>
  </main>
</>

  </>
  </div>
  
  )
}

export default ClientHome