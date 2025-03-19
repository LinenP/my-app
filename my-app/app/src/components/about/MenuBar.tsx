import Link from 'next/link';

export default function MenuBar() {
  return (
    <nav className="fixed flex bottom-0 left-0 right-0 bg-white p-[16px] px-[160px] justify-between shadow-amber-900 ">
      <Link href="/" className="text-blue-500 hover:underline">Home</Link>
      <Link href="/about" className="text-blue-500 hover:underline">About</Link>
      <Link href="/contact" className="text-blue-500 hover:underline">Contact</Link>
    </nav>
  );
}