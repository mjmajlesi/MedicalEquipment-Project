import React from 'react'
import ThreeScene from './animation/Threesence'
import Button from './buttuns'
import Container from './Container'
import AnimatedDiv from './animation/animateHeader'
import AnimateType from './animation/animateType'
import Link from 'next/link'
import { GoArrowLeft } from "react-icons/go";
import styled from 'styled-components';
import StyledBackground from './animation/styledBackground'
import LottieHeader from './animation/LottieHeader'

function Header() {
    return (
        <Container>
            <div className='header flex gap-12 items-start xl:items-center h-[calc(100vh-250px)] xl:h-[calc(100vh-100px)] '>
                <div className='flex flex-col items-center gap-8 w-full px-4 py-2 xl:w-1/3 xl:p-2 xl:items-start'>
                    <AnimatedDiv
                        duration={2}
                        delay={0.2}
                        y={10}
                        className='xl:hidden mb-8'
                    >
                        <LottieHeader />
                    </AnimatedDiv>
                    <h1 className='font-bold text-[36px] md:text-[40px] xl:text-[32px]'> <AnimateType text='خرید تجهیزات پزشکی و ارائه سرویس و خدمات نگهداری' /> </h1>
                    <AnimatedDiv
                        duration={1.5}
                        delay={0.7}
                        x={-40}
                    >
                        <h2 className='font-semibold text-[19px] text-gray-300 xl:text-[18px]'>
                            خرید تجهیزات پزشکی و آزمایشگاهی با بهترین قیمت و ارزان ترین قیمت
                            بهترین کیفیت، نو و دست دوم با قیمت های مناسب
                            برای معرفی بیشتر محصولات می توانید به صفحه محصولات مراجعه کنید.
                        </h2>
                    </AnimatedDiv>
                    <AnimatedDiv y={100} duration={2} delay={1.1} className='flex items-center gap-4 p-2 xl:gap-8'>
                        <Button variant='normal' className='sm:px-4 sm:py-3 rounded-md p-3'>
                            <Link href={'/products'}>مشاهده محصولات</Link>
                        </Button>
                        <Button variant='normal' className='sm:px-4 sm:py-3 rounded-md p-3'>
                            <Link href={'/products'}>ارتباط با ما</Link>
                        </Button>
                        <GoArrowLeft size={45} className='text-gray-300' />
                    </AnimatedDiv>
                </div>
                <div className=' w-2/3 pl-6 not-xl:hidden'>
                    <ThreeScene />
                </div>
                <StyledBackground />
            </div>
        </Container >
    )
}

export default Header