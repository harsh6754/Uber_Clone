import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-[url(https://t3.ftcdn.net/jpg/02/70/83/94/240_F_270839452_ieZyJ6y0k6RoIhUhdhEu8gsnhFeqAlLj.jpg)] h-screen pt-4 flex justify-between flex-col w-full bg-red-400'>
        <img className='w-18 ml-5' src="https://media.ffycdn.net/us/postmates/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8zMFwvYXNzZXRzXC85YlwvNTY1MVwvNDIyYjg2M2Q0MzM4N2ViY2ZmNTY3YzA3Mjg2YTUzODctMTYyMDcyMDE1OS5wbmcifQ:postmates:ir-b-5p1SGaVUd55NTLXM6NSXc6vdTy9tnblu39wr_8?width={width}" />
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-2xl font-bold'>Get Started  with Uber</h2>
                <Link to='/user-login'className='flex item-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home