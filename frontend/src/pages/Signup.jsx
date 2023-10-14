import React from 'react'

const Signup = () => {
  return (
    <div className=" flex flex-col items-center border-3 border-solid border-gray-300 py-10 ">
      <div className="justify-items-center	">
        <img src="images/avatar.png" alt="" />
      </div>

      <div className="items-center flex flex-col 		">


        <div className="py-4 flex flex-row gap-3 items-center">
          <label for="name">
            <b>Username</b>
          </label>
          <input className="w-full inline-block border border-solid border-gray-300"
          type="text" placeholder="Enter Username" required />
        </div>


        <div className="py-4 flex flex-row gap-3 items-center">
          <label for="name">
            <b>Email</b>
          </label>
          <input className="w-full inline-block border border-solid border-gray-300"
          type="text" placeholder="Enter Username" required />
        </div>

        <div className="py-4 flex flex-row gap-3 items-center">
          <label for="name">
            <b>Contact</b>
          </label>
          <input className="w-full inline-block border border-solid border-gray-300"
           type="text" placeholder="Enter Username" required />
        </div>

        <div className="py-4 flex flex-row gap-3 items-center">
          <label for="name">
            <b>Password</b>
          </label>
          <input className="w-full inline-block border border-solid border-gray-300"
          type="text" placeholder="Enter Username" required />
        </div>

        <button  className=" bg-blue-400 text-white py-3 px-5 my-2 rounded-none cursor-pointer w-full items-center " 
        type="button" >
          SignUp
        </button>
      </div>
    </div>
  )
}

export default Signup