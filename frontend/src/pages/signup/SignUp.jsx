import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'

const SignUp = () => {

  const [inputs,setInputs] = useState({
    fullName:'',
    userName:'',
    password:'',
    confirmPassword:'',
    gender:'',
  })

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs,gender})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  }


  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-gray-300 text-center'>
          Sign Up <span className='text-blue-500'>ChatApp</span>
        </h1>

    <form onSubmit={handleSubmit}>

      <div>
        <label className='label p-2'>
          <span className='text-base label-text font-bold'>Full Name</span>
        </label>
        <input type='text' placeholder='John Doe' className='w-full input input-bordered h-10'
        value={inputs.fullName}
        onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
        />
      </div>

      <div>
        <label className='label p-2'>
          <span className='text-base label-text font-bold'> UserName</span>
        </label>
        <input type='text' placeholder='johndoe' className='w-full input input-bordered h-10'
        value={inputs.userName}
        onChange={(e) => setInputs({...inputs, userName: e.target.value})}
        />
      </div>

      <div>
        <label className='label'>
          <span className='text-base label-text font-bold'>Password</span>
        </label>
        <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'
        value={inputs.password}
        onChange={(e) => setInputs({...inputs, password: e.target.value})}
        />
      </div>

      <div>
        <label className='label'>
          <span className='text-base label-text font-bold'>Confirm Password</span>
        </label>
        <input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10'
        value={inputs.confirmPassword}
        onChange={(e) => setInputs({...inputs,confirmPassword: e.target.value})}
        />
      </div>


      <GenderCheckbox  onCheckBoxChange= {handleCheckboxChange} selectedGender={inputs.gender}/>

      <Link to={"/login"} className='text-sm hover:underline hover:text-white mt-2 inline-block font-bold' >
        Already have an account?
      </Link>

      <div>
        <button className='btn btn-block btn-sm mt-2 border border-slate-700'>
          SignUp
        </button>
      </div>

    </form>

      </div>
    </div>
  )
}

export default SignUp