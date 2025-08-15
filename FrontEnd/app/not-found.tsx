import Button from '@/Components/buttuns'
import Link from 'next/link'
import React from 'react'

function notfound() {
  return (
    <div className='w-full flex flex-col gap-4 items-center justify-center h-screen'>
      <h1 className='text-3xl font-semibold'>اوه انگار این صفحه وجود ندارد !</h1>
      <Button variant='dark' className='px-4 py-2 rounded-xl'>
        <Link href={"/"} className='text-xl'>خانه</Link>
      </Button>
    </div>
  )
}

export default notfound