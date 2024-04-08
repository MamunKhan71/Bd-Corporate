import { Link } from "react-router-dom";

const Login = () => {

    return (
        <div className="w-full lg:w-96 mx-auto">
            <div className="flex items-center justify-center h-auto lg:h-[calc(100dvh-90px)] ">
                <div className="flex flex-col items-center font-poppins w-full lg:pb-12">
                    <div className="space-y-7 flex items-center flex-col w-full">
                        <h1 className="text-primary text-3xl font-semibold">Log In</h1>
                        <p className="text-primary text-center text-sm">Login to access your account</p>
                        <div className="flex gap-5 w-full">
                            <button className="btn flex-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect width="24" height="24" rx="6" fill="#1877F2" />
                                    <path d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80078 14.3391 7.875 15.8297 7.875H17.3438V4.92188C17.3438 4.92188 15.9703 4.6875 14.6578 4.6875C11.9156 4.6875 10.125 6.34922 10.125 9.35625V12H7.07812V15.4688H10.125V23.8547C10.7367 23.9508 11.3625 24 12 24C12.6375 24 13.2633 23.9508 13.875 23.8547V15.4688H16.6711Z" fill="white" />
                                </svg>
                                <span className="text-primary font-medium font-base">Facebook</span>
                            </button>
                            <button className="btn flex-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M23.52 12.2729C23.52 11.422 23.4436 10.6038 23.3018 9.81836H12V14.4602H18.4582C18.18 15.9602 17.3345 17.2311 16.0636 18.082V21.0929H19.9418C22.2109 19.0038 23.52 15.9274 23.52 12.2729Z" fill="#4285F4" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 23.9998C15.24 23.9998 17.9564 22.9252 19.9418 21.0925L16.0636 18.0816C14.9891 18.8016 13.6145 19.2271 12 19.2271C8.87455 19.2271 6.22909 17.1161 5.28546 14.2798H1.27637V17.3889C3.25091 21.3107 7.30909 23.9998 12 23.9998Z" fill="#34A853" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.28545 14.2799C5.04545 13.5599 4.90909 12.7908 4.90909 11.9999C4.90909 11.209 5.04545 10.4399 5.28545 9.71993V6.61084H1.27636C0.463636 8.23084 0 10.0636 0 11.9999C0 13.9363 0.463636 15.769 1.27636 17.389L5.28545 14.2799Z" fill="#FBBC05" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 4.77273C13.7618 4.77273 15.3436 5.37818 16.5873 6.56727L20.0291 3.12545C17.9509 1.18909 15.2345 0 12 0C7.30909 0 3.25091 2.68909 1.27637 6.61091L5.28546 9.72C6.22909 6.88364 8.87455 4.77273 12 4.77273Z" fill="#EA4335" />
                                </svg>
                                <span className="text-primary font-medium font-base">Google</span>
                            </button>
                        </div>
                        <div className="w-full">
                            <div className="relative flex py-4 items-center">
                                <div className="flex-grow border-t-2 border-[#E0E5EC] rounded-full"></div>
                                <span className="flex-shrink mx-3 text-sm text-[#262626]">Or</span>
                                <div className="flex-grow border-t-2 border-[#E0E5EC] rounded-full"></div>
                            </div>
                        </div>
                        <div className="space-y-4 w-full">
                            <div className="mb-8 flex flex-col gap-4">
                                <div className="w-full">
                                    <input type="text" placeholder="Your email here" className="input bg-[#F5F9FE] w-full p-7" />
                                </div>
                                <div className="w-full space-y-2">
                                    <label className="input flex items-center gap-2 bg-[#F5F9FE] p-7">
                                        <input type="password" className="grow w-full" placeholder="••••••••" />
                                        <svg className="hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M15.725 13.525L14.625 12.425C15.0583 11.2417 14.8333 10.2583 13.95 9.475C13.0667 8.69167 12.1083 8.49167 11.075 8.875L9.975 7.775C10.2583 7.59167 10.575 7.45833 10.925 7.375C11.275 7.29167 11.6333 7.25 12 7.25C13.1833 7.25 14.1875 7.6625 15.0125 8.4875C15.8375 9.3125 16.25 10.3167 16.25 11.5C16.25 11.8667 16.2042 12.2292 16.1125 12.5875C16.0208 12.9458 15.8917 13.2583 15.725 13.525ZM18.95 16.75L17.95 15.75C18.7667 15.15 19.4792 14.4792 20.0875 13.7375C20.6958 12.9958 21.1417 12.25 21.425 11.5C20.5917 9.65 19.3417 8.1875 17.675 7.1125C16.0083 6.0375 14.2 5.5 12.25 5.5C11.55 5.5 10.8333 5.56667 10.1 5.7C9.36667 5.83333 8.79167 5.99167 8.375 6.175L7.225 5C7.80833 4.73333 8.55417 4.5 9.4625 4.3C10.3708 4.1 11.2583 4 12.125 4C14.5083 4 16.6875 4.67917 18.6625 6.0375C20.6375 7.39583 22.0833 9.21667 23 11.5C22.5667 12.5667 22.0083 13.5417 21.325 14.425C20.6417 15.3083 19.85 16.0833 18.95 16.75ZM20.4 22.4L16.2 18.275C15.6167 18.5083 14.9583 18.6875 14.225 18.8125C13.4917 18.9375 12.75 19 12 19C9.56667 19 7.35833 18.3208 5.375 16.9625C3.39167 15.6042 1.93333 13.7833 1 11.5C1.33333 10.6333 1.79583 9.7875 2.3875 8.9625C2.97917 8.1375 3.7 7.35 4.55 6.6L1.4 3.45L2.45 2.375L21.375 21.3L20.4 22.4ZM5.575 7.65C4.95833 8.1 4.3625 8.69167 3.7875 9.425C3.2125 10.1583 2.8 10.85 2.55 11.5C3.4 13.35 4.67917 14.8125 6.3875 15.8875C8.09583 16.9625 10.0333 17.5 12.2 17.5C12.75 17.5 13.2917 17.4667 13.825 17.4C14.3583 17.3333 14.7583 17.2333 15.025 17.1L13.425 15.5C13.2417 15.5833 13.0167 15.6458 12.75 15.6875C12.4833 15.7292 12.2333 15.75 12 15.75C10.8333 15.75 9.83333 15.3417 9 14.525C8.16667 13.7083 7.75 12.7 7.75 11.5C7.75 11.25 7.77083 11 7.8125 10.75C7.85417 10.5 7.91667 10.275 8 10.075L5.575 7.65Z" fill="#3B4054" />
                                        </svg>
                                    </label>
                                    <div className="flex justify-end">
                                        <span className=" text-[#7C8BA0] mr-3 text-sm">Forget Password?</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <a className="hover:cursor-pointer w-full relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-primary text-white rounded hover:bg-primary group">
                                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                    <span className="text-center relative w-full transition-colors duration-300 ease-in-out text-white group-hover:text-white">Login</span>
                                </a>
                            </div>
                            <p className="text-sm">Don’t have account? <Link to="/register" className="text-[#3461FD]">Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;