import React from 'react'
import AuthContainer from '../../components/AuthContainer'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import YupPassword from 'yup-password'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

YupPassword(yup)

const schema = yup.object({
  firstname: yup.string().required('This field is required.'),
  lastname: yup.string().required('This field is required.'),
  email: yup.string().email('Please enter valid email.').required('This field is required.'),
  username: yup.string().required('This field is required.'),
  password: yup.string().required('This field is required.')
    .min(
      8,
      'Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special'
    )
    .minLowercase(1, 'Password must contain at least 1 lower case letter')
    .minUppercase(1, 'Password must contain at least 1 upper case letter')
    .minNumbers(1, 'Password must contain at least 1 number')
    .minSymbols(1, 'Password must contain at least 1 special character')
})

type FormData = yup.InferType<typeof schema>

const SignUp = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <AuthContainer
      title='Sign Up'
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-2 gap-4'>
          <div className='form-control w-full max-w-xl'>
            <label className='label' htmlFor='firstname'>
              <span className='label-text text-primary sm:text-sm md:text-md lg:text-lg'>First Name</span>
            </label>
            <input 
              id='firstname'
              {...register('firstname')}
              type='text'
              className={`input ${errors.firstname ? 'input-error bg-white' : 'input-ghost'} w-full max-w-xl text-primary focus:bg-white focus:text-primary`}
            />
            {errors.firstname && <p className='mt-1 text-error text-sm'>{errors.firstname.message}</p>}
          </div>
          <div className='form-control w-full max-w-xl'>
            <label className='label' htmlFor='lastname'>
              <span className='label-text text-primary sm:text-sm md:text-md lg:text-lg'>Last Name</span>
            </label>
            <input
              id='lastname'
              {...register('lastname')}
              type='text'
              className={`input ${errors.lastname ? 'input-error bg-white' : 'input-ghost'} w-full max-w-xl text-primary focus:bg-white focus:text-primary`}
            />
            {errors.lastname && <p className='mt-1 text-error text-sm'>{errors.lastname.message}</p>}
          </div>
        </div>
        <div className='form-control w-full max-w-xl'>
          <label className='label' htmlFor='email'>
            <span className='label-text text-primary sm:text-sm md:text-md lg:text-lg'>Email</span>
          </label>
          <input 
            id='email'
            type='text'
            {...register('email')}
            className={`input ${errors.lastname ? 'input-error bg-white' : 'input-ghost'} w-full max-w-xl text-primary focus:bg-white focus:text-primary`}
          />
          {errors.email && <p className='mt-1 text-error text-sm'>{errors.email.message}</p>}
        </div>
        <div className='form-control w-full max-w-xl'>
          <label className='label' htmlFor='username'>
            <span className='label-text text-primary sm:text-sm md:text-md lg:text-lg'>Username</span>
          </label>
          <input 
            id='username'
            type='text'
            {...register('username')}
            className={`input ${errors.username ? 'input-error bg-white' : 'input-ghost'} w-full max-w-xl text-primary focus:bg-white focus:text-primary`}
          />
          {errors.username && <p className='mt-1 text-error text-sm'>{errors.username.message}</p>}
        </div>
        <div className='form-control w-full max-w-xl'>
          <label className='label' htmlFor='password'>
            <span className='label-text text-primary sm:text-sm md:text-md lg:text-lg'>Password</span>
          </label>
          <input 
            id='password'
            {...register('password')}
            type='password'
            className={`input ${errors.password ? 'input-error bg-white' : 'input-ghost'} w-full max-w-xl text-primary focus:bg-white focus:text-primary`}
          />
          {errors.password && <p className='mt-1 text-error text-sm'>{errors.password.message}</p>}
        </div>
        <div className='divider before:bg-primary after:bg-primary'></div>
        <button
          type='submit'
          className='btn btn-outline btn-primary w-full'
        >
          Register
        </button>
      </form>
      <div className='text-center mt-2 text-primary sm:text-sm md:text-md lg:text-base'>
        Already have an account? <Link to='/login' className='btn btn-ghost hover:bg-secondary'>Login</Link>
      </div>
    </AuthContainer>
  )
}

export default SignUp