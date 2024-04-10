import { Link, NavLink, useLocation } from "react-router-dom";
import { TbArrowUpRight } from "react-icons/tb";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
    const location = useLocation().pathname
    const { user, logout } = useContext(AuthContext)
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
                to="/about"
                className={({ isActive }) =>
                    isActive ? " text-primary font-bold animate-pulse" : "text-primary font-semibold shadow-none"
                }
            >About</NavLink>
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
                        !user ? <>
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
                        </> : <>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="avatar">
                                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-primary text-white text-lg w-52">
                                    <li><a>Profile</a></li>
                                    <li><button className="" onClick={() => document.getElementById('my_modal_1').showModal()}>Logout</button></li>
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box w-auto rounded-none">
                                            <h3 className="font-bold text-lg text-primary">Are you sure want to logout?</h3>
                                            <div className="modal-action justify-center">
                                                <form method="dialog">
                                                    <div className="flex gap-4">
                                                        <button className="btn rounded-none bg-primary text-white" onClick={logout}>Logout</button>
                                                        <button className="btn rounded-none">Cancel</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </ul>
                            </div>
                        </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;