import Image from "next/image";

export const NavLogo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2 overflow-hidden">
      <Image
        src="/icons/icon2.png"
        height="200"
        width="200"
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/icons/icon4.png"
        height="200"
        width="200"
        alt="Logo"
        className="hidden dark:block"
      />
    </div>
  )
}