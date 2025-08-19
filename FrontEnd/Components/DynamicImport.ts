"use client"

import dynamic from "next/dynamic";

export const Map = dynamic(() => import("./Contact/Map"), { ssr: false });