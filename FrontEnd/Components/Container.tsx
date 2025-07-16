import React from 'react'

interface Ichildren {
    children: React.ReactNode
}

function Container({children} : Ichildren) {
  return (
    <div className='container mx-auto md:px-12 px-4'>
        {children}
    </div>
  )
}

export default Container