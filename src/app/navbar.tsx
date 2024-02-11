import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className=" flex  py-7 px-14">
        <img src="/logo.svg" alt="logo" />
        <ul className="flex mx-auto items-center gap-16">
          <Link href="/">
            <li className="text-black text-base hover:underline hover:underline-offset-8">
              Home
            </li>
          </Link>
          <Link href="/about">
            <li className="text-black text-base hover:underline hover:underline-offset-8">
              About
            </li>
          </Link>
          <Link href="/about/profile">
            <li className="text-black text-base hover:underline hover:underline-offset-8">
              Profile
            </li>
          </Link>
        </ul>
        <ul className="flex items-center gap-11">
          <Link href={""}>
            <li>
              <img className="w-7 h-7" src="/profile.svg" alt="logo" />
            </li>
          </Link>
          <Link href={""}>
            <li>
              <img className="w-7 h-7" src="/search.svg" alt="logo" />
            </li>
          </Link>
          <Link href={""}>
            <li>
              <img className="w-7 h-7" src="/love.svg" alt="logo" />
            </li>
          </Link>
          <Link href={""}>
            <li>
              <img className="w-7 h-7" src="/cart.svg" alt="logo" />
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
