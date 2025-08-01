"use client"

import dynamic from "next/dynamic";

export const Map = dynamic(() => import("./Map"), { ssr: false });

export const AnimateDivs = dynamic(() => import("./animation/animateDivs"), { ssr: false });