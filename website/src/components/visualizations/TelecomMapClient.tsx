'use client'

import dynamic from "next/dynamic"

const TelecomMap = dynamic(() => import("./TelecomMap"), { ssr: false })

export default TelecomMap
