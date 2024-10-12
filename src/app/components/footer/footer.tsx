import Link from "next/link";

export default function Footer() {
    return (
        <>
           <footer className="w-full bg-gray-950 p-8 text-white ">
  <div className="  bg-gray-950  flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between">
     <img
            className="h-8 w-auto"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
            width={50}
            height={50}
        />
 
    <ul className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8 z-10 ">
      
      <li>
        <Link
          href="/"
          className="text-white hover:text-slate-500 focus:text-slate-500 text-sm"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="text-white hover:text-slate-500 focus:text-slate-500 text-sm"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/blog"
          className="text-white hover:text-slate-500 focus:text-slate-500 text-sm"
        >
          Blog
        </Link>
      </li>
    </ul>
  </div>
  <p className="block mb-4 text-sm text-center text-slate-500 md:mb-0 border-t border-slate-200 mt-4 pt-4">
    Copyright © 2024&nbsp; 
    <a href="https://material-tailwind.com/" target="_blank" rel="noreferrer">Material Tailwind</a>.
  </p>
  </footer>
        </>
    )
}