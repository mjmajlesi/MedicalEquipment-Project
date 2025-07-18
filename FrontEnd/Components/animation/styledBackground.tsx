"use client";
import React from 'react';
import styled from 'styled-components';

function StyledBackground() {
    return (
        <>
            <DivtopBlur />
            <DivbotBlur />
        </>
    )
}
export const DivtopBlur = styled.div`
    position: absolute;
    width: 25vw;
    height: 25vw;
    min-width: 350px;
    min-width: 350px;
    top: -128px;
    left: 10vw;
    border-radius: 764px;
    background: rgba(25 , 55 , 109 , 0.7);
    filter: blur(100px);
    z-index: -1;
`
export const DivbotBlur = styled.div`
    position: absolute;
    width: 20vw;
    height: 20vw;
    min-width: 350px;
    min-width: 250px;
    bottom: 0px;
    right: 0vw;
    border-radius: 764px;
    background: rgba(25 , 55 , 109 , 0.7);
    filter: blur(100px);
    z-index: -1;
`

export default StyledBackground