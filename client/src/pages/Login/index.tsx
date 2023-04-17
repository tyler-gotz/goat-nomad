import React from 'react'

const Login = () => {
  return (
    <div className='bg-primary h-screen flex justify-center items-center'>
      <div className='card w-5/12 bg-[#D0E1D4] shadow-xl'>
        <div className="card-body">
          <h1 className="card-title text-4xl text-black">Goat Nomad</h1>
          <h2 className='text-3xl text-black'>Login</h2>
          <form>
            <div className='form-control w-full max-w-xl'>
              <label className='label' htmlFor='username'>
                <span className='label-text text-black text-lg'>Username</span>
              </label>
              <input 
                id='username'
                type='text'
                className='input input-ghost w-full max-w-xl text-primary focus:bg-white focus:text-primary'
              />
            </div>
            <div className='form-control w-full max-w-xl'>
              <label className='label' htmlFor='password'>
                <span className='label-text text-black text-lg'>Password</span>
              </label>
              <input 
                id='password'
                type='password'
                className='input input-ghost w-full max-w-xl text-primary focus:bg-white focus:text-primary'
                autoComplete='current-password'
              />
              <label className='label' htmlFor='password'>
                <span className='label-text-alt'></span>
                <span className='label-text-alt text-primary text-md'>Forgot Password?</span>
              </label>
            </div>
            <div className='divider before:bg-primary after:bg-primary'></div>
            <button
              type='submit'
              className='btn btn-outline btn-primary w-full'
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login