import Image from "next/image";

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2 overflow-hidden">
      <Image
        src="/icons/One-Note-logos_black.png"
        height="300"
        width="300"
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/icons/One-Note-logos_white.png"
        height="300"
        width="300"
        alt="Logo"
        className="hidden dark:block"
      />
    </div>
  )
}