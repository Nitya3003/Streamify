// src/pages/Home.jsx
import React from 'react'
import './Home.css'
import Sidebar from '../Components/Sidebar/Sidebar' // Add this import

const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      {/* Add other home content */}
    </div>
  )
}

export default Home