import React from 'react'

function Layout() {
  return (
    <div >
      <nav className='flex justify-between p-5 bg-black	 '>
        <h2 className='font-bold text-3xl text-white	'>CODECHAMP</h2>

        <ul className='flex flex-row gap-10 text-white text-xl cursor-pointer 	'>
            <li className='hover:bg-gray-800'>
                Login
            </li>
            <li className='hover:bg-gray-800'>
                SignUp
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Layout
