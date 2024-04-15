import { TbArrowUpRight } from "react-icons/tb";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";


const Profile = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { logout, user, updateUserProfile } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
    } = useForm()
    const profileUpdate = (data) => {
        updateUserProfile(data.name, data.photoUrl)
            .then(() => {
                toast.success("Profile Updated Successfully!", {
                    style: { background: '#181A20', color: 'white' }
                })
                navigate('/profile')
            })
            .catch(() => toast.error("Something went wrong!"));
    }
    return (
        <div className="w-full flex justify-center items-center h-screen">

            {
                location.state ? <Helmet>
                    <title>BDCorporate | Update Profile</title>
                </Helmet> : <Helmet>
                    <title>BDCorporate | Profile</title>
                </Helmet>
            }

            {
                user ? <>

                    <div className="p-12 shadow-md sm:px-12 text-primary space-y-4">
                        <img src={user.photoURL ? user.photoURL : '/images/avatar.png'} alt="" className="w-32 h-32 mx-auto rounded-full aspect-square ring ring-primary ring-offset-base-100 ring-offset-4" />
                        <div className="space-y-4 text-center divide-y divide-gray-700 text-primary">
                            <div className="my-2 space-y-1">
                                <h2 className="text-xl font-semibold sm:text-2xl">{user.displayName ? user.displayName : ''}</h2>
                                <p className="px-5 text-xs sm:text-base">{user.email ? user.email : ''}</p>
                            </div>
                        </div>
                        {!location.state && <button onClick={logout} className="flex items-center justify-center w-full">
                            <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-primary hover:bg-white group">
                                <span className="w-48 h-48 rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white inline-flex items-center gap-2">Logout<TbArrowUpRight /></span>
                            </a>
                        </button>}
                        {
                            location.state && <div className="border border-gray-300 p-6 space-y-4">
                                <h1 className="text-center font-bold">Update Profile</h1>
                                <hr />
                                <form onSubmit={handleSubmit(profileUpdate)} className="space-y-4">
                                    <div className="flex flex-col gap-6 w-full">
                                        <div className="space-y-4">
                                            <div className="flex gap-4">
                                                <div className="flex flex-col gap-2">
                                                    <span className="label-text font-semibold text-primary">Name</span>
                                                    <input {...register('name')} type="text" defaultValue={user.displayName || 'Type Here'} className="input input-bordered input-accent w-full rounded-none" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <span className="label-text font-semibold text-primary">Photo Url</span>
                                                    <input {...register('photoUrl')} type="text" defaultValue={user.photoURL || "Type Here"} className="input input-bordered input-accent w-full rounded-none" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 justify-center items-center">
                                        <button type="submit" className="flex items-center justify-center">
                                            <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#EB6753] hover:bg-white group">
                                                <span className="w-48 h-48 rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                                <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white inline-flex items-center gap-2">Update<TbArrowUpRight /></span>
                                            </a>
                                        </button>

                                    </div>
                                </form>
                            </div>
                        }
                    </div>

                </> : <>

                    <span className="loading loading-infinity loading-lg"></span></>
            }
        </div>
    );
};

export default Profile;