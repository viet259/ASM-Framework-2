import React from 'react'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
  return (
    <header className='bg-white w-full shadow-md flex p-4 relative z-50'>
      <>
 
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Material Dashboard</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n   body {\n            font-family: 'Roboto', sans-serif;\n        }\n  "
    }}
  />
</>

        {/* Header */}
  <div className="flex justify-between items-center mb-6">
    <Link to='/Client' className="text-2xl font-semibold">G-store</Link>
    
    <div className="flex items-center">
      <input
        className="p-2 border rounded mr-4"
        placeholder="Search"
        type="text"
      />
      <i className="fas fa-search text-gray-600 mr-4"></i>
      <i className="fas fa-bell text-gray-600 mr-4"></i>
      <i className="fas fa-user text-gray-600"></i>
    </div>
  </div>
    </header>
  )
}

export default AdminHeader