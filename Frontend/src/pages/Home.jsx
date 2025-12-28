import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
  const [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  
  const dayName = days[dateTime.getDay()]
  const date = dateTime.getDate()
  const month = months[dateTime.getMonth()]
  const year = dateTime.getFullYear()
  const time = dateTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })

  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1736464050417-d263102def9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8)] h-screen pt-8 w-full flex justify-between flex-col bg-red-400 '>
        <div className='flex items-start justify-between mx-4 md:mx-9'>
          <img className='w-16 animate-fade-down' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />
          <div className='animate-fade-down text-right text-white bg-black bg-opacity-50 px-3 py-2 rounded-lg text-sm md:text-base'>
            <div className='font-bold text-lg'>{time}</div>
            <div className='text-xs md:text-sm'>{dayName}</div>
            <div className='text-xs md:text-sm'>{date} {month} {year}</div>
          </div>
        </div>
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-3xl font-bold animate-slide-up'>Get Started with Uber</h2>
            <Link to='/user/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5 animate-scale hover:bg-gray-800 transition-colors duration-300'>Continue</Link>
        </div>
        </div>
    </div>
  )
}

export default Home