import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="fixed w-60 left-0 pt-10 z-10 h-screen bg-gray-800">
        <ul className="ml-5 text-white">
          <Link href="/about">
            <li className="mb-3">About</li>
          </Link>
          <Link href="/about/profile">
            <li className="mb-3">Profile</li>
          </Link>
        </ul>
      </nav>
      <div className="ml-72 mt-5">{children}</div>
    </>
  );
}
