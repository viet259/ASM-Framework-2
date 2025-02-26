import React from 'react'

const Dashboard = () => {
  return (
    <div>
              <div className="flex-1 p-6">

  {/* Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
    <div className="bg-white p-4 rounded shadow">
      <div className="flex items-center">
        <div className="bg-orange-500 p-3 rounded mr-4">
          <i className="fas fa-file-alt text-white"></i>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Used Space</h3>
          <p className="text-gray-600">49/50GB</p>
        </div>
      </div>
      <p className="text-red-500 mt-4">Get More Space...</p>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <div className="flex items-center">
        <div className="bg-green-500 p-3 rounded mr-4">
          <i className="fas fa-store text-white"></i>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Revenue</h3>
          <p className="text-gray-600">$34,245</p>
        </div>
      </div>
      <p className="text-gray-600 mt-4">Last 24 Hours</p>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <div className="flex items-center">
        <div className="bg-red-500 p-3 rounded mr-4">
          <i className="fas fa-exclamation-triangle text-white"></i>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Fixed Issues</h3>
          <p className="text-gray-600">75</p>
        </div>
      </div>
      <p className="text-gray-600 mt-4">Tracked from Github</p>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <div className="flex items-center">
        <div className="bg-blue-500 p-3 rounded mr-4">
          <i className="fab fa-twitter text-white"></i>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Followers</h3>
          <p className="text-gray-600">+245</p>
        </div>
      </div>
      <p className="text-gray-600 mt-4">Just Updated</p>
    </div>
  </div>
  {/* Graphs */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6  ">
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-4">Daily Sales</h3>
      <img
      
        alt="Graph showing daily sales"
        height={150}
        src="https://storage.googleapis.com/a1aa/image/EUCokOuaZycETP15swMit6sgJRQPw-_gNl8LAR9Erns.jpg"
        width={300}
      />
      <p className="text-green-500 mt-4">55% increase in today sales.</p>
      <p className="text-gray-600">updated 4 minutes ago</p>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-4">Email Subscriptions</h3>
      <img
        alt="Graph showing email subscriptions"
        height={150}
        src="https://storage.googleapis.com/a1aa/image/TsUDS4rkfO7n7Uq1E9RcCJJZUfhgxVc7JyePHJMoOCk.jpg"
        width={300}
      />
      <p className="text-gray-600 mt-4">Last Campaign Performance</p>
      <p className="text-gray-600">campaign sent 2 days ago</p>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-4">Completed Tasks</h3>
      <img
        alt="Graph showing completed tasks"
        height={150}
        src="https://storage.googleapis.com/a1aa/image/SzQRV609cuwqRiBugRzUhzMdGMT_AhOFu02BqTtRjCE.jpg"
        width={300}
      />
      <p className="text-gray-600 mt-4">Last Campaign Performance</p>
      <p className="text-gray-600">campaign sent 2 days ago</p>
    </div>
  </div>
  {/* Tasks and Employee Stats */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Tasks</h3>
        <div className="flex space-x-2">
          <button className="bg-purple-600 text-white px-4 py-2 rounded">
            Bugs
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
            Website
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
            Server
          </button>
        </div>
      </div>
      <ul>
        <li className="flex items-center mb-2">
          <input className="mr-2" type="checkbox" />
          <span>
            Sign contract for "What are conference organizers afraid of?"
          </span>
        </li>
        <li className="flex items-center mb-2">
          <input className="mr-2" type="checkbox" />
          <span>
            Lines From Great Russian Literature? Or E-mails From My Boss?
          </span>
        </li>
        <li className="flex items-center mb-2">
          <input className="mr-2" type="checkbox" />
          <span>
            Flooded: One year later, assessing what was lost and what was found
            when a ravaging rain swept through metro Detroit
          </span>
        </li>
        <li className="flex items-center mb-2">
          <input className="mr-2" type="checkbox" />
          <span>Create 4 Invisible User Experiences you Never Knew About</span>
        </li>
      </ul>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-4">Employees Stats</h3>
      <p className="text-gray-600 mb-4">
        New employees on 15th September, 2016
      </p>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="pb-2">ID</th>
            <th className="pb-2">Name</th>
            <th className="pb-2">Salary</th>
            <th className="pb-2">Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2">1</td>
            <td className="py-2">Dakota Rice</td>
            <td className="py-2">$36,738</td>
            <td className="py-2">Niger</td>
          </tr>
          <tr>
            <td className="py-2">2</td>
            <td className="py-2">Minerva Hooper</td>
            <td className="py-2">$23,789</td>
            <td className="py-2">Curaçao</td>
          </tr>
          <tr>
            <td className="py-2">3</td>
            <td className="py-2">Sage Rodriguez</td>
            <td className="py-2">$56,142</td>
            <td className="py-2">Netherlands</td>
          </tr>
          <tr>
            <td className="py-2">4</td>
            <td className="py-2">Philip Chaney</td>
            <td className="py-2">$38,735</td>
            <td className="py-2">Korea, South</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>


    </div>
    
  )
}

export default Dashboard