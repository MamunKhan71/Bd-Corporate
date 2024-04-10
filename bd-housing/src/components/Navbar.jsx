import { Link, NavLink, useLocation } from "react-router-dom";
import { TbArrowUpRight } from "react-icons/tb";
const Navbar = () => {
    const location = useLocation().pathname
    const navLinks =
        <div className="flex gap-12 text-lg">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? " text-primary font-bold animate-pulse" : "text-primary font-semibold shadow-none"
                }
            >Home</NavLink>
            <NavLink
                to="/properties"
                className={({ isActive }) =>
                    isActive ? " text-primary font-bold animate-pulse" : "text-primary font-semibold shadow-none"
                }
            >Properties</NavLink>
            <NavLink
                to="/a"
                className={({ isActive }) =>
                    isActive ? " text-primary font-bold animate-pulse" : "text-primary font-semibold shadow-none"
                }
            >Members</NavLink>
            <NavLink
                to="/t"
                className={({ isActive }) =>
                    isActive ? " text-primary font-bold animate-pulse" : "text-primary font-semibold shadow-none"
                }
            >Pages</NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) =>
                    isActive ? " text-primary font-bold animate-pulse" : "text-primary font-semibold shadow-none"
                }
            >Contact Us</NavLink>

        </div>
    return (
        <div className="container mx-auto mt-6 relative">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 -box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img className="w-10 h-10" src="/public/logo.png" alt="logo" />
                        <Link to="/" className="text-3xl font-bold">BDCorporate</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        location === '/login' ? <><Link
                            to="/register"
                            className="px-5 py-2.5 overflow-hidden group bg-primary relative hover:bg-gradient-to-r hover:from-black hover:to-primary text-white hover:ring-2 hover:ring-offset-2 hover:ring-primary transition-all ease-out duration-300"
                        >
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease" />
                            <div className="flex gap-1 items-center">
                                <span className="relative">Register</span>
                                <TbArrowUpRight />
                            </div>
                        </Link></> : <><Link
                            to="/login"
                            className="px-5 py-2.5 overflow-hidden group bg-primary relative hover:bg-gradient-to-r hover:from-black hover:to-primary text-white hover:ring-2 hover:ring-offset-2 hover:ring-primary transition-all ease-out duration-300"
                        >
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease" />
                            <div className="flex gap-1 items-center">
                                <span className="relative">Login</span>
                                <TbArrowUpRight />
                            </div>
                        </Link></>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;