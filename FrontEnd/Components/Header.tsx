import React from 'react'
import ThreeScene from './Threesence'
import Button from './buttuns'
import Container from './Container'

function Header() {
    return (
        <Container>
            <div className='header flex gap-12 items-center'>
                <div className='flex flex-col gap-4 w-1/3'>
                    <h1 className='font-bold text-[32px]'>به سایت من خوش آمدید</h1>
                    <h2 className='font-semibold text-[18px]'>
                        خرید تجهیزات پزشکی و آزمایشگاهی با بهترین قیمت و ارزان ترین قیمت
                        بهترین کیفیت، نو و دست دوم با قیمت های مناسب
                        برای معرفی بیشتر محصولات می توانید به صفحه محصولات مراجعه کنید.
                    </h2>
                    <Button variant='normal' className='px-4 py-2 rounded-md'>
                        مشاهده محصولات
                    </Button>
                </div>
                <div className=' w-2/3 pl-6'>
                    <ThreeScene />
                </div>
            </div>
        </Container>
    )
}

export default Header