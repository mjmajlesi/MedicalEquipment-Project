"use client";
import React from 'react';
import animationData from "../../public/HospitalBed.json";
import Lottie from "react-lottie";

function LottieHeader() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <>
            <Lottie options={defaultOptions} height={130} width={130} />
        </>
    )
}

export default LottieHeader