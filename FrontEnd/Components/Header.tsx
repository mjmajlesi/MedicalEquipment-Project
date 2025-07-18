import React from 'react'
import ThreeScene from './Threesence'
import Button from './buttuns'
import Container from './Container'
import AnimatedDiv from './animation/animateDiv'
import AnimateType from './animation/animateType'
import Link from 'next/link'
import { GoArrowLeft } from "react-icons/go";
import styled from 'styled-components';
import StyledBackground from './animation/styledBackground'
import TextReveal from './animation/TextReveal'

function Header() {

    return (
        <Container>
            <div className='header flex gap-12 items-center'>
                <div className='flex flex-col gap-8 w-1/3'>
                    <h1 className='font-bold text-[32px]'> <AnimateType text='خرید تجهیزات پزشکی و ارائه سرویس و خدمات نگهداری' /> </h1>
                    <TextReveal>
                        <h2 className='font-semibold text-[18px] text-gray-300'>
                            خرید تجهیزات پزشکی و آزمایشگاهی با بهترین قیمت و ارزان ترین قیمت
                            بهترین کیفیت، نو و دست دوم با قیمت های مناسب
                            برای معرفی بیشتر محصولات می توانید به صفحه محصولات مراجعه کنید.
                        </h2>
                    </TextReveal>
                    <AnimatedDiv delay={1.1} className='flex items-center gap-8 p-2'>
                        <Button variant='normal' className='px-4 py-2 rounded-md'>
                            <Link href={'/products'}>مشاهده محصولات</Link>
                        </Button>
                        <Button variant='normal' className='px-4 py-2 rounded-md'>
                            <Link href={'/products'}>ارتباط با ما</Link>
                        </Button>
                        <GoArrowLeft size={45} className='text-gray-300' />
                    </AnimatedDiv>
                </div>
                <div className=' w-2/3 pl-6'>
                    <ThreeScene />
                </div>
                <StyledBackground />
            </div>
        </Container >
    )
}

export default Header