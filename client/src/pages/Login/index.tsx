import React from 'react'
import { Link } from 'react-router-dom'
import AuthContainer from '../../components/AuthContainer'

const Login = () => {
  return (
    <AuthContainer
      title='Login'
    >
      <form>
        <div className='form-control w-full max-w-xl'>
          <label className='label' htmlFor='username'>
            <span className='label-text text-primary sm:text-sm md:text-md lg:text-lg'>Username</span>
          </label>
          <input 
            id='username'
            type='text'
            className='input input-ghost w-full max-w-xl text-primary focus:bg-white focus:text-primary'
          />
        </div>
        <div className='form-control w-full max-w-xl'>
          <label className='label' htmlFor='password'>
            <span className='label-text text-primary sm:text-sm md:text-md lg:text-lg'>Password</span>
          </label>
          <input 
            id='password'
            type='password'
            className='input input-ghost w-full max-w-xl text-primary focus:bg-white focus:text-primary'
            autoComplete='current-password'
          />
          <label className='label' htmlFor='password'>
            <span className='label-text-alt'></span>
            <span className='label-text-alt text-primary sm:text-xs md:text-sm lg:text-md'>Forgot Password?</span>
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
      <div className='text-center mt-2 text-primary sm:text-sm md:text-md lg:text-base'>
        Don&apos;t have an account? <Link to='/signup' className='btn btn-ghost hover:bg-secondary'>Sign Up </Link>
      </div>
    </AuthContainer>
  )
}

export default Login