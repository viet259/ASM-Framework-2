import React from 'react'
import ClientHome from './client/home'
import { Outlet } from 'react-router-dom'
import ClientFooter from './client/footer'
import ClientHeader from './client/header'

const ClientLayout = () => {
  return (
  <main className='bg-[#f6f9ff] ' >
    <ClientHeader/>
    <div className='flex'>
    <ClientHome/>

    </div>
    <ClientFooter/>
</main>
  )
}

export default ClientLayout