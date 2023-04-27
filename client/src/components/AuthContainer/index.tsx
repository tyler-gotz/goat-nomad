import React from 'react'

interface AuthContainerProps {
    children: React.ReactNode,
    title: string
}

const AuthContainer = ({ children, title }: AuthContainerProps) => {
  return (
    <div className='bg-primary h-screen flex flex-col justify-center items-center'>
      <div className='card w-5/12 bg-[#D0E1D4] shadow-xl'>
        <div className="card-body">
          <div className='flex flex-col justify-between w-full'>
            <h1 className="card-title sm:text-xl md:text-2xl lg:text-3xl text-black">Goat Nomad</h1>
            <h3 className='sm:text-lg md:text-xl lg:text-2xl text-black'>{title}</h3>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthContainer