import React from 'react'

interface Ichildren {
    children: React.ReactNode
}

function Container({children} : Ichildren) {
  return (
    <div className='mx-auto xl:px-[72px] lg:px-12 md:px-8 sm:px-4 px-2'>
        {children}
    </div>
  )
}

export default Container