"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Navbar = () => {
  
  const pathname = usePathname()
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
               <li><Link className={` ${pathname === '/' ? 'text-red-700' : ''}`} href='/'
              >Home </Link></li>
              <li><Link className={` ${pathname === '/about' ? 'text-red-700 ' : ''}`}  href='/about'
              >About </Link></li>
              <li><Link className={` ${pathname === '/contact' ? 'text-red-700' : ''}`}  href='/contact'
              >Contact </Link></li>
              <li><Link className={` ${pathname === '/blog' ? 'text-red-700' : ''}`}  href='/blog'
              >Blog </Link></li>
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Blog</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       <li><Link className={` ${pathname === '/' ? 'text-red-700' : ''}`} href='/'
              >Home </Link></li>
              <li><Link className={` ${pathname === '/about' ? 'text-red-700 ' : ''}`}  href='/about'
              >About </Link></li>
              <li><Link className={` ${pathname === '/contact' ? 'text-red-700' : ''}`}  href='/contact'
              >Contact </Link></li>
              <li><Link className={` ${pathname === '/blog' ? 'text-red-700' : ''}`}  href='/blog'
              >Blog </Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Login</a>
  </div>
</div>
    </div>
  );
};

export default Navbar;