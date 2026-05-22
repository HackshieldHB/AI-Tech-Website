import Image from "next/image"

export interface LogoProps {
  size?: "sm" | "md" | "lg"
  showName?: boolean
}

const sizeMap = {
  sm: { height: 36, width: 29, primarySize: "text-sm", secondarySize: "text-[10px]" },
  md: { height: 48, width: 38, primarySize: "text-base", secondarySize: "text-xs" },
  lg: { height: 64, width: 51, primarySize: "text-xl", secondarySize: "text-sm" },
}

export default function Logo({ size = "md", showName = true }: LogoProps) {
  const dimensions = sizeMap[size]

  return (
    <div className="flex items-center gap-3">
      <Image
        src="/logo/Logo.png"
        alt="PT. Integra Aplikasi Artifisial Logo"
        width={dimensions.width}
        height={dimensions.height}
        className="flex-shrink-0 object-contain"
        priority
      />

      {showName && (
        <div className="flex flex-col leading-tight">
          <span className={`${dimensions.primarySize} font-bold text-blue-600 tracking-tight`}>PT. Integra</span>
          <span className={`${dimensions.secondarySize} font-semibold text-gray-500 tracking-wide`}>Aplikasi Artifisial</span>
        </div>
      )}
    </div>
  )
}
