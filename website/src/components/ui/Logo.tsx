import Image from "next/image"

export interface LogoProps {
  size?: "sm" | "md" | "lg"
  showName?: boolean
}

const sizeMap = {
  sm: { size: 36, primarySize: "text-sm",  secondarySize: "text-[10px]" },
  md: { size: 44, primarySize: "text-base", secondarySize: "text-xs"    },
  lg: { size: 60, primarySize: "text-xl",  secondarySize: "text-sm"     },
}

export default function Logo({ size = "md", showName = true }: LogoProps) {
  const { size: px, primarySize, secondarySize } = sizeMap[size]

  return (
    <div className="flex items-center gap-3">
      <Image
        src="/logo/Logo.svg"
        alt="PT. Integra Aplikasi Artifisial Logo"
        width={px}
        height={px}
        className="flex-shrink-0 object-contain"
        priority
      />

      {showName && (
        <div className="flex flex-col leading-tight">
          <span className={`${primarySize} font-bold text-blue-600 tracking-tight`}>PT. Integra</span>
          <span className={`${secondarySize} font-semibold text-gray-500 tracking-wide`}>Aplikasi Artifisial</span>
        </div>
      )}
    </div>
  )
}
