import React from 'react'

interface Ichildren {
    children: React.ReactNode
}

function Container({children} : Ichildren) {
  return (
    <div className='container mx-auto xl:px-12 lg:px-10 md:px-8 px-2'>
        {children}
    </div>
  )
}

export default Container